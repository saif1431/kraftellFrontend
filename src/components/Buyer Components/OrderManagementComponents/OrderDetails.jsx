import { ImageIcon, Send } from "lucide-react"

export default function OrderDetails() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-4">Order #ORD-2025-001</h2>
<hr className="border-gray-300 m-4" />
      <div className="mb-4">
        <h3 className="text-md font-medium  mb-4">Production Updates</h3>
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-gray-200 rounded-md p-2 flex-shrink-0">
            <ImageIcon className="h-8 w-8 text-gray-500" />
          </div>
          <div>
            <div className="text-lg ">Production photo uploaded</div>
            <div className="text-sm text-primary">Apr 19, 2025 14:24</div>
          </div>
        </div>
      </div>
<hr className="border-gray-300 m-3" />
      <div className="relative">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Send
        </button>
      </div>
    </div>
  )
}
