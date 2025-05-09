import React from 'react'
import { IoIosTime } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";



function KraftellFor() {

        const serviceBoxes = [
          {
            icon: <AiOutlineGlobal className="text-2xl text-blue-600" />,
            text: "Global startups and independent  Creators"
          },
          {
            icon: <MdBusinessCenter className="text-3xl text-blue-600" />,
            text: "Small businesses with unique product designs"
          },
          {
            icon: <IoIosTime className="text-3xl text-blue-600" />,
            text: "Manufacturers seeking high-quality,small-to-medium batch orders"
          },
        ];
  return (
      <div className="bg-primary py-14 flex items-start justify-center gap-6 flex-col px-12">
      {/* Existing Heading/Paragraph */}
      <div className=' leading-tight lg:px-14 px-6'>
        <h1 className='text-xl font-semibold'>
        Who is Kraftell For? 
        </h1>
      </div>

 {/* Service Boxes Grid */}

      <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 px-6 ">
        {serviceBoxes.map((box, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-md shadow-sm hover:shadow-md transition-shadow "
          >
            <div className="flex  mb-2">
              {box.icon}
            </div>
            <p className="text-black text-sm">{box.text}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default KraftellFor
