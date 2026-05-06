import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-center">
          {/* Content */}
          <div className="py-12 lg:py-20 z-10 relative">
            <p className="text-sm tracking-[0.3em] text-white/80 mb-4">
              VISTA SUA CONEXÃO
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6">
              NEXUS
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-md leading-relaxed">
              Mais que roupa. Uma conexão entre estilo, atitude e autenticidade.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest transition-all"
            >
              <Link href="/colecao">COMPRE AGORA</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] h-full">
            <Image
              src="/images/hero-models.jpg"
              alt="Modelos vestindo roupas NEXUS"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent lg:from-[#1a1a1a] lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
