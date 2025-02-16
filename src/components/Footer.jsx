

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Metacosm </h3>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
              SBI बँकेसमोर, नेत्रसेवा बिल्डिंग, 2 रा मजला, डॉक्टर लाईन,

                <br />
                 नांदेड
                <br />
              
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <p className="text-sm">+91 9209735060</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <p className="text-sm">metacosm24@gmail.com</p>
            </div>
          </div>

         

          {/* Quick Links - Using standard anchor tags */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/" className="block text-sm hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm hover:text-white transition-colors">
                About
              </a>
              <a href="hairTransplant" className="block text-sm hover:text-white transition-colors">
               Hair Transplant
              </a>
              <a href="/HairTreatment" className="block text-sm hover:text-white transition-colors">
               Hair Treatment
              </a>
              <a href="Cosmatic care" className="block text-sm hover:text-white transition-colors">
                Cosmatic care
              </a>
              <a href="Gallary" className="block text-sm hover:text-white transition-colors">
                Gallary
              </a>
              <a href="Contact" className="block text-sm hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Map Section */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
            <div className="bg-gray-800 w-full h-48 rounded-lg"> */}
              {/* Replace this div with an actual map component */}
               {/* <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/400/320" 
                  alt="Location Map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>*/}
        </div> 

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} metacosm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;