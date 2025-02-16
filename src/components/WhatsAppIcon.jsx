
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const WhatsAppIcon = () => {
  const iconRef = useRef(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    // Handle scroll event to toggle the icon visibility
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (iconRef.current && showIcon) {
      gsap.to(iconRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, [showIcon]);

  return (
    <a
      href="https://wa.me/919096772419?text=Welcometo our metacosm hospital "
      target="_blank"
      rel="noopener noreferrer"
      ref={iconRef}
      className={`fixed bottom-5 right-5 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 ${
        showIcon ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppIcon;










