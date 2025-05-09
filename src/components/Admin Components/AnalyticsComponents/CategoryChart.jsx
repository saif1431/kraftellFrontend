 function CategoryChart() {
      const categories = [
        { name: "CNC Machining", percentage: 85 },
        { name: "3D Printing", percentage: 72 },
        { name: "Injection Molding", percentage: 68 },
        { name: "Sheet Metal", percentage: 54 },
        { name: "Die Casting", percentage: 47 },
      ]
    
      return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Top Manufacturing Categories</h2>
    
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 min-w-[8rem] text-primary text-sm">{category.name}</div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                  </div>
                </div>
                <div className="text-sm text-primary  w-10 text-right">{category.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    
    export default CategoryChart