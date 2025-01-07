import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Blog - Vigyan Darshan',
  description: 'Explore the latest scientific discoveries, technological innovations, and research breakthroughs on the Vigyan Darshan blog.',
}

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Latest Discoveries in Quantum Physics",
      date: "2024-01-15",
      image: "/img1.jpg",
      excerpt: "Exploring groundbreaking discoveries in quantum mechanics and their implications for modern science.",
      slug: "quantum-physics-discoveries"
    },
    {
      id: 2, 
      title: "Advances in Space Exploration",
      date: "2024-01-12",
      image: "/img2.jpg",
      excerpt: "Recent developments in space technology and upcoming missions to explore our solar system.",
      slug: "space-exploration-advances"
    },
    {
      id: 3,
      title: "Environmental Science Breakthroughs",
      date: "2024-01-10",
      image: "/img3.jpg",
      excerpt: "New research findings in environmental science and their impact on climate change solutions.",
      slug: "environmental-science-breakthroughs"
    }
  ];

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
          Vigyan Darshan Blog
        </h1>
        <p className="text-center text-gray-200 text-lg mb-12 max-w-3xl mx-auto px-4">
          Explore the latest scientific discoveries, technological innovations, and research breakthroughs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={post.id === 1}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
