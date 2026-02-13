"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { ArrowUpRight, ArrowDownLeft, Clock } from "lucide-react"

const transactions = [
  { id: "TXN-7841", customer: "Sarah Kim", product: "MacBook Pro M4", amount: "$2,499.00", status: "completed", date: "Feb 13, 2026", type: "sale" },
  { id: "TXN-7840", customer: "Alex Chen", product: "iPhone 17 Pro", amount: "$1,199.00", status: "completed", date: "Feb 13, 2026", type: "sale" },
  { id: "TXN-7839", customer: "Maria Lopez", product: "AirPods Pro 3", amount: "$249.00", status: "pending", date: "Feb 12, 2026", type: "sale" },
  { id: "TXN-7838", customer: "James Park", product: "iPad Air M3", amount: "$799.00", status: "completed", date: "Feb 12, 2026", type: "sale" },
  { id: "TXN-7837", customer: "Emma Wilson", product: "Apple Watch Ultra 3", amount: "$899.00", status: "refunded", date: "Feb 11, 2026", type: "refund" },
  { id: "TXN-7836", customer: "David Lee", product: "MacBook Air M4", amount: "$1,299.00", status: "completed", date: "Feb 11, 2026", type: "sale" },
  { id: "TXN-7835", customer: "Sophia Nguyen", product: "HomePod 2", amount: "$299.00", status: "completed", date: "Feb 10, 2026", type: "sale" },
]

function StatusBadge({ status }: { status: string }) {
  const styles = {
    completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    refunded: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  }[status] ?? ""

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles}`}>
      {status === "completed" && <ArrowUpRight className="h-3 w-3" />}
      {status === "pending" && <Clock className="h-3 w-3" />}
      {status === "refunded" && <ArrowDownLeft className="h-3 w-3" />}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export function TransactionsTable() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  return (
    <GlassCard variant="strong" hover={false} className="col-span-full overflow-hidden">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Latest orders and refunds</p>
        </div>
        <button className="glass rounded-xl px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-white/10">
          View All
        </button>
      </div>
      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Transaction</th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Customer</th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Product</th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">Amount</th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-white/[0.03] transition-colors duration-300"
                style={{
                  backgroundColor: hoveredRow === tx.id ? "rgba(255,255,255,0.03)" : "transparent",
                }}
                onMouseEnter={() => setHoveredRow(tx.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-3.5 text-sm font-mono text-muted-foreground">{tx.id}</td>
                <td className="py-3.5 text-sm font-medium text-foreground">{tx.customer}</td>
                <td className="py-3.5 text-sm text-muted-foreground">{tx.product}</td>
                <td className={`py-3.5 text-right text-sm font-semibold ${tx.type === "refund" ? "text-rose-400" : "text-foreground"}`}>
                  {tx.type === "refund" ? `-${tx.amount}` : tx.amount}
                </td>
                <td className="py-3.5"><StatusBadge status={tx.status} /></td>
                <td className="py-3.5 text-right text-sm text-muted-foreground">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  )
}
