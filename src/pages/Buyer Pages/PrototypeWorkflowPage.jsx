import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import ProductDevelopmentWorkflow from '../../components/Buyer Components/PrototypeWorkflowComponent/ProductDevelopmentWorkflow'
import Footer from '../../components/Reuseable Component/Footer'

function PrototypeWorkflowPage() {
  return (
    <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-6'>
            <ProductDevelopmentWorkflow/>
      </div>
      <Footer/>
    </div>
  )
}

export default PrototypeWorkflowPage
