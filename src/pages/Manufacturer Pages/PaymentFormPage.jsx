import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import PaymentForm from '../../components/Manufacturer Components/PaymentForm'
import Footer from '../../components/Reuseable Component/Footer'


function PaymentFormPage() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
        <PaymentForm/>
        </div>
        <Footer/>   
       </div>
  )
}

export default PaymentFormPage
