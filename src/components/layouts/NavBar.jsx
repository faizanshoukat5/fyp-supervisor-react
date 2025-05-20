import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="bg-white p-2 rounded-lg">
      <span className="text-purple-600 text-xl font-bold">FYP</span>
    </div>
    <span className="text-white text-xl font-semibold">Supervisor Finder</span>
  </Link>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                isActive('/') 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-blue-100 hover:text-white'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            
            <Link 
              to="/supervisors"
              className={`${
                isActive('/supervisors')
                  ? 'text-white border-b-2 border-white'
                  : 'text-blue-100 hover:text-white'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Supervisors
            </Link>

            <Link 
              to="/projects"
              className={`${
                isActive('/projects')
                  ? 'text-white border-b-2 border-white'
                  : 'text-blue-100 hover:text-white'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Projects
            </Link>

            <Link 
              to="/admin/faculty"
              className={`${
                isActive('/admin/faculty')
                  ? 'text-white border-b-2 border-white'
                  : 'text-blue-100 hover:text-white'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Faculty Management
            </Link>

            <Link 
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-2">
            <Link 
              to="/"
              className="block px-3 py-2 text-blue-100 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link 
              to="/supervisors"
              className="block px-3 py-2 text-blue-100 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Supervisors
            </Link>

            <Link 
              to="/projects"
              className="block px-3 py-2 text-blue-100 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>

            <Link 
              to="/admin/faculty"
              className="block px-3 py-2 text-blue-100 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Faculty Management
            </Link>

            <Link 
              to="/login"
              className="block px-3 py-2 text-blue-100 hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
