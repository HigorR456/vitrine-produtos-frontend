"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getCartProducts } from '@/utils/cart'
import { Separator } from '@radix-ui/react-separator'
import { Minus, Plus, ShoppingCart as ShoppingCartIcon, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function ShoppingCart() {
  const router = useRouter()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartProducts();
      setProducts(items);
    };
    fetchCart();
  }, []);

  const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const total = subtotal + shipping

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setProducts([]);
    toast.success('Cart order finished successfully!');
    router.push('/')
  };

  const handleRemoveFromCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = existingCart.filter(item => item.id !== id);
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setProducts(prev => prev.filter(item => item.id !== id));
    toast.success('Product removed from cart!');
  };
  
  const handleDecreaseQuantity = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex(item => item.id === id);
  
    if (existingItemIndex !== -1) {
      if (existingCart[existingItemIndex].quantity > 1) {
        existingCart[existingItemIndex].quantity -= 1;
      } else {
        existingCart.splice(existingItemIndex, 1);
      }
  
      localStorage.setItem('cart', JSON.stringify(existingCart));
      setProducts(prev =>
        existingCart.find(item => item.id === id)
          ? prev.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
          : prev.filter(p => p.id !== id)
      );
      toast.success('Product quantity updated!');
    }
  };
  
  const handleIncreaseQuantity = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex(item => item.id === id);

    console.log(existingItemIndex, existingCart)
  
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(existingCart));
      setProducts(prev =>
        prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p)
      );
      toast.success('Product quantity updated!');
    }
  };

  return (
    <div className="">
      {products.length === 0 ? (
        <Card className="p-8 text-center">
          <ShoppingCartIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/products">Explore products</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 overflow-y-auto max-h-[75vh] pr-2">
            {products.map((item) => (
              <Card key={`${item.id.toString()}-${item.name}`} className="flex items-center p-4 flex-row">
                <div className="relative w-24 h-24 mr-4 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <Link href={`/products/${item.id}`} className="font-semibold text-lg hover:underline line-clamp-2">
                    {item.title}
                  </Link>
                  <p className="text-gray-600 text-sm">Unit price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent cursor-pointer" onClick={() => handleDecreaseQuantity(item.id)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent cursor-pointer" onClick={() => handleIncreaseQuantity(item.id)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleRemoveFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="font-bold text-xl text-green-600 ml-auto">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-1 h-fit">
            <CardHeader>
              <CardTitle>Summary of the Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer" onClick={handleClearCart}>Finish order</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
