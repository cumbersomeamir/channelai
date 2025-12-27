'use client';

export default function AddOnsPage() {
  const addOns = [
    {
      title: 'BYOT',
      subtitle: '(Bring Your Own Twilio)',
      description:
        "Integrate your business's Twilio account with Channel. Packaged with a dialer to rotate through your Twilio numbers, preventing them from being marked as",
      cost: 'Free',
      buttonText: 'Use Your Twilio',
      buttonColor: 'bg-gray-900',
      logo: 'Twilio',
    },
    {
      title: 'TCPA PROTECTION',
      description:
        'Automatically checks and blocks phone numbers that have been tied to TCPA lawsuits or have asked to not be contacted.',
      cost: 'Contact Us',
      buttonText: 'Contact Us',
      buttonColor: 'bg-gray-900',
    },
    {
      title: 'LOCAL DIALING',
      description: 'Call numbers from an identical area code to increase pickup rates.',
      cost: 'Contact Us',
      buttonText: 'Contact Us',
      buttonColor: 'bg-gray-900',
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Add Ons</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {addOns.map((addon, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 relative">
            {addon.logo && (
              <div className="absolute top-4 right-4 text-red-600 font-bold text-lg">{addon.logo}</div>
            )}
            <div className="mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{addon.title}</h2>
              {addon.subtitle && <p className="text-sm text-gray-600 mb-2">{addon.subtitle}</p>}
              <p className="text-lg font-semibold text-gray-900 mb-4">{addon.cost}</p>
            </div>
            <p className="text-sm text-gray-600 mb-6">{addon.description}</p>
            <button
              className={`w-full ${addon.buttonColor} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
            >
              {addon.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

