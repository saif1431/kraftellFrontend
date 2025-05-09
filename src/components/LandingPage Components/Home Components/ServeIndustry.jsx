import React from 'react';

function ServeIndustry() {
  // Industries data at the top
  const industries = [
    "Machinery Manufacturing",
    "Automotive",
    "Aerospace",
    "Medical Technology",
    "Electronics",
    "Construction Equipment",
    "Renewable Energy",
    "Consumer Products"
  ];

  return (
    <div className='max-w-6xl mx-auto w-full space-y-8 '>
      <div className=''>
        <h1 className='text-2xl font-semibold text-gray-800'>Industries We Serve</h1>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {industries.map((industry, index) => (
          <div 
            key={index}
            className='flex items-center justify-center rounded-lg bg-white h-32 shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 border border-gray-100'
          >
            <h2 className='text-lg font-semibold text-center text-gray-800'>{industry}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServeIndustry;