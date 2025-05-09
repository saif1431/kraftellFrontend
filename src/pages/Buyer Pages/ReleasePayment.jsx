import React from 'react'

import ReleasePaymentForm from '../../components/Buyer Components/PaymentComponent/ReleasePaymentForm'
import Footer from '../../components/Reuseable Component/Footer'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'

function ReleasePayment() {
  return (
    <div>
<DashBoardNavbar/>
<ReleasePaymentForm/>
<Footer/>
    </div>
  )
}

export default ReleasePayment
