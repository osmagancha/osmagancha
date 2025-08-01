"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function RippleButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { x, y, id: Date.now() }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  return (
    <Button variant={variant} size={size} className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </Button>
  )
}
