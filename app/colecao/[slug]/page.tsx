import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { categoryLabels, getProductsByCategory } from "@/lib/products"

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((slug) => ({ slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = categoryLabels[slug] ?? "Coleção"
  const categoryProducts = getProductsByCategory(slug)
  return <div className="min-h-screen flex flex-col"><Header /><main className="flex-1 container mx-auto px-4 lg:px-8 py-8 lg:py-14"><Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"><ChevronLeft className="h-4 w-4" /> Voltar para a loja</Link><div className="mb-10"><p className="text-xs tracking-[0.25em] text-muted-foreground mb-3">COLEÇÃO NEXUS</p><h1 className="text-3xl lg:text-5xl font-bold tracking-tight">{title}</h1><p className="mt-4 max-w-xl text-muted-foreground">Descubra peças criadas para expressar sua conexão com estilo, atitude e autenticidade.</p></div>{categoryProducts.length > 0 ? <ProductGrid products={categoryProducts} /> : <div className="border border-border p-12 text-center">Novidades chegando em breve.</div>}</main><Footer /></div>
}
