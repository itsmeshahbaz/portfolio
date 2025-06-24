import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 shadow-md rounded-b-3xl">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Brand Name */}
        <Link
          to="/"
          className="text-3xl font-[Cinzel] tracking-wider text-amber-200 hover:text-amber-300 transition-all duration-300"
        >
          Shahbaz Mughal
        </Link>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 flex flex-wrap items-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-5 py-2 text-sm font-medium text-amber-100 rounded-full bg-white/10 hover:bg-amber-200 hover:text-gray-900 transition-all duration-300"
            >
              {item.name}
            </Link>
          )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
