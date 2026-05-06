"use client"

import Link from "next/link"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "INÍCIO" },
  { href: "/masculino", label: "MASCULINO" },
  { href: "/feminino", label: "FEMININO" },
  { href: "/acessorios", label: "ACESSÓRIOS" },
  { href: "/lancamentos", label: "LANÇAMENTOS" },
  { href: "/sale", label: "SALE" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Banner */}
      <div className="bg-foreground text-background text-center py-2.5 px-4 text-sm">
        <Link href="/frete" className="hover:underline inline-flex items-center gap-2">
          FRETE GRÁTIS PARA TODO O BRASIL NAS COMPRAS ACIMA DE R$199
          <span className="text-lg">→</span>
        </Link>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-widest text-foreground">
              N<span className="text-foreground/80">Ξ</span>XUS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-accent rounded-full transition-colors" aria-label="Buscar">
                <Search className="h-5 w-5" />
              </button>
              <button className="hidden sm:block p-2 hover:bg-accent rounded-full transition-colors" aria-label="Conta">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full transition-colors relative" aria-label="Carrinho">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-foreground/70 transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
