import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Click on the Sign Up button at the top-right corner, fill in your details, and verify your email to create an account.",
  },
  {
    question: "How can I contact a skill provider?",
    answer: "Once you find a provider, click on their profile and use the 'Contact' button to send a message.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, PayPal, and other secure online payment options.",
  },
  {
    question: "Can I cancel a session?",
    answer: "Yes, you can cancel a session 24 hours in advance. Refunds will be processed according to our policy.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-20">
      {/* Hero Section */}
      <header className="text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 text-center w-11/12 mx-auto rounded-2xl p-2">
        <h1 className="text-5xl font-bold mb-4">Support</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Need help? Find answers to common questions or contact our support team directly.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-blue-500" />
                )}
              </div>
              {openIndex === index && <p className="mt-4 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
        <p className="text-lg mb-6">
          Contact our support team via email or phone. We're here to assist you with any questions or concerns.
        </p>
        <p className="text-gray-700 mb-2"><strong>Email:</strong> support@skillswap.com</p>
        <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p className="text-gray-700"><strong>Working Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
      </section>
    </div>
  );
};

export default Support;
