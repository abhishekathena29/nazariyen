import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { translate, type Lang, type StringKey } from '../lib/i18n'

type LanguageCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: StringKey) => string
  langLabel: string
}

const Ctx = createContext<LanguageCtx | null>(null)

const STORAGE_KEY = 'nazariyen.lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'hi' ? 'hi' : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState((l) => (l === 'en' ? 'hi' : 'en')), [])
  const t = useCallback((key: StringKey) => translate(key, lang), [lang])

  const langLabel = lang === 'hi' ? 'हिंदी' : 'English'

  return <Ctx.Provider value={{ lang, setLang, toggle, t, langLabel }}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
