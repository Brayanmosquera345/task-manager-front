export default function TaskView() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white p-8 flex flex-col">
      <nav className="border-b border-gray-200">
        <button className="px-4 py-2 text-blue-900 border-b border-blue-900 font-medium">Tareas</button>
        <button className="px-4 py-2 text-gray-600  ">Usarios</button>
      </nav>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">Tareas</h1>
          <p className="mt-1 text-sm text-slate-500">
            Vista maqueta — tres estados y tarjetas de tareas (sin lógica).
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white/60 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nueva tarea
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Column: Por hacer */}
        <section className="flex flex-col rounded-2xl bg-gradient-to-b from-white to-slate-50 p-5 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Por hacer
              </h2>
              <p className="text-xs text-slate-400">
                Ideas y tareas pendientes
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-700">
                4
              </span>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <input
              placeholder="Buscar..."
              className="flex-1 rounded-xl border border-slate-100 bg-white py-2 px-3 text-sm text-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <button className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow">
              Filtrar
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {/* Task Card */}
            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Diseñar la landing principal
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Wireframe y componentes
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1">
                      UX
                    </span>
                    <span className="inline-flex items-center gap-1">
                      📅 3 oct
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white flex items-center justify-center text-xs font-semibold">
                    BM
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Crear componentes reutilizables
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Button, Card y Inputs
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-xs font-semibold">
                  AL
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white/95 p-4 opacity-90 ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Investigar patrones de animación
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Transiciones para micro-interacciones
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xs font-semibold">
                  JS
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Column: En progreso */}
        <section className="flex flex-col rounded-2xl bg-gradient-to-b from-white to-slate-50 p-5 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                En progreso
              </h2>
              <p className="text-xs text-slate-400">
                Tareas en las que se está trabajando
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-700">
                2
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="rounded-xl border border-dashed border-slate-100 bg-white/60 p-3 text-sm text-slate-500">
              Arrastra aquí (maqueta)
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Implementar API de tareas
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Endpoints y pruebas
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1">
                      API
                    </span>
                    <span className="inline-flex items-center gap-1">
                      ⏳ 2h
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center text-xs font-semibold">
                    LD
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Probar integración con Storybook
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Documentar componentes
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-xs font-semibold">
                  CG
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Column: Hecho */}
        <section className="flex flex-col rounded-2xl bg-gradient-to-b from-white to-slate-50 p-5 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">Hecho</h2>
              <p className="text-xs text-slate-400">
                Tareas completadas recientemente
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-700">
                6
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transform transition-all hover:-translate-y-1 hover:scale-[1.01]">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Deploy a producción
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Pipeline y verificación
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center text-xs font-semibold">
                    PM
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Revisión de código
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Merge requests aprobados
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 text-white flex items-center justify-center text-xs font-semibold">
                  AA
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Actualizar dependencias
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Lockfile y tests verdes
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center text-xs font-semibold">
                  KB
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="mt-8 text-center text-xs text-slate-400">
        Maqueta creada con Tailwind CSS — sin lógica ni estado.
      </footer>
    </div>
  );
}
