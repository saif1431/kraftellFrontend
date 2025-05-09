import React from 'react'
import Hero from '../../components/LandingPage Components/Home Components/Hero'
import StartManufact from '../../components/LandingPage Components/Home Components/StartManufact'
import Services from '../../components/LandingPage Components/Home Components/Services'
import RightManufact from '../../components/LandingPage Components/Home Components/RightManufact'
import SecurePayment from '../../components/LandingPage Components/Home Components/SecurePayment'
import JoinPlatform from '../../components/LandingPage Components/Home Components/JoinPlatform'
import KraftellFounder from '../../components/LandingPage Components/Home Components/KraftellFounder'
import Navbar from '../../components/Reuseable Component/Navbar'
import Footer from '../../components/Reuseable Component/Footer'
import TopFooter from '../../components/Reuseable Component/TopFooter'
import OurServices from '../../components/LandingPage Components/Home Components/OurServices'
import ServeIndustry from '../../components/LandingPage Components/Home Components/ServeIndustry'


function Home() {
  return (
    <div>
      <Navbar/>
<Hero/>
<StartManufact/>
<Services/>
<RightManufact/>
<JoinPlatform/>
<div className='bg-primary py-12 px-4 space-y-14'>
<OurServices/>
<ServeIndustry/>
  </div>
<SecurePayment/>
<KraftellFounder/>
<TopFooter/>
<Footer/>
    </div>
  )
}

export default Home
