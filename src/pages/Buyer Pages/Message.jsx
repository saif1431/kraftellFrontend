import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import Chat from './Chat'

function Message() {
  return (
    <div>
      <DashBoardNavbar/>
      <Chat/>
      <Footer/>
    </div>
  )
}

export default Message
