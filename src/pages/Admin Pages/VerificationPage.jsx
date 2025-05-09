import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import VerificationHeader from '../../components/Admin Components/VerificationComponent/VerificationHeader'

function VerificationPage() {
  return (
      <div className='lg:px-6 py-12'>
      <AdminHeader title="Verification & Trust Control"/>
      <div>
<VerificationHeader/>
      </div>
    </div>
  )
}

export default VerificationPage
