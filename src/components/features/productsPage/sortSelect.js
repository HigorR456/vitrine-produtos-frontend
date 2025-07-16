"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowUp, ArrowDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const sortFields = [
  { value: "category", label: "Category" },
  { value: "title", label: "Name" },
  { value: "price", label: "Price" },
]

export function SortSelect() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const sortBy = searchParams.get("sortBy") || "category"
  const sortOrder = searchParams.get("sortOrder") || "asc"

  const handleFieldChange = (field) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sortBy", field)
    params.set("sortOrder", sortOrder)
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  const handleDirectionToggle = () => {
    const params = new URLSearchParams(searchParams.toString())
    const newDirection = sortOrder === "asc" ? "desc" : "asc"
    params.set("sortBy", sortBy)
    params.set("sortOrder", newDirection)
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  const getDirectionIcon = () => {
    return sortOrder === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Order by:</span>
      <Select value={sortBy} onValueChange={handleFieldChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Field" />
        </SelectTrigger>
        <SelectContent>
          {sortFields.map((field) => (
            <SelectItem key={field.value} value={field.value}>
              {field.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="sm"
        onClick={handleDirectionToggle}
        className="flex items-center space-x-1 w-auto bg-transparent"
        title="Sort order"
      >
        {getDirectionIcon()}
        <span className="hidden sm:inline text-xs">{sortOrder === "asc" ? "A-Z" : "Z-A"}</span>
      </Button>
    </div>
  )
}
