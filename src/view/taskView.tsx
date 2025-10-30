import { Plus } from "lucide-react";
import Button from "../components/atoms/Buttons/Button";
import CardTask from "../components/molecules/CardTask/CardTask";
import GroudTask from "../components/organism/GroudTask/GroudTask";


export default function TaskView() {
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
          <Button text="Nueva tarea" onClick={() => {}}>
            <Plus size={20} />
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <Button text="" onClick={() => {}}>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
        <GroudTask
          title="Por hacer"
          subtitle="Ideas y tareas pendientes"
          total={3}
        >
          <CardTask title="Tarea de ejemplo" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati commodi dolor? Maxime nam porro id aspernatur laborum, expedita reiciendis sit aliquam, eum modi ut in, dignissimos facere illo officiis!" dueDate="10-10-2025" />
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
        </GroudTask>
        <GroudTask
          title="En progreso"
          subtitle="Tareas en las que se está trabajando"
          total={2}
        >
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
        </GroudTask>
        <GroudTask
          title="Hecho"
          subtitle="Tareas completadas recientemente"
          total={6}
        >
          <CardTask title="Tarea de ejemplo" description="Descripción de la tarea" dueDate="10-10-2025" />
        </GroudTask>
      </section>
    </div>
  );
}
