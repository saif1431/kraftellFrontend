import React from 'react'
import MemberShipHero from '../../components/LandingPage Components/MemberShip Component/MemberShipHero'
import KraftellFor from '../../components/LandingPage Components/MemberShip Component/KraftellFor'
import MembershipCard from '../../components/LandingPage Components/MemberShip Component/MembershipCard'
import KraftellStartUp from '../../components/LandingPage Components/MemberShip Component/KraftellStartUp'
import Navbar from '../../components/Reuseable Component/Navbar'
import Footer from '../../components/Reuseable Component/Footer'
import TopFooter from '../../components/Reuseable Component/TopFooter'

function MemberShip() {
  return (
    <div>
      <Navbar/>
      <MemberShipHero/>
      <KraftellFor/>
      <MembershipCard/>
      <KraftellStartUp/>
      <TopFooter/>
      <Footer/>
    </div>
  )
}

export default MemberShip
