import React from 'react'
import Footer from '../../components/Reuseable Component/Footer'
import ProductRequestForm from '../../components/Buyer Components/ProductRequestForm'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'

function ProductRequestPage() {
  return (
      <div className=''>
      <ManufacturerNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-6'>
            <ProductRequestForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductRequestPage
