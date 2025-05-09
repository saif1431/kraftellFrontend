import React from 'react'

function EmailTemplates({data}) {
  return (
      <div className='lg:p-3'>
     <div>
     <h2 className="text-2xl font-semibold mb-4">Email Templates</h2>
     <p className='mb-6 text-primary'>Manage the email notifications sent to users.</p>
     </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y border border-gray-300  rounded-lg divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((template) => (
              <tr key={template.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{template.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{template.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-[#171717] font-medium hover:text-blue-900 mr-3">Edit</button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmailTemplates
