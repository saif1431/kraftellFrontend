import { Search, Filter, MessageSquare, ImageIcon, MoreHorizontal } from "lucide-react"

export default function OrderManagement() {
  const orders = [
    {
      id: "ORD-2025-001",
      status: "Pending",
      designer: "Sarah Johnson",
      dueDate: "Apr 25, 2025",
    },
    {
      id: "ORD-2025-002",
      status: "In Production",
      designer: "Mike Chen",
      dueDate: "May 1, 2025",
    },
  ]

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="p-4 flex flex-col gap-4 md:gap-0 sm:flex-row justify-between items-center">
        <h2 className="text-xl font-semibold">Order Management</h2>
        <div className="flex gap-2 ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-64 w-56 "
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-blue-600 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

function OrderRow({ order }) {
  return (
    <div className="border-b border-gray-200 px-4 py-3 flex justify-between sm:items-center flex-col sm:flex-row  items-start">
      <div className="flex flex-col items-start gap-3">
        <div className="flex  items-center gap-2">
        <div
          className={`text-md px-3 py-1 rounded-full ${
            order.status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : order.status === "In Production"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {order.status}
        </div>
        <div className="font-medium">#{order.id}</div>
        </div>
        <div className="text-md text-primary">Designer: {order.designer}</div>
      </div>

      <div className="flex flex-col sm:items-center items-start gap-2">
      <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <MessageSquare className="h-5 w-5 " />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <ImageIcon className="h-5 w-5 " />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <MoreHorizontal className="h-5 w-5 " />
          </button>
        </div>
        <div className="text-md text-primary">Due: {order.dueDate}</div>
        
      </div>
    </div>
  )
}
