import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import SubmitPrototypeForm from '../../components/Manufacturer Components/ProfileSummary/SubmitPrototypeForm'
import Footer from '../../components/Reuseable Component/Footer'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'

function RequestPrototype() {
  return (
    <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-8 space-y-12'>
            <div className='space-y-3 text-center'>
                  <h1 className='lg:text-3xl text-2xl font-semibold'>Submit Prototype Request</h1>
                  <p className='text-lg text-primary'> Please provide the details for your prototype request</p>
            </div>
            <SubmitPrototypeForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default RequestPrototype
