import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ManufacturerSearchResults = ({ manufacturers }) => {
  return (
    <div className="lg:px-6">
      <h1 className="lg:text-2xl text-md font-medium mb-6">Search Results</h1>
      <div className="space-y-4">
        {manufacturers.length > 0 ? (
          manufacturers.map((manufacturer) => (
            <div
              key={manufacturer.id}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    {manufacturer.companyName}
                  </h2>
                  <div className="flex items-center gap-2">
                    <FaLocationDot />
                    <p className="text-gray-600 mb-2">
                      {manufacturer.location}
                    </p>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {manufacturer.capabilities?.join(", ") || "N/A"}
                  </p>
                </div>
                <NavLink
                  to={`/ManufacturerProfile/${manufacturer.id}`}
                  className="mt-2 bg-blue-600 hover:bg-blue-800 font-semibold text-white py-2 px-4 rounded"
                >
                  View Profile
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p>No manufacturers match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ManufacturerSearchResults;
