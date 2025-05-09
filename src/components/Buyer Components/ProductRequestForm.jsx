import React, { useState } from 'react'
import DashBoardNavbar from '../Reuseable Component/DashBoardNavbar'
import { IoIosSend } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function ProductRequestForm() {
  const [files, setFiles] = useState([]);
  const [notes, setNotes] = useState('');

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div>
     <div className='space-y-3'>
     <h1 className='text-3xl font-semibold'>Product Request Form</h1>
<p className='text-lg text-primary'>Submit your product manufacturing request</p>
<form className='mt-8 space-y-6'>
      <div className='flex flex-col gap-2'>
            <label className='text-md text-primary' htmlFor="">Product Title<sup>*</sup></label>
            <input className='border border-gray-300 py-3 px-3 rounded-lg outline-none' type="text" placeholder='e.g, Eco-Friendly Chair' />
      </div>
      <div className='flex flex-col gap-2'>
            <label className='text-md text-primary' htmlFor="">Product Description<sup>*</sup></label>
            <textarea rows={3} className='border  border-gray-300 py-3 px-3 rounded-lg outline-none' type="text" placeholder='e.g, Eco-Friendly Chair' />
      </div>
      <div className='flex flex-col gap-2'>
            <label className='text-md text-primary' htmlFor="">Category<sup>*</sup></label>
      <select className='border  border-gray-300 py-3 px-3 rounded-lg outline-none' name="" id="">
            <option value="">Select Category</option>
            <option value="">Fashion</option>
            <option value="">Accessories</option>
            <option value="">Crafts</option>
            <option value="">Others</option>
      </select>
      </div>
      <div className="flex flex-col gap-2">
          <label className="text-md   text-gray-700">Design Files</label>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('file-input').click()}
          >
            <svg 
              className="w-12 h-12 mx-auto text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <button 
            type="button"
            className="mt-3  py-3 px-6 
            text-primary rounded-md transition-colors"
            onClick={() => document.getElementById('file-input').click()}
          >
           Drop your files here or click to upload <br />
           <span className='text-xs text-gray-500'>Supported formats: CAD, Images, ZIP (Max 50MB)</span>
          </button>
          </div>
          <input 
            id="file-input"
            type="file" 
            className="hidden" 
            multiple
            onChange={handleFileInput}
          />
        </div>

        <div className='flex flex-col gap-2'>
            <p className='text-lg text-[#404040]'>Desired Manufacturing Process</p>
           <div className='space-y-2'>
           <div className='flex items-center gap-2'>
                  <input className='w-4 h-4' type="checkbox" name="" id="" />
                  <span>3D painting</span>
            </div>
           <div className='flex items-center gap-2'>
                  <input className='w-4 h-4' type="checkbox" name="" id="" />
                  <span>Injection Molding</span>
            </div>
           <div className='flex items-center gap-2'>
                  <input className='w-4 h-4' type="checkbox" name="" id="" />
                  <span>Other</span>
            </div>
           </div>
        </div>
<div className='flex flex-col gap-2'>
<label htmlFor="">Quantity Estimate</label>
<div className='flex items-center gap-6 flex-col md:flex-row'>
      <input className='w-full border  border-gray-300 py-3 px-3 rounded-lg outline-none' type="text"  placeholder='Min'/>
      <input className='w-full border  border-gray-300 py-3 px-3 rounded-lg outline-none' type="text"  placeholder='Max'/>
</div>
</div>
<div className='flex flex-col gap-2'>
<label htmlFor="">Preferred Delivery Date</label>
 <input className='w-full border  border-gray-300 py-3 px-3 rounded-lg outline-none' type="date"  placeholder='Min'/>
 
</div>
<div className='flex flex-col gap-2'>
            <label className='text-md text-primary' htmlFor="">Notes to Manufacturer<sup>*</sup></label>
            <textarea rows={3} className='border  border-gray-300 py-3 px-3 rounded-lg outline-none' type="text" placeholder='e.g, Eco-Friendly Chair' />
      </div>
      <NavLink to='/UploadPreview' className='bg-[#3977ED] text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full flex items-center justify-center gap-2'>
      <IoIosSend />
Send Prototype Request
      </NavLink>
</form>
     </div>
    </div>
  )
}

export default ProductRequestForm
