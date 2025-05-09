import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import SpecificationForm from '../../components/Buyer Components/ProductSpecificationComponent/SpecificationForm'
import MessagesSection from '../../components/Buyer Components/ProductSpecificationComponent/MessagesSection'
import StatusTimeline from '../../components/Buyer Components/ProductSpecificationComponent/StatusTimeline'
import ManufacturerResponse from '../../components/Buyer Components/ProductSpecificationComponent/ManufacturerResponse'

function ProductSpecificationPage() {
  return (
    <div>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-6'>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Specification Form */}
      <div className="lg:col-span-2 space-y-6">
        <SpecificationForm />
        <ManufacturerResponse />

      </div>

      {/* Right Column - Messages, Timeline, and Response */}
      <div className="space-y-6">
        <MessagesSection />
        <StatusTimeline />
      </div>
    </div>
      </div>
    </div>
  )
}

export default ProductSpecificationPage
