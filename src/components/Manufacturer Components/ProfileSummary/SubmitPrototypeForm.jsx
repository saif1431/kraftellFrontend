import { useState } from 'react';

const SubmitPrototypeForm = () => {
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
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 bg-primary px-4 py-4 rounded-lg">
            <img className='w-16' src="/profileImg.svg" alt="" />
        <div className='space-y-3'>
        <h1 className="lg:text-3xl  text-2xl font-semibold">Acme Manufacturing</h1>
        <p className="text-primary text-lg">Premium Prototyping Services</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Design Files</h2>
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
            className="mt-3  py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors"
            onClick={() => document.getElementById('file-input').click()}
          >
            Browse Files
          </button>
          </div>
          <input 
            id="file-input"
            type="file" 
            className="hidden" 
            multiple
            onChange={handleFileInput}
          />
          <button 
            type="button"
            className="mt-3 w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            onClick={() => document.getElementById('file-input').click()}
          >
            Browse Files
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="notes" className="block text-lg font-semibold mb-2 text-gray-700">
            Notes for Manufacturer
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
  );
};

export default SubmitPrototypeForm;



