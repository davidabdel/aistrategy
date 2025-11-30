import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  children: React.ReactNode;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => {
  return (
    <div className="flex items-start space-x-4 mb-4 last:mb-0">
      <div className="flex-shrink-0 mt-1">
        <div className="bg-[#16A34A]/10 rounded-full p-1">
          <Check className="w-5 h-5 text-[#16A34A]" strokeWidth={3} />
        </div>
      </div>
      <p className="text-lg text-gray-800 leading-relaxed">{children}</p>
    </div>
  );
};