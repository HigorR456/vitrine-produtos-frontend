import { HeroSection } from "@/components/features/homePage/heroSection"
import { CategoriesSection } from "@/components/features/homePage/categoriesSection"
import { FeaturedProductsSection } from "@/components/features/common/featuredProducts/featuredProductsSection"
import { FeaturedProductsLoading } from "@/components/features/common/featuredProducts/featuredProductsLoading"
import { Suspense } from "react"

export default async function HomePage() {
  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-8">
      <HeroSection />
      <CategoriesSection />
      <Suspense fallback={<FeaturedProductsLoading />}>
        <FeaturedProductsSection />
      </Suspense>
    </div>
  )
}
