import React from 'react'

function AdminAccessCard() {
  return (
    <div className='w-full bg-white rounded-lg p-4 shadow-sm space-y-4'>
      <h1 className='text-lg font-semibold'>Admin Access</h1>
      <div className='space-y-2 bg-primary p-2 rounded-md '>
            <h6 className='font-semibold'>Access Level</h6>
            <p className='text-primary'>Full Administrative Access</p>
      </div>
      <button className='bg-[#3977ED] w-full text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Export Logs</button>
      <button className='border w-full border-gray-300 text-black  px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300'>View Dispute History</button>
    </div>
  )
}

export default AdminAccessCard
