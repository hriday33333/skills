import { FaEye, FaHandshake, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 w-11/12 mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 text-center rounded-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
          Welcome to SkillSwap
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Connecting learners with skilled providers online to make learning
          easy, accessible, and fun.
        </p>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        {/* Mission Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaLightbulb className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Make skill learning accessible for everyone. We bridge the gap
            between learners and skilled providers.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaEye className="text-indigo-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            Empower learners worldwide to grow professionally and personally by
            connecting them with top skills.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
          <FaHandshake className="text-purple-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Accessibility</li>
            <li>Quality</li>
            <li>Community</li>
            <li>Innovation</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mark Davis</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sophia Lee</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src="https://i.pravatar.cc/150?img=4"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">James Smith</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
