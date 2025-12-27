'use client';

import { useState } from 'react';
import { Search, Copy, Play } from 'lucide-react';

export default function VoicesPage() {
  const [activeTab, setActiveTab] = useState('curated');

  const tabs = ['CURATED VOICES', 'VOICE STUDIO', 'TTS DOCS'];

  const voices = [
    {
      name: 'Keelan',
      gender: 'Female',
      description: 'Calm Engaged Professional Female',
      rating: 5.0,
      tags: ['Female', 'Warm', 'Inbound Support', 'Channel Curated'],
    },
    {
      name: 'Maeve',
      gender: 'Female',
      description: 'Mandy is a kind and sweet female voice.',
      rating: 5.0,
      tags: ['Channel Curated', 'english'],
    },
    {
      name: 'Matsukaze - Experimental',
      gender: 'Male',
      description: 'A refreshing male voice. Credit to 松風.',
      rating: 5.0,
      tags: ['Channel Curated', 'Japanese'],
    },
    {
      name: 'Max',
      gender: 'Male',
      description: 'Max is a warm British voice with smooth intonations.',
      rating: 5.0,
      tags: ['Channel Curated', 'english'],
    },
    {
      name: 'Trixie',
      gender: 'Female',
      description: 'Trixie is a female British voice, direct and forward.',
      rating: 5.0,
      tags: ['british', 'female', 'Channel Curated'],
    },
    {
      name: 'Karl',
      gender: 'Male',
      description: 'A german accented voice, calm and clear.',
      rating: 5.0,
      tags: ['Channel Curated', 'English', 'Male'],
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Voices</h1>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Customize TTS Text
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            + Create new voice
          </button>
        </div>
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

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Channel Curated Voices (104)</h2>
        <p className="text-gray-600 mb-4">Handpicked voices tailored for professional use cases.</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Voices..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div className="space-y-4">
        {voices.map((voice, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{voice.name}</h3>
                  <span className="text-sm text-gray-600">({voice.gender})</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{voice.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium text-gray-900">{voice.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {voice.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Copy className="w-5 h-5 text-gray-600" />
              </button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Play className="w-4 h-4" />
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

