"use client"

import { createContext, useContext, useMemo, useState } from "react"

export type CartItem = { id: string; name: string; price: number; image: string; size: string; quantity: number }

type CartContextValue = { items: CartItem[]; count: number; total: number; addItem: (item: Omit<CartItem, "quantity">) => void; removeItem: (id: string) => void; updateQuantity: (id: string, quantity: number) => void }
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const addItem = (item: Omit<CartItem, "quantity">) => setItems((current) => {
    const existing = current.find((entry) => entry.id === item.id)
    if (existing) return current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
    return [...current, { ...item, quantity: 1 }]
  })
  const removeItem = (id: string) => setItems((current) => current.filter((item) => item.id !== id))
  const updateQuantity = (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item))
  const value = useMemo(() => ({ items, count: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), addItem, removeItem, updateQuantity }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart deve ser usado dentro de CartProvider"); return context }

export function formatPrice(value: number) { return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }
