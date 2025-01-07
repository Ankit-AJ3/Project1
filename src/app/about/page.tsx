import Link from 'next/link'
import { Metadata } from 'next'

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'About Us - Vigyan Darshan',
  description: 'Learn about Vigyan Darshan - where ancient and modern science meet. We explore cosmology, philosophy, mathematics, medicine, psychology, technology and more.',
}

export default function About() {
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
          About Vigyan Darshan
        </h1>
        <p className="text-center text-gray-200 text-lg mb-12 max-w-3xl mx-auto px-4">
          Where ancient wisdom meets modern science
        </p>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="prose prose-lg text-gray-200 max-w-none">
            <p className="mb-8 leading-relaxed">
              Vigyan Darshan is such an institution where all types of science, from ancient to modern, are discussed logically. From cosmology to philosophy, mathematics to medicine, and psychology to technology, we explore it all—physical to spiritual.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Video Editing and Voice Over
              </h3>
              <p className="text-gray-200">By Mohit and Nishant</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Us
              </h3>
              <p className="text-gray-200">
                Email: mgtmarketers@gmail.com
              </p>
              <Link 
                href="https://instagram.com/vigyandarshan" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-300 mt-2"
              >
                Follow us on Instagram
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
