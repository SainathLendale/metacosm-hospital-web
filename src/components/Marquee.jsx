import React, { useState, useEffect, useRef } from 'react';

const Marquee = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;

    const animate = () => {
      setScrollPosition(prev => 
        prev >= scrollWidth ? 0 : prev + 1
      );
    };

    const intervalId = setInterval(animate, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden whitespace-nowrap relative w-full"
      style={{ 
        transform: `translateX(-${scrollPosition}px)` 
      }}
    >
      {items.map((item, index) => (
        <span 
          key={index} 
          className="inline-block mx-4 text-lg"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

const Marquee2 = () => {
  const scrollItems = [
    "     हेअर ट्रान्सप्लांट सेंटर आणि चेहऱ्याचे सौंदर्यवर्धक उपचार", 

    "केस व सौंदर्याचे पुनरुज्जीवन सहज शक्य आहे आता आपल्या नांदेडमध्ये", 
    
  ];

  return (
    <div className=" text-primary p-4 mt-4">
      <Marquee items={scrollItems} />
    </div>
  );
};

export default Marquee2;


