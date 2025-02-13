// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
// import before from "../img/close-up-beautiful-girl-portrait.jpg";
// import { FaPhoneAlt } from "react-icons/fa"; // Call icon from react-icons
// import img from '../img/patient-undergoing-microneedling-procedure.jpg';
// import { Link } from 'react-router-dom';
// const BeforeAfter = () => {
//   const cardsData = [
   
//     {
//       id: 2,
//       heading: "Urban Exploration",
//       bgColor: "from-blue-100 to-indigo-50",
//       images: [
//         { 
//           src: "src/img/Metacosm hospital before 3.jpg", 
//           alt: "City skyline",
//           beforeCaption: "Before",
//           afterCaption: "After"
//         },
//         { 
//           src: "src/img/Metacosm hospital after3.jpg", 
//           alt: "Street photography",
//           beforeCaption: "Before",
//           afterCaption: "After"
//         }
//       ],

//     },
//     {
//       id: 3,
//       heading: "Wildlife Series",
//       bgColor: "from-amber-100 to-yellow-50",
//       images: [
//         { 
//           src: "src/img/Metacosm hospital before 4.jpg", 
//           alt: "Safari animals",
//           beforeCaption: "Before",
//           afterCaption: "Before"
//         },
//         { 
//           src: "src/img/Metacosm hospital after 4.jpg", 
//           alt: "Bird watching",
//           beforeCaption: "After",
//           afterCaption: "After"
//         }
//       ],

//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [direction, setDirection] = useState('next');
//   const totalCards = cardsData.length;

//   const handleTransition = (newIndex, dir) => {
//     setDirection(dir);
//     setIsAnimating(true);
//     setCurrentIndex(newIndex);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const nextSlide = () => {
//     handleTransition((currentIndex + 1) % totalCards, 'next');
//   };

//   const prevSlide = () => {
//     handleTransition((currentIndex - 1 + totalCards) % totalCards, 'prev');
//   };

//   const goToFirst = () => {
//     handleTransition(0, 'prev');
//   };

//   const goToLast = () => {
//     handleTransition(totalCards - 1, 'next');
//   };

//   const NavButton = ({ onClick, children, className }) => (
//     <button
//       onClick={onClick}
//       className={`flex items-center justify-center transition-all duration-300 
//       hover:scale-110 active:scale-95 bg-white/90 backdrop-blur-sm
//       text-gray-800 shadow-lg hover:shadow-xl
//       hover:bg-white/95 ${className}
//       transform hover:-translate-y-1 active:translate-y-0`}
//       aria-label="Navigation button"
//     >
//       {children}
//     </button>
//   );

//   return (
//     <div className={`w-full max-w-4xl mx-auto relative p-6 rounded-2xl transition-colors duration-700 bg-gradient-to-br ${cardsData[currentIndex].bgColor}`}>
//       {/* Main carousel container */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
//          Hair Transplant Result
//         </h1>
//         <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
//       </div>
//       <p className='text-center mb-2'> to see & Experience such before and after,Contact Us</p>
     
//       <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">

     
//         <div 
//           className={`flex transition-transform duration-500 ease-out ${
//             isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
//           }`}
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {cardsData.map((card, index) => (
//             <div 
//               key={card.id}
//               className="w-full flex-shrink-0"
//             >
//               <div className="p-6 group">
//                 {/* Heading with animation */}
//                 {/* <h2 className="text-2xl font-bold mb-4 text-gray-800 transform transition-transform group-hover:scale-105">
//                   {card.heading}
//                 </h2> */}
                
//                 {/* Images container */}
//                 <div className="flex gap-4 mb-4">
//                   {card.images.map((image, imageIndex) => (
//                     <div key={imageIndex} className="w-1/2 space-y-2 transform transition-all duration-300 hover:translate-y-[-4px]">
//                       <p className="text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                         {image.beforeCaption}
//                       </p>
                      
//                       <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="w-full h-32 object-cover transform transition-transform hover:scale-105"
//                         />
//                       </div>
                      
//                       <p className="text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                         {image.afterCaption}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
                
//                 <p className="text-gray-600 leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

      


//       {/* Navigation buttons */}
//       <NavButton
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:rotate-[-12deg]"
//       >
//         <ArrowLeft className="w-6 h-6" />
//       </NavButton>
      
//       <NavButton
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:rotate-12"
//       >
//         <ArrowRight className="w-6 h-6" />
//       </NavButton>

//       {/* Bottom navigation */}
//       <div className="flex items-center justify-between mt-6">
//         {/* <div className="flex gap-3"> */}
//           {/* <NavButton
//             onClick={goToFirst}
//             className="px-4 py-2 rounded-lg flex items-center gap-2 hover:gap-3"
//           >
//             <ChevronsLeft className="w-5 h-5" />
//             First
//           </NavButton>
//           <NavButton
//             onClick={goToLast}
//             className="px-4 py-2 rounded-lg flex items-center gap-2 hover:gap-3"
//           >
//             Last
//             <ChevronsRight className="w-5 h-5" />
//           </NavButton> */}
//         {/* </div> */}

//         {/* Progress indicators */}
//         <div className="flex justify-center gap-2">
//           {cardsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleTransition(index, index > currentIndex ? 'next' : 'prev')}
//               className={`transition-all duration-300 rounded-full
//                 ${currentIndex === index 
//                   ? 'w-8 h-2 bg-secondary' 
//                   : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'
//                 }
//                 hover:scale-125 active:scale-95
//                 `}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//            <button
                
//                  className="flex items-center px-3 py-3 mb-3  bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition duration-200 "
//                >
//                  {/* Call Icon */}
//                  <FaPhoneAlt className="mr-1 " />
//                  {/* Button Text */}
//                   <Link to="/form">
//                 <span>Book Appointment</span>
//               </Link>
//                </button>
//       </div>
     
//     </div>
//   );
// };

// export default BeforeAfter;




import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

const BeforeAfter = () => {
  const cardsData = [
  
    {
      id: 2,
      heading: "Face Lift",
      bgColor: "from-green-100 to-yellow-50",
      images: [
        { 
          src: "/src/img/metacosm before result image.webp", 
          alt: "Face Lift Before",
          beforeCaption: "Before Treatment",
         
        },
        { 
          src: "/src/img/metacosm after hair transplant image.webp", 
          alt: "Face Lift After",
          beforeCaption: "Before Treatment",
         
        }
      ],
    
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const totalCards = cardsData.length;

  const handleTransition = (newIndex, dir) => {
    setDirection(dir);
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    handleTransition((currentIndex + 1) % totalCards, 'next');
  };

  const prevSlide = () => {
    handleTransition((currentIndex - 1 + totalCards) % totalCards, 'prev');
  };

  const NavButton = ({ onClick, children, className }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition-all duration-300 
      hover:scale-110 active:scale-95 bg-white/90 backdrop-blur-sm
      text-gray-800 shadow-lg hover:shadow-xl
      hover:bg-white/95 ${className}
      transform hover:-translate-y-1 active:translate-y-0`}
      aria-label="Navigation button"
    >
      {children}
    </button>
  );

  return (
    <div className={`w-full max-w-4xl mx-auto relative p-6 rounded-2xl transition-colors duration-700 bg-gradient-to-br ${cardsData[currentIndex].bgColor}`}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          Treatment Results
        </h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      
      <p className='text-center mb-2'>See & Experience Our Treatment Results, Contact Us</p>
     
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm rounded-xl shadow-lg">
        <div 
          className={`flex transition-transform duration-500 ease-out ${
            isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardsData.map((card) => (
            <div 
              key={card.id}
              className="w-full flex-shrink-0"
            >
              <div className="p-6 group">
                <div className="flex gap-4 mb-4">
                  {card.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="w-1/2 space-y-2 transform transition-all duration-300 hover:translate-y-[-4px]">
                      <p className="text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.beforeCaption}
                      </p>
                      
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading='lazy'
                          className="w-full h-full object-cover transform transition-transform hover:scale-105"
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.afterCaption}
                      </p>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <NavButton
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:rotate-[-12deg]"
      >
        <ArrowLeft className="w-6 h-6" />
      </NavButton>
      
      <NavButton
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:rotate-12"
      >
        <ArrowRight className="w-6 h-6" />
      </NavButton>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex justify-center gap-2">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTransition(index, index > currentIndex ? 'next' : 'prev')}
              className={`transition-all duration-300 rounded-full
                ${currentIndex === index 
                  ? 'w-8 h-2 bg-secondary' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'
                }
                hover:scale-125 active:scale-95
                `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {/* Handle booking logic */}}
          className="flex items-center px-3 py-3 mb-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition duration-200"
       
       >
           <Phone className="mr-1 w-4 h-4" />
          <Link to="/form">
       
                 <span>Book Appointment</span>
              </Link>
        </button>
      </div>
    </div>
  );
};

export default BeforeAfter;