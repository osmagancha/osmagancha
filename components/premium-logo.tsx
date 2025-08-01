"use client"

import { Brain, Sparkles } from "lucide-react"

export function PremiumLogo({ size = "normal" }: { size?: "small" | "normal" | "large" }) {
  const dimensions = {
    small: { container: "w-8 h-8", icon: "w-4 h-4", text: "text-sm" },
    normal: { container: "w-12 h-12", icon: "w-7 h-7", text: "text-2xl" },
    large: { container: "w-16 h-16", icon: "w-9 h-9", text: "text-3xl" },
  }

  const dim = dimensions[size]

  return (
    <div className="flex items-center space-x-3 group">
      <div
        className={`${dim.container} relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-emerald-400/20 animate-pulse-slow"></div>

        {/* Sparkle effects */}
        <Sparkles className="absolute top-1 right-1 w-2 h-2 text-yellow-300 animate-pulse" />
        <Sparkles
          className="absolute bottom-1 left-1 w-1.5 h-1.5 text-blue-200 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Main icon */}
        <Brain
          className={`${dim.icon} text-white relative z-10 group-hover:rotate-12 transition-transform duration-500`}
        />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div>
        <div
          className={`${dim.text} font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
        >
          CSCT
        </div>
        {size !== "small" && (
          <div className="text-xs text-gray-500 -mt-1 font-medium">Communication with Science City & Together</div>
        )}
      </div>
    </div>
  )
}
