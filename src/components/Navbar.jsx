import React, { useState } from 'react';
// HamburgerMenu Component
import HamburgerMenu from './navbar/HamburgerMenu';
import dropdownData from './navbar/DropDownData';

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
        <div className="hidden md:flex justify-center items-center gap-8">
          <ul className="flex space-x-8">
            {/* Catalog Dropdown */}
            <li className="relative group text-[18px] cursor-pointer flex items-center p-4 ">
              Catalog <i className="fa-solid fa-angle-down ml-1"></i>
              <div className="absolute -left-10 hidden group-hover:block bg-gray-900 text-white border p-4 z-10 w-[360px] mt-[520px] rounded-lg">
                <ul className="space-y-1">
                  {dropdownData.catalog.map((item, index) => (
                    <li key={index} className="flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center">
                      <div>
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* For Individuals Dropdown */}
            <li className="relative group text-[18px] cursor-pointer flex items-center p-4">
              For Individuals <i className="fa-solid fa-angle-down ml-1"></i>
              <div className="absolute -left-10 hidden group-hover:block bg-gray-900 text-white border p-4 z-10 w-[360px] mt-[630px] rounded-lg">
                <ul className="space-y-1">
                  {dropdownData.individuals.map((item, index) => (
                    <li key={index} className="flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center">
                      <div>
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* For Business Dropdown */}
            <li className="relative group text-[18px] cursor-pointer flex items-center p-4">
              For Business <i className="fa-solid fa-angle-down ml-1"></i>
              <div className="absolute -left-10 hidden group-hover:block bg-gray-900 text-white border p-4 z-10 w-[360px] mt-[630px] rounded-lg">
                <ul className="space-y-1">
                  {dropdownData.business.map((item, index) => (
                    <li
                      key={index}
                      className="relative flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center group"
                    >
                      <div>{item.icon}</div>
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm">{item.description}</p>

                        {/* Show subitems only when hovering over the item */}
                        {item.subItems && (
                          <div className="absolute left-full top-0 hidden group-hover:block bg-gray-800 text-white border p-4 w-[240px] rounded-lg z-20">
                            <ul className="space-y-1">
                              {item.subItems.map((subitem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="p-2 hover:bg-gray-700 rounded-lg group relative"
                                >
                                  <div className="flex items-center gap-2">
                                    <div>{subitem.icon}</div>
                                    <div>
                                      <p className="font-semibold">{subitem.name}</p>
                                      <p className="text-xs">{subitem.description}</p>

                                      {/* Nested sub-subitems, show on hover of this specific item */}
                                      {subitem.moreDetails && (
                                        <div className="absolute left-full top-0 hidden group-hover:block bg-gray-700 text-white border p-3 w-[180px] rounded-lg z-30">
                                          <p className="text-sm font-medium">{subitem.moreDetails}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>


            <li className="text-[18px] cursor-pointer flex items-center">Pricing </li>
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
