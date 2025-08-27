"use client";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer full-service social media management, content creation, analytics-driven campaigns, and reputation monitoring.",
    },
    {
      question: "How do you create viral campaigns?",
      answer:
        "We combine creative storytelling with trend analysis and platform algorithms to maximize reach and engagement.",
    },
    {
      question: "Do you offer performance tracking?",
      answer:
        "Yes! We provide detailed analytics dashboards and regular performance reports for transparency.",
    },
    {
      question: "Can you manage multiple platforms?",
      answer:
        "Absolutely. We manage Instagram, Facebook, LinkedIn, TikTok, Twitter (X), and more with platform-specific strategies.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white text-black px-6 md:px-16 py-20 font-sans overflow-hidden">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side Heading */}
        <div>
          <p className="text-gray-500 text-sm mb-2">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p>Got questions about our services? Here are some quick answers to the most common queries.</p>
        </div>

        {/* Right Side Paragraph */}
        <div className="text-sm text-gray-500 mt-2 md:mt-10 md:pl-10 leading-relaxed">
          
       

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <CaretDown
                size={20}
                className={`transition-transform ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
       </div>
      </div>
    </section>
  );
}
