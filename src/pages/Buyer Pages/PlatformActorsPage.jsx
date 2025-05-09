import React from 'react'

import PlatFormActors from '../../components/Buyer Components/PlatFormActors'
import Footer from '../../components/Reuseable Component/Footer'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'


function PlatformActorsPage() {
  return (
    <div>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-6 h-fit lg:h-screen'>
<PlatFormActors/>
      </div>
      <Footer/>
    </div>
  )
}

export default PlatformActorsPage
