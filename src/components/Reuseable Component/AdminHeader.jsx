import { Menu } from 'lucide-react'
import React, { Children } from 'react'

function AdminHeader({title}) {
  return (
    <div>
        <div className="flex items-center mb-6">
        <button className="p-2 mr-2 bg-white border border-gray-300 rounded-md hover:bg-gray-200">
          <Menu size={20} />
        </button>
        <h1 className="lg:text-2xl text-xl font-semibold">{title}</h1>
      </div>
    </div>
  )
}

export default AdminHeader
