import React from 'react'
import { TbRosetteFilled } from "react-icons/tb";

function ManufacturerCertificates() {
  return (
      <div className='bg-white rounded-lg  px-8 py-8'>
      <h1 className='text-2xl font-semibold'>Certificates</h1>
      <div className='flex items-center gap-4 mt-3 flex-wrap'>
            <div className='flex items-center gap-2 bg-primary w-fit px-4 py-2 rounded-full'>
            <TbRosetteFilled className='text-2xl' />
            <p className='text-lg flex gap-2'>ISO <span>9203:2023</span></p>
            </div>
            <div className='flex items-center gap-2 bg-primary w-fit px-4 py-2 rounded-full'>
            <TbRosetteFilled className='text-2xl' />
            <p className='text-lg flex gap-2'>ISO <span>9203:2023</span></p>
            </div>
            <div className='flex items-center gap-2 bg-primary w-fit px-4 py-2 rounded-full'>
            <TbRosetteFilled className='text-2xl' />
            <p className='text-lg flex gap-2'>ISO <span>9203:2023</span></p>
            </div>
      </div>
    </div>
  )
}

export default ManufacturerCertificates




