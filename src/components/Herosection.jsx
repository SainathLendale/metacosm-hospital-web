






import React, { useState, useEffect, useRef } from "react";
import img1 from "/src/img/Metacosm hospital operation .webp";
import img2 from "/src/img/metacosm Hairline advancement.webp";


import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaPhoneAlt } from "react-icons/fa"; // Call icon from react-icons

function Herosection() {
  const images = [img1, img2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageSectionRef = useRef(null);

  // Function to handle animation on hover
  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100  relative overflow-hidden">
      <div className="bg-gray-50 px-4 py-16 md:py-24 lg:px-12">
        <div className="max-w-4xl mx-auto">

          <div className=" md:flex md:justify-center md:gap-9 ">
          {/* Logo and Heading */}
          <div className="flex items-center gap-6 mt-3  justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-shine">
              Metacosm
            </h2>
            {/* <img src={} alt="Logo" className="w-16 h-auto" /> */}
          </div>

          {/* Subheading */}
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-semibold text-secondary mb-5">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-third animate-shine">
                Hair Transplant <span className="text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-secondary to-third animate-shine"> & </span>
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-shine">
                Facial Solution
              </h1>
            </div>

            {/* Call-to-Action Button */}
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex items-center px-4 py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition duration-200 mx-auto"
            >
              <FaPhoneAlt className="mr-2" />
              <Link to="/form">
                <span>Book Appointment</span>
              </Link>
            </button>
          </div>
          </div>
          {/* Image Slider */}
          <div className="relative w-full h-40 md:h-80 mt-5 overflow-hidden rounded-lg shadow-lg   ">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  index === currentImageIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-secondary font-semibold text-lg leading-relaxed mt-6 text-center lg:text-xl">
            हेअर ट्रान्सप्लांट सेंटर आणि चेहऱ्याचे सौंदर्यवर्धक उपचार .{" "}
            <span className="font-bold text-primary">
              केस व सौंदर्याचे पुनरुज्जीवन सहज शक्य आहे आता आपल्या नांदेडमध्ये
            </span>
          </p>

          {/* Marquee Component */}
          {/*   */}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          .animate-shine {
            background-size: 200% auto;
            animation: shine 3s linear infinite;
          }

          @keyframes shine {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Herosection;
