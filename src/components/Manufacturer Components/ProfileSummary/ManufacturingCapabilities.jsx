import React from "react";
import { HiMiniCpuChip } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

function ManufacturingCapabilities({ capabilities }) {
  if (
    !capabilities ||
    (!capabilities.productTypes?.length &&
      !capabilities.materials?.length &&
      !capabilities.processes?.length)
  ) {
    return (
      <div className="bg-white rounded-lg lg:px-8 px-4 py-8">
        <h1 className="text-2xl font-semibold">Manufacturing Capabilities</h1>
        <p className="text-gray-500 mt-4">
          No manufacturing capabilities available.
        </p>
      </div>
    );
  }

  const cards = [
    {
      title: "Product Types",
      description: capabilities.productTypes?.join(", "),
      icon: <HiMiniCpuChip />,
    },
    {
      title: "Materials",
      description: capabilities.materials?.join(", "),
      icon: <IoMdSettings />,
    },
    {
      title: "Processes",
      description: capabilities.processes?.join(", "),
      icon: <IoMdSettings />,
    },
  ];

  return (
    <div className="bg-white rounded-lg lg:px-8 px-4 py-8">
      <h1 className="text-2xl font-semibold">Manufacturing Capabilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
        {cards.map((card, index) => (
          <div key={index} className="border rounded-lg shadow-sm lg:p-6 p-3">
            <div className="flex flex-col gap-1">
              <div className="text-2xl text-primary">{card.icon}</div>
              <h3 className="text-xl font-medium">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManufacturingCapabilities;
