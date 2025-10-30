import { Notebook, User } from "lucide-react";
import ItemTap from "../components/atoms/ItemTap/ItemTap";
import Footer from "../components/organism/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col">
      <nav className="border-b border-gray-200 flex">
        <ItemTap text="Tareas" onClick={() => {}} to="/">
          <Notebook size={20} />
        </ItemTap>
        <ItemTap text="Usuarios" onClick={() => {}} to="/users">
          <User size={20} />
        </ItemTap>
      </nav>
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
