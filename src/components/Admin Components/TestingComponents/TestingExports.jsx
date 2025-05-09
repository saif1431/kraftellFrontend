import React, { useState } from 'react';

const TestingExports = () => {
  const [activeFeatures, setActiveFeatures] = useState({
    quickMatch: false,
    smartPricing: false,
    autoNegotiation: false
  });

  const features = [
    {
      id: 'quickMatch',
      name: "Quick Match Algorithm",
      description: "Test this feature in isolation without affecting production environment."
    },
    {
      id: 'smartPricing',
      name: "Smart Pricing Engine",
      description: "Test this feature in isolation without affecting production environment."
    },
    {
      id: 'autoNegotiation',
      name: "Auto-Negotiation",
      description: "Test this feature in isolation without affecting production environment."
    }
  ];

  const toggleFeature = (featureId) => {
    setActiveFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  // Calculate active test count
  const activeTestCount = Object.values(activeFeatures).filter(Boolean).length;

  return (
 
      
      <div className="flex items-center flex-col lg:flex-row justify-between gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="p-4 border border-gray-300 bg-[#F8F9FA] rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-black mb-2">{feature.name}</h2>
                <p className="text-primary">{feature.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={activeFeatures[feature.id]}
                  onChange={() => toggleFeature(feature.id)}
                />
                <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${activeFeatures[feature.id] ? 'peer-checked:bg-blue-500' : ''}`}></div>
              </label>
            </div>
          </div>
        ))}
      </div>

  );
};

export default TestingExports;