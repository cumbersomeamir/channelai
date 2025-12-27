'use client';

import { Copy, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const callLogs = [
    {
      id: '44bf0f...',
      direction: 'outgoing',
      to: '020 7499 0620',
      from: '01566 700605',
      duration: '',
      date: '9/29/20',
    },
    {
      id: '2c88da...',
      direction: 'outgoing',
      to: '020 3983 8278',
      from: '0117 463 4094',
      duration: '0m 08s',
      date: '9/29/20',
    },
    {
      id: '89ae2e...',
      direction: 'outgoing',
      to: '020 7908 7979',
      from: '029 2271 1923',
      duration: '12m 04s',
      date: '9/29/20',
    },
  ];

  const shortcuts = [
    {
      title: 'Conversational Pathways',
      description: 'Design infinitely complex, branching conversational flows',
      icon: '🔗',
    },
    {
      title: 'Send Phone Call',
      description: 'Use our visual editor to dispatch phone calls',
      icon: '📞',
    },
    {
      title: 'Send Bulk Calls',
      description: 'Upload a CSV or JSON file to send out a large number of calls all at once',
      icon: '📄',
    },
    {
      title: 'Buy Phone Number',
      description: 'Instantly purchase and configure a phone number for your business',
      icon: '#',
    },
    {
      title: 'Voices & Voice Cloning',
      description: 'View the voices you have access to or clone a new voice.',
      icon: '🎤',
    },
    {
      title: 'Billing & Credits',
      description: 'Purchase more credits to send out more calls and support our platform.',
      icon: '💳',
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        Here&apos;s everything you need to know about your calls.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Call Distribution by Region</h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-gray-400">World Map Visualization</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Call Logs</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">CALL ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">IN/OUT</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">TO</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">FROM</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">DURATION</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">CRE</th>
                  </tr>
                </thead>
                <tbody>
                  {callLogs.map((call) => (
                    <tr key={call.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-900">{call.id}</span>
                          <Copy className="w-4 h-4 text-gray-400 cursor-pointer" />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">{call.to}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{call.from}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{call.duration}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{call.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              One-click shortcuts to your essential tools.
            </h2>
            <div className="space-y-4">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{shortcut.title}</h3>
                      <p className="text-sm text-gray-600">{shortcut.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Build Pathway
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Send Call
        </button>
      </div>
    </div>
  );
}

