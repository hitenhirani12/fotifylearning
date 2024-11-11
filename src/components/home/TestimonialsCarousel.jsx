import React, { useState } from 'react';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscQuote } from "react-icons/vsc";

const testimonials = [
  {
    name: 'MADIRAJU PRANAY KASHYAP',
    title: 'Programmer Analyst Trainee',
    text: 'I was unsure how to begin my Salesforce career path, but FortifyLearning made it clear. I enrolled in their comprehensive courses and quickly gained a solid understanding of Salesforce concepts and job roles. The hands-on training and career insights have given me a clear direction and renewed enthusiasm for pursuing my goals in Salesforce. FortifyLearning has truly set me on the right path.',
    image: 'https://ewh.ieee.org/r10/hyderabad/c/cshc/assets/img/coreteam/pranay.jpeg' // Replace with actual image URL
  },
  {
    name: 'Shraddha Wadighare',
    title: 'Cybersecurity Enthusiast',
    text: 'I was hesitant to start with cybersecurity, but Cybrary made the journey easy. The SOC Analyst course taught me essential skills and helped me gain confidence in the field. The instructors were knowledgeable and supportive throughout.',
    image: 'https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/45/2020/10/Manjusha-CyberSikshaa.jpg' // Replace with actual image URL
  },
  {
    name: 'RAHUL SHARMA',
    title: 'Network Security Engineer',
    text: 'The SOC Analyst Level 2 course exceeded my expectations. The labs were practical, and the course content was very relevant to real-world scenarios. I would highly recommend Cybrary to anyone serious about advancing their cybersecurity career.',
    image: 'https://networthier.com/celebs/wp-content/uploads/2016/06/Rahul-Sharma-Net-Worth.jpg' // Replace with actual image URL
  },
  {
    name: 'PRIYA AGARWAL',
    title: 'Information Security Analyst',
    text: 'Cybrary’s courses have been instrumental in my career development. The "Become a SOC Analyst" course was challenging yet rewarding, providing me with skills that I could apply immediately in my job. The community support was also fantastic!',
    image: 'https://m.economictimes.com/thumb/msid-98479543,width-1200,height-900,resizemode-4,imgsize-71192/change-doesnt-always-happen-overnight-says-priya-agarwal-hebbar-.jpg' // Replace with actual image URL
  }
  // Add more testimonials as needed
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDrag = (e) => {
    const startX = e.clientX;
    const onMouseMove = (moveEvent) => {
      const diffX = moveEvent.clientX - startX;
      if (diffX > 50) handlePrev();
      else if (diffX < -50) handleNext();
      document.removeEventListener('mousemove', onMouseMove);
    };
    document.addEventListener('mousemove', onMouseMove);
  };

  return (
    <div className="py-24 px-36 bg-gradient-to-b from-gray-900 to-transparent text-white flex ">
      <div className='flex flex-col p-8'>
        <h2 className="text-6xl mb-6 w-3/4">Words from our users</h2>
        <p> We're proud of our satisfied customers. Hear what our users have to say about their
          experiences with SkillAdvance's Salesforce and ServiceMax training</p>
        <div className="flex space-x-4 mt-14">
          <button
            onClick={handlePrev}
            className="p-4 bg-black border rounded-full hover:[filter:invert(100%)] duration-300"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-4 bg-black border rounded-full hover:[filter:invert(100%)] duration-300"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div
        className="w-full flex justify-end cursor-pointer"
        onMouseDown={handleDrag}
      >
        <div className="relative p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
          <div className="relative inline-block p-1 bg-gradient-to-r from-orange-500 via-red-500 to-fuchsia-500 rounded-full">
            <div className="bg-gray-900 p-1 rounded-full">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-gray-300 mt-8">{testimonials[currentIndex].text}</p>
          <div className='mt-12 absolute left-4 bottom-6 flex items-center gap-4'>
            <div className='p-3 bg-pink-700 rounded-3xl'>
              <VscQuote />
            </div>
            <div className='flex flex-col '>
              <span>{testimonials[currentIndex].name}
              </span>
              <span>{testimonials[currentIndex].title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
