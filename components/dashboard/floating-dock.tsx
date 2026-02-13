"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Search,
} from "lucide-react"
import { cn } from "@/lib/utils"

const dockItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: ShoppingCart, label: "Orders", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: Bell, label: "Alerts", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function FloatingDock() {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="glass-strong flex items-center gap-1 rounded-2xl px-2 py-2"
        role="navigation"
        aria-label="Main navigation"
      >
        {dockItems.map((item) => {
          const isActive = activeItem === item.label
          const isHovered = hoveredItem === item.label

          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className={cn(
                "group relative flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-300",
                isActive
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-all duration-300",
                  isActive && "text-[hsl(var(--primary))]",
                  isHovered && !isActive && "scale-110"
                )}
              />
              <span
                className={cn(
                  "text-sm font-medium overflow-hidden transition-all duration-300",
                  isActive ? "max-w-24 opacity-100" : "max-w-0 opacity-0"
                )}
              >
                {item.label}
              </span>
              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]" />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
