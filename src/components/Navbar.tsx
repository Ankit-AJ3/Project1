"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center group">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:rotate-180"
                priority
              />
            </div>
            <Link href="/" onClick={closeMenu} className="ml-3 text-white text-lg sm:text-xl md:text-2xl font-bold hover:text-purple-300 transition-colors duration-300 tracking-wide">
              Vigyan Darshan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-300 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/" className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition duration-300 hover:scale-105">
              Home
            </Link>
            <Link href="/about" className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition duration-300 hover:scale-105">
              About Us
            </Link>
            <Link href="/contact" className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition duration-300 hover:scale-105">
              Contact Us
            </Link>
            <Link href="/blog" className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition duration-300 hover:scale-105">
              Blog
            </Link>
            <Link href="/login" className="text-white px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 transition duration-300 hover:scale-105">
              Login
            </Link>
            <Link href="/signup" className="text-white px-4 py-2 rounded-lg text-sm font-medium bg-green-600 hover:bg-green-700 transition duration-300 hover:scale-105">
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div 
          ref={menuRef}
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-transparent to-purple-900 rounded-b-lg">
            <Link href="/" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-purple-700 transition duration-300">
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-purple-700 transition duration-300">
              About Us
            </Link>
            <Link href="/contact" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-purple-700 transition duration-300">
              Contact Us
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-red-600 transition duration-300">
              Blog
            </Link>
            <Link href="/login" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
              Login
            </Link>
            <Link href="/signup" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 transition duration-300">
              Signup
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply px-4 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 backdrop-blur-sm shadow-lg;
        }
        
        .mobile-nav-link {
          @apply block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white transition-all duration-200 hover:translate-x-2 hover:shadow-lg active:scale-95 shadow-md;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
