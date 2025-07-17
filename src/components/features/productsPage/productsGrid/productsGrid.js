import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPaginatedProducts } from "@/lib/api/products/getPaginatedProducts"
import { Pagination } from "../pagination"
import { SortSelect } from "../sortSelect"
import { CategoryFilter } from "../categoryFilter"

export async function ProductsGrid({ page, productPerPage = 12, category, sortBy, sortOrder }) {
  const { data, total } = await getPaginatedProducts({ page, limit: productPerPage, category, sortBy, sortOrder })
  const totalPages = Math.ceil(total / productPerPage);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-4">
          <CategoryFilter />
          <SortSelect />
        </div>
        <div className="w-[130px] text-sm text-gray-600">{total} products found</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {data.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square mb-4 relative overflow-hidden rounded-md">
                  <Image
                    src={product.thumbnail || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    sizes="(max-width: 767px) 400px, 270px"
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm line-clamp-2 text-gray-800">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-green-600">${product.price}</p>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}
