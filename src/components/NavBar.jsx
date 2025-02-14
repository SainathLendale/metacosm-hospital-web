

import React, { useState, useEffect, lazy } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

import logoimg  from '../../public/img/metacosmhospitallogo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent closing menu when opening dropdown
    setIsDropdownOpen(!isDropdownOpen);
  };

  // New function to handle navigation clicks
  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 ${
      isVisible ? 'top-0' : '-top-full'
    } bg-white/80 backdrop-blur-md shadow-lg z-50`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoimg} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li className="hover:text-secondary transition-colors duration-200">
                <a href="/" onClick={handleNavClick}>Home</a>
              </li>
              <li className="hover:text-secondary transition-colors duration-200">
                <a href="/about" onClick={handleNavClick}>About</a>
              </li>
              {/* Dropdown Menu */}
              <li className="relative group">
                <div
                  className="flex items-center cursor-pointer hover:text-secondary"
                  onClick={toggleDropdown}
                >
                  <span>Treatments</span>
                  <ChevronDown className="ml-2" size={18} />
                </div>
                <ul
                  className={`absolute left-0 mt-2 bg-white shadow-lg p-2 rounded-lg space-y-2 ${
                    isDropdownOpen ? 'block' : 'hidden'
                  }`}
                >
                  <li className="hover:text-primary">
                    <a href="/hairTransplant" onClick={handleNavClick}>Hair Transplant</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="/hairTreatment" onClick={handleNavClick}>Hair Treatment</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="/skincare" onClick={handleNavClick}>Skin Treatment</a>
                  </li>
                </ul>
              </li>
              {/* <li className="hover:text-secondary transition-colors duration-200">
                <a href="/services" onClick={handleNavClick}>Services</a>
              </li> */}
              <li className="hover:text-secondary transition-colors duration-200">
                <a href="/gallary" onClick={handleNavClick}>Gallery</a>
              </li>
              <li className="hover:text-secondary transition-colors duration-200">
                <a href="/contact" onClick={handleNavClick}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-96'
              : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <ul className="space-y-4 p-4">
            <li className="hover:text-secondary transition-colors duration-200">
              <a href="/" onClick={handleNavClick}>Home</a>
            </li>
            <li className="hover:text-secondary transition-colors duration-200">
              <a href="/about" onClick={handleNavClick}>About</a>
            </li>
            <li className="">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className='hover:text-secondary transition-colors duration-200'>Treatments</span>
                <ChevronDown className="ml-2 hover:text-secondary transition-colors duration-200 " size={18} />
              </div>
              {isDropdownOpen && (
                <ul className="pl-4">
                  <li className='hover:text-secondary transition-colors duration-200'>
                    <a href="/hairTransplant" onClick={handleNavClick}>Hair Transplant</a>
                  </li>
                  <li className='hover:text-secondary transition-colors duration-200' >
                    <a href="/hairTreatment" onClick={handleNavClick}>Hair Treatment</a>
                  </li>
                  <li className='hover:text-secondary transition-colors duration-200' >
                    <a href="/skinCare" onClick={handleNavClick}>Skin Treatment</a>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="hover:text-secondary transition-colors duration-200">
              <a href="/services" onClick={handleNavClick}>Services</a>
            </li> */}
            <li className="hover:text-secondary transition-colors duration-200">
              <a href="/gallary" onClick={handleNavClick}>Gallery</a>
            </li>
            <li className="hover:text-secondary transition-colors duration-200">
              <a href="/contact" onClick={handleNavClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
