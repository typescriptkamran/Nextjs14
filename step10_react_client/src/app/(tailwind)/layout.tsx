import Link from "next/link";

export default function TailLayout({children}: {
  children: React.ReactNode;
}) {
  return (
  <div className="flex gap-5">
    <nav className="flex flex-col gap-2 bg-red-400 px-5 py-5 text-left">
      <Link href={"/tailwork/flexbox"}>Flexbox</Link>
      
    </nav>
    <section>{children}</section>
  </div>)
}
