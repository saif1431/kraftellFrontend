import React from 'react'

function TaxonomyEditor({data}) {
  return (
      <div>
      <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
      <div className="space-y-4">
        {data.map((category) => (
          <div key={category.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">{category.category}</h3>
              <div>
                <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
            <div className="pl-4">
              <h4 className="font-medium mb-2">Subcategories:</h4>
              <div className="flex flex-wrap gap-2">
                {category.subcategories.map((subcat, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {subcat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
        Add New Category
      </button>
    </div>
  )
}

export default TaxonomyEditor
