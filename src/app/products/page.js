import { ProductsLoading } from "@/components/features/productsPage/productsLoading"
import { ProductsGrid } from "@/components/features/productsPage/productsGrid"
import { Suspense } from "react"

export default async function ProductsPage({
  searchParams,
}) {
  const { page = 1, category, sortBy, sortOrder } = await searchParams;

  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {category ? `Products in ${category}` : "All Products"}
        </h1>
        <p className="text-gray-600">Find the best products at the best prices</p>
      </div>

      <Suspense key={`${page}-${category}-${sortBy}-${sortOrder}`} fallback={<ProductsLoading />}>
        <ProductsGrid
          page={Number(page)}
          category={category}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </Suspense>
    </div>
  )
}
