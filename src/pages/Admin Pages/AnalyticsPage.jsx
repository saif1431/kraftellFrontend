import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import MetricCard from '../../components/Admin Components/AnalyticsComponents/MetricCard'
import ConversionFunnel from '../../components/Admin Components/AnalyticsComponents/ConversionFunnel'
import CategoryChart from '../../components/Admin Components/AnalyticsComponents/CategoryChart'
import GeographicMap from '../../components/Admin Components/AnalyticsComponents/GeographicMap'
import SuppliersList from '../../components/Admin Components/AnalyticsComponents/SuppliersList'


function AnalyticsPage() {
  return (
      <div className='lg:px-6 py-12'>
      <div className='flex flex-wrap items-center justify-between '>
      <AdminHeader title="Analytics & Reporting"/>
      <div className='flex items-center gap-6'>
            <p className='text-primary font-semibold'>7D</p>
            <p className='text-[#3977ED] font-semibold'>30D</p>
            <p className='text-primary font-semibold'>90D</p>
            <button className='bg-[#3977ED] w-full text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Export</button>
      </div>
      </div>
      <div>
      <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <MetricCard title="Active Users" value="12,458" change="+12.5% vs last period" isPositive={true} />
        <MetricCard title="Successful Projects" value="3,240" change="+8.3% vs last period" isPositive={true} />
        <MetricCard title="Revenue Earned" value="€2,845,720" change="+15.2% vs last period" isPositive={true} />
        <MetricCard title="Supply-Demand Ratio" value="1:1.4" subtext="Balanced market" hideChange={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <ConversionFunnel />
        <CategoryChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GeographicMap />
        <SuppliersList />
      </div>
    </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
