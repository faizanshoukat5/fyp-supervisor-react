import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <div className="relative">
        <div className="animate-morph w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 animate-gradient shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-xl transform hover:scale-110 transition-transform duration-200">
              FYP
            </span>
          </div>
          
          {/* Glowing accents */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full opacity-75 blur-[2px]"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-75 blur-[2px]"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="relative">
          <span className="text-2xl font-black text-blue-600">
            Supervisor
            <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          </span>
        </div>
        <span className="text-sm font-medium text-blue-500 tracking-widest uppercase">
          Finder
        </span>
      </div>
    </Link>
  );
};

export default Logo;