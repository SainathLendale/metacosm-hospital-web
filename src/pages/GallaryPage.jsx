import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const images = [
    { id: 1, url: "/img/Metacosm hospital waiting room.webp", title: "Nature 1" },
    { id: 2, url: "/img/Metacosm hospital opening.webp", title: "Nature 2" },
    { id: 3, url: "/img/Metacosm hospital operation .webp", title: "Nature 3" },
    { id: 4, url: "/img/Metacosm hospital Reception.webp", title: "Nature 4" },
    { id: 5, url: "/img/Metacosm hospital operating room.webp", title: "Nature 5" },
    // { id: 5, url: "src/img/Metacosm hospital operating room.webp", title: "Nature 5" },
    { id: 6, url: "./img/Metacosm hospital Reception counter.webp", title: "Nature 6" },

  
  ];

  // const videos = [
  //   { id: 1, thumbnail: "/api/placeholder/400/300", title: "Video 1" },
  //   { id: 2, thumbnail: "/api/placeholder/400/300", title: "Video 2" },
  //   { id: 3, thumbnail: "/api/placeholder/400/300", title: "Video 3" }
  // ];

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openFullscreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => 
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => 
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  // Group images into rows of 3
  const imageRows = images.reduce((rows, image, index) => {
    if (index % 3 === 0) rows.push([]);
    rows[rows.length - 1].push(image);
    return rows;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-10  md:p-8">
      {/* Mobile Image Grid Section */}
      <section className="mb-8 md:hidden">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Images</h2>
        <div className="space-y-4">
          {imageRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2 justify-between">
              {row.map((image, index) => (
                <div
                  key={image.id}
                  className={`w-1/3 transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${(rowIndex * 3 + index) * 100}ms`
                  }}
                  onClick={() => openFullscreen(image)}
                >
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-white text-sm font-semibold px-1 text-center">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Grid Section */}
      <section className="hidden md:block mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Image Gallery</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => openFullscreen(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Slider Section */}
      {/* <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-8">Video Gallery</h2>
        <div className="relative">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <div className="w-full h-full transition-transform duration-500 ease-in-out">
              <img
                src={videos[currentVideoIndex].thumbnail}
                alt={videos[currentVideoIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold px-4 text-center">
                  {videos[currentVideoIndex].title}
                </h3>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevVideo}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextVideo}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section> */}

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 opacity-0 scale-95 animate-fade-scale-in"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain px-4"
            onClick={(e) => e.stopPropagation()}
          />
          <h3 className="absolute bottom-8 text-white text-xl md:text-2xl font-semibold px-4 text-center">
            {selectedImage.title}
          </h3>




        </div>
      )}

      <style jsx>{`
        @keyframes fadeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-scale-in {
          animation: fadeScaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallary;
