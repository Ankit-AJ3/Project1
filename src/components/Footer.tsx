"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay animate-pulse"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: '200px 200px'
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="text-center md:text-left animate-fade-in-up">
            <div className="flex items-center justify-center md:justify-start group mb-4">
              <div className="relative animate-float">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={50} 
                  height={50} 
                  className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 hover:rotate-[360deg]"
                  priority={false}
                />
              </div>
              <Link href="/" className="text-xl font-bold ml-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 animate-shimmer">
                Vigyan Darshan
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              Exploring the intersection of science, philosophy, and spirituality through engaging content and meaningful discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {['Home', 'About Us', 'Contact Us', 'Blog'].map((link, index) => (
                <Link 
                  key={link}
                  href={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '')}`}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 transform hover:translate-x-2 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">Connect With Us</h3>
            <div className="flex justify-center md:justify-end gap-6 text-2xl">
              {[
                { href: "https://facebook.com", icon: "facebook-f", color: "blue" },
                { href: "https://twitter.com", icon: "twitter", color: "blue" },
                { href: "https://www.instagram.com/vigyandarshan/", icon: "instagram", color: "pink" },
                { href: "https://www.youtube.com/@Vigyandarshan", icon: "youtube", color: "red" }
              ].map((social, index) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon}
                  className={`hover:text-${social.color}-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-bounce`}
                  style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}
                >
                  <i className={`fab fa-${social.icon} drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]`} aria-hidden="true"></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center text-sm text-gray-400">
            <p className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300">
              &copy; {new Date().getFullYear()} Vigyan Darshan. All rights reserved.
            </p>
            <p className="mt-2 group">
              Made with <span className="text-red-500 animate-heartbeat inline-block">❤</span> in India
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
