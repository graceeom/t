"use client"

import { GlassCard } from "./glass-card"

const users = [
  { name: "Sarah Kim", email: "sarah@example.com", spent: "$14,820", avatar: "SK", color: "from-cyan-400 to-blue-500" },
  { name: "Alex Chen", email: "alex@example.com", spent: "$12,540", avatar: "AC", color: "from-teal-400 to-emerald-500" },
  { name: "Maria Lopez", email: "maria@example.com", spent: "$11,200", avatar: "ML", color: "from-blue-400 to-indigo-500" },
  { name: "James Park", email: "james@example.com", spent: "$9,870", avatar: "JP", color: "from-cyan-400 to-teal-500" },
  { name: "Emma Wilson", email: "emma@example.com", spent: "$8,450", avatar: "EW", color: "from-sky-400 to-blue-500" },
]

export function TopUsers() {
  return (
    <GlassCard variant="strong" hover={false}>
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-foreground">Top Customers</h3>
        <p className="text-sm text-muted-foreground">By lifetime spend</p>
      </div>
      <div className="flex flex-col gap-3">
        {users.map((user, i) => (
          <div
            key={user.name}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-white/5"
          >
            <div className="relative">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${user.color} text-sm font-semibold text-white`}>
                {user.avatar}
              </div>
              {i < 3 && (
                <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[hsl(var(--background))] text-[10px] font-bold text-foreground border border-white/10">
                  {i + 1}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
            <span className="text-sm font-semibold text-foreground">{user.spent}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
