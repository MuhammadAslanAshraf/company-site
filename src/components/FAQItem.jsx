'use client'

import React, { useState } from "react";

const faqItems = [
  {
    question: "What industries do you serve?",
    answer:
      "We work with a wide range of industries including Technology & SaaS, E-commerce & Retail, Healthcare & Biotech, Finance & Fintech, Education & EdTech, Real Estate, Marketing Agencies, Manufacturing, Logistics & Supply Chain, and many more. Our AI agents and development solutions are adaptable to almost any sector looking to automate processes, improve customer support, or build intelligent digital products.",
  },
  {
    question: "How long does it take to build and deploy an AI agent?",
    answer:
      "Timelines vary depending on complexity. A simple support or internal automation agent can be audited, designed, and deployed in 4–8 weeks. More advanced multi-step agents with custom integrations typically take 8–16 weeks. We always start with a discovery call and system audit to give you a precise estimate.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes — every project includes 30 days of post-launch support. After that, we offer flexible monthly maintenance & optimization plans to monitor performance, handle updates, add new features, and ensure the agent continues delivering results as your business evolves.",
  },
  {
    question: "What technologies do you use for AI agents?",
    answer:
      "We primarily build with modern LLM frameworks (OpenAI, Anthropic, Grok, Llama, etc.), LangChain / LlamaIndex for orchestration, Python/FastAPI or Node.js for backends, React/Next.js for any frontend interfaces, and deploy on AWS, Vercel, or Railway depending on your needs. We also integrate with your existing stack (CRM, Slack, databases, etc.).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border border-gray-200 
              transition-all duration-300  hover:bg-gray-100
              ${openIndex === index ? "shadow-lg" : "shadow-sm"}`}
            >

              {/* Question */}
              <button
  onClick={() => toggleFAQ(index)}
  className={`
    w-full px-6 py-5 md:px-8 md:py-6
    flex items-center justify-between
    text-left bg-gray-50 hover:bg-gray-100
    transition-all duration-300
    hover:ml-4
  `}
>
                <span className="text-xl md:text-2xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>

                <span
                  className={`text-2xl md:text-3xl font-bold text-gray-600 
                  transition-transform duration-300 
                  ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                >
                  <span className="w-6 h-6 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 text-lg text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}