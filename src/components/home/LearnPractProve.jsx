import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Sample images (replace with your actual images)
import learnImage from '../../assets/learnImage.png';
import practiceImage from '../../assets/practiceImage.png';
import proveImage from '../../assets/proveImage.png';

function LearnPractProve() {
  const [selectedTab, setSelectedTab] = useState("learn");

  const content = {
    learn: {
      title: "Learn",
      description: "Start your Salesforce training journey with guided Career Paths that teach foundational concepts related to real, on-the-job responsibilities.",
      image: learnImage,
    },
    practice: {
      title: "Practice",
      description: "Master hands-on skills and familiarize yourself with the latest Salesforce features and updates, preparing you for real-world scenarios",
      image: practiceImage,
    },
    prove: {
      title: "Prove",
      description: "Ace the exam with Certification Prep Paths developed by industry-leading instructors, and demonstrate your expertise with recognized certifications",
      image: proveImage,
    },
  };

  return (
    <div className="flex flex-col lg:flex-row mt-8 w-full justify-center gap-20 h-auto text-white py-8 px-4 sm:px-10 md:px-40 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section with Image */}
      <div className="w-full lg:w-[800px]">
        <img src={content[selectedTab].image} alt={content[selectedTab].title} className="rounded-lg w-full h-auto" />
      </div>

      {/* Right Section with Navigation and Content */}
      <div className="w-full lg:w-1/2 space-y-8 py-8">
        {/* Sidebar Navigation */}
        <div className="space-y-6">
          {Object.keys(content).map((key) => (
            <div key={key}>
              <div
                onClick={() => setSelectedTab(key)}
                className="flex items-center cursor-pointer space-x-2 rounded-lg group"
              >
                {/* Gradient Dot */}
                {selectedTab === key && (
                  <div className="w-2.5 h-2.5 mr-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full " />
                )}

                <span
                  className={`text-2xl font-sans ${selectedTab === key ? "font-semibold text-white" : "font-normal text-gray-400 "} 
              ${key === "practice" ? "py-4" : ""}`}  // Add padding for spacing inside the border
                >
                  {content[key].title}
                </span>

                <span>
                  <i className={`fa-solid fa-chevron-right text-gray-400 transition-transform duration-200 ${selectedTab === key ? "translate-x-2" : "group-hover:translate-x-2 "}`}></i>
                </span>
              </div>

              {/* Display content and "Get Started" link below the selected tab */}
              {selectedTab === key && (
                <div className="border-b border-gray-600 py-4"> {/* Added padding and border within the selected tab */}
                  <p className="text-lg text-gray-400">{content[key].description}</p>
                  <NavLink
                    to="/your-target-route"
                    className="text-white mt-5 mb-6 text-md font-semibold inline-flex items-center space-x-1 transition-transform duration-200 transform"
                  >
                    <span>Get Started</span>
                    <i className="fa-solid fa-chevron-right text-xs hover:translate-x-1"></i>
                  </NavLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnPractProve;
