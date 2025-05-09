import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import ToolingIntegrationsHeader from '../../components/Admin Components/ToolingIntegrationsComponent/ToolingIntegrationsHeader'


function ToolingIntegrationsPage() {
  return (
    <div className='lg:px-6 py-12'>
    <AdminHeader title="Tooling & Integrations"/>
    <div>
          <ToolingIntegrationsHeader/>
    </div>
  </div>
  )
}

export default ToolingIntegrationsPage
