'use client';

import { useState } from 'react';

export default function PhoneNumbersPage() {
  const [areaCode, setAreaCode] = useState('415');
  const [country, setCountry] = useState('United States');

  const availableNumbers = [
    { number: '(415) 688-4205', location: 'San Francisco, CA', price: '$15/month' },
    { number: '(415) 936-0705', location: 'Corte Madera, CA', price: '$15/month' },
    { number: '(415) 991-7180', location: 'San Rafael, CA', price: '$15/month' },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Phone Numbers</h1>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Buy New Number
        </button>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Purchase and configure a new inbound phone number. ($15/mo. subscription using your stored
          payment).
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">AREA CODE</label>
            <input
              type="text"
              value={areaCode}
              onChange={(e) => setAreaCode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">COUNTRY</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>United States</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AVAILABLE NUMBERS</h2>
          <div className="space-y-4">
            {availableNumbers.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.location}</div>
                  <div className="text-sm font-medium text-gray-900 mt-1">{item.price}</div>
                </div>
                <button className="w-full sm:w-auto bg-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm md:text-base">
                  PURCHASE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Need a Different Country?</h3>
            <p className="text-sm text-gray-600">
              For other countries, please Bring Your Own Twilio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

