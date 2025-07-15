import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export const FeaturedProductsSection = ({ products }) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Highlighted products</h2>
        <Button asChild variant="outline">
          <Link href="/products">See all</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square mb-4 relative overflow-hidden rounded-md">
                  <Image
                    src={product.thumbnail || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2 text-gray-800">{product.title}</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">${product.price}</p>
                <p className="text-xs text-gray-500 capitalize">{product.category}</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}