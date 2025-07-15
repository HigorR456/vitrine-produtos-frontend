import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visiblePages = pages.slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))

  return (
    <div className="flex items-center justify-center space-x-2">
      {currentPage > 1 ? (
        <Button variant="outline" size="sm" asChild>
          <Link href={`/products?page=${currentPage - 1}`}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
      )}

      {visiblePages.map((page) => (
        <Button key={page} variant={page === currentPage ? "default" : "outline"} size="sm" asChild>
          <Link href={`/products?page=${page}`}>{page}</Link>
        </Button>
      ))}

      {currentPage < totalPages ? (
        <Button variant="outline" size="sm" asChild>
          <Link href={`/products?page=${currentPage + 1}`}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
