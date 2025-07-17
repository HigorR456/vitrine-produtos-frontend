import { getUser } from "@/lib/api/user/user"
import { UserProfile } from "@/components/features/accountPage/userProfile"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { FeaturedProductsSection } from "@/components/features/common/featuredProducts/featuredProductsSection"
import { FeaturedProductsLoading } from "@/components/features/common/featuredProducts/featuredProductsLoading"

export default async function UserAccountPage() {
  const user = await getUser()

  if (!user) {
    redirect('/account')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">My Account</h1>

      <div className="block md:flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 mx-auto">
        <UserProfile email={user.email} />

        <span className="block h-10 md:hidden" />

        <Suspense fallback={<FeaturedProductsLoading />}>
          <FeaturedProductsSection />
        </Suspense>
      </div>
    </div>
  )
}

