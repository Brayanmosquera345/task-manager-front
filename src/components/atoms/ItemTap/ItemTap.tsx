type ItemTapProps = {
  children: React.ReactNode;
  text: string;
  selected?: boolean;
  onClick: () => void;
};

export default function ItemTap({
  children,
  text,
  onClick,
  selected,
}: ItemTapProps) {
  return (
    <button
      className={
        selected
          ? "flex items-center gap-2 px-4 py-2 font-medium border-b border-primary text-primary transition-colors duration-200 cursor-pointer"
          : "flex items-center gap-2 px-4 py-2 text-paragraph font-medium border-b border-transparent hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
      }
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
}
