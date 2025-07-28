import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 shadow-md rounded-b-3xl">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-[Cinzel] tracking-wider text-amber-200 hover:text-amber-300 transition-all duration-300"
        >
          Shahbaz Mughal
        </Link>

        {/* Nav Links */}
        <nav className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-300 text-gray-900 shadow-md scale-105'
                    : 'text-amber-100 bg-white/10 hover:bg-amber-200 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
