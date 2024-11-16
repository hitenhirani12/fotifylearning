import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fortifyLearning from "../assets/FortifyLearning.png";

import { VscTypeHierarchySuper } from "react-icons/vsc";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbListCheck, TbListSearch } from "react-icons/tb";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../components/Faq";
import SignupComponent from "../components/home/SignupComponent";

function MitreAttack() {
    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
            title: 'Data Migration with Salesforce',
            overview: 'Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.',
            duration: '4 hours',
            format: 'Live demonstrations and guided practice',
            link: '/practice-lab/configure-ip-routing-with-linux-on-azure'
        },
        {
            img: 'https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg',
            title: 'Salesforce Lightning Experience',
            overview: 'Transition smoothly from Classic to Lightning Experience with a comprehensive guide on new features and functionalities.',
            duration: '3 hours',
            format: 'On-demand video tutorials',
            link: '/practice-lab/configure-network-connectivity-for-linux-on-azure'
        },
        {
            img: 'https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp',
            title: 'Salesforce Service Cloud Mastery',
            overview: 'Enhance your skills in managing customer service operations using Salesforce Service Cloud, focusing on case management and service automation.',
            duration: '6 hours',
            format: 'Interactive scenarios and quizzes',
            link: '/practice-lab/deploy-ubuntu-linux-virtual-machines-in-the-microsoft-azure'
        },
        {
            img: 'https://www.ksolves.com/wp-content/uploads/Blog-3.jpg',
            title: 'Salesforce Marketing Cloud Insights',
            overview: 'Explore advanced marketing automation and analytics capabilities within Salesforce Marketing Cloud.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/can-you-use-pki-to-secure-a-network-environment-expert'
        },
        {
            img: 'https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp',
            title: 'Salesforce Security Best Practices',
            overview: 'Learn best practices for securing your Salesforce instance, including user access management and data protection.',
            duration: '4 hours',
            format: 'On-demand video and security assessments',
            link: '/practice-lab/configure-a-network-security-group-in-a-virtual-network'
        },
        {
            img: 'https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp',
            title: 'Salesforce CPQ Fundamentals',
            overview: 'Understand the essentials of Salesforce CPQ (Configure, Price, Quote) to streamline your sales process and quoting accuracy.',
            duration: '5 hours',
            format: 'Interactive labs and real-world scenarios',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
        {
            img: 'https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg',
            title: 'Salesforce Analytics Cloud Training',
            overview: 'Get hands-on experience with Salesforce Analytics Cloud.',
            duration: '5 hours',
            format: 'Practical exercises and case studies',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
        {
            img: 'https://www.techforceservices.com/wp-content/uploads/2024/05/Salesforce-Community-Cloud-Crafting-Dynamic-Online-Communities.webp',
            title: 'Salesforce Community Cloud Essentials',
            overview: 'Learn to build and manage Salesforce Communities to enhance collaboration and engagement with external users.',
            duration: '5 hours',
            format: 'On-demand video and project-based learning',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
    ];

    const [selectedTab, setSelectedTab] = useState("LearnTheFramework");

    const content = {
        LearnTheFramework: {
            title: "Learn the Framework",
            description:
                "Gain insights on how to read and leverage the MITRE ATT&CK Framework to improve your security strategy and map real-world adversary tactics, techniques, and procedures (TTPs) to Cybrary’s custom-designed MITRE ATT&CK matrix.",
            image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bbe737bce787793bdb9f2_Frame%2096093-p-500.webp',
            icon: <VscTypeHierarchySuper className="text-3xl" />,
        },
        TakeAction: {
            title: "Take Action",
            description:
                "Take practical steps to implement and leverage the MITRE ATT&CK Framework for your organization's cybersecurity strategy.",
            image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e705ccb8ecc0d48213c7a_home-learn-p-800.webp',
            icon: <HiOutlineRocketLaunch className="text-3xl" />,
        },
        DevelopAPlan: {
            title: "Develop a Plan",
            description:
                "Create a strategic plan to address cybersecurity challenges by aligning with the MITRE ATT&CK Framework.",
            image: proveImage,
            icon: <TbListCheck className="text-3xl" />,
        },
        PursueResearch: {
            title: "Pursue Research",
            description:
                "Explore detailed research and analysis to strengthen your understanding and application of the MITRE ATT&CK Framework.",
            image: fortifyLearning,
            icon: <TbListSearch className="text-3xl" />,
        },
    };


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    // Calculate total pages
    const totalPages = Math.ceil(salesforceCourses.length / cardsPerPage);

    // Get current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = salesforceCourses.slice(indexOfFirstCard, indexOfLastCard);

    // Handlers for pagination
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Header Section */}
            <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48 items-center">
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        MITRE ATT&CK®
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-full md:max-w-2xl text-center md:text-left">
                        Whether you are looking to start a new career, earn a certification, or protect your organization against an evolving threat landscape, Cybrary has you covered.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <NavLink to="/demo-request">
                            <button className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                                Schedule a demo
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-28">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65794ab1cb60655a821530f8_Group%2040151.png"
                        alt="Laptop with cybersecurity courses"
                        className="w-full max-w-[500px] h-auto"
                    />
                </div>
            </header>

            {/* Tabs Section */}
            <div className="mt-52 w-full">
                <h1 className="text-5xl ml-4 text-center md:ml-40 md:text-left">
                    Align to the MITRE ATT&CK® Framework
                </h1>
                <div className="flex flex-col lg:flex-row mt-8 w-full justify-center gap-20 h-auto text-white py-8 px-4 sm:px-10 md:px-40 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Tabs List */}
                    <div className="w-full lg:w-1/2 space-y-8 py-8">
                        {Object.keys(content).map((key) => (
                            <div key={key}>
                                <div
                                    onClick={() => setSelectedTab(key)}
                                    className="flex items-center cursor-pointer space-x-2 rounded-lg group"
                                >
                                    {/* Gradient Dot */}
                                    {selectedTab === key && (
                                        <div className="w-2.5 h-2.5 mr-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                                    )}
                                    {content[key].icon}

                                    <span
                                        className={`text-2xl font-sans ${selectedTab === key
                                            ? "font-semibold text-white"
                                            : "font-normal text-gray-400"
                                            }`}
                                    >
                                        {content[key].title}
                                    </span>

                                    <span>
                                        <i
                                            className={`fa-solid fa-chevron-right text-gray-400 transition-transform duration-200 ${selectedTab === key
                                                ? "translate-x-2"
                                                : "group-hover:translate-x-2"
                                                }`}
                                        ></i>
                                    </span>
                                </div>

                                {/* Display content for selected tab */}
                                {selectedTab === key && (
                                    <div className="border-b border-gray-600 py-4">
                                        <p className="text-lg text-gray-400">
                                            {content[key].description}
                                        </p>
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

                    {/* Image for Selected Tab */}
                    <div className="w-full lg:w-[600px]">
                        <img
                            src={content[selectedTab].image}
                            alt={content[selectedTab].title}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full text-white py-24 px-4 md:px-32 xl:px-68 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-transparent">
                {/* Heading Section */}
                <h2 className="text-3xl md:text-5xl text-center mb-8">
                    Threat-Informed Security Training
                </h2>
                <p className="text-center w-full md:w-3/5 mb-12 text-gray-400">
                    Detect and mitigate threats with tools, techniques, and attack scenarios aligned to real-world kill chains.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {currentCards.map((course, index) => (
                        <NavLink to={course.link} key={index}>
                            <div className="relative bg-gray-900 h-auto md:h-[660px] rounded-lg shadow-lg group hover:shadow-xl transition-shadow border border-gray-600 flex flex-col items-between overflow-hidden">
                                <img src={course.img} alt="" className="h-[200px] w-full object-cover rounded-t-lg" />
                                <div className="py-4 px-4 flex flex-col gap-4 flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{course.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm md:text-base">{course.overview}</p>
                                    <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2 bg-slate-900">
                                        <span className="font-semibold">Duration:</span> {course.duration}
                                    </div>
                                    <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2">
                                        <span className="font-semibold">Format:</span> {course.format}
                                    </div>
                                </div>
                                <button className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mt-12">
                                    Learn More and Enroll
                                </button>
                            </div>
                        </NavLink>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-4 bg-gray-900 border rounded-full ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
                    >
                        <FiArrowLeft />
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-pink-600 text-white" : "bg-gray-700 hover:bg-gray-600"}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-4 bg-gray-900 border rounded-full ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
                    >
                        <FiArrowRight />
                    </button>
                </div>
            </div>

            <div className="mt-20 flex flex-col lg:flex-row w-11/12 lg:w-4/5 mx-auto gap-8 lg:gap-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bd9f5a52f232f61c87b00_Frame%2096093-p-800.webp"
                        alt="Strengthen Your Defenses"
                        className="w-full object-cover rounded-lg"
                    />
                </div>

                {/* Text Content Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12">
                    <h1 className="text-2xl lg:text-3xl font-semibold">
                        Strengthen Your Defenses
                    </h1>
                    <p className="flex mt-4 gap-4">
                        <IoMdCheckmarkCircleOutline className="text-xl lg:text-2xl text-green-500" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Be prepared to tackle the latest security threats with threat-informed training.
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <IoMdCheckmarkCircleOutline className="text-xl lg:text-2xl text-green-500" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Cybrary’s exclusive course offerings aligned to the MITRE-ATT&CK Framework will empower you to level up your analytical and hands-on skills.
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <IoMdCheckmarkCircleOutline className="text-xl lg:text-2xl text-green-500" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Adopt innovative strategies for conducting threat hunts, emulating adversaries, enhancing detections, and performing CTI analysis.
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <IoMdCheckmarkCircleOutline className="text-xl lg:text-2xl text-green-500" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Get even more tactical, hands-on experience in our Threat Actor Campaign courses focused on detecting real-world adversary techniques.
                        </span>
                    </p>
                    <NavLink to="/demo-request">
                        <button className="mt-6 w-full lg:w-auto bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-6 text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                            Schedule a Demo
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="w-full mt-20">
                <Faq />
            </div>
            <div className="mt-24 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6482339878677478af673eec_Group_216.png"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Empower Your Team, Protect Your Organization
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Empower your team to detect and mitigate cybersecurity threats with Cybrary. Request a demo today for access to hands-on practice labs, assessments, custom content, and more.
                    </p>
                    <button className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                        Cybrary for Teams
                    </button>
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    );
}

export default MitreAttack;
