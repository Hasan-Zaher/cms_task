import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServicesBreadcrumbProps {
  currentPage?: string
}

export function ServicesBreadcrumb({ currentPage }: ServicesBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-amber-900 transition-colors">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/services" className="hover:text-amber-900 transition-colors">
        Services
      </Link>
      {currentPage && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{currentPage}</span>
        </>
      )}
    </nav>
  )
}
