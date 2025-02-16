import React, { useState } from "react";
import Form from '../components/Form'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Contact Section */}
      
<div className="mt-7">
<Form/>
</div>


      {/* Call and WhatsApp Cards */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 bg-blue-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            data-scroll
          >
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">Call Us</h4>
                <p>+91 9209735060</p>
              </div>
            </div>
          </div>
          <a
      href="https://wa.me/919096772419?text=Welcometo our metacosm hospital "
      target="_blank"
      rel="noopener noreferrer">
          <div
            className="p-6 bg-green-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            data-scroll
          >
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-bold">WhatsApp Us</h4>
                <p>+91 9096772419</p>
              </div>
            </div>
          </div>
          </a>
          
        </div>
      </div>

      {/* Instagram Section */}
      {/* <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us on Instagram</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="w-full h-48 bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Instagram className="text-6xl text-gray-500 mx-auto mt-16" />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
