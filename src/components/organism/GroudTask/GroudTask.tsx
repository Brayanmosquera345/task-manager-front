type GroudTaskProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  total: number
}

export default function GroudTask({ children, title, subtitle, total }: GroudTaskProps) {
  return (
    <section className="flex flex-col rounded-2xl bg-surfase p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-title">{title}</h2>
          <p className="text-sm text-paragraph">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-title">
            {total}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-96">
        {children}
      </div>
    </section>
  )
}
