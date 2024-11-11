// App.js
import React from "react";
import '../App.css';
import Marquee from 'react-fast-marquee';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LearnPractProve from '../components/home/LearnPractProve';
import AdvanceYourCareer from '../components/home/AdvanceYourCareer';
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import SignupComponent from "../components/home/SignupComponent";

import careerpath from '../assets/careerpath.png';
import salesforceProgress from '../assets/salesforceProgressImage.png';
import salesforceTeam from '../assets/salesforceTeamImage.webp';

import { PiRocket } from "react-icons/pi";
import { PiLaptop } from "react-icons/pi";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { VscTypeHierarchySuper } from "react-icons/vsc";


function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <Navbar />
      <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
        <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl text-center md:text-left">
            <span className="text-transparent text-[50px] md:text-[70px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
              Salesforce Courses
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-700 to-fuchsia-600"> & Training </span>
              that Elevate Business Performance
          </h1>
          <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
            Fortify Learning’s structured, hands-on Salesforce courses and training empower professionals to
            optimize their organization's Salesforce environment. Through curated Skill and Career Paths,
            practical online Salesforce training, and industry-aligned Certification Preparation courses, we
            provide the best tools to enhance your business performance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center sm:items-start">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
              Fortify Learning for Business
            </button>

            <a href="/" className="mt-4 sm:mt-0 sm:ml-4 text-white-400 hover:text-white">
              Start Learning for Free &gt;
            </a>
          </div>
        </div>

        <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-28">
          <img
            src={careerpath} // Replace with actual image URL
            alt="Laptop with cybersecurity courses"
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </header>

      <div className="text-center flex flex-col items-center lg:mt-20">
        <h3 className="text-lg text-gray-500 ">Trusted by leading organizations worldwide</h3>
        <div className=" relative mt-12 h-[150px] w-3/4 ">
          <Marquee className="h-[100px] w-auto mx-auto overflow-hidden" direction="left" speed={100} delay={5}>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png" alt="" />
            </div>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://www.nicepng.com/png/full/395-3959971_verizon-logo-white-beige.png" alt="" />
            </div>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png" alt="" />
            </div>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png" alt="" />
            </div>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://images.squarespace-cdn.com/content/v1/56b38e2aa3360ce530d55c24/2bf6f206-fc54-4067-9116-6a28f62a8dd1/Booz_Allen_logo_white-R-HiRes.png" alt="" />
            </div>
            <div className="mx-[60px]">
              <img className="h-[50px]" src="https://companieslogo.com/img/orig/GD.D-18841bdb.png?t=1720244492" alt="" />
            </div>
          </Marquee>
          <div class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent"></div>
          <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* learn practice prove */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-10 text-transparent text-[78px] bg-clip-text bg-gradient-to-r from-orange-500 via-pink-700 to-fuchsia-600">Learn. Practice. Prove.</h1>
        <LearnPractProve />
      </div>

      {/* why salesforce training */}
      <div className="mt-28 w-4/5">
        <div className="flex justify-between">
          <h1 className="text-[42px]">Why Choose FortifyLearning for Salesforce Training?</h1>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-20 flex flex-wrap">
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 le2t-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <PiRocket className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-6">Launch Your Career</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Start your Salesforce training journey with guided Career Paths that teach
              foundational concepts related to real, on-the-job responsibilities.</p>
          </div>
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 le2t-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <PiLaptop className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-6">Onboard Team Members</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Our scalable, repeatable onboarding courses and programs ensure
              every new employee has the same foundation of knowledge and skills.</p>
          </div>
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <RiShieldStarLine className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-6">Earn Certifications</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Ace the exam with Certification Prep Paths developed by industry-leading
              instructors. Gain insider tips and build confidence with our practice exams.</p>
          </div>
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <HiOutlinePuzzle className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-6">Upskill and Practice</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Master hands-on skills and familiarize yourself with the latest Salesforce
              features and updates, preparing you for real-world scenarios.</p>
          </div>
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <FaRegStar className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mt-4 mb-6">Retain Top Talent</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Create new opportunities for your most committed personnel and watch your
              retention rates soar.</p>
          </div>
          <div className="w-2/6 mb-12 flex flex-col gap-0">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl ">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="" />
              <VscTypeHierarchySuper className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl mb-4">Drive Business Success</h2>
            <p className="text-gray-400 w-[90%] text-[17px]">Use real-time data to discover how closely correlated employee
              training is to business success and cost savings.</p>
          </div>
        </div>
      </div>

      {/* Salesforce progress */}
      <div className="w-3/4 p-10 flex mt-24 bg-gradient-to-r from-orange-500 via-red-400 to-fuchsia-500 relative rounded-2xl">
        <div className="absolute top-[-45px] left-[-30px] w-20 h-20">
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform rotate-110 top-0 left-8"></div>
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform -rotate-45 top-2 left-2"></div>
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform -rotate-90 top-8 left-0"></div>
        </div>
        <div>
          <span className="px-4 py-2 bg-white text-orange-600 rounded-3xl font-mono">New Release</span>
          <h3 className="font-bold text-3xl mt-4">Baseline & Benchmark</h3>
          <p className="mt-2">Nuanced metrics provide administrators with dynamic team data</p>
        </div>
        <div className="absolute -top-3 right-4">
          <img src={salesforceProgress} alt="" className="h-[201px] rounded-tl-lg rounded-tr-lg" />
        </div>
      </div>
      <div className="w-3/4 mt-20 bg-gray-900 flex justify-between items-center rounded-3xl">
        <div className="w-2/4 p-12 h-[400px]">
          <h1 className="text-4xl">
            FortifyLearning for Teams
          </h1>
          <p className="mt-4 text-lg text-gray-400">Upskill your team with FortifyLearning’s suite of Salesforce training, learning activities, and
            management tools. Benefit from hands-on Salesforce Labs, role-aligned Career Paths, and
            personalized learning plans. Request a demo and discover how FortifyLearning customizes our
            extensive library of training to meet your team’s unique needs.</p>
          <button className="mt-10 bg-gradient-to-r from-orange-400 via-red-500 via-pink-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
            Schedule a demo
          </button>

        </div>
        <div className="w-1/2 ">
          <img src={salesforceTeam} alt="" className="rounded-3xl w-full h-[600px]" />
        </div>
      </div>
      <div className="mt-40 w-3/4">
        <AdvanceYourCareer />
      </div>
      <div className="w-full mt-20">
        <TestimonialsCarousel />
      </div>
      <div className="w-full mt-36 flex justify-center">
        <SignupComponent />
      </div>
      <div className="w-5/6">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
