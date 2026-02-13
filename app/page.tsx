"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { TopUsers } from "@/components/dashboard/top-users"
import { TransactionsTable } from "@/components/dashboard/transactions-table"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { FloatingDock } from "@/components/dashboard/floating-dock"
import { ActivityFeed } from "@/components/dashboard/activity-feed"

export default function DashboardPage() {
  return (
    <div className="mesh-gradient relative min-h-screen">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-teal-500/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[100px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8">
        <DashboardHeader />

        {/* KPI Cards */}
        <section className="mt-8" aria-label="Key performance indicators">
          <KpiCards />
        </section>

        {/* Charts Row */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3" aria-label="Analytics charts">
          <RevenueChart />
          <AnalyticsChart />
        </section>

        {/* Users + Activity Row */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2" aria-label="Users and activity">
          <TopUsers />
          <ActivityFeed />
        </section>

        {/* Transactions Table */}
        <section className="mt-6" aria-label="Recent transactions">
          <TransactionsTable />
        </section>
      </main>

      <FloatingDock />
    </div>
  )
}
