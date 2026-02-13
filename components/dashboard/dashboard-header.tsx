"use client"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"

export function DashboardHeader() {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground text-balance">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Global E-Commerce Analytics
        </p>
      </div>
      <div className="flex items-center gap-3">
        {/* Search with Visual Intelligence iris */}
        <div
          className={`glass flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-500 ${
            searchFocused
              ? "w-72 border-[hsl(var(--primary))]/30 glow-cyan"
              : "w-52"
          }`}
        >
          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            aria-label="Search dashboard"
          />
          {searchFocused && (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex-shrink-0">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          )}
        </div>
        {/* User avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 text-sm font-semibold text-white ring-2 ring-white/10">
          JD
        </div>
      </div>
    </header>
  )
}
