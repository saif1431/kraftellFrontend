import React from 'react'
import PaymentForm from '../../components/Manufacturer Components/PaymentForm'
import Footer from '../../components/Reuseable Component/Footer'
import DashBoard from './DashBoard'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'

function BuyerPaymentForm() {
  return (
      <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
        <PaymentForm/>
        </div>
        <Footer/>   
       </div>
  )
}

export default BuyerPaymentForm
