import { ArrowUpRight, ArrowDownRight } from "lucide-react"

 function MetricCard({ title, value, change, subtext, isPositive = false, hideChange = false }) {
  return (
    <div className="bg-white p-4 space-y-4 rounded-lg shadow-sm">
      <div className="text-md text-primary mb-1">{title}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      {!hideChange && (
        <div className={`text-xs flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
         
          <span>{change}</span>
        </div>
      )}
      {subtext && <div className="text-xs text-primary">{subtext}</div>}
    </div>
  )
}

export default MetricCard