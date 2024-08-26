import React from 'react';

interface CertifiedProBadgeProps {
  className?: string; // Allow passing custom classes
}

const CertifiedProBadge: React.FC<CertifiedProBadgeProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
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
      <span className="text-xs px-2 rounded-lg font-semibold text-purple-600 bg-white ">Certified Pro</span>
    </div>
  );
};

export default CertifiedProBadge;
