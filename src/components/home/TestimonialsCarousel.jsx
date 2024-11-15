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
    text: `Thanks to FortifyLearning, I'm now a more complete professional! Everyone in the Salesforce area should consider enrolling in any FortifyLearning courses.`,
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
    text: `Our partnership with FortifyLearning has given us the opportunity to provide world-class training
 materials at no cost to our clients, thanks to the funding we’ve received. FortifyLearning offers a
 proven method for building a more skilled Salesforce workforce.`,
    image: 'https://th.bing.com/th/id/OIP.H_-nebM9xTzgbUN9Jj6l5AHaJQ?rs=1&pid=ImgDetMain' // Replace with actual image URL
  },
  {
    name: 'Gabby H.',
    title: ' Senior Salesforce Analyst',
    text: `All of the knowledge, skills, and abilities gained through the program were essential to me
 impressing the employer during the interview.`,
    image: 'https://th.bing.com/th/id/OIP.XHTXC3fm9lxz7ZmlpA166AHaE7?rs=1&pid=ImgDetMain' // Replace with actual image URL
  },
  {
    name: 'Andrew Tate',
    title: 'Senior Salesforce Consultant',
    text: `FortifyLearning is a one-stop-shop for my Salesforce learning needs. Courses on Salesforce
 administration, development, and integration were key for my early roles. As I grow into
 leadership roles influencing business policy, I’m confident FortifyLearning will continue developing
 the knowledge and skills I need to succeed.`,
    image: 'https://ichef.bbci.co.uk/ace/standard/702/cpsprodpb/049e/live/0ae9a050-8d83-11ef-bc3d-b9e67b652430.jpg' // Replace with actual image URL
  },
  {
    name: ' Alex H.',
    text: `After completing the training, I proudly achieved my certificate of continuing education for
 Salesforce Administration. Thanks FortifyLearning- one step at a time!"`,
    image: 'https://miro.medium.com/v2/resize:fit:2400/1*uCl0GzGd51AswpwvOfxHpw.jpeg' // Replace with actual image URL
  },
  {
    name: 'Collin Ricker',
    title: 'Business Development Manager',
    text: `We’ve had six students this summer, all with different schedules, so we’ve been trying to
 balance their learning experience with some practical work. It’s not like they’re all sitting in a
 classroom at the same time, so the ability for them to learn at their own pace without any
 additional support has probably been the biggest benefit of using FortifyLearning.`,
    image: 'https://th.bing.com/th/id/OIP.HcNzI-KJWQbtBscPWGcEiAHaHa?rs=1&pid=ImgDetMain' // Replace with actual image URL
  },
  {
    name: 'Eric T.',
    title: 'Salesforce Marketing Cloud Specialist',
    text: `Just finished the third out of four Salesforce Marketing Cloud courses on FortifyLearning. If
 anyone is interested in learning how to optimize marketing automation, I would definitely
 recommend this course. The best part is that it is FREE!`,
    image: 'https://m.media-amazon.com/images/M/MV5BZmNhZWQ1NjYtMmFlOS00YzAzLTk2N2YtMjMyMDA3ZWQ3NWRhXkEyXkFqcGdeQXVyNDEzNDQxNzE@._V1_.jpg' // Replace with actual image URL
  },
  {
    name: 'Raul C.',
    title: 'Salesforce Specialist',
    text: `Excellent new series of courses from SkillAdvance, each course covers a different aspect of
 Salesforce, demonstrates key functionalities, and their implementation.`,
    image: 'https://th.bing.com/th/id/OIP.yH-Ez-PUAcP68PN-54BztwHaKZ?rs=1&pid=ImgDetMain' // Replace with actual image URL
  },
  {
    name: 'Wissal Ayari',
    title: 'Salesforce Administrator',
    text: `FortifyLearning is helping me proactively build skills and advance my career. Labs put concepts
 immediately into practice, reinforcing the content (and saving me time not having to set up my
 own environment). Career paths lay everything out clearly, so I know what skills to prioritize.`,
    image: 'https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2023/05/11/node_483084/13191831/public/2023/05/11/B9734241019Z.1_20230511000210_000%2BGDVMOC3BH.1-0.png?itok=rV6ADU3k1683756143' // Replace with actual image URL
  },
  {
    name: 'Alexei Z.',
    title: 'Salesforce Analyst',
    text: 'I got a job as a Salesforce analyst at a leading company with a salary I\'ve never even dreamed about AND with no prior experience.',
    image: 'https://dusseldorf.kiber-one.de/uploadedFiles/catalogimages/big/6-2.png' 
  },
  {
    name: 'Ganesh Y.',
    text: 'Thank you to FortifyLearning for providing this opportunity to complete the Salesforce Orientation Certification program with such sleekness and detail-oriented learning.',
    image: 'https://cdcakapan.org/wp-content/uploads/2017/09/ganesh2.jpg'
  },
  {
    name: 'Tobias Castleberry',
    title: 'Salesforce Administrator, Certified',
    text: `So far I have really been enjoying FortifyLearning's Salesforce Administrator Training, it has been very informative. I just finished up with the data management section and now I'm on to the more fun stuff (Automation). I think it's so great that platforms like this exist. This is a game changer.`,
    image: 'https://s3.amazonaws.com/s3images.classcreator.com/31705/001/8206991/Tobias-Castleberry-YEARBOOK-2016-Washington-4DC07851-ECF4-BBD7-B9605DCCB5989393-LG.jpg'
  },
  {
    name: 'Nazli S.',
    title: 'Salesforce Practitioner',
    text: `I decided to check out FortifyLearning and the courses they had to offer after seeing a few posts from people who had completed their courses. I'm happy to say that their instructors are knowledgeable and clear, and their course catalogues are extensive and offer relevant career path courses.`,
    image: 'https://fisika.usk.ac.id/wp-content/uploads/2024/06/Dr.-Nazli-S.SiM_.Si_-768x1024.jpg'
  },
  {
    name: 'Temi B.',
    title: 'Salesforce Certified Consultant',
    text: `Glad to have discovered FortifyLearning, they are such a great tool to use to help diversify your knowledge through lessons, assessments, and practices. All compacted into highly detailed and informative chunks of information. Feeling very content with the results.`,
    image: 'https://theb-side.co.uk/wp-content/uploads/2024/02/TEMI-SQ-FEATURE-750X750.jpg'
  },
  {
    name: 'Madiraju Pranay Kashyap',
    title: 'Programmer Analyst Trainee',
    text: `Well, it took a long time, yet I struggled hard to complete the course 'Become a Salesforce Administrator- Level 2' by FortifyLearning. FortifyLearing is the best platform that I have ever come across. Tons of virtual labs, great in-depth insights from the experts, and the best career path/learning modules.`,
    image: 'https://sc.ieeer10.org/assets/img/team/amit-kumar.jpg'
  },
  {
    name: 'Abibou F.',
    title: 'Salesforce Administrator Level 1 Learner',
    text: `I am currently working in a restaurant and going to school full-time. But it is not stopping me from working on gaining more and more skills. I have already spent more than 30 hours on \'Become a Salesforce Administrator Level 1\' with FortifyLearning and still have 67 hours to go.`,
    image: 'https://theatre-contemporain.net/images/upload/jpg/f-c37-52e454c6780fa.jpg'
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
