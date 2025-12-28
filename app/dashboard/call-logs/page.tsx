'use client';

import { useState } from 'react';
import { Play, Download, Copy, ArrowRight, Filter, Upload } from 'lucide-react';

export default function CallLogsPage() {
  const [activeTab, setActiveTab] = useState('completed');

  const calls = [
    {
      id: '44bf0f...',
      direction: 'outgoing',
      to: '020 7499 0620',
      from: '01566 700605',
      duration: '',
      status: 'Canceled',
      statusColor: 'bg-blue-500',
      date: '9/29/2025 (7:17 PM)',
    },
    {
      id: '2c88da...',
      direction: 'outgoing',
      to: '020 3983 8278',
      from: '0117 463 4094',
      duration: '0m 08s',
      status: 'Completed',
      statusColor: 'bg-green-500',
      date: '9/29/2025 (7:13 PM)',
    },
    {
      id: '1fdc00...',
      direction: 'outgoing',
      to: '020 7739 1700',
      from: '0141 673 0563',
      duration: '0m 13s',
      status: 'Completed',
      statusColor: 'bg-green-500',
      date: '9/29/2025 (7:12 PM)',
    },
    {
      id: '89ae2e...',
      direction: 'outgoing',
      to: '020 7908 7979',
      from: '029 2271 1923',
      duration: '12m 04s',
      status: 'Completed',
      statusColor: 'bg-green-500',
      date: '9/29/2025 (2:14 PM)',
    },
    {
      id: '2c13ed...',
      direction: 'outgoing',
      to: '020 7631 8000',
      from: '0115 647 3987',
      duration: '1m 19s',
      status: 'Completed',
      statusColor: 'bg-green-500',
      date: '9/27/2025 (2:46 PM)',
    },
  ];

  const getDurationWidth = (duration: string) => {
    if (!duration) return 0;
    const match = duration.match(/(\d+)m/);
    if (match) {
      const minutes = parseInt(match[1]);
      return Math.min((minutes / 12) * 100, 100);
    }
    return 10;
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Call Logs</h1>

      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-4 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'completed'
                ? 'border-b-2 border-black text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            COMPLETED (51)
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'active'
                ? 'border-b-2 border-black text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ACTIVE
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Quick Filters
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Load Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Upload className="w-4 h-4" />
            Export Calls
          </button>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          + Add filter
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">RECORDING</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">CALL ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">IN/OUT</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">TO</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">FROM</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">DURATION</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">ISSUES</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">CREATED</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => (
                <tr key={call.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Play className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{call.id}</span>
                      <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{call.to}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{call.from}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{call.duration}</span>
                      {call.duration && (
                        <div className="flex-1 max-w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              call.duration.includes('12m') ? 'bg-gray-900' : 'bg-gray-400'
                            }`}
                            style={{ width: `${getDurationWidth(call.duration)}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">-</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{call.date}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${call.statusColor}`}></div>
                      <span className="text-sm text-gray-900">{call.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-gray-200">
          {calls.map((call) => (
            <div key={call.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">{call.id}</span>
                    <Copy className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                  <div className="text-xs text-gray-500">{call.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Play className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Download className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-gray-500 mb-1">TO</div>
                  <div className="text-gray-900">{call.to}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">FROM</div>
                  <div className="text-gray-900">{call.from}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">DURATION</div>
                  <div className="text-gray-900">{call.duration || '-'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${call.statusColor}`}></div>
                    <span className="text-gray-900">{call.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

