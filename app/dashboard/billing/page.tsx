'use client';

import { useState } from 'react';

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState('plan-limits');

  const tabs = ['PLAN & LIMITS', 'PURCHASE CREDITS', 'BILLING SETTINGS'];

  const plans = [
    {
      name: 'Start',
      current: false,
      price: null,
      dailyCap: '10 calls',
      hourlyCap: '5 calls',
      concurrency: '1 call',
      voiceLimit: '1 clone',
      knowledgeBases: '1',
      talkTimeRate: '$0.14/min',
      transferTimeRate: '$0.05/min',
    },
    {
      name: 'Default',
      current: false,
      price: null,
      dailyCap: '100 calls',
      hourlyCap: '100 calls',
      concurrency: '10 calls',
      voiceLimit: '1 clone',
      knowledgeBases: '10',
      talkTimeRate: '$0.14/min',
      transferTimeRate: '$0.05/min',
    },
    {
      name: 'Build',
      current: true,
      price: '$299',
      dailyCap: '2,000 calls',
      hourlyCap: '1,000 calls',
      concurrency: '50 calls',
      voiceLimit: '5 clones',
      knowledgeBases: '50',
      talkTimeRate: '$0.12/min',
      transferTimeRate: '$0.04/min',
    },
    {
      name: 'Scale',
      current: false,
      price: '$499',
      dailyCap: '5,000 calls',
      hourlyCap: '1,000 calls',
      concurrency: '100 calls',
      voiceLimit: '10 clones',
      knowledgeBases: '100',
      talkTimeRate: '$0.11/min',
      transferTimeRate: '$0.03/min',
    },
    {
      name: 'Enterprise',
      current: false,
      price: 'Contact Us',
      dailyCap: 'Unlimited',
      hourlyCap: 'Unlimited',
      concurrency: 'Unlimited',
      voiceLimit: 'Unlimited',
      knowledgeBases: 'Unlimited',
      talkTimeRate: 'Custom',
      transferTimeRate: 'Custom',
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Billing & Credits</h1>

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

      {activeTab === 'plan-&-limits' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Hourly limit</div>
              <div className="text-lg font-semibold text-gray-900">0 / 1000</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Daily limit</div>
              <div className="text-lg font-semibold text-gray-900">0 / 2000</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Current Balance</h2>
            <div className="text-3xl font-bold text-red-600 mb-2">-1.47 credits</div>
            <p className="text-sm text-gray-600">
              Channel bills based on your plan: Talk Time ($0.11-$0.14/min) and Transfer Time
              ($0.03-$0.05/min), prorated to the exact second.
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 md:mx-0 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 min-w-[1000px] px-4 md:px-0">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`border rounded-lg p-4 ${
                    plan.current
                      ? 'border-blue-500 border-2 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                    {plan.current && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                  </div>
                  {plan.price && (
                    <div className="text-2xl font-bold text-gray-900 mb-4">{plan.price}</div>
                  )}
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="text-gray-600">Daily Cap:</div>
                      <div className="font-medium text-gray-900">{plan.dailyCap}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Hourly Cap:</div>
                      <div className="font-medium text-gray-900">{plan.hourlyCap}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Concurrency:</div>
                      <div className="font-medium text-gray-900">{plan.concurrency}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Voice Limit:</div>
                      <div className="font-medium text-gray-900">{plan.voiceLimit}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Knowledge Bases:</div>
                      <div className="font-medium text-gray-900">{plan.knowledgeBases}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Talk Time Rate:</div>
                      <div className="font-medium text-gray-900">{plan.talkTimeRate}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Transfer Time Rate:</div>
                      <div className="font-medium text-gray-900">{plan.transferTimeRate}</div>
                    </div>
                  </div>
                  {plan.current ? (
                    <button className="w-full mt-4 px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 touch-manipulation">
                      Cancel Plan
                    </button>
                  ) : (
                    <button className="w-full mt-4 px-4 py-2.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 touch-manipulation">
                      {plan.price === 'Contact Us' ? 'Contact Us' : 'Upgrade'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

