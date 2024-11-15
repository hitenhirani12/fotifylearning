import React, { useState } from 'react';
// HamburgerMenu Component
import HamburgerMenu from './navbar/HamburgerMenu';
import dropdownData from './navbar/DropDownData';
import CustomDropDown from './navbar/CustomDropDown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-6 w-full fixed bg-black z-20">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-10">
          <img
            className="h-12 md:h-16 w-auto"
            src="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2022/11/Cybrary_logo.636d1736d4f10.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
            alt="Logo"
          />
        </div>

        {/* Navigation Links: Desktop View */}
        <div className="hidden w-2/4 md:flex justify-center items-center gap-8">
          <ul className="flex w-full p-2">
            <CustomDropDown/>
          </ul>
        </div>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-pink-500 text-white-500 rounded-xl font-bold px-7 py-3 rounded hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
            Free Teams Demo
          </button>
          <button className="px-6 py-3 rounded-xl bg-black text-white hover:shadow-[4px_-4px_10px_rgba(128,0,128,0.5),-4px_4px_10px_rgba(255,105,180,0.5)] transition-shadow duration-300">
            Sign up
          </button>
          <button className="text-white">Login</button>
        </div>

        {/* Hamburger Menu: Mobile View */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white text-2xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Component */}
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
