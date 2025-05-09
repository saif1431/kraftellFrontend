import React, { useState } from "react"
import { Upload, X } from "lucide-react"

 function UploadPreviewForm() {
  const [files, setFiles] = useState([])
  const [comment, setComment] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle submission logic here
    console.log("Files:", files)
    console.log("Comment:", comment)
  }

  return (
      <div className="max-w-2xl mx-auto">
                  <h1 className="text-xl font-medium mb-4">Upload Preview</h1>
                  <div className=" p-6 bg-white rounded-lg shadow">

<div className="mb-6">
  <label className="block text-sm font-medium mb-2">Upload Render/Preview File</label>
  <div
    className={`border border-dashed rounded-lg p-8 text-center ${
      isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
    }`}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <div className="flex flex-col items-center justify-center">
      <Upload className="h-10 w-10 text-gray-400 mb-2" />
      <p className="text-sm text-gray-600 mb-1">Drag and drop your files here</p>
      <p className="text-sm text-gray-500 mb-3">or</p>
      <label className="cursor-pointer">
        <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm">Browse Files</span>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
          accept="image/*" 
          multiple
        />
      </label>
    </div>
  </div>
</div>

<div className="mb-6">
  <label className="block text-sm font-medium mb-2">Add Comment</label>
  <textarea
    className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    placeholder="Add your comments here..."
  />
</div>

{files.length > 0 && (
  <div className="mb-6">
    <label className="block text-sm font-medium mb-2">Uploaded Files</label>
    <div className="space-y-2">
      {files.map((file, index) => (
        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-sm text-gray-700">{file.name}</span>
          </div>
          <button 
            type="button"
            onClick={() => removeFile(index)} 
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  </div>
)}

<div className="flex justify-end">
  <button 
    type="submit"
    onClick={handleSubmit} 
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
  >
    Submit Preview
  </button>
</div>
</div>
      </div>

  )
}

export default UploadPreviewForm