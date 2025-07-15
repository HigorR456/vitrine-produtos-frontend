import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Find what you are looking for</h1>
        <p className="text-xl mb-6">Millions of products with free shipping and the best buy experience</p>
        <Button asChild size="lg" className="bg-yellow-300 text-blue-900 hover:bg-yellow-400">
          <Link href="/products">See products</Link>
        </Button>
      </div>
    </section>
  )
}
