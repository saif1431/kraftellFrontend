import React from 'react'
import Navbar from './components/Reuseable Component/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LandingPageRoutes from './Routes/LandingPageRoutes'
import BuyerPageRoutes from './Routes/BuyerPageRoutes'
import ManufacturerPageRoutes from './Routes/ManufacturerPageRoutes'
import AdminPageRoute from './Routes/AdminPageRoute'


function App() {
  return (
   <BrowserRouter>

    <LandingPageRoutes/>
    <BuyerPageRoutes/>
    <ManufacturerPageRoutes/>
    <AdminPageRoute/>
<Routes>
<Route path="/admin/*" element={<AdminPageRoute />} />
</Routes>

   </BrowserRouter>
  )
}

export default App
