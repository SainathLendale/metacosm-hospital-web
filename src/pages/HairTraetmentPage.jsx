








import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';


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
const HairTreatmentPage = () => {
  const treatments = [
    {
      image: "/img/hair loos male.webp",
      path: "/hairTransplant",
      title: "Hair loss treatment in men ",
       description: "Hair loss in men, particularly male pattern baldness, is a prevalent concern affecting millions worldwide.Male pattern baldness typically receding hairline"
    },
    {
      image: "/img/hair loss female.webp",
      path: "/hairTreatment",
      title: "Hair loss treatment in women",
      description: "Hair loss in women can be a distressing and emotionally challenging experience, often impacting self-esteem and quality of life"
    },
    // {
    //   image: "/api/placeholder/400/400",
    //   path: "/skinCare",
    //   title: "Skin Care",
    //   description: "Cosmetic care enhances beauty and boosts confidence with personalized treatments and professional techniques. From rejuvenating facials to laser therapies, skin care services provide long-lasting solutions for healthy and youthful skin."
    // },
    {
      image: "/img/hair thining.webp",
      path: "/skinCare",
      title: "Hair thinning",
      description: "Hair thinning and baldness are becoming increasingly common among women. As a result of the negative impacts of scalp difficulties, thinning hair."
    },
    {
      image: "/img/gray hair.webp",
      path: "/skinCare",
      title: "Grey hair",
      description: "Grey hair, also known as achromotrichia, is a natural part of the aging process and occurs when melanocytes, the pigment-producing cells in hair follicles."
    },
    {
      image: "/img/dandruff.webp",
      path: "/skinCare",
      title: "Dandruff",
      description: "Dandruff is a scalp disorder in which tiny flakes of dry skin fall off. You can detect flakes in your hair or on your shoulders if you have dark hair or are wearing dark colours."
    },
    {
      image: "/img/alopecia.webp",
      path: "/skinCare",
      title: "Alopecia",
      description: "Alopecia is a broad term used to describe various types of hair loss that occur when the immune system mistakenly attacks hair follicles, leading to hair loss in patches."
    },
    {
      image: "/img/hair damage.webp",
      path: "/skinCare",
      title: "Hair Damage",
      description: "Hair damage encompasses a range of issues affecting the health and integrity of the hair shaft, resulting in dryness, breakage, split ends, and overall lackluster appearance."
    },
    {
      image: "/img/metacosm Hairline advancement.webp",
      path: "/skinCare",
      title: "PRP | Stem Cells Therpay",
      description: "PRP therapy involves extracting a sample of the patient’s blood and processing it to isolate the platelet-rich plasma, which contains a concentrated source of growth."
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24 animate-fade-in mt-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Advanced Hair Treatment Solutions
        </h1>
        
        <div className="relative max-w-4xl mx-auto mb-12">
          <img 
            src="/img/metacosm hair treatment page header img.webp" 
            alt="Hair Treatment"
            className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Transform Your Hair Journey
          </h2>
          
          <ExpandableText 
            initialText="Hair treatment services encompass a variety of procedures and products designed to improve the health, appearance, and manageability of hair.

These treatments can include deep conditioning treatments to hydrate and repair damaged hair, keratin treatments to reduce frizz and enhance shine, scalp treatments to improve scalp health and promote hair growth, color protection treatments to maintain vibrancy and prevent fading, hair repair treatments for damaged hair, Olaplex treatments to repair and strengthen hair bonds, and hair spa treatments for overall nourishment and relaxation.

The specific treatment chosen depends on individual hair needs and concerns, such as dryness, damage, thinning, or color-treated hair. Consulting with a professional stylist or trichologist can help determine the most suitable treatment for achieving desired hair goals."
            expandedText={
              <>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our team of expert trichologists and hair care specialists uses state-of-the-art diagnostic tools to create personalized treatment plans that target your specific hair concerns. Whether you're dealing with hair loss, thinning, damage, or simply want to maintain healthy hair, we have the perfect solution for you.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Using a combination of advanced therapies, including PRP treatment, laser therapy, and specialized scalp treatments, we help stimulate natural hair growth and improve overall hair health. Our holistic approach ensures that you not only see immediate results but also experience long-lasting benefits.
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

export default HairTreatmentPage;







