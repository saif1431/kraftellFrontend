import React, { useState } from 'react';
import Certifications from './Certifications';
import BlacklistManagement from './BlacklistManagement';
import ReviewModeration from './ReviewModeration';
import ContentModeration from './ContentModeration';
import UploadCertificate from './UploadCertificate';


function VerificationHeader() {
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('certifications');

  // Sample data for each tab
  const certificationsData = [
    {
      id: 1,
      name: 'Organic Certification',
      issuer: 'USDA',
      expiryDate: '2025-12-31',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Fair Trade Certified',
      issuer: 'Fair Trade USA',
      expiryDate: '2024-11-30',
      status: 'Pending Renewal'
    }
  ];

  const blacklistData = [
    {
      id: 1,
      userId: 'USER-789',
      reason: 'Fraudulent activity',
      dateAdded: '2025-05-10',
      status: 'Active'
    },
    {
      id: 2,
      userId: 'USER-456',
      reason: 'Policy violation',
      dateAdded: '2025-04-15',
      status: 'Appealed'
    }
  ];

  const reviewData = [
    {
      id: 1,
      reviewId: 'REV-001',
      content: 'This product is amazing!',
      status: 'Approved',
      flagged: false
    },
    {
      id: 2,
      reviewId: 'REV-002',
      content: 'Terrible experience with seller',
      status: 'Pending',
      flagged: true
    }
  ];

  const contentData = [
    {
      id: 1,
      contentId: 'CONT-001',
      type: 'Product Description',
      flaggedReason: 'Inappropriate language',
      status: 'Under Review'
    },
    {
      id: 2,
      contentId: 'CONT-002',
      type: 'User Profile',
      flaggedReason: 'Misleading information',
      status: 'Removed'
    }
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className='flex items-center flex-wrap justify-between mb-6'>
        <div className="flex border-b flex-wrap border-gray-200 ">
      <button 
  onClick={() => setActiveTab('certifications')}  // Added this onClick handler
  className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'certifications' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
>
  Certifications
</button>
          <button 
            onClick={() => setActiveTab('blacklist')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'blacklist' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Blacklist Management
          </button>
          <button 
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'review' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Review Moderation
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'content' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
          >
            Content Moderation
          </button>
        </div>
        <button className='px-4 bg-[#3977ED] py-2 font-medium whitespace-nowrap text-white hover:bg-blue-600 rounded-md'>
          Report Issue
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md lg:p-4 p-2'>
      {activeTab === 'certifications' && (
          <Certifications 
            data={certificationsData} 
            onUploadClick={() => setShowUploadPopup(true)} 
          />
        )}
        {activeTab === 'blacklist' && <BlacklistManagement data={blacklistData} />}
        {activeTab === 'review' && <ReviewModeration data={reviewData} />}
        {activeTab === 'content' && <ContentModeration data={contentData} />}
      </div>
        {/* Upload Popup - MOVED TO HERE */}
        {showUploadPopup && (
        <UploadCertificate 
          onClose={() => setShowUploadPopup(false)} 
          onUpload={(file) => {
            console.log("File uploaded:", file);
            setShowUploadPopup(false);
          }}
        />
      )}
    </div>
  );
}

export default VerificationHeader;