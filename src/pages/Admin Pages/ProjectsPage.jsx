import React from 'react'

import { Menu } from 'lucide-react'
import ActiveProjectTable from '../../components/Admin Components/ProjectsComponent/ActiveProjectTable'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'

function ProjectsPage() {
  return (
      <div className="lg:px-6 py-12">
    <AdminHeader title="Project & Order Management"/>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="lg:text-lg text-md font-medium">Active Projects</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white lg:px-4 px-2 py-2 rounded-md text-sm font-medium transition-colors">
            View Matching Logs
          </button>
        </div>

        <ActiveProjectTable />
      </div>
    </div>
  )
}

export default ProjectsPage
