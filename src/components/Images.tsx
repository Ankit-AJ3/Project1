"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    // Prevent click from propagating to parent div which would also trigger close
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="w-full overflow-hidden pb-6 sm:pb-8 md:pb-10 pt-16 sm:pt-24 md:pt-32">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* First row of images */}
          <div onClick={() => handleImageClick("/img1.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img1.jpg" 
              alt="Image 1" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div onClick={() => handleImageClick("/img2.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img2.jpg" 
              alt="Image 2" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div onClick={() => handleImageClick("/img3.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img3.jpg" 
              alt="Image 3" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy" 
            />
          </div>
          <div onClick={() => handleImageClick("/img4.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img4.jpg" 
              alt="Image 4" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div onClick={() => handleImageClick("/img5.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img5.jpg" 
              alt="Image 5" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div onClick={() => handleImageClick("/img1.jpg")} className="cursor-pointer">
            <Image 
              width={400} 
              height={400} 
              src="/img1.jpg" 
              alt="Image 6" 
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl font-bold z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Full size image"
              fill
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Images