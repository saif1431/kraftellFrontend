import React from 'react'
import ManufacturerDashboard from './ManufacturerDashboard'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import OrderAddress from '../../components/Manufacturer Components/PlaceOrdersComponent/OrderAddress'
import OrderSummary from '../../components/Manufacturer Components/PlaceOrdersComponent/OrderSummary'

function PlaceOrderPage() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8 space-y-6'>
            <div>
            <h1 className='text-2xl font-semibold'>Place Production Order</h1>
<p className='text-md text-primary'>Project: Summer Collection 2025 - Prototype #PRO-2025-001</p>
            </div>
<div className='bg-white rounded-md p-6 space-y-6'>
<OrderAddress/>
<OrderSummary/>
</div>

      </div>


    </div>
  )
}

export default PlaceOrderPage
