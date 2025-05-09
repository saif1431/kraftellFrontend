import React from 'react'

import StatusCards from '../../components/Buyer Components/OrderManagementComponents/StatusCards'
import OrderManagement from '../../components/Buyer Components/OrderManagementComponents/OrderManagement'
import OrderDetails from '../../components/Buyer Components/OrderManagementComponents/OrderDetails'
import OrderTimeline from '../../components/Buyer Components/OrderManagementComponents/OrderTimeline'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'


function OrderManagementPage() {
  return (
    <div className='bg-primary'>
<DashBoardNavbar/>
<div className='lg:px-18 px-4 lg:py-14 py-6'>
<div className=" min-h-screen">
      {/* Status Cards */}
      <StatusCards />

      {/* Order Management */}
      <div className="mt-6">
        <OrderManagement />
      </div>

      {/* Order Details and Timeline */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <OrderDetails />
        </div>
        <div>
          <OrderTimeline />
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default OrderManagementPage
