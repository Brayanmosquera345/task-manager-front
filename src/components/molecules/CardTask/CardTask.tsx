import { Calendar } from "lucide-react";

type CardTaskProps = {
    title: string,
    description: string,
    dueDate: string,
}

export default function CardTask({ title, description, dueDate }: CardTaskProps) {
  return (
    <article className="rounded-xl bg-surfase p-4 shadow-sm cursor-pointer hover:bg-background transition-colors duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-primary">
            {title}
          </h3>
          <p className="mt-1 text-sm text-paragraph">{description}</p>

          <div className="mt-3 flex items-center gap-2 text-xs text-primary">
            <Calendar size={20}  />
            <span className="inline-flex items-center gap-1">{dueDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold">
            BM
          </div>
        </div>
      </div>
    </article>
  );
}
