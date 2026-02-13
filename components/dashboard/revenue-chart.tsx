"use client"

import { GlassCard } from "./glass-card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", revenue: 1800000, orders: 21000 },
  { month: "Feb", revenue: 1950000, orders: 23500 },
  { month: "Mar", revenue: 2100000, orders: 25200 },
  { month: "Apr", revenue: 1870000, orders: 22100 },
  { month: "May", revenue: 2250000, orders: 27400 },
  { month: "Jun", revenue: 2180000, orders: 26800 },
  { month: "Jul", revenue: 2400000, orders: 28900 },
  { month: "Aug", revenue: 2350000, orders: 28200 },
  { month: "Sep", revenue: 2500000, orders: 30100 },
  { month: "Oct", revenue: 2680000, orders: 32000 },
  { month: "Nov", revenue: 2750000, orders: 33400 },
  { month: "Dec", revenue: 2900000, orders: 35200 },
]

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="glass-strong rounded-xl px-4 py-3">
        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} className="text-sm font-semibold text-foreground">
            {entry.dataKey === "revenue"
              ? `$${(entry.value / 1000000).toFixed(2)}M`
              : entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function RevenueChart() {
  return (
    <GlassCard variant="strong" hover={false} className="col-span-full lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[hsl(199,89%,58%)]" />
            <span className="text-xs text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[hsl(168,70%,50%)]" />
            <span className="text-xs text-muted-foreground">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(199, 89%, 58%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(199, 89%, 58%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(168, 70%, 50%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(168, 70%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(215, 10%, 55%)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(215, 10%, 55%)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000000}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(199, 89%, 58%)"
              strokeWidth={2}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
