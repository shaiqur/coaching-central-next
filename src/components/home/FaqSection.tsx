"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQType {
  id: number;
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const faqs: FAQType[] = [
    {
      id: 1,
      question: "What is the admission process for the coaching programs?",
      answer:
        "The admission process involves filling out an application form, followed by an entrance test to assess the student's current knowledge level. Based on the test performance, we recommend the most suitable program. You can visit our institute or apply online through our website.",
    },
    {
      id: 2,
      question: "How many students are there in each batch?",
      answer:
        "We maintain limited batch sizes to ensure personalized attention. For school programs, we have 25–30 students per batch. For competitive exam preparation like JEE and NEET, we keep smaller batches of 20–25 students to enable better interaction and doubt resolution.",
    },
    {
      id: 3,
      question: "Do you provide study materials, or should students arrange them?",
      answer:
        "We provide comprehensive study materials designed by our expert faculty, including textbooks, practice question banks, previous years' papers, and digital resources. These materials are included in the course fee and are regularly updated to align with the latest examination patterns.",
    },
    {
      id: 4,
      question: "How do you track student performance and progress?",
      answer:
        "We conduct regular assessments—weekly quizzes, monthly tests, and term exams. Students receive performance analytics and personalized feedback. Parents also receive progress reports and can schedule meetings with teachers to discuss their child's growth.",
    },
    {
      id: 5,
      question: "Are there any scholarships available for deserving students?",
      answer:
        "Yes, we offer scholarships based on both merit and financial need. Students who perform exceptionally well in our entrance test can receive tuition fee waivers ranging from 25% to 100%. Special scholarships are also available for students from economically disadvantaged backgrounds.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our programs and admission process
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={activeFaq === faq.id}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  
                  <ChevronDown
                    className={`text-primary transition-transform duration-300 ${
                      activeFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 py-4 bg-gray-50 border-t border-gray-100 transition-all duration-300 ${
                    activeFaq === faq.id ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're happy to help!
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
