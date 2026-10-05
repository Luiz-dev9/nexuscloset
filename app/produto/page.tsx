"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Check, ChevronLeft, Minus, Plus, ShoppingBag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { formatPrice, useCart } from "@/components/cart-context"

const product = { id: "nexus-essential-black", name: "Camiseta Essential Nexus", price: 149.9, image: "/images/category-camisetas.jpg", description: "Camiseta oversized em algodão premium, criada para acompanhar sua rotina com conforto e autenticidade." }

export default function ProductPage() {
  const [size, setSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  function handleAdd() { for (let index = 0; index < quantity; index++) addItem({ ...product, size }); setAdded(true); window.setTimeout(() => setAdded(false), 2200) }
  return <div className="min-h-screen flex flex-col"><Header /><main className="flex-1 container mx-auto px-4 lg:px-8 py-8 lg:py-14"><Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"><ChevronLeft className="h-4 w-4" /> Voltar para a loja</Link><div className="grid lg:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto"><div className="relative aspect-[4/5] overflow-hidden bg-muted"><Image src={product.image} alt={product.name} fill className="object-cover" priority /></div><div className="flex flex-col justify-center"><p className="text-xs tracking-[0.25em] text-muted-foreground mb-4">NEXUS ESSENTIALS</p><h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">{product.name}</h1><p className="text-2xl font-medium mb-7">{formatPrice(product.price)}</p><p className="text-muted-foreground leading-relaxed border-b border-border pb-7">{product.description}</p><div className="py-7 border-b border-border"><p className="text-sm font-medium mb-3">TAMANHO: <span className="text-muted-foreground">{size}</span></p><div className="flex gap-2">{["P", "M", "G", "GG"].map((option) => <button key={option} onClick={() => setSize(option)} className={`h-11 w-12 border text-sm transition-colors ${size === option ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`}>{option}</button>)}</div></div><div className="flex gap-3 py-7"><div className="flex items-center border border-border"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3" aria-label="Diminuir quantidade"><Minus className="h-4 w-4" /></button><span className="w-8 text-center">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="p-3" aria-label="Aumentar quantidade"><Plus className="h-4 w-4" /></button></div><button onClick={handleAdd} className="flex-1 bg-foreground text-background font-medium flex items-center justify-center gap-3 hover:bg-foreground/85 transition-colors">{added ? <><Check className="h-5 w-5" /> ADICIONADO AO CARRINHO</> : <><ShoppingBag className="h-5 w-5" /> ADICIONAR AO CARRINHO</>}</button></div><p className="text-xs text-muted-foreground">Frete grátis para compras acima de R$199. Troca fácil em até 7 dias.</p></div></div></main><Footer /></div>
}
