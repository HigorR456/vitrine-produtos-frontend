import { HeroSection } from "@/components/features/homePage/heroSection"
import { CategoriesSection } from "@/components/features/homePage/categoriesSection"
import { FeaturedProductsSection } from "@/components/features/homePage/featuredProductsSection"

export default async function HomePage() {
  const products = [
    {
      "id": 78, "title": "Apple MacBook Pro 14 Inch Space Grey", "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.", "category": "laptops", "price": 1999.99, "rating": 3.65, "weight": 9, "images": ["https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp", "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp", "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp"], "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      "id": 87, "title": "Men Check Shirt", "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.", "category": "mens-shirts", "price": 27.99, "rating": 2.72, "weight": 10, "images": ["https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp", "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp", "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp", "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp"], "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      "id": 88, "title": "Nike Air Jordan 1 Red And Black", "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.", "category": "mens-shoes", "price": 149.99, "rating": 4.77, "weight": 3, "images": ["https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp", "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp", "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp", "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp"], "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    },
    {
      "id": 6, "title": "Calvin Klein CK One", "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.", "category": "fragrances", "price": 49.99, "rating": 4.37, "weight": 7, "images": ["https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp", "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp", "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"], "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    }
  ]

  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-8">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection products={products} />
    </div>
  )
}
