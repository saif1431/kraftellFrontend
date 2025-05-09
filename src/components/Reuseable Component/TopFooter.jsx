import React from 'react'

function TopFooter() {
  return (

      <div className='bg-[#05132A] text-white py-12 lg:px-12 px-4 flex items-center flex-col lg:flex-row gap-4'>
      <div className='w-70 flex items-center justify-center'>
            <img className='w-32' src="/logo.png" alt="" />
      </div>
  <div className="flex flex-col md:flex-col gap-4 justify-center items-center  ">
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Try Kraftell Today</h2>
      <div className="flex space-x-4 mt-4">
        <button className="bg-white hover:bg-slate-300 text-black lg:px-6 px-4 py-2 rounded-md font-medium">
          Get Started Free
        </button>
        <button className="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-md hover:text-black font-medium">
          See How It Works
        </button>
      </div>
    </div>
    <div className=" p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-2 text-center">100% Refund Guarantee</h3>
      <p className="text-white text-sm">
        Cancel your annual subscription anytime and get a full refund for the unused period—no questions asked
      </p>
    </div>
  </div>
  </div>
  )
}

export default TopFooter
