import React from 'react'
import { MdOutlineStarBorder } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function ReleasePaymentForm() {
  return (
    <div className='flex items-center justify-center lg:h-screen bg-primary px-4 py-6'>
     <div className='bg-white  rounded-lg md:w-[50%] w-full p-8 space-y-8'>
     <div className='space-y-3'>
     <h1 className='text-3xl font-medium'>Release Payment</h1>
     <p className='text-primary text-lg'>Please review and confirm to release the final payment</p>
     </div>
     <div className='space-y-3'>
      <p className='text-lg text-primary'>Final Product Review</p>
      <div className='flex items-center gap-2 text-3xl text-primary'>
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      <MdOutlineStarBorder />
      </div>
     </div>

<div className='flex flex-col gap-3'>
      <label className='' htmlFor="">Addition Comments (Optional)</label>
      <textarea className='border border-gray-300 w-full ouline-none px-4 py-4 rounded-lg ' cols={30} rows={6} name="" id="" placeholder='Comment.....'></textarea>
      <div className='flex items-center gap-2'>
      <input className='w-4 h-4' type="checkbox" name="" id="" />
      <p className=' text-primary'>I confirm that I have received the product/service as described</p>
</div>
</div>

<button className='bg-[#3977ED] text-white w-full px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-lg flex items-center gap-2 justify-center'>
<TiTick />

      Release Payment</button>
     </div>
    </div>
  )
}

export default ReleasePaymentForm
