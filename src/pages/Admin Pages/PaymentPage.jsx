import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import PaymentHeader from '../../components/Admin Components/PaymentComponent/PaymentHeader'

function PaymentPage() {
  return (
    <div className='lg:px-6 py-12'>
      <AdminHeader title="Payment & Financials"/>
      <div>
        <PaymentHeader/>
      </div>
    </div>
  )
}

export default PaymentPage
