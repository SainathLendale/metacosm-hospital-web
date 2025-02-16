import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-8 h-14 border-2 border-red-600 rounded-full relative flex justify-center">
      <div className="w-1 h-3 bg-red-600 rounded-full absolute top-2 animate-scroll" />
    </div>
  </div>
);

const TreatmentCard = ({ image, title, description,path, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`card-${title}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title]);

  return (
    <div 
      id={`card-${title}`}
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 transition-transform duration-500 transform-gpu" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full -ml-12 -mb-12 transition-transform duration-500 transform-gpu" />
      
      <div className="relative p-8">
        {/* Image Container */}
        <div className="relative mx-auto w-48 h-48 mb-6 group">
          <div className={`absolute inset-0 bg-red-100 rounded-full transition-transform duration-500 ${
            isHovered ? 'rotate-12 scale-105' : 'rotate-6'
          }`} />
          <div className={`absolute inset-0 bg-red-200 rounded-full transition-transform duration-500 ${
            isHovered ? '-rotate-12 scale-105' : '-rotate-6'
          }`} />
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 transform-gpu ${
                isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative text-center z-10">
          <h3 className="text-2xl font-bold text-primary  mb-4">{title}</h3>
          <p className="text-gray-700 mb-6">{description}</p>
          <Link to={path} className={`relative overflow-hidden bg-secondary text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:shadow-lg ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            <span className={`inline-block transition-transform duration-500 ${
              isHovered ? '-translate-y-full' : 'translate-y-0'
            }`}>
              See More
            </span>
            <span className={`absolute left-0 right-0 inline-block transition-transform duration-500 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}>
              View Details →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SkinTreatmentCard
 = () => {
  const treatments = [
    {
      image: "/img/metacosm hair transpalnt img.webp",
      // url : "",
      path:"/hairTransplant",
      title: "Hair Transplant",
      description: "After a hair transplant session, the transplanted hairs begin to take on a natural appearance."
    },
    {
      image: "/img/metacosm hair treatment img .jpg",
      path:"/hairTreatment",
      title: "Hair Treatment",
      description: "Hair treatment services encompass a variety of procedures and products designed to improve the health, appearance, and manageability of hair."
    },
    {
      image: "/img/cosmatic care img .webp",
      path:"/skinCare",
      title: "Cosmatic care",
      description: "Cosmetic care enhances beauty and boosts confidence with personalized treatments and professional techniques."
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 relative">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Best Services
        </h1>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        <p className="text-gray-600">Explore Our Best Hair Tranplant And Cosmatic Services</p>
      </header>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      // style={{
      //   backgroundImage: `url('/src/img/bghair.jpg')`,
      // }}
      >
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            {...treatment}
            delay={index * 200}
          />
        ))}
      
      </div>

    
       

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <button className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        <Link to="/contact">
                <span>Book Appointment</span>
              </Link>
        </button>
      </div>

      {/* Add custom styles for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(0.75rem); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default SkinTreatmentCard;
;