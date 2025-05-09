import { Check } from 'lucide-react'
import React from 'react'

function QualificationCriteria({data}) {
  return (
      <div className='space-y-4'>
      <h2 className="text-2xl font-semibold mb-4">Qualification Criteria</h2>
      <p className='mb-4 text-lg text-primary'>Define the requirements for manufacturers to join the platform.</p>
      <div className="space-y-4 mt-4">
        {data.map((criteria) => (
          <div key={criteria.id} className="mt-4">
            <div className="flex items-center gap-2  mt-4">
            <Check />
              <span className=" text-lg">{criteria.title}</span>
            
            </div>
          </div>
        ))}
      </div>
    <div className='w-full flex items-center justify-center'>
    <button className="mt-4 w-[30%] mx-auto px-4 py-3 bg-[#3977ED] text-white rounded-md hover:bg-blue-500">
        Save
      </button>
    </div>
    </div>
  )
}

export default QualificationCriteria
