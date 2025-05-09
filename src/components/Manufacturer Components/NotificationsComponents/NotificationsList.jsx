import React, { useEffect, useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { toast } from "react-toastify";
import BASE_URL from "../../../config"; // Make sure your BASE_URL is correct

const NotificationItem = ({ title, icon, value, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-gray-600">
            {icon}
          </div>
        </div>
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={onToggle}
        />
        <div
          className={`w-11 h-6 rounded-full peer ${
            value ? "bg-black" : "bg-gray-200"
          }`}
        >
          <div
            className={`absolute top-0.5 left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all ${
              value ? "transform translate-x-5" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

const NotificationsList = () => {
  const [settings, setSettings] = useState(null);

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setSettings(data);
    } catch (err) {
      toast.error("Failed to load notification settings");
    }
  };

  const updateSetting = async (key, value) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/notifications`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [key]: value }),
      });

      if (res.ok) {
        const data = await res.json();
        setSettings(data);
        toast.success(`${key} setting updated successfully!`);
      } else {
        toast.error("Failed to update setting. Please try again.");
      }
    } catch (err) {
      toast.error("Failed to update setting. Please try again.");
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const notificationConfig = [
    {
      key: "prototypeFeedback",
      title: "Prototype Feedback",
      icon: <LuMessageCircle size={20} />,
    },
    {
      key: "paymentRequests",
      title: "Payment Requests",
      icon: <MdOutlinePayment size={20} />,
    },
    {
      key: "orderStatusUpdates",
      title: "Order Status Updates",
      icon: <FaTruckMoving size={18} />,
    },
  ];

  if (!settings) return <div className="p-4">Loading...</div>;

  return (
    <div className="mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">
          Notification Settings
        </h2>
      </div>
      <div className="divide-y divide-gray-200">
        {notificationConfig.map((item) => (
          <NotificationItem
            key={item.key}
            title={item.title}
            icon={item.icon}
            value={settings[item.key]}
            onToggle={() => updateSetting(item.key, !settings[item.key])}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsList;
