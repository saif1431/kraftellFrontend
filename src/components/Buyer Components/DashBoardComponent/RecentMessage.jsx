import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config";

function RecentMessage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/messages/recent`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to load messages", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 lg:w-1/2 w-full bg-white rounded-lg">
      <h1 className="text-2xl font-semibold">Recent Messages</h1>

      {loading ? (
        <p className="text-center text-gray-500 py-10">Loading...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          No recent messages found
        </p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="flex-1 border-b border-gray-200 pb-4">
            <div className="mb-4 flex items-center gap-4">
              <img
                src="/profileImg.svg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg text-gray-800 font-medium">
                  {msg.receiver?.brandName || "Unknown Recipient"}
                </h3>
                <p className="text-gray-600 text-md truncate">
                  {msg.text || "Sent a file"}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentMessage;
