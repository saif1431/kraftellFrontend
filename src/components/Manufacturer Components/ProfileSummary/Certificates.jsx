import React from "react";
import { TbRosetteFilled } from "react-icons/tb";

function Certificates({ certifications }) {
  return (
    <div className="bg-white rounded-lg px-8 py-8">
      <h1 className="text-2xl font-semibold">Certificates</h1>
      <div className="flex items-center gap-4 mt-3 flex-wrap">
        {certifications?.length > 0 ? (
          certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-primary w-fit px-4 py-2 rounded-full text-white"
            >
              <TbRosetteFilled className="text-2xl" />
              <p className="text-lg">{cert}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No certifications available.</p>
        )}
      </div>
    </div>
  );
}

export default Certificates;
