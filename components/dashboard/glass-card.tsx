"use client"

import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "strong" | "subtle"
  hover?: boolean
  glow?: "cyan" | "teal" | "none"
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = true,
  glow = "none",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-500",
        variant === "default" && "glass",
        variant === "strong" && "glass-strong",
        variant === "subtle" && "glass-subtle",
        hover && "glass-hover",
        glow === "cyan" && "glow-cyan",
        glow === "teal" && "glow-teal",
        className
      )}
    >
      {children}
    </div>
  )
}
