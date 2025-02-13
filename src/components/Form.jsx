


import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    department: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Enquiry Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span> +91 9209735060 , <br />+91 9096772419</span>
                  
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>metacosm24@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>SBI बँकेसमोर, नेत्रसेवा बिल्डिंग, <br /> 2 रा मजला,डॉक्टर लाईन, <br />
                  नांदेड </span>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <form className="p-8" action="https://formspree.io/f/xwpvlevb" method="POST">
              <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>
              <div className="space-y-4">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="group">
                  <select
                    name="age"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    onChange={handleInputChange}
                  >
                    <option value="">Select Age</option>
                    {Array.from({ length: 82 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block mb-2">Gender:</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleInputChange}
                      />
                      <span>Female</span>
                    </label>
                  </div>
                </div>

                <div className="group">
                  <select
                    name="department"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    onChange={handleInputChange}
                  >
                    <option value="">Select Treatment</option>
                    <option value="HairTransplant">Hair Transplant</option>
                    <option value="SkinTreatment">Skin Treatment</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-primary transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
