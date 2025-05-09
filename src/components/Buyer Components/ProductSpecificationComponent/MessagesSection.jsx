
export default function MessagesSection() {
  const messages = [
    {
      id: 1,
      text: "Can we adjust the material thickness?",
      date: "Apr 15, 2025",
    },
    {
      id: 2,
      text: "Updated CAD files received",
      date: "Apr 14, 2025",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="space-y-4 mb-4">
        {messages.map((message) => (
          <div  className="flex gap-3">
<img className="w-12 h-12" src="/profileImg.svg" alt="" />
            <div>
              <p className="text-sm font-medium">{message.text}</p>
              <p className="text-xs text-primary">{message.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <textarea
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
        Send Message
      </button>
    </div>
  )
}
