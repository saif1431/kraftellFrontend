import React from 'react';

const EscrowPayouts = ({ data }) => {
  return (
    <div className='lg:px-6 py-4'>
      <h2 className="text-xl font-semibold mb-4">Escrow Rules & Payout Policies</h2>
      <div className="space-y-4">
      <div className='space-y-3'>
            <p>Default Hold Period (days)</p>
           <div className='flex flex-col'>
           <input type="text" className='w-fit py-3 px-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' />
           <span>Enable automatic fund release after hold period</span>
           </div>
      </div>
      <div className='space-y-3'>
            <p>Dispute Window (days)</p>
           <div className='flex flex-col'>
           <input type="text" className='w-fit py-3 px-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' />
           
           </div>
      </div>
      </div>
    </div>
  );
};

export default EscrowPayouts;