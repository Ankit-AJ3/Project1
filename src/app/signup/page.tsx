"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      
      const formData = new FormData(e.currentTarget);
  
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      };

      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          router.push('/login?registered=true');
        } else {
          setError(result.error || 'Failed to create account');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: "url('/bg-pattern.png')",
            backgroundSize: '200px 200px'
          }}
        />
        <div className="container mx-auto px-4 py-24 sm:py-32 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12">
            Sign Up for Vigyan Darshan
          </h1>

          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 text-red-100 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  placeholder="Enter your email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-2 w-full px-4 py-3 bg-white/5 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  placeholder="Create a password"
                  required
                  minLength={8}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-300">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }