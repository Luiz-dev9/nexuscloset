export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  { id: "camiseta-essential", name: "Camiseta Essential Nexus", category: "camisetas", price: 149.9, image: "/images/product-camiseta-essential.png", description: "Camiseta oversized em algodão premium, criada para acompanhar sua rotina." },
  { id: "camiseta-connect", name: "Camiseta Connect", category: "camisetas", price: 159.9, image: "/images/product-camiseta-connect.png", description: "Modelagem confortável e identidade Nexus em cada detalhe." },
  { id: "camiseta-urban", name: "Camiseta Urban Logo", category: "camisetas", price: 169.9, image: "/images/product-camiseta-urban.png", description: "Visual urbano com estampa exclusiva e caimento oversized." },
  { id: "camiseta-heavy", name: "Camiseta Heavy Cotton", category: "camisetas", price: 179.9, image: "/images/product-camiseta-heavy.png", description: "Algodão encorpado e construção premium para todos os dias." },
  { id: "moletom-core", name: "Moletom Core Nexus", category: "moletons", price: 299.9, image: "/images/product-moletom-core.png", description: "Moletom encorpado com toque macio para os dias mais frios." },
  { id: "moletom-connect", name: "Moletom Connect", category: "moletons", price: 329.9, image: "/images/product-moletom-connect.png", description: "Conforto premium e design urbano para qualquer conexão." },
  { id: "moletom-essential", name: "Moletom Essential", category: "moletons", price: 319.9, image: "/images/product-moletom-essential.png", description: "Silhueta oversized e acabamento minimalista Nexus." },
  { id: "moletom-zip", name: "Moletom Zip Nexus", category: "moletons", price: 339.9, image: "/images/product-moletom-zip.png", description: "Modelo com zíper frontal para compor camadas com estilo." },
  { id: "top-nexus", name: "Top Nexus Essential", category: "feminino", price: 139.9, image: "/images/product-feminino-top.png", description: "Peça versátil com caimento moderno e atitude Nexus." },
  { id: "regata-flow", name: "Regata Flow", category: "feminino", price: 129.9, image: "/images/product-feminino-regata.png", description: "Leve, autêntica e feita para acompanhar seu movimento." },
  { id: "cropped-nexus", name: "Cropped Nexus", category: "feminino", price: 149.9, image: "/images/product-feminino-cropped.png", description: "Cropped confortável com presença e acabamento premium." },
  { id: "calca-wide", name: "Calça Wide Cargo", category: "feminino", price: 289.9, image: "/images/product-feminino-calca.png", description: "Modelagem ampla e bolsos utilitários para um visual marcante." },
  { id: "bone-nexus", name: "Boné Nexus Logo", category: "acessorios", price: 119.9, image: "/images/product-acessorio-bone.png", description: "Boné ajustável com logo bordado e acabamento premium." },
  { id: "bag-nexus", name: "Shoulder Bag Nexus", category: "acessorios", price: 169.9, image: "/images/product-acessorio-bag.png", description: "Praticidade e estilo para levar seus essenciais." },
  { id: "carteira-core", name: "Carteira Core", category: "acessorios", price: 99.9, image: "/images/product-acessorio-carteira.png", description: "Design compacto em couro sintético preto e acabamento refinado." },
  { id: "meias-nexus", name: "Meias Nexus Pack", category: "acessorios", price: 69.9, image: "/images/product-acessorio-meias.png", description: "Pack de meias esportivas com conforto para a rotina." },
  { id: "jaqueta-bomber", name: "Jaqueta Bomber Nexus", category: "masculino", price: 399.9, image: "/images/product-masculino-jaqueta.png", description: "Jaqueta bomber estruturada para elevar suas combinações." },
  { id: "calca-cargo", name: "Calça Cargo Utility", category: "masculino", price: 279.9, image: "/images/product-masculino-calca.png", description: "Modelagem confortável com bolsos funcionais e visual urbano." },
  { id: "camisa-overshirt", name: "Camisa Overshirt Nexus", category: "masculino", price: 249.9, image: "/images/product-masculino-camisa.png", description: "Camisa versátil para usar aberta ou como peça principal." },
  { id: "colete-utility", name: "Colete Utility", category: "masculino", price: 229.9, image: "/images/product-masculino-colete.png", description: "Colete utilitário com atitude streetwear e bolsos amplos." },
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
