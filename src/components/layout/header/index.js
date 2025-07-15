import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileMenu } from "./mobileMenu"

export function Header() {
  return (
    <header className="bg-yellow-300 shadow-sm">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-blue-900">ProductsShowcase</div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-2 rounded-sm border-0 focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full px-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/products"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
            >
              Products
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
            >
              <User className="h-4 w-4 mr-1" />
              Account
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Cart
            </Link>
          </nav>

          <MobileMenu />
        </div>

        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search produts..."
              className="w-full pl-4 pr-12 py-2 rounded-sm border-0 focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <Button
              size="sm"
              className="absolute right-0 top-0 h-full px-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


/* 
<nav className="flex items-center space-x-4">
  <Link
    href="/products"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
  >
    Products
  </Link>
  <Link
    href="/account"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
  >
    <User className="h-4 w-4 mr-1" />
    Account
  </Link>
  <Link
    href="/cart"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 rounded-md bg-white hover:bg-gray-100 border border-transparent"
  >
    <ShoppingCart className="h-4 w-4 mr-1" />
    Cart
  </Link>
</nav>
 */