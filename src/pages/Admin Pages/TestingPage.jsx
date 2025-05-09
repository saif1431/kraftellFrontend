import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import TestingHeader from '../../components/Admin Components/TestingComponents/TestingHeader'

function TestingPage() {
  return (
    <div className='lg:px-6 py-12'>
    <AdminHeader title="Testing & QA"/>
    <div>
          <TestingHeader/>
    </div>
  </div>
  )
}

export default TestingPage
