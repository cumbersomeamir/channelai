'use client';

import Link from 'next/link';
import { Share2, Phone, User } from 'lucide-react';

export default function PersonasPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Personas</h1>
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
            BETA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Help</button>
          <Link
            href="/dashboard/personas/create"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Create Persona
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Personas.</h2>
        <p className="text-gray-600">
          Manage, customize, and evaluate your organization&apos;s agents.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 via-pink-400 to-purple-400"></div>
            <div>
              <h3 className="font-semibold text-gray-900">Untitled Persona</h3>
              <p className="text-sm text-gray-600">Customer Support • 1 minute ago</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span className="text-sm">0</span>
            </div>
            <span className="text-sm text-gray-500">v1</span>
            <button className="text-gray-400 hover:text-gray-600">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

