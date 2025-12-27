'use client';

import { useState } from 'react';
import { Filter, Plus, Settings, MessageSquare } from 'lucide-react';

export default function SMSPage() {
  const [activeTab, setActiveTab] = useState('conversations');

  const tabs = ['CONVERSATIONS', 'SMS NUMBERS', 'SMS BATCH'];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">SMS Dashboard</h1>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          Test SMS
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, '-'))}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === tab.toLowerCase().replace(/\s+/g, '-')
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
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Load Filters
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <Plus className="w-4 h-4" />
          Add filter
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
        <MessageSquare className="w-24 h-24 mx-auto mb-6 text-gray-400" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">No SMS Conversations Found</h2>
        <p className="text-gray-600 mb-6">
          You don&apos;t have any SMS conversations yet. Configure a phone number with SMS capabilities to
          get started.
        </p>
        <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mx-auto">
          <Settings className="w-5 h-5" />
          Upgrade to Enterprise to configure SMS for Phone Numbers
        </button>
      </div>
    </div>
  );
}

