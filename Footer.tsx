
import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Empowering the future of crypto education.
        </p>
      </div>
    </footer>
  );
};
