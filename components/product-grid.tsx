"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { formatPrice, useCart } from "@/components/cart-context"
import type { Product } from "@/lib/products"

export function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6">
      {products.map((product) => (
        <article key={product.id} className="group">
          <Link href={`/produto/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
            <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute left-3 top-3 bg-background/85 px-2 py-1 text-[10px] tracking-[0.15em]">NEXUS</span>
          </Link>
          <div className="pt-4">
            <Link href={`/produto/${product.id}`} className="font-medium hover:underline">{product.name}</Link>
            <p className="mt-1 text-muted-foreground">{formatPrice(product.price)}</p>
            <button onClick={() => addItem({ ...product, size: "M" })} className="mt-3 inline-flex items-center gap-2 text-xs font-medium tracking-wide hover:opacity-60" aria-label={`Adicionar ${product.name} ao carrinho`}>
              <ShoppingBag className="h-4 w-4" /> ADICIONAR AO CARRINHO
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}
