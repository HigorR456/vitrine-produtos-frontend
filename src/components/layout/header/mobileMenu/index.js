"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden text-blue-900">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
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
      </SheetContent>
    </Sheet>
  )
}