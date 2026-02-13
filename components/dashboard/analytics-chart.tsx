"use client"

import { GlassCard } from "./glass-card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const data = [
  { region: "North America", revenue: 980000, color: "hsl(199, 89%, 58%)" },
  { region: "Europe", revenue: 720000, color: "hsl(168, 70%, 50%)" },
  { region: "Asia Pacific", revenue: 540000, color: "hsl(199, 89%, 48%)" },
  { region: "Latin America", revenue: 320000, color: "hsl(168, 70%, 40%)" },
  { region: "Middle East", revenue: 180000, color: "hsl(199, 70%, 40%)" },
]

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="glass-strong rounded-xl px-4 py-3">
        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
        <p className="text-sm font-semibold text-foreground">
          ${(payload[0].value / 1000).toFixed(0)}K
        </p>
      </div>
    )
  }
  return null
}

export function AnalyticsChart() {
  return (
    <GlassCard variant="strong" hover={false} className="col-span-full lg:col-span-1">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Revenue by Region</h3>
        <p className="text-sm text-muted-foreground">Global distribution</p>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
            <XAxis
              type="number"
              tick={{ fill: "hsl(215, 10%, 55%)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}K`}
            />
            <YAxis
              type="category"
              dataKey="region"
              tick={{ fill: "hsl(215, 10%, 55%)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
            <Bar dataKey="revenue" radius={[0, 6, 6, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
