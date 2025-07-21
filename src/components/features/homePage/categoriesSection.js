import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Tv,
  Shirt,
  Home,
  Dumbbell,
  BookOpen,
  Apple,
  ForkKnife
} from "lucide-react";
import Link from "next/link";

export const CategoriesSection = () => {
  const categories = [
    { name: "beauty", icon: <Heart />, link: "/products?category=beauty" },
    { name: "electronics", icon: <Tv />, link: "/products?category=laptops" },
    { name: "clothing", icon: <Shirt />, link: "/products?category=mens-shirts" },
    { name: "home", icon: <Home />, link: "/products?category=home-decoration" },
    { name: "kitchen", icon: <ForkKnife />, link: "/products?category=kitchen-accessories" },
    { name: "groceries", icon: <Apple />, link: "/products?category=groceries" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className="block h-full">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm capitalize">{category.icon}</span>
                </div>
                <p className="text-sm font-medium capitalize">{category.name}</p>
              </CardContent>
            </Card>
          </ Link>
        ))}
      </div>
    </section>
  )
}
