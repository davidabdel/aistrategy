import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  background?: 'white' | 'gray';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  background = 'white', 
  children 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-[#F9FAFB]'
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgColors[background]} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};