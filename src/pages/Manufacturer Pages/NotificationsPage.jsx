import React from 'react'
import NotificationsList from '../../components/Manufacturer Components/NotificationsComponents/NotificationsList'
import { IoNotifications } from "react-icons/io5";
import AdminAccessCard from '../../components/Manufacturer Components/NotificationsComponents/AdminAccessCard';
import ActivityLog from '../../components/Manufacturer Components/NotificationsComponents/ActivityLog';

function NotificationsPage() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4 text-xl'>
      <IoNotifications />
      <h1 className='font-semibold'>Notification & Logs</h1>
      </div>
      <div className='flex flex-col md:flex-row  items-start gap-6'>
            <div className='flex-1 w-full space-y-8'>
            <NotificationsList/>    
            <ActivityLog/>
            </div>
            <div>
            <AdminAccessCard/>
            </div>
      </div>

</div>
  )
}

export default NotificationsPage
