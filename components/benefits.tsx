import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "FRETE GRÁTIS",
    description: "Acima de R$199",
  },
  {
    icon: RefreshCcw,
    title: "TROCA FÁCIL",
    description: "Até 7 dias para trocar",
  },
  {
    icon: ShieldCheck,
    title: "COMPRA SEGURA",
    description: "Seus dados protegidos",
  },
  {
    icon: Headphones,
    title: "ATENDIMENTO",
    description: "Suporte humanizado",
  },
]

export function Benefits() {
  return (
    <section className="border-b border-border py-8 lg:py-10 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <benefit.icon className="h-8 w-8 lg:h-10 lg:w-10 text-foreground/70" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
