import React, { useState } from 'react';
import EscrowPayouts from './EscrowPayouts';
import ComissionsRate from './ComissionsRate';
import TaxonomyEditor from './TaxonomyEditor';
import QualificationCriteria from './QualificationCriteria';
import EmailTemplates from './EmailTemplates';

function SettingHeader() {
  const [activeTab, setActiveTab] = useState('commission');



  const commissionRates = [
    {
      id: 1,
      tier: 'Standard Rate',
      rate: '15%',
    },
    {
      id: 2,
      tier: 'Premium Rate',
      rate: '25%',
    },
    {
      id: 3,
      tier: 'Enterprise Rate',
      rate: '35%',
    }
  ];


  const qualificationCriteria = [
    {
      id: 1,
      title: 'Business registered in Europe',
    },
    {
        id: 2,
        title: 'Two or more years of operation', 
    },
    {
        id: 3,
        title: 'Experience with small-batch production', 
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: 'Order Confirmation',
      subject: 'Your Order Has Been Confirmed',
    },
    {
      id: 2,
      name: 'Prototype Feedback Request',
      subject: 'Feedback Request for Prototype',
    },
    {
      id: 3,
      name: 'Payout Processed',
      subject: 'Your Payout Has Been Processed',
    },
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-6 flex-wrap">
        <button 
          onClick={() => setActiveTab('commission')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'commission' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Commission Rates
        </button>
        <button 
          onClick={() => setActiveTab('qualification')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'qualification' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Qualification Criteria
        </button>
        <button 
          onClick={() => setActiveTab('email')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'email' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Email Templates
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {/* Escrow & Payouts */}
        
        {activeTab === 'commission' && <ComissionsRate data={commissionRates} />}
        {activeTab === 'taxonomy' && <TaxonomyEditor data={taxonomyCategories} />}
        {activeTab === 'qualification' && <QualificationCriteria data={qualificationCriteria} />}
        {activeTab === 'email' && <EmailTemplates data={emailTemplates} />}
      </div>
    </div>
  );
}

export default SettingHeader;