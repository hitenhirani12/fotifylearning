// dropdownData.js
import { RiShoppingBag4Line, RiQuestionAnswerLine, RiTeamFill } from "react-icons/ri";
import { GiSkills, GiProgression, GiTeamIdea, GiFamilyHouse } from "react-icons/gi";
import { PiCertificateBold, PiTargetLight, PiBrowsersLight } from "react-icons/pi";
import { MdOutlineForum, MdCompareArrows } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { DiGitCompare } from "react-icons/di";
import { IoMdPerson } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { SiFramework } from "react-icons/si";

const DropDownData = {
  catalog: [
    { icon: <RiShoppingBag4Line className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
    { icon: <GiSkills className='text-2xl mr-2' />, name: 'Skill Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
    { icon: <PiCertificateBold className='text-2xl mr-2' />, name: 'Certification Prep', description: 'Prepare for and maintain leading cybersecurity certifications.' },
    { icon: <PiTargetLight className='text-2xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.' },
    { icon: <PiBrowsersLight className='text-2xl mr-2' />, name: 'Browse the Catalog' },
    { icon: <RiQuestionAnswerLine className='text-2xl mr-2' />, name: 'Instructors' },
  ],
  individuals: [
    { icon: <RiShoppingBag4Line className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.' },
    { icon: <MdOutlineForum className='text-2xl mr-2' />, name: 'Forums', description: 'Discuss all things cybersecurity for free among the vast Cybrary community.' },
    { icon: <BsShieldCheck className='text-2xl mr-2' />, name: 'Free Access', description: 'Get a taste of the catalog with certification prep, introductory courses, and more.' },
    { icon: <GiProgression className='text-2xl mr-2' />, name: 'Insider Pro', description: 'Everything you need to learn, practice, and prove your cybersecurity skills.' },
    { icon: <RiTeamFill className='text-2xl mr-2' />, name: 'For Teams', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.' },
    { icon: <DiGitCompare className='text-2xl mr-2' />, name: 'Compare Plans', description: 'Compare features across all plans.' },
    { icon: <IoMdPerson className='text-2xl mr-2' />, name: 'Individual' },
  ],
  business: [
    { 
      icon: <GiTeamIdea className='text-2xl mr-2' />, 
      name: 'Teams Features', 
      description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.',
      subItems: [
        { icon: <SiFramework className='text-xl mr-2' />, name: 'Feature 1', description: 'Description for feature 1.' },
        { icon: <SiFramework className='text-xl mr-2' />, name: 'Feature 2', description: 'Description for feature 2.' }
      ]
    },
    { 
      icon: <GiFamilyHouse className='text-2xl mr-2' />, 
      name: 'For Government', 
      description: 'Support your organization with a custom plan that works for your organization.',
      subItems: [
        { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 1', description: 'Details about option 1.' },
        { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 2', description: 'Details about option 2.' }
      ]
    },
    { icon: <TbTargetArrow className='text-2xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.',
        subItems: [
            { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 1', description: 'Details about option 1.' },
            { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 2', description: 'Details about option 2.' }
          ]
     },
    { icon: <BiSolidBusiness className='text-2xl mr-2' />, name: 'Business Resources', description: 'Learn how Cybrary can help your team thrive.',
        subItems: [
            { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 1', description: 'Details about option 1.' },
            { icon: <SiFramework className='text-xl mr-2' />, name: 'Option 2', description: 'Details about option 2.' }
          ]
     },
    { icon: <SiFramework className='text-2xl mr-2' />, name: 'Framework Alignment', description: 'Learn how Cybrary aligns to established industry frameworks.' },
    { icon: <MdCompareArrows className='text-2xl mr-2' />, name: 'Teams Pricing', description: 'Compare features across all plans.' },
    { icon: <RiTeamFill className='text-2xl mr-2' />, name: 'Teams' },
  ]
};

export default DropDownData;
