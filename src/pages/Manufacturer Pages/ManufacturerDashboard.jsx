import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import DashboardProfile from '../../components/Manufacturer Components/ManufactDashboardComponents.jsx/DashboardProfile'
import ManufacturerCard from '../../components/Manufacturer Components/ManufactDashboardComponents.jsx/ManufacturerCard'
import RecentActivities from '../../components/Manufacturer Components/ManufactDashboardComponents.jsx/RecentActivities'
import Footer from '../../components/Reuseable Component/Footer'


function ManufacturerDashboard() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
     <div className='flex items-start flex-col lg:flex-row gap-4 lg:px-18 px-4 lg:py-14 py-8'>
      <div className='lg:w-[20%] w-full'>
      <DashboardProfile/>
      </div>
      <div className='flex-1 w-full space-y-6 lg:px-6 '>
        <ManufacturerCard/>
        <RecentActivities/>
      </div>
     </div>

     <Footer/>
    </div>
  )
}

export default ManufacturerDashboard
