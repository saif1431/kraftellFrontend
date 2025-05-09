import React, { useState } from 'react';

function MessagesHeader() {
  const [activeTab, setActiveTab] = useState('monitoring');

  // Sample data for each tab
  const flaggedMessages = [
    {
      id: 1,
      username: 'User4891',
      time: '10:15 AM',
      content: 'Contact me outside the platform at...',
    },
    {
      id: 2,
      username: 'User2929',
      time: '09:45 AM',
      content: 'I can offer you better prices if...',
    },
  ];

  const broadcastMessages = [
    {
      id: 1,
      title: 'System Maintenance',
      date: '2025-05-05',
      status: 'Scheduled'
    }
  ];

  const supportTickets = [
    {
      id: 1,
      ticketId: 'TKT-001',
      subject: 'Login issues',
      status: 'Open'
    }
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('monitoring')}
          className={`px-4 py-2 font-medium ${activeTab === 'monitoring' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Message Monitoring
        </button>
        <button 
          onClick={() => setActiveTab('broadcast')}
          className={`px-4 py-2 font-medium ${activeTab === 'broadcast' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
          Broadcast Messages
        </button>
        <button 
          onClick={() => setActiveTab('support')}
          className={`px-4 py-2 font-medium ${activeTab === 'support' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
          Support Tickets
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {activeTab === 'monitoring' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Flagged Messages</h2>
            <div className="space-y-4">
              {flaggedMessages.map((message) => (
                <div key={message.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-semibold">{message.username}</span>
                    <span className="text-md text-primary">{message.time}</span>
                  </div>
                  <p className="text-primary mb-3">{message.content}</p>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-md hover:bg-blue-700">
                      Review
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-primary rounded-md text-md hover:bg-gray-300">
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'broadcast' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Broadcast Messages</h2>
            <div className="space-y-4">
              {broadcastMessages.map((message) => (
                <div key={message.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{message.title}</span>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Status: {message.status}</span>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Support Tickets</h2>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{ticket.ticketId}</span>
                    <span className="text-sm text-gray-500">Status: {ticket.status}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{ticket.subject}</p>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    View Ticket
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagesHeader;


