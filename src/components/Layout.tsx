import Title from "./Title";

interface LayoutProps {
  title: string
  children: any
}

export default function Layout ({title, children}: LayoutProps) {
  return (
    <div className="
      flex flex-col w-2/4 rounded-md
      bg-zinc-100 text-zinc-500
    ">
      <Title>
        {title}
      </Title>
    <div className="p-6">
      {children}
    </div >
    </div>
  )
}
