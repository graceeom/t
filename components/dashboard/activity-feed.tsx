"use client"

import { GlassCard } from "./glass-card"
import { Package, UserPlus, CreditCard, RefreshCcw } from "lucide-react"

const activities = [
  { icon: CreditCard, label: "New order placed", detail: "MacBook Pro M4 - $2,499", time: "2m ago", color: "text-cyan-400" },
  { icon: UserPlus, label: "New customer signup", detail: "sophia.n@example.com", time: "8m ago", color: "text-teal-400" },
  { icon: Package, label: "Order shipped", detail: "TXN-7838 to James Park", time: "15m ago", color: "text-blue-400" },
  { icon: RefreshCcw, label: "Refund processed", detail: "TXN-7837 - $899.00", time: "1h ago", color: "text-amber-400" },
  { icon: CreditCard, label: "New order placed", detail: "iPhone 17 Pro - $1,199", time: "2h ago", color: "text-cyan-400" },
  { icon: UserPlus, label: "New customer signup", detail: "david.l@example.com", time: "3h ago", color: "text-teal-400" },
]

export function ActivityFeed() {
  return (
    <GlassCard variant="strong" hover={false}>
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-foreground">Live Activity</h3>
        <p className="text-sm text-muted-foreground">Real-time updates</p>
      </div>
      <div className="flex flex-col gap-1">
        {activities.map((activity, i) => (
          <div
            key={`${activity.label}-${i}`}
            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-white/5"
          >
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.label}</p>
              <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
            </div>
            <span className="text-xs text-muted-foreground flex-shrink-0 mt-0.5">{activity.time}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
