import React from 'react';
import { MdDesignServices } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";


const PlatFormActors = () => {
  const actors = [
    {
      title: "Product Designer",
      icon: <MdDesignServices />,
      description: "A creator looking to have a product manufactured",
      features: [
        "Create product specifications",
        "Connect with manufacturers",
        "Review proposals"
      ]
    },
    {
      title: "Manufacturer",
      icon: <SlQuestion />,
      description: "A vetted producer of custom goods",
      features: [
        "Review project requests",
        "Submit proposals",
        "Manage production"
      ]
    },
    {
      title: "Platform Admin",
      icon: <RiAdminFill />,
      description: "Oversees platform activity and resolves disputes",
      features: [
        "Verify manufacturers",
        "Monitor transactions",
        "Resolve disputes"
      ]
    }
  ];

  return (
    <div className=" mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Platform Actors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {actors.map((actor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
           <div className='flex items-center gap-2'>
            <div className='text-2xl'>{actor.icon}</div>
           <h2 className="text-xl font-semibold text-gray-800 mb-2">{actor.title}</h2>
           </div>
              <p className="text-gray-600 mb-4">{actor.description}</p>
              
              <ul className="space-y-2">
                {actor.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-gray-900 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatFormActors;