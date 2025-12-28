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
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1 w-full sm:w-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{voice.name}</h3>
                  <span className="text-xs md:text-sm text-gray-600">({voice.gender})</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">{voice.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-xs md:text-sm font-medium text-gray-900">{voice.rating}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {voice.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 md:py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-end">
              <button className="p-2 hover:bg-gray-100 rounded-lg touch-manipulation">
                <Copy className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs md:text-sm touch-manipulation">
                <Play className="w-3 h-3 md:w-4 md:h-4" />
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

