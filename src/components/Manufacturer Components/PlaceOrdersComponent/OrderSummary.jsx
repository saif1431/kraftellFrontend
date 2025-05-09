import React from 'react'

function OrderSummary() {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
<div className='w-full lg:w-1/2 space-y-4'>
    <div className='flex flex-col gap-2'>
      <label htmlFor="">Batch Size</label>
      <input className='border border-gray-300 py-3 px-3 rounded-lg outline-none' type="number" placeholder='Enter Quantity (1000-5000)' />
    </div>
    <div className='flex flex-col gap-2'>
      <label htmlFor="">Preferred Delivery Window</label>
      <div className='w-full space-x-4 flex'>
        <input className='border w-full  border-gray-300 py-3 px-3 rounded-lg outline-none' type="date" />
        <input className='border w-full border-gray-300 py-3 px-3 rounded-lg outline-none' type="date" />
      </div>

    </div>
    <div className='flex flex-col gap-2'>
      <label htmlFor="">Shipping Address</label>
      <textarea className='border border-gray-300 py-3 px-3 rounded-lg outline-none' type="text" placeholder='Address' />
    </div>
      </div>    


<div className='w-full lg:w-1/2 space-y-4'>
<div className='space-y-3'>
      <h6>Order Summary</h6>
      <div className='flex items-center justify-between text-primary'>
<p>Unit Price </p>
<span>$100</span>
      </div>
      <div className='flex items-center justify-between text-primary'>
<p>Quantity </p>
<span>1000</span>
      </div>
      <div className='flex items-center justify-between text-primary'>
<p>Sub Total </p>
<span>$45,900</span>
      </div>
      <div className='flex items-center justify-between text-primary'>
<p>Tax (20%) </p>
<span>$435,545</span>
      </div>
      <hr className='my-4 border-gray-300' />
      <div className='flex items-center justify-between text-primary'>
<p>Total </p>
<span>$4545,5100</span>
      </div>
</div>
<div className='space-y-3 bg-primary p-2 rounded-lg'>
      <h6>Payment Schedule</h6>
      <div className='flex items-center justify-between text-primary'>
<p>Initial Payment (50%) </p>
<span>$14,994.00</span>
      </div>
      <div className='flex items-center justify-between text-primary'>
<p>Final Payment (50%) </p>
<span>$14,994.00</span>
      </div>
</div>
<button className='bg-[#3977ED] text-white w-full px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-lg flex items-center gap-2 justify-center'>Place Order</button>
<button className='bg-white border border-gray-300 text-black w-full px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-semibold text-lg flex items-center gap-2 justify-center'>Download CV </button>
</div>    
</div>
  )
}

export default OrderSummary
