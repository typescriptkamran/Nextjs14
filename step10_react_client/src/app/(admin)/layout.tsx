import Link from "next/link";

export default function DashboardLayout({children}: {
  children: React.ReactNode;
}) {
  return (
  <div className="flex gap-5">
    <nav className="flex flex-col gap-2 bg-blue-400 px-5 py-5 text-left">
      <Link href={"/dashboard/analatics"}>Analatics</Link>
      <Link href={"/dashboard/settings"}>Settings</Link>
    </nav>
    <section>{children}</section>
  </div>)
}
