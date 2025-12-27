'use client';

import { useState } from 'react';
import { Plus, Grid, Folder, Lock, Search } from 'lucide-react';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('tools');

  const tabs = ['TOOLS', 'CONNECTIONS', 'INTEGRATIONS', 'ANALYTICS'];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tools</h1>
        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
          BETA
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 md:gap-4 border-b border-gray-200 w-full md:w-auto overflow-x-auto">
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
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Lock className="w-4 h-4" />
            Secrets
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
            <Plus className="w-4 h-4" />
            Create New Tool
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">QUICK ACTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-yellow-400 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Plus className="w-8 h-8 mb-4 text-gray-900" />
            <h3 className="font-semibold text-gray-900 mb-2">New Tool</h3>
            <p className="text-sm text-gray-600">Create a new custom or integration-based tool</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Grid className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900 mb-2">Explore Integrations</h3>
            <p className="text-sm text-gray-600">Browse available integrations to build tools with</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Folder className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900 mb-2">Legacy Tools</h3>
            <p className="text-sm text-gray-600">View all tools in the old tools page</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Recent</option>
          </select>
        </div>
      </div>

      <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <p className="text-lg font-medium text-gray-900 mb-2">No tools created</p>
        <p className="text-gray-600 mb-6">Get started by creating your first custom tool.</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Create Tool
        </button>
      </div>
    </div>
  );
}

