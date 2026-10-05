export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  { id: "camiseta-essential", name: "Camiseta Essential Nexus", category: "camisetas", price: 149.9, image: "/images/category-camisetas.jpg", description: "Camiseta oversized em algodão premium, criada para acompanhar sua rotina." },
  { id: "camiseta-connect", name: "Camiseta Connect", category: "camisetas", price: 159.9, image: "/images/hero-models.jpg", description: "Modelagem confortável e identidade Nexus em cada detalhe." },
  { id: "moletom-core", name: "Moletom Core Nexus", category: "moletons", price: 299.9, image: "/images/category-moletons.jpg", description: "Moletom encorpado com toque macio para os dias mais frios." },
  { id: "moletom-connect", name: "Moletom Connect", category: "moletons", price: 329.9, image: "/images/hero-models.jpg", description: "Conforto premium e design urbano para qualquer conexão." },
  { id: "top-nexus", name: "Top Nexus Essential", category: "feminino", price: 139.9, image: "/images/category-feminino.jpg", description: "Peça versátil com caimento moderno e atitude Nexus." },
  { id: "regata-flow", name: "Regata Flow", category: "feminino", price: 129.9, image: "/images/category-feminino.jpg", description: "Leve, autêntica e feita para acompanhar seu movimento." },
  { id: "bone-nexus", name: "Boné Nexus Logo", category: "acessorios", price: 119.9, image: "/images/category-acessorios.jpg", description: "Boné ajustável com logo bordado e acabamento premium." },
  { id: "bag-nexus", name: "Shoulder Bag Nexus", category: "acessorios", price: 169.9, image: "/images/category-acessorios.jpg", description: "Praticidade e estilo para levar seus essenciais." },
]

export const categoryLabels: Record<string, string> = { camisetas: "Camisetas", moletons: "Moletons", feminino: "Feminino", acessorios: "Acessórios", masculino: "Masculino", lancamentos: "Lançamentos", sale: "Sale" }

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function getProductCategoryPath(category: string) {
  return `/colecao/${category}`
}

export const catalogProducts = products

export default products
