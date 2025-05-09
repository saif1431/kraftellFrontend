import React from 'react'


function SuppliersList() {
      const suppliers = [
        {
          id: 1,
          name: "TechPrecision GmbH",
          location: "Stuttgart, Germany",
          revenue: "€1.2M",
          successRate: 98,
        },
        {
          id: 2,
          name: "MetalWorks Pro",
          location: "Lyon, France",
          revenue: "€965K",
          successRate: 96,
        },
        {
          id: 3,
          name: "3D Solutions Ltd",
          location: "Manchester, UK",
          revenue: "€875K",
          successRate: 95,
        },
      ]
    
      return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Top Performing Suppliers</h2>
    
          <div className="space-y-4">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-primary text-xs mr-3">
                  {supplier.name.substring(0, 2)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{supplier.name}</div>
                  <div className="text-xs text-primary">{supplier.location}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm">{supplier.revenue} Revenue</div>
                  <div className="text-xs text-green-500">{supplier.successRate}% Success Rate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    
export default SuppliersList