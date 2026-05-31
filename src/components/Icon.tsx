type Props = { name: string; className?: string; filled?: boolean; style?: React.CSSProperties }

export default function Icon({ name, className = '', filled = false, style }: Props) {
  const mergedStyle: React.CSSProperties = {
    ...(filled ? { fontVariationSettings: "'FILL' 1" } : {}),
    ...style,
  }
  return (
    <span className={`material-symbols-outlined ${className}`} style={mergedStyle}>
      {name}
    </span>
  )
}
