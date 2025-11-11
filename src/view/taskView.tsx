import type { DragEndEvent } from "@dnd-kit/core";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import GroupTask from "../components/organism/GroudTask/GroudTask";
import CardTask from "../components/molecules/CardTask/CardTask";
import { BaseModal } from "../components/molecules/BaseModal/BaseModal";
import type { Columns } from "../types/Task";
import { useEffect, useState } from "react";
import Button from "../components/atoms/Buttons/Button";
import { Plus } from "lucide-react";

const STORAGE_KEY = "my-kanban-columns-v1";

const initialColumns: Columns = {
  todo: [
    { id: "t1", title: "Tarea A", description: "Descripción A", dueDate: "2025-10-10" },
    { id: "t2", title: "Tarea B", description: "Descripción B", dueDate: "2025-10-11" },
    { id: "t3", title: "Tarea C", description: "Descripción C", dueDate: "2025-10-12" },
  ],
  inprogress: [
    { id: "p1", title: "Tarea X", description: "En progreso X", dueDate: "2025-10-13" },
    { id: "p2", title: "Tarea Y", description: "En progreso Y", dueDate: "2025-10-14" },
  ],
  done: [{ id: "d1", title: "Tarea Z", description: "Hecha Z", dueDate: "2025-10-15" }],
};

export default function TaskView() {
  const [isOpen, setIsOpen] = useState(false);
  const [columns, setColumns] = useState<Columns>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Columns) : initialColumns;
    } catch {
      return initialColumns;
    }
  });

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findColumnByItemId = (itemId: string) =>
    Object.keys(columns).find((col) => columns[col].some((it) => it.id === itemId));

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (!active) return;
    if (!over) return; // si soltó fuera de cualquier droppable

    const activeId = String(active.id);
    const overId = String(over.id);

    // columna origen
    const sourceCol = findColumnByItemId(activeId);
    if (!sourceCol) return;

    // ¿overId es una columna o es un item?
    const overIsColumn = Object.prototype.hasOwnProperty.call(columns, overId);
    const destCol = overIsColumn ? overId : findColumnByItemId(overId);
    if (!destCol) return;

    // si es la misma columna
    if (sourceCol === destCol) {
      setColumns((prev) => {
        const list = [...prev[sourceCol]];
        const oldIndex = list.findIndex((i) => i.id === activeId);

        // si solté en espacio vacío de la misma columna -> mover al final
        if (overIsColumn) {
          const newIndex = list.length - 1;
          if (oldIndex !== newIndex) {
            return { ...prev, [sourceCol]: arrayMove(list, oldIndex, newIndex) };
          }
          return prev;
        }

        // si solté sobre un item: reordenar
        const newIndex = list.findIndex((i) => i.id === overId);
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          return { ...prev, [sourceCol]: arrayMove(list, oldIndex, newIndex) };
        }
        return prev;
      });
      return;
    }

    // mover entre columnas (sourceCol !== destCol)
    setColumns((prev) => {
      const sourceItems = [...prev[sourceCol]];
      const destItems = [...prev[destCol]];

      const movingIndex = sourceItems.findIndex((i) => i.id === activeId);
      if (movingIndex === -1) return prev;
      const [movingItem] = sourceItems.splice(movingIndex, 1);

      const insertIndex = overIsColumn
        ? destItems.length // si dropeaste en espacio vacío de la columna -> al final
        : Math.max(0, destItems.findIndex((i) => i.id === overId)); // antes del item sobre el que soltaste

      if (insertIndex === -1) {
        destItems.push(movingItem);
      } else {
        destItems.splice(insertIndex, 0, movingItem);
      }

      return {
        ...prev,
        [sourceCol]: sourceItems,
        [destCol]: destItems,
      };
    });
  };

  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-title">Tareas</h1>
          <p className="text-paragraph text-sm">
            Revisa y gestiona todas tus tareas en un lugar sencillo y rápido.
          </p>
        </div>
        <div className="md:flex items-center gap-3 hidden">
          <Button text="Nueva tarea" onClick={() => setIsOpen(true)}>
            <Plus size={20} />
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <Button text="" onClick={() => setIsOpen(true)}>
            <Plus size={20} />
          </Button>
        </div>
      </header>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
          {Object.entries(columns).map(([colId, items]) => (
            <SortableContext key={colId} items={items.map((t) => t.id)} strategy={rectSortingStrategy}>
              <GroupTask
                id={colId}
                title={colId === "todo" ? "Por hacer" : colId === "inprogress" ? "En progreso" : "Hecho"}
                total={items.length}
              >
                {items.map((task) => (
                  <CardTask key={task.id} id={task.id} title={task.title} description={task.description} dueDate={task.dueDate} />
                ))}
              </GroupTask>
            </SortableContext>
          ))}
        </section>

        <DragOverlay>
          {activeId ? (
            (() => {
              const foundCol = findColumnByItemId(activeId);
              const found = foundCol ? columns[foundCol].find((t) => t.id === activeId) : undefined;
              return found ? <CardTask id={found.id} title={found.title} description={found.description} dueDate={found.dueDate} isOverlay /> : null;
            })()
          ) : null}
        </DragOverlay>
      </DndContext>
      <BaseModal open={isOpen} title="Nueva tarea" onOpenChange={setIsOpen}>
          <div className="flex flex-col gap-4 h-[600px]">
            Modal de prueba
          </div>
      </BaseModal>
    </div>
  );
}
