'use client';

import { Plus, FileStack } from 'lucide-react';
import Link from 'next/link';

export default function BatchesPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Batch Calls</h1>
        <Link
          href="/dashboard/batches/create"
          className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Batch Call
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <FileStack className="w-24 h-24 mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No batches yet.</h2>
          <p className="text-gray-600 mb-6">Create a batch call to get started.</p>
          <Link
            href="/dashboard/batches/create"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Batch Call
          </Link>
        </div>
      </div>
    </div>
  );
}

