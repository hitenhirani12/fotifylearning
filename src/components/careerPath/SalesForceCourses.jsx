import React from 'react';

const salesforceCourses = [
    {
        img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
        title: 'Salesforce Fundamentals',
        overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
        duration: '4 hours',
        format: 'On-demand video',
    },
    {
        img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
        title: 'Advanced Salesforce Administration',
        overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
        duration: '6 hours',
        format: 'Interactive lab sessions',
    },
    {
        img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
        title: 'Salesforce Developer Essentials',
        overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
        duration: '8 hours',
        format: 'Hands-on projects and coding exercises',
    },
    {
        img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
        title: 'Salesforce Integration Strategies',
        overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
        duration: '5 hours',
        format: 'Case studies and practical exercises',
    },
    {
        img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
        title: 'Data Migration with Salesforce',
        overview: 'Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.',
        duration: '4 hours',
        format: 'Live demonstrations and guided practice',
    },
    {
        img: 'https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg',
        title: 'Salesforce Lightning Experience',
        overview: 'Transition smoothly from Classic to Lightning Experience with a comprehensive guide on new features and functionalities.',
        duration: '3 hours',
        format: 'On-demand video tutorials',
    },
    {
        img: 'https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp',
        title: 'Salesforce Service Cloud Mastery',
        overview: 'Enhance your skills in managing customer service operations using Salesforce Service Cloud, focusing on case management and service automation.',
        duration: '6 hours',
        format: 'Interactive scenarios and quizzes',
    },
    {
        img: 'https://www.ksolves.com/wp-content/uploads/Blog-3.jpg',
        title: 'Salesforce Marketing Cloud Insights',
        overview: 'Explore advanced marketing automation and analytics capabilities within Salesforce Marketing Cloud.',
        duration: '5 hours',
        format: 'Case studies and practical exercises',
    },
    {
        img: 'https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp',
        title: 'Salesforce Security Best Practices',
        overview: 'Learn best practices for securing your Salesforce instance, including user access management and data protection.',
        duration: '4 hours',
        format: 'On-demand video and security assessments',
    },
    {
        img: 'https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp',
        title: 'Salesforce CPQ Fundamentals',
        overview: 'Understand the essentials of Salesforce CPQ (Configure, Price, Quote) to streamline your sales process and quoting accuracy.',
        duration: '5 hours',
        format: 'Interactive labs and real-world scenarios',
    },
    {
        img: 'https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg',
        title: 'Salesforce Analytics Cloud Training',
        overview: 'Get hands-on experience with Salesforce Analytics Cloud.',
        duration: '5 hours',
        format: 'Practical exercises and case studies',
    },
    {
        img: 'https://www.techforceservices.com/wp-content/uploads/2024/05/Salesforce-Community-Cloud-Crafting-Dynamic-Online-Communities.webp',
        title: 'Salesforce Community Cloud Essentials',
        overview: 'Learn to build and manage Salesforce Communities to enhance collaboration and engagement with external users.',
        duration: '5 hours',
        format: 'On-demand video and project-based learning',
    },
];

function SalesforceCourses() {
    return (
        <div className="mt-20 text-white py-12 px-4 md:px-72 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl text-center mb-8">
                Upskill at <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600'>Any Stage</span> of Your Career
            </h2>
            <p className='text-center w-2/3 mb-12 text-gray-400'>Explore FortifyLearning’s Career Paths designed to take you from novice to expert—and
            anywhere in between.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {salesforceCourses.map((course, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-600 ">
                        <img src={course.img} alt="" className='h-[200px] w-full object-cover rounded-lg'/>
                        <div className='p-6'>
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-gray-400 mb-4">{course.overview}</p>
                            <div className="text-sm text-gray-300 mb-1">
                                <span className="font-semibold">Duration:</span> {course.duration}
                            </div>
                            <div className="text-sm text-gray-300">
                                <span className="font-semibold">Format:</span> {course.format}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SalesforceCourses;
