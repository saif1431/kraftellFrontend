import React from 'react'
import Navbar from '../../components/Reuseable Component/Navbar'
import Login from '../../components/LandingPage Components/Home Components/Login'
import TopFooter from '../../components/Reuseable Component/TopFooter'
import Footer from '../../components/Reuseable Component/Footer'

function LoginForm() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <TopFooter/>
      <Footer/>
    </div>
  )
}

export default LoginForm
