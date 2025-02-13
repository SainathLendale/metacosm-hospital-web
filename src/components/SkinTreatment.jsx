
import React, { useState, useEffect } from 'react';
import { Check, ExternalLink } from 'lucide-react';
import {Link} from  'react-router-dom'

const SkinTreatment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const treatments = [
    "Hydra facial",
    "Face pilling",
    "Acne Treatment",
    "Under Eye treatment",
    "Carbon facial",
    "Tatto removal"
  ];

  const handleMoreClick = () => {
    console.log('Navigate to skincare');
  };

  const handleBookAppointment = () => {
    console.log('Book Appointment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white/70 via-pink-50/60 to-blue-50/60">
      <main className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className={`mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Skin Treatments<br />Available
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 mb-12 max-w-md mx-auto">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`flex  space-x-4 transition-all duration-700 transform ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[-50px] opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xl">{treatment}</span>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms',}
        
        
        }
          
        >



          
          <button
            onClick={handleMoreClick}
            className="flex items-center px-6 py-2 border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-colors"
          >
          <Link to="/cosmaticcare" >more</Link>
            <ExternalLink  className="ml-2 w-5 h-5" />
          </button>
          <button 
            onClick={handleBookAppointment}
            className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </main>
    </div>
  );
};

export default SkinTreatment;








