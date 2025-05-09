import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import SettingHeader from '../../components/Admin Components/SettingComponents/SettingHeader'

function SettingPage() {
  return (
      <div className='lg:px-6 py-12'>
      <AdminHeader title="Platform Configuration & Settings"/>
      <div>
<SettingHeader/>
      </div>
    </div>
  )
}

export default SettingPage
