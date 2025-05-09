import React from 'react'
import DashboardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import ManufacturerProfile from '../../components/Buyer Components/ManufacturerProfileComponents/ManufacturerProfileDetail'
import Footer from '../../components/Reuseable Component/Footer'
import ManufacturerCapabilities from '../../components/Buyer Components/ManufacturerProfileComponents/ManufacturerCapabilities'
import ManufacturerCertificates from '../../components/Buyer Components/ManufacturerProfileComponents/ManufacturerCertificates'
import ManufacturerPortfolio from '../../components/Buyer Components/ManufacturerProfileComponents/ManufacturerPortfolio'

function ManufacturerProfilePage() {
  return (
      <div className='bg-primary'>
      <DashboardNavbar/>
      <div className='flex flex-col gap-6 lg:px-18 px-4 lg:py-14 py-8'>
<ManufacturerProfile/>
<ManufacturerCapabilities/>
<ManufacturerCertificates/>
<ManufacturerPortfolio/>
      </div>
      <Footer/>
    </div>
  )
}

export default ManufacturerProfilePage
