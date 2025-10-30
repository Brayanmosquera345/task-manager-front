import { NavLink } from "react-router-dom";

type ItemTapProps = {
  children: React.ReactNode;
  text: string;
  to: string;
  onClick: () => void;
};

export default function ItemTap({ children, text, to, onClick }: ItemTapProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 font-medium border-b  hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer ${
          isActive ? "border-primary text-primary" : "border-transparent text-paragraph"
        }`
      }
      onClick={onClick}
    >
      {children}
      {text}
    </NavLink>
  );
}
