type ButtonProps = {
  text: string,
  children?: React.ReactNode
  onClick: () => void
}

export default function Button({ text, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-2xl bg-surfase px-4 py-2 text-sm text-primary font-medium shadow-sm ring-1 ring-slate-200 hover:shadow-md cursor-pointer">{children} {text}</button>
  )
}