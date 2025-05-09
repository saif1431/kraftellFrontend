import React from "react";
import placeholder from "/portfolio.jpg"; // fallback image
import { FaFilePdf } from "react-icons/fa"; // PDF icon (optional)
import BASE_URL from "../../../config";

function Portfolio({ portfolio }) {
  return (
    <div className="bg-white rounded-lg px-8 py-8">
      <h1 className="text-2xl font-semibold">Portfolio</h1>
      {portfolio?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {portfolio.map((fileUrl, index) => {
            const fullUrl = fileUrl.startsWith("/uploads")
              ? `${BASE_URL}${fileUrl}`
              : fileUrl;

            const isPDF = fullUrl.toLowerCase().endsWith(".pdf");

            return (
              <div
                key={index}
                className="h-[300px] flex flex-col items-center justify-center text-center border rounded-lg p-4"
              >
                {isPDF ? (
                  <embed
                    src={fullUrl}
                    type="application/pdf"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={fullUrl || placeholder}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No portfolio items available.</p>
      )}
    </div>
  );
}

export default Portfolio;
