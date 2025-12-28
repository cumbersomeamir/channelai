'use client';

import { BookOpen, Lock, ArrowRight } from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Compliance & Policy Management</h1>
          <p className="text-gray-600">
            Define guard rails here, then apply them to your pathways, personas, or inbound numbers.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <BookOpen className="w-4 h-4" />
          Docs
        </button>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-bold text-sm">i</span>
          </div>
          <p className="text-sm md:text-base text-gray-700">
            Guard rails are applied on individual pathways, personas, or numbers.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors text-sm md:text-base touch-manipulation w-full md:w-auto">
          <span className="hidden sm:inline">Learn how to apply guard rails</span>
          <span className="sm:hidden">Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">BUILT-IN GUARD RAILS</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Telephone Consumer Protection Act (TCPA)
          </h3>
          <p className="text-gray-600 mb-4">
            Monitor high-risk calling patterns and potential TCPA violations.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Show supported policies &gt;
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 uppercase mb-4">CREATE YOUR OWN</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Custom Guard Rail Definitions</h3>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded">
                  Enterprise
                </span>
              </div>
              <p className="text-gray-600">
                Compliance rules and frameworks specific to your organization.
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              <Lock className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-600 mb-4">Customize policies for your organization or industry.</p>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mx-auto">
              <Lock className="w-5 h-5" />
              Establish a new policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

