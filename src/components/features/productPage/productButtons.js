"use client"
import { Button } from '@/components/ui/button';
import { Heart, Share2, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function ProductButtons({ id }) {
  const router = useRouter();
  const handleAddToCart = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex((item) => item.id === id);
  
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push({ id, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(existingCart));
    toast.success('Product added to cart!');
  };

  return (
    <div className="space-y-3">
      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer" onClick={() => { handleAddToCart(id); router.push('/cart'); }}>
        <ShoppingCart className="h-5 w-5 mr-2" />
        Buy now
      </Button>
      <Button variant="outline" size="lg" className="w-full bg-transparent cursor-pointer" onClick={() => handleAddToCart(id)}>
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
  );
};
