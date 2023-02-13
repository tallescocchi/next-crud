interface InputProps {
  type?: 'text' | 'number'
  text: string
  value: any
  reading?: boolean 
  valueChange?: (value: any) => void
}

export default function Input({text, type, value, reading, valueChange}:InputProps) {
  return (
    <div className="flex flex-col">
      <label className="m-2 font-bold">
        {text}
      </label>
      <input 
        type={type ?? 'text'} 
        value={value}
        readOnly={reading}
        onChange={e => valueChange?.(e.target.value)}
        className="
          border border-violet-500 rounded-md bg-zinc-100
          px-4 py-2
        "
      />
    </div>
  )
}