import React from 'react'
import { HiMiniCpuChip } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

function ManufacturerCapabilities() {
      const card = [
                {
                  id: 1,
                  icon: <HiMiniCpuChip className="text-2xl" />,
                  title: 'Electronics Manufacturing',
                  description: 'PCB Assembly, Component Integration, Testing',
                },
                {
                  id: 2,
                  icon: <IoMdSettings className="text-2xl" />,
                  title: 'Precision Engineering',
                  description: 'CNC Machining, 3D Printing, Prototyping',
                },
              ];
  return (
    <div className='bg-white rounded-lg  lg:px-8 px-4 py-8'>
      <h1 className='text-2xl font-semibold'>Manufacturing Capabilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
      {card.map((card) => (
        <div 
          key={card.id}
          onClick={() => navigate(card.route)}
          className="bg-white border border-gray-300 rounded-lg shadow-sm lg:p-6 p-3 cursor-pointer transition-all "
        >
          <div className="flex flex-col gap-1 items-start text-center">
            <div className="font-light ">
              {card.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{card.title}</h3>
            <span className='text-3xl font-semibold'>{card.TotalNumber}</span>
            <p className="text-gray-600 text-start">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ManufacturerCapabilities


