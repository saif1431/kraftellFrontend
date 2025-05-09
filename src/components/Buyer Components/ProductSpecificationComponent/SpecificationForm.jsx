import { Upload, ImageIcon, FileText } from "lucide-react";
import { useState, useRef } from "react";

export default function SpecificationForm() {
  const [productRender, setProductRender] = useState(null);
  const [cadFiles, setCadFiles] = useState(null);
  const fileInputRenderRef = useRef(null);
  const fileInputCadRef = useRef(null);

  const handleUploadRender = () => {
    fileInputRenderRef.current.click();
  };

  const handleUploadCad = () => {
    fileInputCadRef.current.click();
  };

  const handleFileChangeRender = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductRender(file);
    }
  };

  const handleFileChangeCad = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCadFiles(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-2xl  text-xl font-semibold">Product Specification</h2>
        <span className="text-primary bg-primary rounded-full px-3 py-1 text-sm">
          Submitted
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Product Render Upload */}
        <div className="bg-gray-50 p-6 rounded-md border border-gray-200 flex flex-col items-center justify-center">
          <ImageIcon className="h-10 w-10 text-gray-500 mb-2" />
          <p className="text-sm text-gray-600 mb-2">Product Render</p>
          {productRender && (
            <p className="text-xs text-green-600 font-medium truncate max-w-full">
              {productRender.name}
            </p>
          )}
          <input
            type="file"
            ref={fileInputRenderRef}
            onChange={handleFileChangeRender}
            className="hidden"
            accept="image/*"
          />
        </div>

        {/* CAD Files Upload */}
        <div className="bg-gray-50 p-6 rounded-md border border-gray-200 flex flex-col items-center justify-center">
          <FileText className="h-10 w-10 text-gray-500 mb-2" />
          <p className="text-sm text-gray-600 mb-2">CAD Files</p>
          {cadFiles && (
            <p className="text-xs text-green-600 font-medium truncate max-w-full">
              {cadFiles.name}
            </p>
          )}
          <input
            type="file"
            ref={fileInputCadRef}
            onChange={handleFileChangeCad}
            className="hidden"
            accept=".dwg,.dxf,.stl,.step,.iges"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={handleUploadRender}
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm hover:bg-gray-50 transition-colors"
        >
          <Upload className="h-4 w-4" />
          Upload New
        </button>
        <button
          onClick={handleUploadCad}
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm hover:bg-gray-50 transition-colors"
        >
          <Upload className="h-4 w-4" />
          Upload CAD
        </button>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dimensions
            </label>
            <input
              type="text"
              placeholder="L x W x H"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Material
            </label>
            <input
              type="text"
              placeholder="Primary material"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity Range
            </label>
            <input
              type="text"
              placeholder="Minimum"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="pt-7">
            <input
              type="text"
              placeholder="Maximum"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>
    </div>
  );
}