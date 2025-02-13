import Link from "next/link"

interface NavButtonProps {
  href: string
  children: React.ReactNode
}

export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  )
} 