import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useEffect(() => {
    // GSAP animations on scroll
    gsap.fromTo(
      "#hero-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      "#hero-subheading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".info-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".info-card",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50  ">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/img/metacosm hair treatment page.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bold tracking-wide  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Welcome to Metacosm
          </h1>
          <p
            id="hero-subheading"
            className="mt-4 text-lg md:text-2xl text-secondary max-w-2xl mx-auto"
          >
            Hair Transplant & Facial Solution Hospital
          </p>
          <div className="animate-bounce mt-8">
            <ChevronDown size={40} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-16 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-8  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ">
          About Metacosm
        </h2>

        <div className="bg-yellow-300 p-4 rounded-lg mb-5 ">
            <p className="text-lg font-medium text-gray-800 ">
              Hair and Beauty Rejuvenation Now Available in Your Neighborhood
            </p>
          </div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
          Metacosm is a state-of-the-art hair transplant and facial solution
          hospital dedicated to providing exceptional care and life-changing
          results. Our expert team combines cutting-edge technology with
          personalized treatment plans to help you look and feel your best.
        </p>
      </section>

      {/* Skills/Services Section */}
      <section
        id="skills"
        className="bg-gradient-to-br from-blue-100 to-indigo-100 py-16"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hair Transplant",
                description:
                  "Advanced hair restoration techniques tailored to your needs.",
                gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
              },
              {
                title: "Facial Rejuvenation",
                description:
                  "Comprehensive treatments to enhance your facial appearance.",
                gradient: "bg-gradient-to-r from-blue-400 to-indigo-500",
              },
              {
                title: "Skincare Solutions",
                description:
                  "Custom skincare plans for glowing, healthy skin.",
                gradient: "bg-gradient-to-r from-green-400 to-emerald-500",
              },
              {
                title: "Anti-Aging Therapies",
                description:
                  "Effective treatments to reduce fine lines and wrinkles.",
                gradient: "bg-gradient-to-r from-orange-400 to-amber-500",
              },
              {
                title: "Hairline Correction",
                description:
                  "Precise correction techniques for natural hairlines.",
                gradient: "bg-gradient-to-r from-purple-500 to-violet-500",
              },
              {
                title: "Scar Treatments",
                description: "Advanced solutions for scar minimization.",
                gradient: "bg-gradient-to-r from-teal-400 to-cyan-500",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className={`info-card p-6 rounded-2xl shadow-lg text-white ${skill.gradient} bg-opacity-90`}
              >
                <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-sm opacity-80">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AboutPage;
