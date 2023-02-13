interface ButtonProps {
  color?: 'green' | 'blue' | 'violet' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Button({children, className, color, onClick}: ButtonProps) {
    const setColor = color ?? 'violet'
  return (
    <button onClick={onClick} className={`
      bg-gradient-to-r from-${setColor}-400 to-${setColor}-700 text-zinc-100 font-bold
      px-4 py-2 rounded-md
      ${className}
    `}>
      {children}
    </button>
  )
} 