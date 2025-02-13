import Link from "next/link"
import NavButton from "./NavButton"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const navItems = [
    { href: "/blogs", label: "Blog" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Asuka
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavButton key={item.href} href={item.href}>
                {item.label}
              </NavButton>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

