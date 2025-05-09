import React from 'react'
import Image from '/HomeImg3.jpg'
import Image2 from '/HomeImg4.png'
import { IoMdCheckmarkCircle } from "react-icons/io";


function RightManufact() {
  return (
    <div className='bg-[#E5E7EB] lg:px-38 px-6 py-14 space-y-8 lg:space-y-24'>
         <div className='  flex items-center justify-between flex-col md:flex-row gap-6'>
                  <div className='space-y-4 lg:w-1/2 w-full'>
                        <h4 className='lg:text-3xl text-2xl font-bold'>Find the Right Manufacturer Instantly</h4>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-lg'>Match by product type, material, and process</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-lg'>Filter by region, certifications, and capabilities</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-lg'>AI-assisted ranking to surface the most relevant suppliers</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-lg'>Analyze historical performance and lead time patterns</span>
                        </div>
                  </div>
                  <div className='lg:w-1/2 w-full flex items-end justify-end'>
                        <img className='rounded-lg lg:w-[80%] w-full' src={Image} alt="" />
                  </div>                  
            </div>
            {/* <div className=' flex items-center  justify-between flex-col-reverse md:flex-row gap-6'>

            <div className='lg:w-1/2 w-full flex items-end justify-start'>
                        <img className='rounded-lg lg:w-[80%]  w-full' src={Image2} alt="" />
                  </div>
                  <div className=' space-y-4 '>
                        <h4 className='lg:text-3xl text-2xl font-bold'>Own A Piece Of European Originality</h4>
                     <p className='max-w-xl text-lg'>Through Kraftell, designers and people from around the world collaborate with Europe's most skilled makers to create exceptional fashion, wares, and style pieces. Discover effortless originality, elevated standards, and the spirit of authentic craftsmanship crafted in Europe, made for you.</p>
                  </div>
               
            </div> */}
    </div>
  )
}

export default RightManufact
