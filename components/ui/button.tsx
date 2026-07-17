type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#7B9482] text-white hover:bg-[#687d6d]"
      : "border border-zinc-300 bg-white text-zinc-900 hover:border-[#7B9482] hover:text-[#7B9482]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}