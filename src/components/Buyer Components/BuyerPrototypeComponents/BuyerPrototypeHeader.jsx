import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApproveList from './ApproveList';
import PendingList from './PendingList';
import RejectedList from './RejectedList';

function BuyerPrototypeHeader() {
  const [activeTab, setActiveTab] = useState('approve');
  const [approveData, setApproveData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrototypes = async () => {
      try {
        const res = await axios.get('/api/prototypes/my-requests', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = res.data;

        // Categorize based on status
        setApproveData(data.filter(p => p.status === 'approved'));
        setPendingData(data.filter(p => p.status === 'pending' || p.status === 'under_review'));
        setRejectedData(data.filter(p => p.status === 'rejected'));
      } catch (error) {
        console.error('Failed to fetch prototype requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrototypes();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p className="text-center text-gray-500 py-8">Loading...</p>;
    }

    const getContent = (data, Component) =>
      data.length > 0 ? (
        <Component data={data} />
      ) : (
        <div className="flex items-center justify-center py-24 text-gray-400 text-lg">
          No requests found
        </div>
      );

    switch (activeTab) {
      case 'approve':
        return getContent(approveData, ApproveList);
      case 'pending':
        return getContent(pendingData, PendingList);
      case 'rejected':
        return getContent(rejectedData, RejectedList);
      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-6 flex-wrap">
        {['approve', 'pending', 'rejected'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === tab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-primary hover:text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-md p-4 min-h-[200px]">
        {renderContent()}
      </div>
    </div>
  );
}

export default BuyerPrototypeHeader;
