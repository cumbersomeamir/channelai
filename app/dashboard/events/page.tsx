'use client';

export default function EventsPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Events</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
        <p className="text-lg font-medium text-gray-900 mb-2">No events yet</p>
        <p className="text-gray-600">Events will appear here when they are triggered.</p>
      </div>
    </div>
  );
}

