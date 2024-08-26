import React, { useState } from 'react';

const CertifiedProBadge: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-cyan-700 text-white py-2 px-4 rounded-t-full rounded-l-full shadow-lg flex items-center space-x-2 z-50">
      {/* SVG icon for the badge */}
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="#f48c06"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24"
        height="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2m0 8c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0 4c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        />
      </svg>
      <span className="font-semibold text-sm"> Certified Pros</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-xs border rounded-full px-1 text-gray-200 hover:text-gray-400 focus:outline-none"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
};

export default CertifiedProBadge;
