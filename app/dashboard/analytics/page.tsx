'use client';

import { useState } from 'react';

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('calls');
  const [dateRange, setDateRange] = useState('today');

  const tabs = ['CALLS', 'CITATIONS', 'REPORTS', 'PRESETS'];
  const dateRanges = ['Today', 'Last week', 'Last month'];

  const metrics = [
    { label: 'TOTAL CALLS', value: '0', change: '0.0%' },
    { label: 'TOTAL COST', value: '$0.00', change: '0.0%' },
    { label: 'AVG DURATION', value: '0:00', change: '0.0%' },
    { label: 'TOTAL TRANSFERS', value: '0', change: '0.0%' },
    { label: 'ISSUES', value: '0', change: '0.0%' },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Analytics</h1>

      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-4 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === tab.toLowerCase()
                  ? 'border-b-2 border-black text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {dateRanges.map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range.toLowerCase().replace(' ', '-'))}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                dateRange === range.toLowerCase().replace(' ', '-')
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
          <button className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
            📅
          </button>
        </div>

        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <option>All</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Filter by Pathway</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white border border-gray-200 rounded-lg p-3 md:p-4">
            <div className="text-xs md:text-sm text-gray-600 mb-1">{metric.label}</div>
            <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <div className="text-xs md:text-sm text-gray-500">→ {metric.change}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-gray-400">Analytics Chart</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute bottom-4 right-4 bg-white border border-gray-200 rounded-lg p-6 shadow-lg max-w-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
          <p className="text-sm text-gray-600 mb-4">
            Advanced Analytics available for Enterprise plans
          </p>
          <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

