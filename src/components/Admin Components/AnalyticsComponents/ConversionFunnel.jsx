 function ConversionFunnel() {
      const funnelSteps = [
        { name: "Project Views", count: 124582, width: "100%" },
        { name: "RFQ Submissions", count: 61978, width: "50%" },
        { name: "Manufacturer Matches", count: 14523, width: "25%" },
        { name: "Successful Projects", count: 3240, width: "15%" },
      ]
    
      const regions = ["Global", "Europe", "Asia"]
    
      return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Project Conversion Funnel</h2>
            <div className="flex space-x-2">
              {regions.map((region, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-sm rounded-md ${
                    region === "Global" ? "text-blue-500" : "text-primary hover:bg-gray-100"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
    
          <div className="space-y-3">
            {funnelSteps.map((step, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{step.name}</span>
                  <span className="text-primary">({step.count.toLocaleString()})</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-8">
                  <div className="bg-blue-500 h-8 " style={{ width: step.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    

    export default ConversionFunnel