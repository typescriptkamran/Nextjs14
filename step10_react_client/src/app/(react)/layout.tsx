import Link from "next/link";

export default function ReactLayout({children}: {
  children: React.ReactNode;
}) {
  return (
  <div className="flex gap-5">
    <nav className="flex flex-col gap-2 bg-blue-400 px-5 py-5 text-left">
      <Link href={"/react/nested"}>Nested Components</Link>
      <Link href={"/react/writing-markup"}>Writing Markup</Link>
      
    </nav>
    <section>{children}</section>
  </div>)
}
