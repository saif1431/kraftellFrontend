import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

function ManufacturerCard() {
  const navigate = useNavigate(); // Initialize the navigate function

  const cards = [
    {
      id: 1,
      icon: <IoMdArrowRoundForward className="text-2xl" />,
      title: "Matching Projects",
      TotalNumber: "0",
      description: "New matches today",
      route: "", // Added actual route path
    },
    {
      id: 2,
      icon: <IoMdArrowRoundForward className="text-2xl" />,
      title: "Messages",
      TotalNumber: "0",
      description: "Unread Message",
      route: "/ManufacturerMessage",
    },
    {
      id: 3,
      icon: <IoMdArrowRoundForward className="text-2xl" />,
      title: "Prototype Requests",
      TotalNumber: "0",
      description: "Pending requests",
      route: "/PendingPrototypes",
    },
    {
      id: 4,
      icon: <IoMdArrowRoundForward className="text-2xl" />,
      title: "Payments",
      TotalNumber: "$0",
      description: "Available balance",
      route: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => navigate(card.route)} // Now using the navigate function
          className="bg-white rounded-lg shadow-sm p-6 cursor-pointer transition-all hover:shadow-lg hover:transform hover:-translate-y-1"
        >
          <div className="flex flex-col gap-3 items-start text-center">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <div className="font-light">{card.icon}</div>
            </div>
            <span className="text-3xl font-semibold">{card.TotalNumber}</span>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManufacturerCard;
