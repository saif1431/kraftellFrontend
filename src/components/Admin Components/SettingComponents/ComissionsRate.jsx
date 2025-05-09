import React from 'react'

function ComissionsRate({data}) {
  return (
      <div>
      <div className='flex lg:items-center flex-col sm:flex-row justify-between'>
      <h2 className="text-2xl font-semibold mb-4">Commission Rate Settings</h2>
      <button className=" px-4 py-2 bg-[#3977ED] text-white rounded-md hover:bg-blue-500">
        Add New Tier
      </button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-14 py-3 text-left text-sm font-semibold text-primary uppercase">Rate Name</th>
              <th className="px-14 py-3 text-left text-sm font-semibold text-primary uppercase">Commission Percentage</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-primary uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((rate) => (
              <tr key={rate.id}>
                <td className="px-14 py-4 whitespace-nowrap text-sm font-medium text-primary">{rate.tier}</td>
                <td className="px-14 py-4 whitespace-nowrap text-sm font-medium text-primary">{rate.rate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">
                  <button className="text-[#495057] border border-[#CED4DA] rounded-md p-2 mr-3">Edit</button>
                  <button className="text-[#DC3545] border border-[#DC3545] rounded-md p-2 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ComissionsRate
