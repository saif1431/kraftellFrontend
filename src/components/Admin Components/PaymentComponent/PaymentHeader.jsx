import React, { useState } from 'react';

function PaymentHeader() {
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
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('monitoring')}
          className={`px-4 py-2 font-medium ${activeTab === 'monitoring' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Escrow Wallet
        </button>
        <button 
          onClick={() => setActiveTab('broadcast')}
          className={`px-4 py-2 font-medium ${activeTab === 'broadcast' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
          Transactions
        </button>
        <button 
          onClick={() => setActiveTab('Payouts')}
          className={`px-4 py-2 font-medium ${activeTab === 'support' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
       Payouts
        </button>
        <button 
          onClick={() => setActiveTab('Commissions')}
          className={`px-4 py-2 font-medium ${activeTab === 'support' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
       Commissions
        </button>
        <button 
          onClick={() => setActiveTab('Invoices')}
          className={`px-4 py-2 font-medium ${activeTab === 'support' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-primary hover:text-gray-700'}`}
        >
       Invoices
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {activeTab === 'monitoring' && (
          <div className='flex items-center md:flex-row flex-col gap-6 justify-between px-6 py-4'>
            <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                  <p className='text-xl'>Available Balance</p>
                  <h1 className='text-3xl text-[#3977ED] font-semibold'>€24,500.00</h1>
            </div>
            <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                  <p className='text-xl'>Pending Balance</p>
                  <h1 className='text-3xl text-[#FFA500] font-semibold'>€12,750.00</h1>
            </div>
            <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                  <p className='text-xl'>Total Balance</p>
                  <h1 className='text-3xl text-black font-semibold'>€37,250.00</h1>
            </div>
          </div>
        )}

        {activeTab === 'broadcast' && (
          <div className='flex items-center md:flex-row flex-col gap-6 justify-between px-6 py-4'>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Available Balance</p>
                <h1 className='text-3xl text-[#3977ED] font-semibold'>€24,500.00</h1>
          </div>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Pending Balance</p>
                <h1 className='text-3xl text-[#FFA500] font-semibold'>€12,750.00</h1>
          </div>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Total Balance</p>
                <h1 className='text-3xl text-black font-semibold'>€37,250.00</h1>
          </div>
        </div>
        )}

        {activeTab === 'support' && (
          <div className='flex items-center md:flex-row flex-col gap-6 justify-between px-6 py-4'>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Available Balance</p>
                <h1 className='text-3xl text-[#3977ED] font-semibold'>€24,500.00</h1>
          </div>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Pending Balance</p>
                <h1 className='text-3xl text-[#FFA500] font-semibold'>€12,750.00</h1>
          </div>
          <div className='bg-[#F8F9FA] w-full rounded-lg py-8 px-4 space-y-2'>
                <p className='text-xl'>Total Balance</p>
                <h1 className='text-3xl text-black font-semibold'>€37,250.00</h1>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default PaymentHeader;





