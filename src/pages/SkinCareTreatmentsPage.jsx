




// import React, { useState, useRef } from 'react';

// const treatments = [
//   {
//     id: 1,
//     name: "Ear Lobe Repair",
//     description: "Ear lobe repair is a cosmetic procedure designed to address stretched, torn, or damaged earlobes caused by trauma, prolonged wearing of heavy earrings.",
//     fullDescription: "Advanced hyaluronic acid technology to deeply moisturize and restore skin's natural barrier.",
//     color: "from-blue-100 to-blue-300"
//   },
//   {
//     id: 2,
//     name: "Face Lift",
//     description: "A facelift, also known as rhytidectomy, is a surgical procedure designed to address signs of aging in the face and neck by lifting and tightening sagging skin and tissues.",
//     fullDescription: "Combines gentle exfoliation with deep-pore cleansing to remove dead skin cells and impurities.",
//     color: "from-green-100 to-green-300"
//   },
//   {
//     id: 3,
//     name: "Lipoma removal",
//     description: "A lipoma is a benign tumor composed of fat cells that typically develops just beneath the skin. While lipomas are usually harmless and painless, they sometimes grow large.",
//     fullDescription: "Cutting-edge peptides and antioxidants to stimulate collagen production and reduce wrinkles.",
//     color: "from-pink-100 to-pink-300"
//   },
//   {
//     id: 4,
//     name: "Vitiligo patches therapy",
//     description: "Vitiligo is a chronic skin condition characterized by the loss of pigment-producing cells (melanocytes), resulting in depigmented patches or white spots on the skin.",
//     fullDescription: "Advanced vitamin C and natural extracts to illuminate skin and reduce hyperpigmentation.",
//     color: "from-yellow-100 to-yellow-300"
//   },
//   {
//     id: 5,
//     name: "Keloid scar removal",
//     description: "Keloids are raised, overgrown scars that extend beyond the boundaries of the original wound and are characterized by their thick, fibrous texture and tendency to after treatment.",
//     fullDescription: "Salicylic acid and tea tree oil treatment to fight bacteria and reduce inflammation.",
//     color: "from-purple-100 to-purple-300"
//   },
//   {
//     id: 6,
//     name: "Nail surgery",
//     description: "Nail surgery is a specialized procedure used to address a variety of nail disorders and conditions, including ingrown toenails, fungal infections, nail deformities, nail trauma.",
//     fullDescription: "Soothing botanicals and minimal ingredients to reduce redness and irritation.",
//     color: "from-teal-100 to-teal-300"
//   },
//   {
//     id: 7,
//     name: "Lip enhancement",
//     description: "Lip enhancement, also known as lip augmentation or lip augmentation, is a cosmetic procedure designed to add volume, shape, and definition to the lips for a fuller, more appearance.",
//     fullDescription: "Pure oxygen and nutrient-rich serums to instantly refresh and revive tired skin.",
//     color: "from-indigo-100 to-indigo-300"
//   },
//   {
//     id: 8,
//     name: "Micropigmentation for eyebrows",
//     description: "Micropigmentation for eyebrows, also known as eyebrow tattooing or permanent makeup, is a cosmetic procedure that involves depositing pigment .",
//     fullDescription: "Microscopic channels to enhance product absorption and stimulate natural healing.",
//     color: "from-rose-100 to-rose-300"
//   },
//   {
//     id: 9,
//     name: "Micropigmentation for lips",
//     description: "Micropigmentation for lips, also known as permanent makeup or cosmetic tattooing, is a non-invasive cosmetic procedure that involves depositing pigment into the skin to enhance lip color, shape.",
//     fullDescription: "Removes dead skin cells and promotes cellular turnover for a more even, refined complexion.",
//     color: "from-cyan-100 to-cyan-300"
//   }
 
// ];

// const TreatmentCard = ({ treatment }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateX = (y - centerY) / 10;
//     const rotateY = -(x - centerX) / 10;
    
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;
//     card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
//   };

//   return (
//     <div 
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={`
//         relative overflow-hidden group
//         rounded-2xl shadow-lg 
//         w-[250px] h-[300px]
//         p-4 
//         bg-gradient-to-br ${treatment.color}
//         bg-opacity-50 backdrop-blur-sm
//         border border-white/30
//         transition-transform duration-300
//         will-change-transform
//       `}
//     >
//       <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl"></div>

//       <div className="relative z-10 flex flex-col h-full">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">
//           {treatment.name}
//         </h3>
//         <p className="text-gray-700 mb-3 text-sm flex-grow">
//           {isExpanded ? treatment.fullDescription : treatment.description}
//         </p>
//         <button 
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-gray-800 bg-white/50 px-3 py-1 rounded-full
//           text-sm
//           hover:bg-white/70 
//           flex items-center self-start
//           transition-all duration-300 
//           hover:scale-105"
//         >
//           {isExpanded ? "Show Less" : "Read More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// const SkinCareTreatmentsPage = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden
//       bg-gradient-to-br from-blue-50 via-white to-blue-50 
//       before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
//       before:bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]
//       before:from-blue-100/20 before:via-white/10 before:to-transparent
//       before:-z-10
//       after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0
//       after:bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]
//       after:from-purple-100/20 after:via-white/10 after:to-transparent
//       after:-z-10
//       py-12 px-4  mt-10"
//     >
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-4 
//           bg-gradient-to-r  from-purple-600 to-pink-600
//           bg-clip-text text-transparent
//           animate-gradient-x"
//         >
//           Discover Your Perfect Skin Care Journey
//         </h1>
        
//         <div className="flex flex-wrap justify-center gap-6">
//           {treatments.map((treatment) => (
//             <TreatmentCard 
//               key={treatment.id} 
//               treatment={treatment} 
//             />
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 5s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SkinCareTreatmentsPage;







































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
      image: "/src/img/Anti Ageing Treatment .webp",
      path: "/hairTransplant",
      title: "Anti Ageing Treatment ",
       description: "Anti-aging treatments encompass a range of techniques and procedures aimed at reducing the visible signs of aging, such as wrinkles."
    },
    {
      image: "/src/img/metacosm acne img.webp",
      path: "/hairTreatment",
      title: "Acne treatment",
      description: "Acne treatment encompasses a range of therapies aimed at managing and reducing acne breakouts, inflammation, and scarring."
    },
    {
      image: "/src/img/metacosm under eye reatmens.webp",
      path: "/skinCare",
      title: "Under-eye treatments",
      description: "Under-eye treatments focus on addressing concerns such as dark circles, puffiness, fine lines, and wrinkles in the delicate skin around the eyes."
    },
    {
      image: "/src/img/Facial rejuvenation.webp",
      path: "/skinCare",
      title: "Facial rejuvenation",
      description: "Facial rejuvenation encompasses various treatments and procedures aimed at revitalizing the appearance of the face, reducing signs of aging."
    },
    {
      image: "/src/img/mole removal.webp",
      path: "/skinCare",
      title: "Mole removal",
      description: "Moles are little skin cells that can form on any part of the body over time. They come in a variety of sizes, shapes, and shades."
    },
    {
      image: "/src/img/metacosm complexion improvement.webp",
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
      image: "/src/img/facisl hyperpigmentation.webp",
      path: "/skinCare",
      title: "Facial hyperpigmentation therapy",
      description: "Facial hyperpigmentation therapy is a specialized treatment aimed at reducing the appearance of hyperpigmentation."
    },
    {
      image: "/src/img/suntan removal metacosm.webp",
      path: "/skinCare",
      title: "Suntan removal",
      description: "Suntan removal treatments are designed to lighten and fade unwanted tan lines or dark patches on the skin caused by sun exposure Suntans the skin."
    },
    {
      image: "/api/placeholder/400/400",
      path: "/skinCare",
      title: "Low-level laser therapy",
      description: "Low-level laser therapy (LLLT), also known as cold laser therapy or photobiomodulation, is a non-invasive treatment that uses low-level laser light."
    },
    {
      image: "/src/img/tatto removal treatment.webp",
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
            src="/src/img/metacosm hospital about .webp" 
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














