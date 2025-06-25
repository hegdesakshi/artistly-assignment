"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/onboard", label: "Onboard" },
  { href: "/dashboard", label: "Dashboard" },
];

const categories = [
  { href: "/artists?category=Singer", label: "Singers" },
  { href: "/artists?category=Dancer", label: "Dancers" },
  { href: "/artists?category=Speaker", label: "Speakers" },
  { href: "/artists?category=DJ", label: "DJs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Left side: Brand and nav links */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-xl font-bold text-blue-600">🎤 Artistly</span>
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition ${
                pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Category buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
