import React from "react";
import { useDroppable } from "@dnd-kit/core";

type GroudTaskProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  total: number;
};

export default function GroudTask({ id, children, title, total }: GroudTaskProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <section
      ref={setNodeRef}
      className={`flex flex-col rounded-2xl bg-surfase p-5 shadow-md transition-colors ${isOver ? "bg-background/30" : ""}`}
      data-column-id={id}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-title">{title}</h2>
          {id && <p className="text-sm text-paragraph">{id === "todo" ? "Ideas y tareas pendientes" : id === "inprogress" ? "Tareas en las que se está trabajando" : "Tareas completadas recientemente"}</p>}
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-title">
            {total}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto h-96">
        {children}
      </div>
    </section>
  );
}
