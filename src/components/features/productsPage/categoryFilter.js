"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { value: "all", label: "All categories" },
  { value: "beauty", label: "Beauty" },
  { value: "fragrances", label: "Fragrances" },
  { value: "furniture", label: "Furniture" },
  { value: "groceries", label: "Groceries" },
  { value: "home-decoration", label: "Home decoration" },
  { value: "kitchen-accessories", label: "Kitchen accessories" },
  { value: "laptops", label: "Laptops" },
  { value: "mens-shirts", label: "Mens shirts" },
]

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || ""
  const selectValue = currentCategory || "all"

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value === "all") {
      params.delete("category")
    } else {
      params.set("category", value)
    }
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Category:</span>
      <Select value={selectValue} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
