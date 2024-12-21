import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImPencil2 } from "react-icons/im";
import { RiArrowRightSLine } from "react-icons/ri";
import SignupComponent from '../components/home/SignupComponent';
import { IoIosArrowDown } from 'react-icons/io';

import { useMediaQuery } from 'react-responsive';

const Privacy = () => {
    const [activeHeading, setActiveHeading] = useState('');
    const headingsRef = useRef([]);
    const [isOpen, setIsOpen] = useState(false);

    const isTabletOrSmaller = useMediaQuery({ query: '(max-width: 768px)' });
    const toggleContent = () => {
        if (isTabletOrSmaller) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                        setActiveHeading(entry.target.id); // Set active heading ID when 70% is visible
                    }
                });
            },
            {
                threshold: 0.7, // When 70% of the element is visible
            }
        );

        headingsRef.current.forEach((heading) => {
            observer.observe(heading);
        });

        return () => {
            headingsRef.current.forEach((heading) => {
                observer.unobserve(heading);
            });
        };
    }, []);
    return (
        <div className='mt-40'>
            <div className="mt-24 h-[400px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6437fce68ba92523fbfb9780_webp-Frame%2095969.webp"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <button className='flex px-4 py-2 items-center border rounded-3xl gap-2'>
                        <ImPencil2 /> <span className='font-mono'>Latest Update: February 22, 2022</span>
                    </button>
                    <p className="mt-10 text-6xl text-white max-w-2xl">
                        Privacy Policy
                    </p>
                </div>
            </div>
            <div className='mt-20 flex flex-col md:flex-row w-6/6 md:w-5/6 mx-auto'>
                {/* Left Container with Table of Contents */}
                <div className='w-3/3 md:w-1/3 p-8'>
                    <h2
                        className='text-2xl font-bold flex justify-between cursor-pointer'
                        onClick={toggleContent}
                    >
                        <span>Table of Contents</span>
                        {isTabletOrSmaller && (
                            <IoIosArrowDown
                                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                        )}
                    </h2>

                    <ul className={`mt-4 overflow-hidden transition-all duration-300 ${isOpen || !isTabletOrSmaller ? 'opacity-100 max-h-full' : 'max-h-0 opacity-0'
                        }`}>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'COLLECTION_AND_USE'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#COLLECTION_AND_USE'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'COLLECTION_AND_USE' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link behavior
                                    headingsRef.current[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                COLLECTION AND USE OF USER INFORMATION
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'INFORMATION_COLLECTION'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#INFORMATION_COLLECTION'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'INFORMATION_COLLECTION' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[1]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                INFORMATION COLLECTION TECHNOLOGY
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'PERMISSIONS'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#PERMISSIONS'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'PERMISSIONS' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[2]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                PERMISSIONS
                                <RiArrowRightSLine />
                            </NavLink>

                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'CHILDREN UNDER THE AGE OF 13'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#CHILDREN_UNDER_13'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'CHILDREN UNDER THE AGE OF 13' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[3]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                CHILDREN UNDER THE AGE OF 13
                                <RiArrowRightSLine />
                            </NavLink>

                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'SHARING USER INFORMATION'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#SHARING_USER_INFORMATION'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'SHARING USER INFORMATION' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[4]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                SHARING USER INFORMATION
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'PROTECTION OF USER INFORMATION'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#PROTECTION_USER_INFORMATION'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'PROTECTION OF USER INFORMATION' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[5]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                PROTECTION OF USER INFORMATION
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'EXTERNAL LINKS AND THIRD PARTY PRIVACY PRACTICES'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#EXTERNAL_LINKS'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'EXTERNAL LINKS AND THIRD PARTY PRIVACY PRACTICES' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[6]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                EXTERNAL LINKS AND THIRD PARTY PRIVACY PRACTICES
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'CALIFORNIA PRIVACY RIGHTS'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#CALIFORNIA_PRIVACY_RIGHTS'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'CALIFORNIA PRIVACY RIGHTS' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[7]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                CALIFORNIA PRIVACY RIGHTS
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'CONTACT US'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#CONTACT_US'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'CONTACT US' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[8]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                CONTACT US
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'CHANGES TO THIS PRIVACY POLICY'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}
                            ></div>
                            <NavLink
                                to='#CHANGES_TO_PRIVACY_POLICY'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'CHANGES TO THIS PRIVACY POLICY' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[9]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                CHANGES TO THIS PRIVACY POLICY
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                        <li className='mt-6 flex items-center text-xl text-gray-400'>
                            <div
                                className={`h-3 w-3 rounded-lg mr-4 transition-all ${activeHeading === 'COOKIES'
                                    ? 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-500'
                                    : ''
                                    }`}

                            ></div>
                            <NavLink
                                to='#COOKIES'
                                className={`w-full flex items-center transform transition-all duration-300 ${activeHeading === 'COOKIES' ? 'translate-x-2' : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    headingsRef.current[10]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                COOKIES
                                <RiArrowRightSLine />
                            </NavLink>
                        </li>
                    </ul>
                </div>


                {/* Right Container with Privacy Policy Text */}
                <div className='w-3/3 md:w-2/3 px-20 mt-10 overflow-y-auto max-h-[100vh]'>
                    <p className='text-gray-300 font-semibold'>
                        This Cybrary, Inc. (“Cybrary”, “us” or “our”) Privacy Policy (“Privacy Policy”) explains our practices, defines our users’ (“you” or “your”) privacy options, and describes how your information is collected and used by Cybrary. This Privacy Policy, along with our
                        <NavLink to='/terms-of-service' className='text-blue-600 hover:underline'>
                            Terms of Service
                        </NavLink>,
                        applies to your use of all Cybrary-branded products and services including your use of our website at
                        <NavLink to='/' className='text-blue-600 hover:underline'>
                            www.fortifyLearnig.in
                        </NavLink>
                        (“Site”), any services provided by Cybrary, and any web or mobile applications we develop (collectively, our “Platform”).
                    </p>
                    <ul className='mt-4'>
                        <li className='text-gray-300 ml-2 mt-2'>the information we collect about you;</li>
                        <li className='text-gray-300 ml-2 mt-2'>how that information may be used;</li>
                        <li className='text-gray-300 ml-2 mt-2'>with whom the information may be shared;</li>
                        <li className='text-gray-300 ml-2 mt-2'>how you may update the information you provide us;</li>
                        <li className='text-gray-300 ml-2 mt-2'>how you may contact us; and</li>
                        <li className='text-gray-300 ml-2 mt-2'>your choices about the information.</li>
                    </ul>
                    <p className='text-gray-300 mt-4'>By using the Cybrary Platform, you agree to the terms of this Privacy Policy and our Terms of Service.</p>
                    <h1 id='COLLECTION_AND_USE' ref={(el) => (headingsRef.current[0] = el)} className='text-5xl mt-6'>
                        COLLECTION AND USE OF USER INFORMATION
                    </h1>
                    <p className='text-gray-300 mt-2'>This Privacy Policy primarily concerns Personal Information, which deals with individuals, rather than organizations or businesses. “Personal Information” uniquely identifies an individual or can identify an individual by combining it with other data. It includes email addresses, phone numbers and other information associated with the individual. The legal name and definition of personal information differs from jurisdiction to jurisdiction. Cybrary will not use or share Personal Information other than as described in this Privacy Policy.</p>
                    <p className='text-gray-300 mt-2'>We collect Personal Information from you through our Platform, or through any other digital or personal communication between you and us. Personal Information collected by us may include your name, e-mail address, billing address, general usage metrics of the Platform, your financial payment information, your profile, email communication history with Cybrary, anything you submit to or post on the Sites, and other information associated with you or your organization, as well as other information that may or may not specifically identify you. The information collected through the Platform may be stored at servers, computers, or other media located in the United States. We may also collect general information about your technology interfaces or preferences and the websites you visit. We may use a third party provider to process financial and payment information.</p>
                    <p className='text-gray-300 mt-2'>We may obtain information about you from third-party sources, such as Google or Apple. This information may be utilized, analyzed, and/or compared with information that Cybrary has collected from you or that you have submitted to the Platform. If Cybrary obtains information from third-party sources, you agree that your sole legal remedy for any harm associated with that information is against the third-party that provided the information to us, and that you will not assert any cause of action, claim or demand against us other than requesting we delete any erroneous information.</p>
                    <p className='text-gray-300 mt-2'>For the avoidance of doubt, Cybrary shall be entitled to collect anonymous and/or aggregated data across its various products and services provided that no individual natural person can be identified from such data (“Aggregate Data”). The Aggregate Data will be used for various purposes, including without limitation to analyze behavior, trends, and website interaction, and to improve, and enhance our services and for other development, creation of new features, diagnostic and corrective purposes in connection with our services. Cybrary shall own all right, title and interest in and to the Aggregate Data and this is not considered personal data.</p>

                    <h1 id='INFORMATION_COLLECTION' ref={(el) => (headingsRef.current[1] = el)} className='text-5xl mt-6'>
                        INFORMATION COLLECTION TECHNOLOGY
                    </h1>
                    <p className='text-gray-300 mt-2'>
                        For each visitor to our Sites, we may use various technologies, including “cookies” to automatically gather certain information pursuant to your use of the Sites, from your electronic device about your activities using the Sites. We may collect and store non-personally identifying information through cookies, and third-parties to profile user activity and preferences. Technical and specification information about your device and settings may be collected when you use the Sites. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, the content of previously accepted “cookies” from us, and clickstream data. We collect and store this information on an individual basis and in combined form. We also collect both user-specific and aggregate information on what pages visitors access or visit.
                    </p>
                    <p className='text-gray-300 mt-2'>A cookie is data stored on your device that tracks non-personal information about you. When using the Sites, we may assign your device one or more cookies that enable us to improve the quality of the Sites and to personalize your experience. Cookies allow us to automatically collect information about your activity on the Websites, such as the content you access while using the Sites, the links you click, and other activity you conduct while using the Sites. You may choose to modify your device setting to disable cookies or limit their use. If you choose to disable or limit cookies, or otherwise limit your device permissions to the Sites, you may experience diminished performance from the Sites and/or may be prevented from using some or all features of the Sites. Our cookies generally fall into one of four categories: Essential, Functional, Analytics and Target.</p>
                    <p className='text-gray-300 mt-2'>Our Platform may contain web beacons (also known as “clear gifs”) or similar technologies that gather non-personally identifiable information about your use of our Platform. Such technology may also be contained in e-mail messages or newsletters from us that allow us to determine whether messages have been accessed. The purpose of our use of this technology is so that we may analyze the effectiveness of our marketing efforts and the quality of our Platform.</p>

                    <h1 id='PERMISSIONS' ref={(el) => (headingsRef.current[2] = el)} className='text-5xl mt-6'>
                        PERMISSIONS
                    </h1>
                    <p className='text-gray-300 mt-2'>The following section only applies if you use one of our mobile software applications (the “Software”). The Software requires certain permissions on your mobile device in order to work as intended. You can either allow or deny the Software access to the permissions. In some cases it is necessary for you to grant the Software permissions to take full advantage of features or functionality of the Software. If you disallow some or all permissions, the Software may not function properly. Some of the permissions needed may include access to your device’s: camera; calendar; location; phone; sensor; SMS; and storage. Additional permissions may be requested as new features are added in the future.</p>
                    <h1 id='CHILDREN UNDER THE AGE OF 13' ref={(el) => (headingsRef.current[3] = el)} className='text-5xl mt-6'>
                        CHILDREN UNDER THE AGE OF 13
                    </h1>
                    <p className='text-gray-300 mt-2'>In accordance with COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our Site and Platform are not designed for children, and we do not knowingly collect information from any person under the age of 13. If you are the parent or legal guardian of someone under the age of 13 who may have provided Cybrary with information without your knowledge or consent, please contact us as provided below to have this information removed.</p>
                    <h1 id='SHARING USER INFORMATION' ref={(el) => (headingsRef.current[4] = el)} className='text-5xl mt-6'>
                        SHARING USER INFORMATION
                    </h1>
                    <p className='text-gray-300 mt-2'>We do not share your personal data with any third-party advertisers or ad networks for their advertising purposes.</p>
                    <p className='text-gray-300 mt-2'>We may use and share your information for any legally permissible purpose. We may match, use, and share any of the information we collect from you to any personally identifiable information we obtain through third-parties. The ways we may use or share information that we collect about you include:</p>
                    <ul className='mt-4'>
                        <li className='text-gray-300 ml-2 mt-2'>providing you with use of the Sites and Platform;</li>
                        <li className='text-gray-300 ml-2 mt-2'>providing you with products or services, whether from Cybrary, or any -related organizations, entities, or affiliates;</li>
                        <li className='text-gray-300 ml-2 mt-2'>providing you with customized content and services;</li>
                        <li className='text-gray-300 ml-2 mt-2'>providing technical or customer support;</li>
                        <li className='text-gray-300 ml-2 mt-2'>performing research and analysis to gauge the use of the Sites and Platform;</li>
                        <li className='text-gray-300 ml-2 mt-2'>communicating with you by e-mail, postal mail, telephone, text message, and/or mobile devices about products or services that may be of interest to you from Cybrary, any affiliates, sponsors or other third-parties;</li>
                        <li className='text-gray-300 ml-2 mt-2'>with our partners and affiliates who may market their own products and services to you;</li>
                        <li className='text-gray-300 ml-2 mt-2'>enforcing, this Privacy Policy, other Cybrary posted policies, enforce Cybrary agreements, or otherwise manage its business;</li>
                        <li className='text-gray-300 ml-2 mt-2'>where we have another legitimate interest in doing so;</li>
                        <li className='text-gray-300 ml-2 mt-2'>performing functions as otherwise described to you at the time of collection.</li>
                    </ul>
                    <p className='text-gray-300 mt-2'>In order to perform certain services on your behalf, we may publish certain information that you provide. You agree that any testimonial feedback, posts, interactions or other comments provided by you to Cybrary through any form of communication including but not limited to through the Sites, becomes the sole and exclusive property of Cybrary and that such information may be used for any legally permissible purpose, including, but not limited to marketing and advertising our Platform.</p>
                    <p className='text-gray-300 mt-2'>You acknowledge and agree that, unless otherwise prohibited by law, Cybrary may use and disclose your personal and non-personal information to public or private third-parties: (i) for inspection by law enforcement officials (including in the case of potential criminal activity); (ii) to respond to cease and desist letters, arbitration proceedings, legal actions and suits, criminal and civil subpoenas, any court orders; (iii) to enforce or apply the terms of this Privacy Policy or any other agreement between us; and (iv) to protect our, our users, and others’ rights, property, or safety whether during or after the term of your use of our Platform.</p>
                    <p className='text-gray-300 mt-2'>Except as otherwise provided in this Privacy Policy, we do not rent or sell any personal information we collect to any third parties.</p>
                    <p className='text-gray-300 mt-2'>Unless otherwise provided in this Privacy Policy, we shall not disclose Personal Information you submit to us except (i) with affiliates, licensees, subsidiaries and successors, (ii) when we have your permission, or (iii) as necessary to:</p>
                    <ul className='mt-4'>
                        <li className='text-gray-300 ml-2 mt-2'>To our affiliates as permitted by law;</li>
                        <li className='text-gray-300 ml-2 mt-2'>To third parties who provide information technology services such as website hosting, computer systems maintenance, or data security and privacy services;</li>
                        <li className='text-gray-300 ml-2 mt-2'>To our partners, franchisees, affiliates, vendors or others who help us operate the Services or assess your interest or satisfaction with the Services, our organization, or our products, provided they have contractually agreed to adhere to this Privacy Policy; or</li>
                        <li className='text-gray-300 ml-2 mt-2'>To comply with our legal obligations, enforce this Privacy Policy, any other Cybrary agreements, or otherwise to protect the rights, property or safety of our users and business partners.</li>
                    </ul>
                    <p className='text-gray-300 mt-2'>In addition, we may share aggregate and sell, non-individual information, incapable of identifying a particular person, with third parties for any lawful purposes.</p>
                    <h1 id='PROTECTION OF USER INFORMATION' ref={(el) => (headingsRef.current[5] = el)} className='text-5xl mt-6'>
                        PROTECTION OF USER INFORMATION
                    </h1>
                    <p className='text-gray-300 mt-2'>We maintain administrative, physical, and technical safeguards for all user information collected in our Platform. However, given the nature of communications and information technology, and that the use of the Internet has inherent risks, although we regularly monitor for possible vulnerabilities and attack, we cannot warrant or guarantee that information provided to us through the Platform or stored in our systems or otherwise will be absolutely free from unauthorized intrusion by others, nor can we warrant or guarantee that such data may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards. Therefore, although we take reasonable steps to secure your information, we cannot and do not promise or warrant that your information will always remain secure.</p>
                    <h1 id='EXTERNAL LINKS AND THIRD PARTY PRIVACY PRACTICES' ref={(el) => (headingsRef.current[6] = el)} className='text-5xl mt-6'>
                        EXTERNAL LINKS AND THIRD PARTY PRIVACY PRACTICES
                    </h1>
                    <p className='text-gray-300 mt-2'>Cybrary cannot guarantee or verify the contents of any externally linked website. You should therefore note you click on external links at your own risk and Cybrary cannot be held liable for any damages or implications caused by visiting any external links. This Privacy Policy does not cover any third party’s use or handling of your information once it is shared. Instead, the privacy policy of the third-party will govern. We encourage you to visit the websites of those third-parties and fully read and understand their privacy policies. Some of these entities will have different privacy terms than we do and their servers may be located outside the United States.</p>
                    <p className='text-gray-300 mt-2'>The Platform may link to other websites, including but not limited to health care provider pages, or through advertisements. We disclaim any and all responsibility for the privacy practices of third-parties that may have links to or from our Platform. We encourage you to review the privacy policies and privacy statements of every website that you visit that collects personally identifiable information.</p>
                    <p className='text-gray-300 mt-2'></p>
                    <h1 id='CALIFORNIA PRIVACY RIGHTS' ref={(el) => (headingsRef.current[7] = el)} className='text-5xl mt-6'>
                        CALIFORNIA PRIVACY RIGHTS
                    </h1>
                    <p className='text-gray-300 mt-2'>We will not share any personal information about you with other companies if prohibited by applicable California law or to the extent your prior consent to share is required by applicable California law.</p>
                    <p className='text-gray-300 mt-2'>If you are a California resident, you may have certain rights with respect to your Personal Information including the following rights:
                    </p>
                    <ol className='mt-4'>
                        <li className='text-gray-300 ml-2 mt-2'>the right to know, by way of our Privacy Policy and any specific inquiries you direct to us, where personal information we have about you comes from, what we use that information for, whether it is being disclosed or sole, and to whom it is being disclosed or sold;</li>
                        <li className='text-gray-300 ml-2 mt-2'>the right to “opt-out” of Cybrary’s sale of your personal information to any third parties;</li>
                        <li className='text-gray-300 ml-2 mt-2'>the right, with some exceptions, to have your personal information deleted from Cybrary’s possession or control; and</li>
                        <li className='text-gray-300 ml-2 mt-2'>the right to receive equal service and pricing from Cybrary even if you exercise any of your privacy rights.</li>
                    </ol>
                    <p className='text-gray-300 mt-2'>To make such a request, or if you have any questions or concerns about your California privacy rights, our Privacy Policy or our use of your personal information, please contact us at as provided below.</p>
                    <p className='text-white text-lg mt-2'>EU Resident Rights under the GDPR</p>
                    <p className='text-gray-300 mt-2'>These disclosures apply only to our processing of Personal Information within the scope of the General Data Protection Regulation (“GDPR”) from one or more of the European Union Member States plus Iceland, Lichtenstein and Norway (together known as the “European Economic Area” or “EEA”).</p>
                    <p className='text-gray-300 mt-2'>The GDPR went into effect on May 25, 2018. As a resident of the EU or EEA, you have certain rights with respect to the processing of your personal data, including:</p>
                    <ul className='mt-4'>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right of access:</strong> You have the right to ask us for copies of your personal information.
                        </li>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right to rectification:</strong> You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.
                        </li>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.
                        </li>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your information in certain circumstances.
                        </li>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right to object to processing:</strong> You have the right to object to the processing of your personal data in certain circumstances.
                        </li>
                        <li className='text-gray-300 ml-2 mt-2'>
                            <strong>Your right to data portability:</strong> You have the right to ask that we transfer the information you gave us to another organization, or to you, in certain circumstances.
                        </li>
                    </ul>

                    <p className='text-gray-300 mt-2'>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
                    <p className='text-gray-300 mt-2'>Please contact us at privacy@cybrary.it if you wish to make a request.</p>
                    <h1 id='CONTACT US' ref={(el) => (headingsRef.current[8] = el)} className='text-5xl mt-6'>
                        CONTACT US
                    </h1>
                    <p className='text-gray-300 mt-2'>For additional information pertaining to our Privacy Policy, please contact at privacy@cybrary.it or by writing us at:</p>
                    <p className='text-white mt-2'>Cybrary, Inc.</p>
                    <p className='text-gray-300 mt-2'>Attn: Privacy</p>
                    <p className='text-gray-300 mt-2'>4600 River Road STE 400 Riverdale, MD 20737 USA</p>
                    <p className='text-gray-300 mt-2'>On any email or postal letter you send, please include “Privacy” in the subject line.</p>
                    <h1 id='CHANGES TO THIS PRIVACY POLICY' ref={(el) => (headingsRef.current[9] = el)} className='text-5xl mt-6'>
                        CHANGES TO THIS PRIVACY POLICY
                    </h1>
                    <p className='text-gray-300 mt-2'>This Privacy Policy may be updated from time to time. We reserve the right to modify the Policy at any time without notice, so please review the Privacy Policy frequently. When changes are made to this Privacy Policy, we will revise the “last updated” date at the bottom of this Privacy Policy. Your continued use of our Sites or Platform after we have posted any policy changes indicates your agreement to the changes unless you notify us otherwise.</p>
                    <h1 id='COOKIES' ref={(el) => (headingsRef.current[10] = el)} className='text-5xl mt-6'>
                        COOKIES
                    </h1>
                    <p className='text-gray-300 mt-2'>When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email or home address.  We (or service providers on our behalf) may then send communications and marketing to these email or home addresses.  You may opt out of receiving this advertising by visiting.</p>
                    <NavLink to='app-retention'>
                        https://app.retention.com/optout
                    </NavLink>
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    )
}

export default Privacy;
