import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import BASE_URL from "../../config";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Reuseable Component/Footer";

const PendingPrototype = () => {
  const [prototypes, setPrototypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrototypes = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/prototypes/my-requests`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // Filter only pending prototypes
        const pending =
          res.data?.filter((item) => item.status === "pending") || [];
        setPrototypes(pending);
      } catch (err) {
        console.error("Error fetching pending prototypes:", err);
      }
    };

    fetchPrototypes();
  }, []);

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-grow py-10 px-4 lg:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto min-h-[60vh]">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Pending Prototype Requests
          </h1>

          {prototypes.length === 0 ? (
            <p className="text-gray-600 text-center">
              No pending prototype requests found.
            </p>
          ) : (
            <div className="space-y-6">
              {prototypes.map((proto) => (
                <div
                  key={proto._id}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {proto.buyer.companyName}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaLocationDot className="text-gray-400" />
                        <span>{proto.buyer.email}</span>
                      </div>
                      <p className="text-gray-700 mt-2">{proto.description}</p>
                    </div>

                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition"
                      onClick={() =>
                        navigate(`/MyPrototypes?selected=${proto._id}`)
                      }
                    >
                      View Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingPrototype;
