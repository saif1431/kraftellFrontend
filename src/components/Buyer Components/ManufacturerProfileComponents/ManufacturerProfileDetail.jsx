import React from 'react'
import img from '/profileImg.svg'
import { NavLink } from 'react-router-dom'
function ManufacturerProfile() {
  return (
    <div className='w-full flex lg:items-center flex-col md:flex-row bg-white rounded-lg p-6 gap-8'>
      <div className='w-20'>
        <img src={img} alt="" />
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex lg:items-center flex-col lg:flex-row justify-between w-full'>
          <div className='space-y-3'>
            <h1 className='text-2xl font-semibold'>Tech Manufacturing Inc.</h1>
            <p className='text-lg text-primary'>Silicon Valley, CA, United State</p>
          </div>
          <div className='space-x-4 space-y-3 lg:space-y-0 mt-4 lg:mt-0'>
            <NavLink to='/RequestPrototype' className='bg-[#3977ED] text-white px-6 py-3 rounded-lg'>Request Prototype</NavLink>
            <NavLink to='/SendMessageForm' className='border border-gray-300 text-black px-6 py-3 rounded-lg'>Send Message</NavLink>
          </div>
        </div>
        <p className='text-lg text-primary'>Leading manufacturer of precision electronics and mechanical components with over 20 years of industry experience.</p>
      </div>
    </div>
  )
}

export default ManufacturerProfile
