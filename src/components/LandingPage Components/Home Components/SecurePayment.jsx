import React from 'react';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuMessageSquare, LuMessageSquareCode } from "react-icons/lu";

import { IoIosTime } from "react-icons/io";
import { GoShieldCheck } from 'react-icons/go';
import { FaCreditCard } from 'react-icons/fa';



function SecurePayment() {
  const serviceBoxes = [
    {
      icon: <AiOutlineDollarCircle className="text-4xl text-blue-600" />,
      text: "Milestone-based payments"
    },
    {
      icon: <GoShieldCheck  className="text-4xl text-blue-600" />,
      text: "Secure escrow system"
    },
    {
      icon: <FaCreditCard  className="text-4xl text-blue-600" />,
      text: "Integrated payments"
    },
    {
      icon: <LuMessageSquareCode className="text-4xl text-blue-600" />,
      text: "Built-in messaging"
    }
  ];

  return (
    <div className="bg-gray-50 py-14 space-y-10">
     

      {/* Existing Heading/Paragraph */}
      <div className='text-center leading-tight lg:px-14 px-6 '>
        <h1 className='lg:text-2xl text-2xl font-bold text-[#525252]'>
        Collaborate & Pay with Confidence
        </h1>

      </div>

 {/* Service Boxes Grid */}

      <div className="grid grid-cols-1 items- md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-14 px-6 ">
        {serviceBoxes.map((box, index) => (
          <div 
            key={index} 
            className=" p-5 transition-shadow justify-center items-center flex flex-col"
          >
            <div className="flex  mb-2">
              {box.icon}
            </div>
            <p className="text-black text-md text-center">{box.text}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default SecurePayment;

