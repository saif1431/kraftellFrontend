import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import ProfileName from '../../components/Buyer Components/DashBoardComponent/ProfileName'
import DashboardCards from '../../components/Buyer Components/DashBoardComponent/DashboardCards'
import RecentPrototype from '../../components/Buyer Components/DashBoardComponent/RecentPrototype'
import RecentMessage from '../../components/Buyer Components/DashBoardComponent/RecentMessage'
import Footer from '../../components/Reuseable Component/Footer'


function DashBoard() {
  return (
    <div className='bg-primary'>
      <DashBoardNavbar/>
      <ProfileName/>
      <DashboardCards/>
      <div className='flex items-center flex-col lg:flex-row gap-4 lg:px-18 px-4 lg:py-8'>
      <RecentPrototype/>
      <RecentMessage/>
      </div>
      <Footer/>
    </div>
  )
}

export default DashBoard
