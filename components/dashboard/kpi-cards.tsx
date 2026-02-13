"use client"

import { GlassCard } from "./glass-card"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
} from "lucide-react"

const kpis = [
  {
    label: "Monthly Revenue",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
    glow: "cyan" as const,
  },
  {
    label: "Active Users",
    value: "184.2K",
    change: "+8.1%",
    trend: "up" as const,
    icon: Users,
    glow: "teal" as const,
  },
  {
    label: "Total Orders",
    value: "32,847",
    change: "+23.4%",
    trend: "up" as const,
    icon: ShoppingCart,
    glow: "cyan" as const,
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "-0.8%",
    trend: "down" as const,
    icon: Activity,
    glow: "none" as const,
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <GlassCard key={kpi.label} glow={kpi.glow} className="relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                {kpi.label}
              </span>
              <span className="text-3xl font-semibold tracking-tight text-foreground">
                {kpi.value}
              </span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <kpi.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            {kpi.trend === "up" ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
            )}
            <span
              className={`text-sm font-medium ${
                kpi.trend === "up" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {kpi.change}
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
          {/* Decorative glass refraction */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[hsl(var(--primary))]/5 blur-2xl" />
        </GlassCard>
      ))}
    </div>
  )
}
