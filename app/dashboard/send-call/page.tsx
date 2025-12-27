'use client';

import { useState } from 'react';
import { BookOpen, ExternalLink, Send } from 'lucide-react';

export default function SendCallPage() {
  const [phoneNumber, setPhoneNumber] = useState('92190-71867');
  const [voice, setVoice] = useState('Alexa');
  const [activeTab, setActiveTab] = useState('prompt');
  const [prompt, setPrompt] = useState('');

  const promptCategories = [
    { name: 'Telehealth', icon: '❤️' },
    { name: 'Small business', icon: '💼' },
    { name: 'Stadium venues', icon: '🏟️' },
    { name: 'Inbound sales', icon: '🎧' },
  ];

  const apiCode = `// Headers
const headers = {
  'Authorization': 'API_KEY',
};

// Data
const data = {
  "phone_number": "+919219071867",
  "voice": "e1289219-0ea2-4f22-a994-c542c2a48a0f",
  "wait_for_greeting": false,
  "record": true,
  "answered_by_enabled": true,
  "noise_cancellation": false,
  "interruption_threshold": 500,
  "block_interruptions": false,
  "max_duration": 12,
  "model": "base",
  "language": "babel-en",
  "background_track": "none",
  "endpoint": "https://api.channel.ai",
  "voicemail_action": "hangup"
}

// API request
await axios.post('https://api.channel.ai/v1/calls', data, {headers});`;

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Call</h1>

        <div className="max-w-3xl">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic</h2>
            <p className="text-gray-600 mb-6">Enter a phone number and a prompt to get started</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg">
                    <option>🇮🇳 +91</option>
                  </select>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Voice</label>
                <select
                  value={voice}
                  onChange={(e) => setVoice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Alexa</option>
                  <option>Male Voice</option>
                  <option>Female Voice</option>
                </select>
              </div>

              <div>
                <div className="flex items-center gap-4 border-b border-gray-200 mb-4">
                  <button
                    onClick={() => setActiveTab('prompt')}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'prompt'
                        ? 'border-b-2 border-black text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Prompt
                  </button>
                  <button
                    onClick={() => setActiveTab('pathway')}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'pathway'
                        ? 'border-b-2 border-black text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Pathway
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {promptCategories.map((category) => (
                    <button
                      key={category.name}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2"
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>

                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a prompt for the call"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black min-h-32"
                />

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <BookOpen className="w-4 h-4" />
                    Prompting Guide
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter a first sentence for the call
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="First sentence..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-96 bg-gray-900 text-gray-100 p-6 overflow-y-auto border-t md:border-l border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-gray-200">Read Docs</button>
            <button className="text-sm text-gray-400 hover:text-gray-200 border-b border-gray-400">
              Hide code
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">JSON Mode</span>
            <div className="w-10 h-5 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">JavaScript</span>
            <button className="text-xs text-gray-400 hover:text-gray-200">Copy Code</button>
          </div>
        </div>

        <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
          <code>{apiCode}</code>
        </pre>
      </div>

      <div className="fixed bottom-6 right-6">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg">
          <Send className="w-5 h-5" />
          Send Call
        </button>
      </div>
    </div>
  );
}

