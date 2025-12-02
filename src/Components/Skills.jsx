import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Fetching data from the public folder
// const skillPromise = fetch("/skills.json").then((res) => res.json());

const HowItWorks = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);


  return (
    <section className="max-w-6xl mx-auto px-4 py-12" data-aos="fade-up">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-center mb-8 text-indigo-600"
        data-aos="fade-down"
      >
        How This Website Works
      </h2>

    
      <p
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        This platform helps people connect, learn, and share skills with each
        other. Here’s what a normal user can do on this website 👇
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  border-b-4 border-r">
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 "
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            🎓 Explore Skills
          </h3>
          <p className="text-gray-600 text-sm">
            Browse a variety of skill categories — from music and cooking to web
            development and art. Learn what interests you.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            👩‍🏫 Learn from Providers
          </h3>
          <p className="text-gray-600 text-sm">
            Each skill is taught by a real instructor. Read their details,
            rating, and class info before joining any session.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            🤝 Share Your Own Skill
          </h3>
          <p className="text-gray-600 text-sm">
            Have a talent? You can become a provider and share your skill with
            others who want to learn from you.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            💬 Connect & Communicate
          </h3>
          <p className="text-gray-600 text-sm">
            Message instructors or learners, ask questions, and build a helpful
            learning community together.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ⭐ Rate & Review
          </h3>
          <p className="text-gray-600 text-sm">
            After finishing a class, give ratings and reviews to help others
            choose the best skill providers.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            🔍 Find Your Perfect Match
          </h3>
          <p className="text-gray-600 text-sm">
            Use filters like price, category, or rating to discover exactly what
            you’re looking for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
