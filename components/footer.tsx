import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  institucional: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Nossas Lojas", href: "/lojas" },
    { label: "Trabalhe Conosco", href: "/carreiras" },
    { label: "Blog", href: "/blog" },
  ],
  ajuda: [
    { label: "Central de Ajuda", href: "/ajuda" },
    { label: "Trocas e Devoluções", href: "/trocas" },
    { label: "Prazo de Entrega", href: "/entrega" },
    { label: "Formas de Pagamento", href: "/pagamento" },
  ],
  politicas: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Política de Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-widest">
              N<span className="text-background/80">Ξ</span>XUS
            </Link>
            <p className="mt-4 text-background/70 max-w-xs leading-relaxed">
              Mais que roupa. Uma conexão entre estilo, atitude e autenticidade.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-background/10 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-background/10 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-background/10 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">INSTITUCIONAL</h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide">AJUDA</h3>
            <ul className="space-y-3">
              {footerLinks.ajuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide">POLÍTICAS</h3>
            <ul className="space-y-3">
              {footerLinks.politicas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center lg:text-left">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} NEXUS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
