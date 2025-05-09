// AdminNavbar.jsx
import React from 'react';
import logo from '/logo.png';
import { LuMessageCircle } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";

function AdminNavbar({ onMenuClick }) {
  return (
    <div className='flex justify-between items-center bg-white shadow-md lg:px-10 px-6 py-4 sticky top-0 z-50 border-b border-gray-300'>
      <div className='lg:w-42 w-32'>
        <img src={logo} alt="Company Logo" />
      </div>
      
      <div className='flex items-center gap-4'>
        <LuMessageCircle className='text-3xl cursor-pointer hover:text-gray-600' />
        <TfiMenuAlt 
          className='text-3xl cursor-pointer hover:text-gray-600 lg:hidden' 
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
}

export default AdminNavbar;