import { useState } from "react";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where is the Salesforce Certification training?",
      answer:
        "Salesforce Certification training is no longer available on FortifyLearning. Read the help center article to learn more.",
    },
    {
      question: " Do I need to know anything about Salesforce to get started on FortifyLearning?",
      answer: "No. We’ve helped more than 3 million learners, with varying levels of education and experience, develop their Salesforce skills and reach their career goals.",
    },
    {
      question: "Do I need any special hardware or software?",
      answer: "No. You won’t need any additional hardware or tools. All of our learning activities can be completed from the comfort of your own browser.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "You may cancel your automatic renewal at any time. You will continue to have access to your subscription through the end of your current billing period. Please note that we do not provide refunds for any subscriptions purchased.",
    },
    {
      question: "What is your refund policy?",
      answer: (
        <>
          We do not offer refunds on previous purchases. FortifyLearning is available in both monthly and annual subscription options. Should you have questions regarding our refund policy, please contact{" "}
          <NavLink to="/support" className="text-blue-500 hover:underline">
            support@FortifyLearning.com
          </NavLink>
          .
        </>
      ),
    },
  ];

  return (
    <div className="py-24 px-4 md:px-32 bg-gradient-to-b from-gray-900 to-transparent text-white flex flex-col md:flex-row justify-evenly ">
      <h1 className="text-4xl md:text-6xl md:mb-4 ml-4 md:ml-0 mb-12 sm:w-1/3">FAQs</h1>
      <div className="md:w-2/3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <div
              className={`flex items-center justify-between cursor-pointer py-4 ${activeIndex === index ? "border-t-2 border-pink-500" : ""
                }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="relative flex items-center">
                <span
                  className={`absolute -left-4 w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-fuchsia-500 transform transition-transform duration-300 ${activeIndex === index ? "translate-x-4 opacity-100" : "translate-x-0 opacity-0"
                    }`}
                ></span>
                <span className="ml-6 text-xl">{faq.question}</span>
              </div>
              <span
                className={`text-3xl transform transition-transform ${activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ${activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="py-2 pl-6 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
