import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getProduct } from "@/lib/api/products/getProduct"

export async function generateStaticParams() {
  const products = Array.from({ length: 10 }, (_, i) => i + 1)
  return products.map((id) => ({
    id: id.toString(),
  }))
}

export const revalidate = 3600 // 1 hour

export default async function ProductPage({ params: props }) {
  const params = await props
  const product = await getProduct(Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/products">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || product.thumbnail}
              alt={product.title}
              fill
              sizes="(max-width: 767px) 400px, 500px"
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 2}`}
                    fill
                    sizes="(max-width: 767px) 100px, 130px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2 capitalize">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-600">({product.rating.toFixed(1)})</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-4xl font-bold text-green-600">${product.price}</div>
            <p className="text-sm text-gray-600">Weight: {product.weight}kg</p>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Buy now
            </Button>
            <Button variant="outline" size="lg" className="w-full bg-transparent cursor-pointer">
              Add to cart
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent cursor-pointer">
                <Heart className="h-4 w-4 mr-1" />
                Favorites
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent cursor-pointer">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Product description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
