import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function BuyerRevisionHistory() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Revision #3 ',
      description: 'Requested adjustments to the surface finish and corner radius.',
      date: 'Apr 15, 2025',
    },
    {
      id: 2,
      title: 'Revision #5',
      description: 'Initial prototype submission for review.',
      date: 'Apr 15, 2023',
    },
    {
      id: 3,
      title: 'Initial Submission',
      description: 'Initial prototype submission for review.',
      date: 'Apr 15, 2023',
    }
  ];

  return (
    <div className="flex flex-col gap-2  w-full  rounded-lg">
      <h1 className='text-2xl font-semibold'>Revision History</h1>
      {cards.map((card) => (
    <div className='flex-1 bg-white rounded-lg px-4 py-5 border-gray-200 flex items-center justify-between flex-wrap gap-4'  key={card.id}>
          <div className=""
        >
          <div className="mb-1 flex items-center gap-4">
           <div className='mb-1'>
           <h3 className="text-lg   text-gray-800">{card.title}</h3>
           </div>
          </div>
           <p className="text-gray-600 text-md flex-1">{card.description}</p>
        </div>
        <span className='text-primary'>{card.date}</span>
    </div>
      ))}
    </div>
  );
}

export default BuyerRevisionHistory;




