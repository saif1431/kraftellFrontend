import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTruck, FaDollarSign } from "react-icons/fa";
import BASE_URL from "../../../config";

const iconMap = {
  check: <FaCheckCircle className="text-gray-500" />,
  dollar: <FaDollarSign className="text-gray-500" />,
  truck: <FaTruck className="text-gray-500" />,
};

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/activities/user-activities`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Activity Log</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {activities.map((activity, index) => {
          const date = new Date(activity.date);
          const icon = iconMap[activity.icon] || (
            <FaCheckCircle className="text-gray-400" />
          );

          return (
            <div
              key={index}
              className="px-6 py-3 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center">
                  {icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {date.toLocaleDateString()} •{" "}
                    {date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityLog;
