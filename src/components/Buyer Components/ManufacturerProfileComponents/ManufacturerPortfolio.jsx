import React from 'react'
import portfolio from '/portfolio.jpg'

function ManufacturerPortfolio() {
  return (
      <div className='bg-white rounded-lg  px-8 py-8'>
      <h1 className='text-2xl font-semibold'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
      </div>
    </div>
  )
}

export default ManufacturerPortfolio



