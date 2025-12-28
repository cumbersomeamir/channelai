'use client';

import Link from 'next/link';
import { Share2, Phone, User } from 'lucide-react';

export default function PersonasPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Personas</h1>
          <span className="px-2 md:px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
            BETA
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <button className="px-3 md:px-4 py-2 text-gray-700 hover:text-gray-900 text-sm md:text-base touch-manipulation">Help</button>
          <Link
            href="/dashboard/personas/create"
            className="flex-1 md:flex-none bg-orange-500 text-white px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm md:text-base text-center touch-manipulation"
          >
            Create Persona
          </Link>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Your Personas.</h2>
        <p className="text-sm md:text-base text-gray-600">
          Manage, customize, and evaluate your organization&apos;s agents.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 md:p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-400 via-pink-400 to-purple-400 flex-shrink-0"></div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">Untitled Persona</h3>
              <p className="text-xs md:text-sm text-gray-600">Customer Support • 1 minute ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-3 md:gap-6">
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">0</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">0</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                <User className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">0</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 hidden sm:inline">v1</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 text-xl md:text-base touch-manipulation">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

