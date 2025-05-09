import React, { useState } from 'react';
import Exports from './Exports';
import APIAccess from './APIAccess';
import WebHooks from './WebHooks';
import { Logs } from 'lucide-react';


function ToolingIntegrationsHeader() {
  const [activeTab, setActiveTab] = useState('exports');

  // Sample data for each tab
  const exportsData = [
    {
      id: 1,
      name: 'User Data Export',
      type: 'CSV',
      date: '2025-12-31',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Transaction History',
      type: 'Excel',
      date: '2024-11-30',
      status: 'Pending'
    }
  ];

  const apiAccessData = [
    {
      id: 1,
      apiKey: 'API-789-XYZ',
      permissions: 'Read-only',
      lastUsed: '2025-05-10',
      status: 'Active'
    },
    {
      id: 2,
      apiKey: 'API-456-ABC',
      permissions: 'Full Access',
      lastUsed: '2025-04-15',
      status: 'Revoked'
    }
  ];

  const webHooksData = [
    {
      id: 1,
      endpoint: 'https://example.com/webhook1',
      events: 'user.created, order.updated',
      status: 'Active',
      lastTriggered: '2025-05-01'
    },
    {
      id: 2,
      endpoint: 'https://example.com/webhook2',
      events: 'payment.processed',
      status: 'Inactive',
      lastTriggered: '2025-03-15'
    }
  ];

  const logsData = [
    {
      id: 1,
      timestamp: '2025-05-10 14:30:22',
      action: 'API Request',
      status: '200 OK',
      user: 'admin@example.com'
    },
    {
      id: 2,
      timestamp: '2025-05-10 14:28:15',
      action: 'Export Initiated',
      status: 'Completed',
      user: 'reports@example.com'
    }
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className='flex  flex-wrap items-center justify-between mb-6'>
        <div className="flex  flex-wrap border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('exports')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'exports' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Exports
          </button>
          <button 
            onClick={() => setActiveTab('apiAccess')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'apiAccess' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            API Access
          </button>
          <button 
            onClick={() => setActiveTab('webHooks')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'webHooks' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Web Hooks
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'logs' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Logs
          </button>
        </div>
        <div>
          <button className='px-4 bg-[#3977ED] py-2 font-medium whitespace-nowrap text-white hover:bg-blue-600 rounded-md'>
            Export to CSV
          </button>
          <button className='px-4 bg-[#3977ED] py-2 ml-2 font-medium whitespace-nowrap text-white hover:bg-blue-600 rounded-md'>
            Export to Excel
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {activeTab === 'exports' && <Exports data={exportsData} />}
        {activeTab === 'apiAccess' && <APIAccess data={apiAccessData} />}
        {activeTab === 'webHooks' && <WebHooks data={webHooksData} />}
        {activeTab === 'logs' && <Logs data={logsData} />}
      </div>
    </div>
  );
}

export default ToolingIntegrationsHeader;