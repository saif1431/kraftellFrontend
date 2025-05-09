import React, { useEffect, useState } from "react";
import axios from "axios";

function RecentPrototype() {
  const [recentPrototypes, setRecentPrototypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrototypes = async () => {
      try {
        const res = await axios.get("/api/prototypes/my-requests", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const sorted = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
          .slice(0, 3); // limit to recent 3

        setRecentPrototypes(sorted);
      } catch (error) {
        console.error("Failed to fetch recent prototypes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrototypes();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 lg:w-1/2 w-full bg-white rounded-lg">
      <h1 className="text-2xl font-semibold">Recent Prototypes</h1>

      {loading ? (
        <p className="text-center text-gray-500 py-10">Loading...</p>
      ) : recentPrototypes.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          No recent prototypes found
        </p>
      ) : (
        recentPrototypes.map((prototype) => (
          <div
            key={prototype._id}
            className="flex-1 border-b border-gray-200 pb-4"
          >
            <div className="mb-2">
              <h3 className="text-lg text-gray-800 font-medium">
                {prototype.title || "Untitled Prototype"}
              </h3>
              <div className="flex justify-between items-end">
                <p className="text-gray-600 text-sm">
                  Submitted:{" "}
                  {new Date(prototype.createdAt).toLocaleDateString()}
                </p>
                <button className="ml-4 px-3 py-2 bg-[#E5E7EB] text-sm text-[#525252] rounded-full font-medium capitalize">
                  {prototype.status}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentPrototype;
