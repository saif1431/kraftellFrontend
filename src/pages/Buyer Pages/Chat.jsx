import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";
import BASE_URL from "../../config";

export default function Chat() {
  const [contacts, setContacts] = useState([]);
  const [activeContact, setActiveContact] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const token = localStorage.getItem("token");

  // Load all manufacturers and set the first as active
  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/auth/manufacturers`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const filtered = Array.isArray(res.data)
          ? res.data.filter((user) => user.role === "manufacture")
          : [];

        setContacts(filtered);
        if (filtered.length > 0) {
          setActiveContact(filtered[0]);
        }
      } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
      }
    };

    fetchManufacturers();
  }, []);

  // Fetch messages when active contact changes
  useEffect(() => {
    const fetchConversation = async () => {
      if (!activeContact) return;

      try {
        const res = await axios.get(
          `${BASE_URL}/api/messages/conversation/${activeContact._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessageList(res.data);
      } catch (error) {
        console.error("Failed to fetch conversation:", error);
      }
    };

    fetchConversation();
  }, [activeContact]);

  // Handle message send
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !activeContact) return;

    const newMessage = {
      text: inputMessage,
      sender: { _id: "user" }, // Temporary until API returns real sender
      createdAt: new Date(),
    };

    setMessageList((prev) => [...prev, newMessage]);
    setInputMessage("");

    try {
      await axios.post(
        `${BASE_URL}/api/messages/send`,
        {
          receiverId: activeContact._id,
          text: inputMessage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const res = await axios.get(
        `${BASE_URL}/api/messages/conversation/${activeContact._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessageList(res.data);
    } catch (err) {
      console.error("Message send failed:", err);
    }
  };

  return (
    <div className="flex w-full h-[70vh] flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Contacts */}
        <div className="w-80 border-r border-gray-200 overflow-y-auto">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div
                key={contact._id}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b ${
                  activeContact?._id === contact._id ? "bg-gray-100" : ""
                }`}
                onClick={() => setActiveContact(contact)}
              >
                <img
                  src={`${BASE_URL}${contact.profilePicture?.[0]}`}
                  alt={contact.brandName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{contact.brandName}</div>
                  <div className="text-sm text-gray-500">{contact.email}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-sm text-gray-500">
              No contacts available
            </div>
          )}
        </div>

        {/* Chat Window */}
        <div className="flex flex-1 flex-col">
          <div className="border-b border-gray-200 p-4 font-medium">
            {activeContact?.brandName || "Select a manufacturer"}
          </div>

          {/* Messages */}
          <div className="messages-container flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messageList.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender._id === activeContact._id
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    msg.sender._id === activeContact._id
                      ? "bg-gray-200 text-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex items-center rounded-lg bg-white p-2 shadow-sm">
              <input
                type="text"
                placeholder="Write message..."
                className="flex-1 border-none bg-transparent outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="text-gray-500 hover:text-gray-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
