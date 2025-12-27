'use client';

import { useState } from 'react';
import { Upload, BookOpen, Clock } from 'lucide-react';

export default function KnowledgeBasesPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [knowledgeTab, setKnowledgeTab] = useState('home');

  const tabs = ['KNOWLEDGE BASES', 'MEMORY STORE'];
  const subTabs = ['HOME', 'KNOWLEDGE', 'ANALYTICS', 'PLAYGROUND'];
  const learningTabs = ['Open (0)', 'Resolved (0)', 'Irrelevant (0)'];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Knowledge Bases</h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
            <Upload className="w-4 h-4" />
            + Upload
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Test Knowledge Base
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4 border-b border-gray-200 mb-4">
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
        <div className="flex items-center gap-4">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setKnowledgeTab(tab.toLowerCase())}
              className={`px-4 py-2 font-medium text-sm ${
                knowledgeTab === tab.toLowerCase()
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h2>
            <p className="text-gray-600 mb-4">Transform unanswered questions into permanent knowledge</p>
            <div className="h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-400">Knowledge Base Content</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-900">Last 7 days</span>
              <span className="text-sm text-gray-600">Last 30 days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-12 text-center mb-8">
        <Clock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No analytics data yet</h3>
        <p className="text-gray-600">
          Analytics will appear once your knowledge base starts receiving queries.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Learning Opportunities</h2>
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
            BETA
          </span>
        </div>
        <p className="text-gray-600 mb-6">
          Document once, answer forever. Each question becomes permanent knowledge.
        </p>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2 md:gap-4 border-b border-gray-200 w-full md:w-auto overflow-x-auto">
            {learningTabs.map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Filter: All Knowledge Bases</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Sort: Most Recent</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Great news! Your agent has answers for everything asked so far.
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Learning Opportunities appear when your agent encounters questions it can&apos;t answer. These
            become chances to strengthen your knowledge base and ensure your agent has the right
            information to help customers.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

