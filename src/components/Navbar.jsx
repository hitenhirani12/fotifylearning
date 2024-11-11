import React, { useState } from 'react';
import { RiShoppingBag4Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { PiTargetLight } from "react-icons/pi";
import { PiBrowsersLight } from "react-icons/pi";
import { RiQuestionAnswerLine } from "react-icons/ri";

import { MdOutlineForum } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { DiGitCompare } from "react-icons/di";
import { IoMdPerson } from "react-icons/io";

import { GiTeamIdea } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { MdCompareArrows } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sample data for each dropdown (Catalog, For Individuals, etc.)
  const dropdownData = {
    catalog: [
      { icon: <RiShoppingBag4Line className='text-3xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
      { icon: <GiSkills className='text-3xl mr-2' />, name: 'Skill Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
      { icon: <PiCertificateBold className='text-3xl mr-2' />, name: 'Certification Prep', description: 'Prepare for and maintain leading cybersecurity certifications.' },
      { icon: <PiTargetLight className='text-3xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.' },
      { icon: <PiBrowsersLight className='text-3xl mr-2' />, name: 'Browse the Catalog' },
      { icon: <RiQuestionAnswerLine className='text-3xl mr-2' />, name: 'Instructors' },
    ],
    individuals: [
      { icon: <RiShoppingBag4Line className='text-3xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
      { icon: <MdOutlineForum className='text-3xl mr-2' />, name: 'Forums', description: 'Discuss all things cybersecurity for free among the vast Cybrary community.' },
      { icon: <BsShieldCheck className='text-3xl mr-2' />, name: 'Free Access', description: 'Get a taste of the catalog with certification prep, introductory courses, and more.' },
      { icon: <GiProgression className='text-3xl mr-2' />, name: 'Insider Pro', description: 'Everything you need to learn, practice, and prove your cybersecurity skills.' },
      { icon: <RiTeamFill className='text-3xl mr-2' />, name: 'For Teams', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.' },
      { icon: <DiGitCompare className='text-3xl mr-2' />, name: 'Compare Plans', description: 'Compare features across all plans.' },
      { icon: <IoMdPerson className='text-3xl mr-2' />, name: 'Individual' },
    ],
    business: [
      { icon: <GiTeamIdea className='text-3xl mr-2' />, name: 'Teams Features', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.' },
      { icon: <GiFamilyHouse className='text-3xl mr-2' />, name: 'For Government', description: 'Support your organization with a custom plan that works for your organization.' },
      { icon: <TbTargetArrow className='text-3xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.' },
      { icon: <BiSolidBusiness className='text-3xl mr-2' />, name: 'Business Resources', description: 'Learn how Cybrary can help your team thrive.' },
      { icon: <SiFramework className='text-3xl mr-2' />, name: 'Framework Alignment', description: 'Learn how Cybrary aligns to established industry frameworks.' },
      { icon: <MdCompareArrows className='text-3xl mr-2' />, name: 'Teams Pricing', description: 'Compare features across all plans.' },
      { icon: <RiTeamFill className='text-3xl mr-2' />, name: 'Teams' },
    ]
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 w-full fixed bg-black z-10">
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
              <div className="absolute left-0 hidden group-hover:block bg-gray-900 text-white border p-4  z-10w-[360px] mt-[570px] rounded-lg">
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
              <div className="absolute left-0 hidden group-hover:block bg-gray-900 text-white border p-4 z-10 w-[400px] mt-[630px] rounded-lg">
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
            <li className="relative group text-[18px] cursor-pointer flex items-center p-4  ">
              For Business <i className="fa-solid fa-angle-down ml-1"></i>
              <div className="absolute left-0 hidden group-hover:block bg-gray-900 text-white border p-4 z-10 w-[400px] mt-[610px] rounded-lg">
                <ul className="space-y-1">
                  {dropdownData.business.map((item, index) => (
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

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-black bg-opacity-100 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white text-3xl" onClick={toggleMenu}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-20">
          <ul className="flex flex-col items-center text-white space-y-4">
            <li className="text-[18px] cursor-pointer">Catalog</li>
            <li className="text-[18px] cursor-pointer">For Individuals</li>
            <li className="text-[18px] cursor-pointer">For Business</li>
            <li className="text-[18px] cursor-pointer">Pricing</li>
          </ul>
          <div className="space-y-4 mt-10">
            <button className="border border-pink-500 text-white-500 rounded-xl font-bold px-7 py-3 rounded hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
              Free Teams Demo
            </button>
            <button className="px-6 py-3 rounded-xl bg-black text-white hover:shadow-[4px_-4px_10px_rgba(128,0,128,0.5),-4px_4px_10px_rgba(255,105,180,0.5)] transition-shadow duration-300">
              Sign up
            </button>
            <button className="text-white">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
