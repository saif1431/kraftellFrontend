import React from 'react'

function GeographicMap() {
      return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Geographic Distribution</h2>
    
          <div className="relative">
            <div className="bg-gray-200 w-full h-[300px] flex items-center justify-center text-gray-400">
              Map Placeholder (600 × 300)
            </div>
    
            <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-sm">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs">High Activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-xs">Low Activity</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
export default  GeographicMap