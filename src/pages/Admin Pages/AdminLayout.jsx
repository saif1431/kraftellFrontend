import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/Reuseable Component/AdminSidebar';
import AdminNavbar from '../../components/Reuseable Component/AdminNavbar';
import { useState } from 'react';


function AdminLayout() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
<div className='bg-primary'>
      <AdminNavbar
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />

<div className='flex h-screen'>
<div className='lg:w-80 w-0'>
<AdminSidebar
 isOpen={sidebarOpen} 
 onClose={() => setSidebarOpen(false)} 
/>
</div>
<main className="flex-1 overflow-auto lg:p-6 p-3">
{/* <h1>DEBUG: Layout is rendering</h1> */}
<Outlet />
</main>
</div>
</div>
  );
}

export default AdminLayout;