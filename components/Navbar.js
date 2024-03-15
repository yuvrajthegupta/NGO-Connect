import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-transparent  font-bold text-4xl bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">NGO Connect</a>
          </div>
          <div className="hidden md:block">
            <a href="#" className="text-white mr-4">Home</a>
            <a href="#" className="text-white mr-4">About</a>
            <a href="#" className="text-white mr-4">Contact</a>
            <a href="#" className="text-white mr-4">Login</a>
            <a href="#" className="text-white">Sign Up</a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;