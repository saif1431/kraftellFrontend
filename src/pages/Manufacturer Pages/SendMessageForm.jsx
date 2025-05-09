import React, { useState } from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'

function SendMessageForm() {
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
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log({ files, notes });
        };
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className='py-8 px-6'>
      <div className="max-w-2xl mx-auto lg:p-8 p-4 bg-white rounded-lg shadow-md space-y-6
      ">
            <p className='text-primary mb-2' htmlFor="">Recipient</p>
      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-primary px-4 py-2 rounded-lg">
            <img className='w-12' src="/profileImg.svg" alt="" />
        <div className='space-y-3'>
        <h1 className="text-lg">Acme Manufacturing</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

      <div className="mb-6">
          <label htmlFor="notes" className="block text-lg font-semibold mb-2 text-gray-700">
            Message
          </label>
          <textarea
            id="notes"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Add any special instructions..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Attachment</h2>
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
            <p className="mt-2 text-gray-600">Drag and drop your files here</p>
            <p className="text-sm text-gray-500 mt-1">Supported formats: PDF, CAD, Images</p>
          </div>
          <input 
            id="file-input"
            type="file" 
            className="hidden" 
            multiple
            onChange={handleFileInput}
          />

        </div>

       

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          Submit Prototype Request
        </button>
      </form>

      {/* Display uploaded files */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700">Uploaded Files:</h3>
          <ul className="list-disc pl-5 mt-2">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SendMessageForm
