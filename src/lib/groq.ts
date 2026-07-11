export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string }

const API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined
const MODEL = (import.meta.env.VITE_GROQ_MODEL as string) || 'llama-3.3-70b-versatile'
const ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions'

export const groqEnabled = Boolean(API_KEY)

type BuddyOptions = {
  language?: 'en' | 'hi'
  classLevel?: string
  context?: string // e.g. current book/chapter the student is reading
}

/** Builds the Study Buddy persona, honouring the selected UI language. */
export function buildSystemPrompt({ language = 'en', classLevel, context }: BuddyOptions): string {
  const langRule =
    language === 'hi'
      ? 'IMPORTANT: Reply ONLY in Hindi (Devanagari script). Use simple, friendly Hindi that a school student easily understands. Keep common technical/English terms in brackets when helpful.'
      : 'Reply in clear, simple English.'

  return [
    'You are "Study Buddy", a warm, encouraging AI tutor for Indian school students on the Nazariyen platform.',
    'You teach strictly from the NCERT curriculum. Explain concepts with simple analogies, small steps, and examples an Indian student relates to.',
    classLevel ? `The student is in ${classLevel}. Pitch explanations at that level.` : '',
    context ? `The student is currently reading: ${context}. Prefer answers relevant to this.` : '',
    'Keep answers concise (under ~180 words) unless asked to elaborate. Use short paragraphs, and bullet points or numbered steps where useful. End by offering a quick quiz or a simpler re-explanation when appropriate.',
    langRule,
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * Streams a Study Buddy reply from Groq. Calls `onToken` with each chunk of
 * text. Returns the full text. Throws with a friendly message on failure.
 */
export async function streamBuddyReply(
  history: ChatMessage[],
  opts: BuddyOptions,
  onToken: (chunk: string) => void,
  signal?: AbortSignal,
): Promise<string> {
  if (!groqEnabled) {
    throw new Error('NO_KEY')
  }

  const messages: ChatMessage[] = [{ role: 'system', content: buildSystemPrompt(opts) }, ...history]

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.6,
      max_tokens: 1024,
      stream: true,
    }),
    signal,
  })

  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Groq request failed (${res.status}). ${detail.slice(0, 200)}`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let full = ''
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed.startsWith('data:')) continue
      const data = trimmed.slice(5).trim()
      if (data === '[DONE]') continue
      try {
        const json = JSON.parse(data)
        const token = json.choices?.[0]?.delta?.content
        if (token) {
          full += token
          onToken(token)
        }
      } catch {
        // ignore keep-alive / partial lines
      }
    }
  }

  return full
}
