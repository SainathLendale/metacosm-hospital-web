




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import aboutImg from "../img/metacosm hospital about .webp";

const About = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  // Array of colors for dynamic background
  const colors = [
    
    "bg-pink-200",
    "bg-purple-200",
   " bg-pink-300",
    
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate the color index based on scroll position (20px intervals)
      const colorIndex = Math.floor(scrollY / 350) % colors.length;
      setBgColor(colors[colorIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [colors]);

  return (
   
<div  className={`min-h-screen ${bgColor} transition-colors duration-300 flex justify-center items-center `}>
  
    <section
     
    >
<h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
         About Metacosm
        </h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>

      <div className="flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 lg:px-24  bg-gradient-to-br from-gray-50 to-gray-100  m-4 pb-4 pt-5 rounded-2xl">
        {/* Left Side Image */}
        <div
          className={`w-full md:w-1/2 flex justify-center transform transition duration-700 ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
          ref={ref}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right Side Content */}
        <div
          className={`w-full md:w-1/2 mt-8 md:mt-0 transform transition duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm uppercase text-gray-500 mb-2">about</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4    bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ">Metacosm  </h2>
          <p className="text-gray-700 mb-6">
          Metacosm Hair and Facial Solutions is a cosmetic clinic specializing in hair restoration and facial treatments. They offer services such as hair transplants, eyebrow hair transplants, body hair transplants, and facial hair transplants.
          </p>

         
          {/* More About Button */}
          <div className="text-right">
            <button className="px-6 py-2 bg-secondary text-white rounded-md shadow-md hover:bg-primary transition">
              <Link to="/about" >Aboute more ..</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
