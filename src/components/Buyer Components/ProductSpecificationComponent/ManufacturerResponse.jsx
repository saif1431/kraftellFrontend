export default function ManufacturerResponse() {
      return (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Manufacturer Response</h2>
          <div className="border-l-4 border-gray-300 p-4 mb-4">
            <p className="text-md text-primary mb-2">Prototype Quote: $2,500</p>
            <p className="text-md text-primary">Estimated Timeline: 2 weeks</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm transition-colors">
              Accept Quote
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md text-sm transition-colors">
              Request Changes
            </button>
          </div>
        </div>
      )
    }
    