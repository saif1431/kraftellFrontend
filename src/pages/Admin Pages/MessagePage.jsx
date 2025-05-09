import React from 'react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'
import MessagesHeader from '../../components/Admin Components/MessagesComponent/MessagesHeader'

function MessagePage() {
  return (
    <div className='lg:px-6 py-12'>
      <AdminHeader title="Messaging & Communication Oversight"/>
      <div>
            <MessagesHeader/>
      </div>
    </div>
  )
}

export default MessagePage
