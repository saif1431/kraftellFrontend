import React from 'react';

const OurServices = () => {
  // Sample data for the cards
  const cardsData = [
    {
      title: 'Receive Qualified, Design Ready Orders',
      description: 'Get detailed technical specifications and CAD files from pre-vetted clients.',
    },
    {
      title: 'Direct Access to European Clients',
      description: 'Connect with businesses across Europe looking for quality manufacturing partners.',
    },
    {
      title: 'Secure Payments via Escrow',
      description: 'Guaranteed payments through trusted payment providers like PayPal and Stripe.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full ">
      {cardsData.map((card, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="px-14 py-6">
            <div className="flex flex-col text-center">
              <h1 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h1>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;