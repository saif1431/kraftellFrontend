// RejectedList.js
import React from 'react';

const RejectedList = ({ data }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Rejected Transactions</h2>
      {data.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg p-4 ">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800">Transaction ID: {item.transactionId}</h3>
              <p className="text-gray-600">Amount: {item.amount}</p>
              <p className="text-sm text-red-600 mt-1">Reason: {item.reason}</p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              {item.status}
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm text-gray-500">Date: {item.date}</p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Appeal Decision
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RejectedList;