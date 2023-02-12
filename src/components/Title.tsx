interface TitleProps {
  children: any
}

export default function Title ({ children }: TitleProps) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl font-bold px-5 py-3">
        { children }
      </h1>
      <hr className="border-2 border-zinc-400"/>
    </div>
  )
}
