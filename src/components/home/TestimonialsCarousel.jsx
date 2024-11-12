import React, { useState } from 'react';

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscQuote } from "react-icons/vsc";

const testimonials = [
  {
    name: 'Jamal O.',
    title: 'Student',
    text: 'I was unsure how to begin my Salesforce career path, but FortifyLearning made it clear. I enrolled in their comprehensive courses and quickly gained a solid understanding of Salesforce concepts and job roles. The hands-on training and career insights have given me a clear direction and renewed enthusiasm for pursuing my goals in Salesforce. FortifyLearning has truly set me on the right path.',
    image: 'https://hrf.org/wp-content/uploads/2024/09/Profile-Elle-Ota-V1.png' // Replace with actual image URL
  },
  {
    name: ' João S.',
    title: 'Salesforce Administrator',
    text: `Thanks to SkillAdvance, I'm now a more complete professional! Everyone in the Salesforce area should consider enrolling in any SkillAdvance courses.`,
    image: 'https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHx8fDA%3D' // Replace with actual image URL
  },
  {
    name: 'Justin B.',
    title: 'Salesforce Specialist',
    text: 'The interviewer said the certifications and training I had completed on my own time showed that I was a quick learner, and they gave me a job offer.',
    image: 'https://b2647861.smushcdn.com/2647861/wp-content/uploads/2024/03/justin-featured-image.jpg?lossy=1&strip=1&webp=1' // Replace with actual image URL
  },
  {
    name: 'Katie Adams',
    title: 'Senior Director',
    text: `Our partnership with SkillAdvance has given us the opportunity to provide world-class training
 materials at no cost to our clients, thanks to the funding we’ve received. SkillAdvance offers a
 proven method for building a more skilled Salesforce workforce.`,
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH8WfpjGrGNYQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710973087043?e=2147483647&v=beta&t=Lu45-cG1HNmBl_2dapPztGUWkpYpOGqtmX6s4fOIMkw' // Replace with actual image URL
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
    <div className="py-24 px-4 md:px-12 lg:px-36 bg-gradient-to-b from-gray-900 to-transparent text-white flex flex-col md:flex-row">
      {/* Text and Buttons Section */}
      <div className="flex flex-col p-8 md:w-1/2">
        <h2 className="text-6xl mb-6 w-full text-center md:text-left">Words from our users</h2>
        <p className='text-center md:text-left'>We're proud of our satisfied customers. Hear what our users have to say about their experiences with SkillAdvance's Salesforce and ServiceMax training</p>

        {/* Navigation buttons */}
        <div className="flex space-x-4 mt-14 md:mt-8 justify-center md:justify-start">
          <button
            onClick={handlePrev}
            className="p-4 bg-black border rounded-full hover:[filter:invert(100%)] duration-300 "
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

      {/* Testimonial Content Section */}
      <div
        className="w-full flex justify-center md:justify-end mt-8 md:mt-0 cursor-pointer"
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
          <div className="mt-12 flex items-center gap-4">
            <div className="p-3 bg-pink-700 rounded-3xl">
              <VscQuote />
            </div>
            <div className="flex flex-col">
              <span>{testimonials[currentIndex].name}</span>
              <span>{testimonials[currentIndex].title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
