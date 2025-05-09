import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import {  FaMessage } from "react-icons/fa6";
import { FaCcApplePay } from "react-icons/fa";


function DashboardCards() {
  const navigate = useNavigate();

  // Card data array
  const cards = [
    {
      id: 1,
      icon: <IoSearch className="text-2xl" />,
      title: 'Search Manufacturers',
      description: 'Find the perfect manufacturing Partner',
      route: '/searchManufacturers'
    },
    {
      id: 2,
      icon: <PiCodesandboxLogoFill className="text-2xl" />,
      title: 'My Prototypes',
      description: 'Track your prototype requests',
      route: '/BuyerPrototypes'
    },
    {
      id: 3,
      icon: <FaMessage className="text-2xl" />,
      title: 'Messages',
      description: 'TView your conversations',
      route: '/Message'
    },
    {
      id: 4,
      icon: <FaCcApplePay className="text-2xl " />,
      title: 'Payments',
      description: 'Manage your transactions',
      route: '/ReleasePayment'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-12">
      {cards.map((card) => (
        <div 
          key={card.id}
          onClick={() => navigate(card.route)}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg hover:transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-start text-center">
            <div className="mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;