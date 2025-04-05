"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">KADDOUR Mohamed Ali</h1>
      <div className="space-x-4">
        <Link href="/" className={pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Home</Link>
        <Link href="/projects" className={pathname === "/projects" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Projects</Link>
        <Link href="/about" className={pathname === "/about" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>About</Link>
      </div>
    </nav>
  );
}