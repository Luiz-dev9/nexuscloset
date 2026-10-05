import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "CAMISETAS",
    image: "/images/category-camisetas.jpg",
    href: "/colecao/camisetas",
  },
  {
    title: "MOLETONS",
    image: "/images/category-moletons.jpg",
    href: "/colecao/moletons",
  },
  {
    title: "FEMININO",
    image: "/images/category-feminino.jpg",
    href: "/colecao/feminino",
  },
  {
    title: "ACESSÓRIOS",
    image: "/images/category-acessorios.jpg",
    href: "/colecao/acessorios",
  },
]

export function Collections() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="text-center sm:text-left flex-1">
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-2">
              COLEÇÕES
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              DESTAQUES
            </h2>
          </div>
          <Link
            href="/colecoes"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors group self-center sm:self-auto"
          >
            VER TODOS
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.href}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute top-4 left-4">
                <span className="text-sm font-semibold text-white tracking-wide">
                  {collection.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
