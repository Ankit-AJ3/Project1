import Images from "@/components/Images";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: '200px 200px'
        }}
      />
      <div className="relative">
        <div className="flex flex-col items-center pt-20 md:pt-32">
          <div className="animate-bounce">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 drop-shadow-2xl transition-transform duration-500 hover:rotate-180"
              priority
            />
          </div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-in-down text-center drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Vigyan Darshan
          </h1>
        </div>
        <div className="min-h-screen">
          <section className="py-10 md:py-20 text-white h-full">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-24 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                Subscribe our Youtube Channel
              </h2>
              <p className="text-base md:text-xl mb-8 md:mb-12 px-4 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Explore, learn, and grow with us as we embark on an exciting
                journey through the fascinating world of science, philosophy, and
                spirituality. Join our community of curious minds!
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@Vigyandarshan"
                className="inline-flex items-center py-3 px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse hover:animate-none"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe Now
              </a>
            </div>
            <div className="w-full border-t-2 border-white/20 my-12 md:my-16 shadow-md"></div>
          </section>
          <div className="container mx-auto text-center px-4 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Featured Videos</h2>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-12">Dive deep into our curated content exploring the intersection of science, philosophy and spirituality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-4 md:px-6 xl:px-8 max-w-7xl mx-auto">
            <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
              <iframe
                width="400"
                height="400"
                src="https://www.youtube-nocookie.com/embed/Ad2pcV2Oe_s?start=19"
                title="Vigyan Darshan Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-purple-500/20"
              ></iframe>
            </div>
            <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
              <iframe
                width="400" 
                height="400"
                src="https://www.youtube-nocookie.com/embed/eGRf6TJdwb4"
                title="Vigyan Darshan Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-purple-500/20"
              ></iframe>
            </div>
            <div className="w-full aspect-square transition-all duration-300 hover:scale-105 hover:rotate-1">
              <iframe
                width="400"
                height="400"
                src="https://www.youtube-nocookie.com/embed/RYw9e942ZbA"
                title="Vigyan Darshan Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg shadow-2xl backdrop-blur-sm bg-black/30 hover:shadow-purple-500/20"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-white/20 my-8 sm:my-10 md:my-12 lg:my-16 xl:my-20 shadow-md"></div>
        <div className="w-full max-w-7xl mx-auto">
          <Images />
        </div>
      </div>
    </div>
  );
}
