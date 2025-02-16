

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom';


// ExpandableText component for reusable expand/collapse functionality
const ExpandableText = ({ initialText, expandedText, maxHeight = "max-h-28" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative">
      <div className={`relative ${!isExpanded ? maxHeight + ' overflow-hidden' : 'animate-expand'}`}>
        <p className="text-gray-600 leading-relaxed mb-4">
          {initialText}
          {!isExpanded && '...'}
        </p>
        {isExpanded && expandedText}
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 mx-auto mt-4 px-6 py-2 bg-secondary text-white rounded-full hover:shadow-lg transition-all duration-300"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
        <ChevronDown className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

// Enhanced TreatmentCard with 3D effect
const TreatmentCard = ({ image, title, description, path, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 
  const cardRef = useRef(null);

  const [showMore, setShowMore] = useState(false); // State to toggle description

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
   
  };

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{
       
        
       
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >

<div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform duration-500 transform-gpu" />
<div className="absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full -ml-12 -mb-12 transition-transform duration-500 transform-gpu" />
      <div className="relative p-8">
        <div className="relative mx-auto w-48 h-48 mb-6">
          <div className={`absolute inset-0 bg-red-100 rounded-full transition-transform duration-500 ${isHovered ? 'rotate-12 scale-105' : 'rotate-6'}`} />
          <div className={`absolute inset-0 bg-red-200 rounded-full transition-transform duration-500 ${isHovered ? '-rotate-12 scale-105' : '-rotate-6'}`} />
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`}
            />
          </div>
        </div>

        <div className="relative text-center z-10">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          
          <div className="text-gray-700 mb-6">
            <ExpandableText 
              initialText={description.slice(0, 100)} // Show first 100 chars initially
              expandedText={description.slice(100)} // Show the rest on expand
            />
          </div>

         
        </div>
      </div>
    </div>
  );
};

// Main HairTreatmentPage component
const SkinCareTreatmentsPage = () => {
  const treatments = [
    {
      image: "/img/Anti Ageing Treatment .webp",
      path: "/hairTransplant",
      title: "Anti Ageing Treatment ",
       description: "Anti-aging treatments encompass a range of techniques and procedures aimed at reducing the visible signs of aging, such as wrinkles."
    },
    {
      image: "/img/metacosm acne img.webp",
      path: "/hairTreatment",
      title: "Acne treatment",
      description: "Acne treatment encompasses a range of therapies aimed at managing and reducing acne breakouts, inflammation, and scarring."
    },
    {
      image: "/img/metacosm under eye reatmens.webp",
      path: "/skinCare",
      title: "Under-eye treatments",
      description: "Under-eye treatments focus on addressing concerns such as dark circles, puffiness, fine lines, and wrinkles in the delicate skin around the eyes."
    },
    {
      image: "/img/Facial rejuvenation.webp",
      path: "/skinCare",
      title: "Facial rejuvenation",
      description: "Facial rejuvenation encompasses various treatments and procedures aimed at revitalizing the appearance of the face, reducing signs of aging."
    },
    {
      image: "/img/mole removal.webp",
      path: "/skinCare",
      title: "Mole removal",
      description: "Moles are little skin cells that can form on any part of the body over time. They come in a variety of sizes, shapes, and shades."
    },
    {
      image: "/img/metacosm complexion improvement.webp",
      path: "/skinCare",
      title: "Complexion improvement",
      description: "Complexion improvement treatments are aimed at enhancing the overall appearance and health of the skin, resulting in a smoother."
    },
    // {
    //   image: "/api/placeholder/400/400",
    //   path: "/skinCare",
    //   title: "Skin and body polishing",
    //   description: "Skin and body polishing treatments are exfoliating procedures designed to remove dead skin cells, unclog pores, and improve skin texture "
    // },
    {
      image: "/img/facisl hyperpigmentation.webp",
      path: "/skinCare",
      title: "Facial hyperpigmentation therapy",
      description: "Facial hyperpigmentation therapy is a specialized treatment aimed at reducing the appearance of hyperpigmentation."
    },
    {
      image: "/img/suntan removal metacosm.webp",
      path: "/skinCare",
      title: "Suntan removal",
      description: "Suntan removal treatments are designed to lighten and fade unwanted tan lines or dark patches on the skin caused by sun exposure Suntans the skin."
    },
    {
      image: "/img/LOW-LAZER-LIGHT-THERAPY metacosm.webp",
      path: "/skinCare",
      title: "Low-level laser therapy",
      description: "Low-level laser therapy (LLLT), also known as cold laser therapy or photobiomodulation, is a non-invasive treatment that uses low-level laser light."
    },
    {
      image: "/img/tatto removal treatment.webp",
      path: "/skinCare",
      title: "Tattoo removal",
      description: "Tattoo removal is a cosmetic procedure aimed at permanently removing unwanted tattoos from the skin. Tattoos are created by injecting ink skin."
    }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24 animate-fade-in mt-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Discover Your Perfect Skin Care Journey
        </h1>
        
        <div className="relative max-w-4xl mx-auto mb-12">
          <img 
            src="/img/metacosm hospital about .webp" 
            alt="Hair Treatment"
            className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Advanced Skin and Cosmetic Treatments at Metacosm Hospital, Nanded
          </h2>
          
          <ExpandableText 
            initialText="Hair treatment services encompass a variety of procedures and products designed to improve the health, appearance, and manageability of hair.

These treatments can include deep conditioning treatments to hydrate and repair damaged hair, keratin treatments to reduce frizz and enhance shine, scalp treatments to improve scalp health and promote hair growth, color protection treatments to maintain vibrancy and prevent fading, hair repair treatments for damaged hair, Olaplex treatments to repair and strengthen hair bonds, and hair spa treatments for overall nourishment and relaxation.

The specific treatment chosen depends on individual hair needs and concerns, such as dryness, damage, thinning, or color-treated hair. Consulting with a professional stylist or trichologist can help determine the most suitable treatment for achieving desired hair goals."
            expandedText={
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                At Metacosm Hospital in Nanded, we offer a comprehensive range of skin and cosmetic treatments to help you achieve flawless skin and maintain a youthful appearance. Whether you're looking to reduce the visible signs of aging, enhance your complexion, or address specific skin concerns, our expert dermatologists and cosmetic professionals are here to help.

Anti-aging treatments are designed to reduce wrinkles and fine lines, restoring a smoother, younger-looking skin texture. For those struggling with acne, we provide effective therapies that target breakouts, reduce inflammation, and minimize scarring, giving you clearer skin. Under-eye treatments at Metacosm Hospital specifically address dark circles, puffiness, and fine lines around the eyes, providing a refreshed look.

If you're dealing with a double chin, our specialized treatment focuses on reducing excess fat and tightening the skin to enhance your jawline and facial contour. For overall facial rejuvenation, we offer advanced procedures aimed at revitalizing your skin, reducing age-related signs such as sagging or wrinkles, and enhancing your skin's natural glow.


                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                We also provide mole removal services for individuals looking to safely remove unsightly moles. Our complexion improvement treatments aim to smoothen and enhance the overall appearance of your skin, making it vibrant and youthful. Skin and body polishing treatments at Metacosm Hospital help to exfoliate and rejuvenate your skin, removing dead cells and leaving your skin feeling soft and refreshed.

For those with uneven skin tone or discoloration, facial hyperpigmentation therapy is offered to lighten dark spots and even out skin tone. Additionally, our suntan removal treatments can help you eliminate stubborn tan lines or dark patches caused by sun exposure. Low-level laser therapy (LLLT) is a non-invasive solution that can help with various skin conditions, promoting skin healing and rejuvenation.

Lastly, we offer tattoo removal services for individuals looking to permanently remove unwanted tattoos. Metacosm Hospital also specializes in hair transplant and facial solutions in Nanded, offering advanced treatments to address hair thinning, loss, and restore natural hair growth. At Metacosm Hospital, Nanded, we are committed to providing you with safe, effective, and personalized cosmetic treatments to enhance your natural beauty.
                </p>
              </>
            }
          />
        </div>
      </div>

      {/* Treatment Cards Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.path}
              {...treatment}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCareTreatmentsPage;














