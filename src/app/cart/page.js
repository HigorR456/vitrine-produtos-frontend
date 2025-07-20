import ShoppingCart from "@/components/features/cartPage/shoppingCart";

export default function CartPage() {

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

      <ShoppingCart />
    </div>
  )
}

