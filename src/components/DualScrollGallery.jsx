


import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import { Check, ExternalLink } from 'lucide-react';
import {Link} from  'react-router-dom'


const DualScrollGallery = () => {
  const images = [
    { id: 1, title: 'Image 1', src: '/img/Metacosm-hospital-operation.webp' },
    { id: 2, title: 'Image 2', src: '/img/Metacosm-hospital-opening.webp' },
    { id: 3, title: 'Image 3', src: '/img/Metacosm-hospital-operating-room.webp' },
    { id: 4, title: 'Image 4', src: '/img/Metacosm-hospital-waiting-room.webp' },
  ];
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const upperRowRef = useRef(null);
  const lowerRowRef = useRef(null);

  const scrollImages = [...images, ...images];

  const handleManualScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth / 2;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      {/* Gallery Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          Dynamic Gallery
        </h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>

      {/* Gallery Container */}
      <div className="relative max-w-screen-xl mx-auto px-4">
        {/* Auto-scroll Toggle */}
        <button
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className="absolute top-0 right-4 z-10 bg-white/80 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-all duration-300 hover:bg-white"
        >
          {isAutoScrolling ? 'Pause' : 'Play'} Auto-scroll
        </button>

        {/* Navigation Buttons for Upper Row */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => handleManualScroll(upperRowRef, 'left')}
            className="bg-white/50 hover:bg-white/75 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => handleManualScroll(upperRowRef, 'right')}
            className="bg-white/50 hover:bg-white/75 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Upper Row - Scrolling */}
        <div className="mb-4 overflow-hidden">
          <div 
            ref={upperRowRef}
            className={`flex overflow-x-auto no-scrollbar ${isAutoScrolling ? 'animate-scroll-left' : ''}`}
          >
            {scrollImages.map((image,i) => (
              <div
                key={`upper-${image.id}-${i}`}
                className="flex-none w-72 p-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square group">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons for Lower Row */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => handleManualScroll(lowerRowRef, 'left')}
            className="bg-white/50 hover:bg-white/75 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => handleManualScroll(lowerRowRef, 'right')}
            className="bg-white/50 hover:bg-white/75 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Lower Row - Scrolling */}
        <div className="overflow-hidden">
          <div 
            ref={lowerRowRef}
            className={`flex overflow-x-auto no-scrollbar ${isAutoScrolling ? 'animate-scroll-right' : ''}`}
          >
            {scrollImages.map((image,i) => (
              <div
                key={`lower-${image.id}-${i}`}
                className="flex-none w-72 p-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square group">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading='lazy'
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
<div className='flex justify-center mt-5'>
<button 
            className="flex  items-center px-6 py-2 border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-colors"
          >
            <Link to="/gallary" > See All Images</Link>
            <ExternalLink className="ml-2 w-5 h-5" />
          </button>
</div>
       
      </div>

      {/* Full Screen Image Modal */}
     {/* Full Screen Image Modal */}
{selectedImage && (
  <div 
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)} // Clicking outside the modal closes it
  >
    <div 
      className="relative max-w-5xl w-full"
      onClick={(e) => e.stopPropagation()} // Prevents parent onClick from firing
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)} // Properly closes the modal
        className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
      >
        <X size={32} />
      </button>

      {/* Full Image */}
      <div className="relative">
        <img
          src={selectedImage.src}
          alt={selectedImage.title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        
        {/* Image Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
          <h2 className="text-xl font-semibold">{selectedImage.title}</h2>
        </div>
      </div>
    </div>
  </div>
)}


      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default DualScrollGallery;