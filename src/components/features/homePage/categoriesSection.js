import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Tv,
  Shirt,
  Home,
  Dumbbell,
  BookOpen
} from "lucide-react";

export const CategoriesSection = () => {
  const categories = [
    { name: "beauty", icon: <Heart /> },
    { name: "electronics", icon: <Tv /> },
    { name: "clothing", icon: <Shirt /> },
    { name: "home", icon: <Home /> },
    { name: "sports", icon: <Dumbbell /> },,
    { name: "books", icon: <BookOpen /> },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Card key={category} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm capitalize">{category.icon}</span>
              </div>
              <p className="text-sm font-medium capitalize">{category.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
