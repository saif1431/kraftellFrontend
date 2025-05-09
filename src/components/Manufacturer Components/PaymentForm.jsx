import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Payment Details</h1>
          <p className="text-primary text-lg mt-2">Complete your payment information below</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="project-name" className="block text-md text-primary">
              Project Name
            </label>
            <input
              id="project-name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="milestone" className="block text-md text-primary">
              Payment Milestone
            </label>
            <div className="relative">
              <select
                id="milestone"
                className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
              >
                <option>Initial Deposit</option>
                <option>Milestone 1</option>
                <option>Milestone 2</option>
                <option>Final Payment</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="block text-md text-primary">
              Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-primary">$</span>
              </div>
              <input
                id="amount"
                type="number"
                className="w-full p-2 pl-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-md text-primary">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment-method"
                  value="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={() => setPaymentMethod("credit-card")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="block text-md text-primary">Credit Card</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="block text-md text-primary">PayPal</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment-method"
                  value="sepa"
                  checked={paymentMethod === "sepa"}
                  onChange={() => setPaymentMethod("sepa")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="block text-md text-primary">SEPA</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-md text-primary">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <NavLink to='/ReleasePayment'
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Deposit to Escrow</span>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;