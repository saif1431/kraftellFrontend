import React from 'react';
import { GoGraph } from "react-icons/go";
import { IoIosTime } from "react-icons/io";
import { FaChartBar } from "react-icons/fa6";



function Services() {
  const serviceBoxes = [
    {
      icon: <GoGraph className="text-4xl text-blue-600" />,
      text: "Forecast optimal order windows"
    },
    {
      icon: <IoIosTime className="text-4xl text-blue-600" />,
      text: "Estimate delivery lead times"
    },
    {
      icon: <FaChartBar className=" text-4xl text-blue-600" />,
      text: "Track material price trends"
    },
    {
      icon: <IoIosTime className="text-4xl text-blue-600" />,
      text: "Avoid overstock & delays"
    }
  ];

  return (
    <div className="bg-gray-50 py-14">
     

      {/* Existing Heading/Paragraph */}
      <div className='text-center leading-tight lg:px-14 px-6 py-14'>
        <h1 className='lg:text-3xl text-2xl font-bold text-[#525252]'>
          Powered by AI, Built for Fast-Moving Teams and Business Owners
        </h1>
        <p className='mt-4 max-w-4xl mx-auto leading-relaxed text-[#525252]'>
          Let the data guide your next production run.
        </p>
      </div>

 {/* Service Boxes Grid */}

      <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-14 px-6 ">
        {serviceBoxes.map((box, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-md shadow-sm hover:shadow-md transition-shadow "
          >
            <div className="flex   mb-2">
              {box.icon}
            </div>
            <p className="text-black text-sm">{box.text}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Services;