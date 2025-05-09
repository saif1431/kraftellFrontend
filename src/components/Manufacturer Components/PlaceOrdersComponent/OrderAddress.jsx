import React from 'react'
import img from '/portfolio.jpg'
import { IoIosCheckmarkCircle } from "react-icons/io";

function OrderAddress() {
  return (
    <div className='flex items-start flex-col md:flex-row gap-6'>
      <div className='lg:w-1/2 w-full h-[500px]'>
            <img className=' h-full object-center object-cover rounded-md' src={img} alt="" />
      </div>
      <div className='space-y-6 w-full lg:w-1/2'>
            <h6>Floral Summer Dress</h6>
            <div className='flex items-center gap-2'>
            <IoIosCheckmarkCircle className='text-primary' />
<p className='text-primary'>Prototype Approved</p>
            </div>
            <div className='space-y-1 bg-primary w-full rounded-lg p-4'>
                  <h6>Manufacturer Details</h6>
                  <p className='text-primary'>TextilePro Manufacturing</p>
                  <p className='text-primary'>Production Capacity: 1000-5000 units/month</p>
            </div>
      </div>
    </div>
  )
}

export default OrderAddress
