import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import UploadPreviewForm from '../../components/Manufacturer Components/UploadPreviewForm'

function UploadPreviewPage() {
  return (
      <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
        <UploadPreviewForm/>
        </div>
        <Footer/>   
       </div>
  )
}

export default UploadPreviewPage
