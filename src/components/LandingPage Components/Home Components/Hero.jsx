import React from 'react'
import HeroImg from '/HomeImg1.jpg'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroImg})` }}>
      <div className='flex flex-col justify-center items-center h-full px-2'>
        <h1 className='lg:text-7xl text-3xl text-center  text-white font-bold mb-4 leading-tight'>A Smarter Approach to European <br /> Manufacturing</h1>
        
        <div className='space-x-5 mt-12' >
        <NavLink to='/MemberShip' className='bg-[#3977ED] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Get Free Started</NavLink>
        <button className='bg-white text-black px-6 py-3 rounded-lg hover:bg-slate-200 transition duration-300'>See How It Works</button>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
