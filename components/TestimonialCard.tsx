import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <Quote className="w-8 h-8 text-blue-100 mb-4" fill="currentColor" />
      <p className="text-gray-700 text-lg mb-6 flex-grow italic">"{quote}"</p>
      <div className="mt-auto pt-4 border-t border-gray-50">
        <p className="font-semibold text-gray-900">{author}</p>
      </div>
    </div>
  );
};