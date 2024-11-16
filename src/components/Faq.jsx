import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where is the MITRE ATT&CK Defender (MAD) Certification training?",
      answer:
        "MITRE ATT&CK Defender (MAD) is no longer available on Cybrary. Read the help center article to learn more.",
    },
    {
      question: "Do I need to know anything about cybersecurity to get started on Cybrary?",
      answer: "No, you can start learning without prior knowledge of cybersecurity.",
    },
    {
      question: "Do I need any special hardware or software?",
      answer: "No special hardware or software is needed to get started.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime.",
    },
    {
      question: "What is your refund policy?",
      answer: "Refunds are available within 30 days of purchase.",
    },
  ];

  return (
    <div className="py-24 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-transparent text-white flex flex-col md:flex-row justify-evenly">
      <h1 className="text-4xl md:text-6xl md:mb-4 ml-4 md:ml-0 mb-12">FAQs</h1>
      <div>
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
