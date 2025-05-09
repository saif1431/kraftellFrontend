import { Check, Package, Truck, Circle } from "lucide-react"
import RecentActivities from "./RecentActivities"

export default function ProductDevelopmentWorkflow() {
  return (
    <div className=" p-6 rounded-md  mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Product Development Workflow</h1>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mb-10">
        {/* Prototype Approval */}
        <div className="space-y-4 bg-white px-6 py-8 rounded-md">
          <div className="flex items-center gap-2 ">
            <Check className="h-5 w-5 bg-black text-white rounded-full p-1" />
            <h2 className="font-semibold text-lg">Prototype Approval</h2>
          </div>
          <p className="text-md text-primary">
            Review and approve final prototype specifications before manufacturing.
          </p>
          <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <span className="text-md font-medium">Prototype Status</span>
            <span className="text-sm text-primary rounded-full bg-gray-200 px-3 py-1 ">Approved</span>
          </div>
        </div>

        {/* Manufacturing Order */}
        <div className="space-y-4 bg-white px-6 py-8 rounded-md">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 bg-black text-white rounded-full p-1" />
            <h2 className="font-semibold text-lg">Manufacturing Order</h2>
          </div>
          <p className="text-md text-primary">Place and manage manufacturing orders with approved specifications.</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded text-center hover:bg-blue-600 transition-colors">
            Create Order
          </button>
        </div>

        {/* Order Tracking */}
        <div className="space-y-4 bg-white px-6 py-8 rounded-md">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 bg-black text-white rounded-full p-1" />
            <h2 className="font-semibold text-lg">Order Tracking</h2>
          </div>
          <p className="text-md text-primary">Monitor order progress and delivery status in real-time.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 bg-black text-white rounded-full p-0.5" />
              <span className="text-sm text-primary">Order Confirmed</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 text-gray-400 rounded-full" />
              <span className="text-sm text-primary">Production Started</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-4 w-4 text-gray-400 rounded-full" />
              <span className="text-sm text-primary">Quality Check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Component */}
      <RecentActivities />
    </div>
  )
}
