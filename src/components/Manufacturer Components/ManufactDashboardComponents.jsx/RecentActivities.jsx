import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { FaCcPaypal } from "react-icons/fa";
import BASE_URL from "../../../config";

function RecentActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch recent activities from the API
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/activities/user-activities`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        toast.error("Error fetching recent activities");
      }
    };

    fetchActivities();
  }, []);

  if (activities.length === 0) {
    return <div>Loading...</div>;
  }

  // Function to get the icon based on activity type
  const getIcon = (type) => {
    switch (type) {
      case "Project completed":
        return <IoIosCheckmarkCircle />;
      case "New message":
        return <BiSolidMessage />;
      case "Payment received":
        return <FaCcPaypal />;
      default:
        return <IoIosCheckmarkCircle />; // Default icon if no match
    }
  };

  // Function to format date to only show the time
  const formatTime = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${period}`;
    return formattedTime;
  };

  // Function to format date to only show the date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(); // This will display as "5/9/2025"
  };

  return (
    <div className="bg-white rounded-lg px-6 py-6">
      <div className="recent-activity">
        <h2 className="text-2xl">Recent Activity</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index} className="border-b pb-2 border-gray-300">
              <div className="flex lg:items-center justify-between sm:flex-row flex-col">
                <div className="mt-6 flex items-center gap-3">
                  {/* Default icon based on activity type */}
                  <div className="text-xl text-zinc-700">
                    {getIcon(activity.type)}
                  </div>
                  <div>
                    <h5 className="text-xl">{activity.type}</h5>
                    <p className="text-primary">{activity.title}</p>
                  </div>
                </div>
                {/* Format and display the date and time */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">
                    {formatDate(activity.date)}
                  </span>
                  <span className="text-primary">
                    {formatTime(activity.date)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentActivities;
