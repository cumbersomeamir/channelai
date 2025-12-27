'use client';

import { Search, Folder, Sparkles, Car, Globe, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ConversationalPathwaysPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Conversational Pathways</h1>
        <Link
          href="/dashboard/convo-pathways/create"
          className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Pathway
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Pathways"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900">
            <span>🏠</span>
            All Pathways
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900">
            <Folder className="w-4 h-4" />
            Folders
          </button>
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900">+ New Folder</button>
        </div>

        <div className="flex items-center gap-4 text-sm text-blue-600 mb-8">
          <a href="#" className="hover:underline">Get help with pathways</a>
          <span>•</span>
          <a href="#" className="hover:underline">Developer docs</a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">QUICK ACTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-black rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Sparkles className="w-8 h-8 mb-4 text-gray-900" />
            <h3 className="font-semibold text-gray-900 mb-2">Create a Pathway</h3>
            <p className="text-sm text-gray-600">
              Build a new conversational pathway from scratch or generate one from audio, JSON, or a
              use case
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Car className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900 mb-2">Start with a Template</h3>
            <p className="text-sm text-gray-600">
              Duplicate our production-ready Car Rental template to see a complete pathway in action
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors">
            <Globe className="w-8 h-8 mb-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900 mb-2">Pathway Showcase</h3>
            <p className="text-sm text-gray-600">
              Explore community pathways and gain inspiration from real-world implementations
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700 uppercase">ALL PATHWAYS</h2>
          <span className="text-sm text-gray-600">0 pathways</span>
        </div>
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium text-gray-900 mb-2">No pathways found</p>
          <p className="text-gray-600 mb-4">Create your first pathway to get started</p>
        </div>
      </div>
    </div>
  );
}

