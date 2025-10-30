import { Plus } from "lucide-react";
import Button from "../components/atoms/Buttons/Button";

export default function UserView() {
  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-title">Usuarios</h1>
          <p className="text-paragraph text-sm">
            Revisa y gestiona todas los Usuarios en un lugar sencillo y rápido.
          </p>
        </div>
        <div className="md:flex items-center gap-3 hidden">
          <Button text="Nuevo usuario" onClick={() => {}}>
            <Plus size={20} />
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <Button text="" onClick={() => {}}>
            <Plus size={20} />
          </Button>
        </div>
      </header>
      <section className="w-full">
        <div className="rounded-lg  bg-surfase shadow-sm overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <caption className="sr-only">Lista de usuarios</caption>
              <thead className="sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-paragraph"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-paragraph"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-paragraph"
                  >
                    Fecha de creación
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-paragraph"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody className="bg-surfase divide-y divide-slate-100">
                <tr className="hover:bg-background focus-within:bg-slate-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-title">
                      Brayan Mosquera
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-title">
                    brayan@example.com
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-title">
                    10-10-2025
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                    <button className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Ver
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
