import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Calendar } from "lucide-react";

type CardTaskProps = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  isOverlay?: boolean;
};

export default function CardTask({ id, title, description, dueDate, isOverlay = false }: CardTaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "manipulation",
  };

  const baseClasses = "rounded-xl bg-surfase p-4 shadow-sm cursor-pointer hover:bg-background transition-colors duration-200 hover:shadow-md border border-background";
  const overlayClass = isOverlay ? "shadow-2xl scale-[1.02]" : "";
  const draggingClass = isDragging ? "opacity-0" : "";

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${baseClasses} ${overlayClass} ${draggingClass}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-sm text-paragraph">{description}</p>

          <div className="mt-3 flex items-center gap-2 text-xs text-primary">
            <Calendar size={20} />
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
