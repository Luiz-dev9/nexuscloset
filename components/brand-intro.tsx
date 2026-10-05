"use client"

import { useEffect, useState } from "react"

export function BrandIntro() {
  const [visible, setVisible] = useState<boolean | null>(null)

  useEffect(() => {
    const introSeen = sessionStorage.getItem("nexus-intro-seen")
    if (introSeen) {
      setVisible(false)
      return
    }

    setVisible(true)
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("nexus-intro-seen", "true")
      setVisible(false)
    }, 2600)

    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="brand-intro" role="status" aria-label="NEXUS carregando">
      <div className="brand-intro__glow" aria-hidden="true" />
      <div className="brand-intro__content">
        <p className="brand-intro__eyebrow">VISTA SUA CONEXÃO</p>
        <div className="brand-intro__logo" aria-label="NEXUS">
          N<span>Ξ</span>XUS
        </div>
        <div className="brand-intro__line" aria-hidden="true" />
        <p className="brand-intro__tagline">ESTILO. ATITUDE. AUTENTICIDADE.</p>
      </div>
      <button
        type="button"
        className="brand-intro__skip"
        onClick={() => {
          sessionStorage.setItem("nexus-intro-seen", "true")
          setVisible(false)
        }}
      >
        PULAR INTRO
      </button>
    </div>
  )
}
