import AOS from 'aos';
import 'aos/dist/aos.css';
import { use, useEffect } from 'react';
import { Link } from 'react-router';

const skillPromise = fetch('/skills.json').then((res) => res.json());

const SkillsCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillData = use(skillPromise);

  // ৮টি কার্ড দেখানোর জন্য slice ব্যবহার
  const displaySkills = skillData.slice(0, 8);

  return (
    <div className=" mx-auto px-4 py-8" data-aos="fade-up">
      <h1
        className="text-4xl text-center mt-5 font-bold mb-6"
        data-aos="fade-down"
      >
        Popular Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displaySkills.map((skill, index) => (
          <div
            key={skill.skillId}
            className="rounded-xl shadow-2xl hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            {/* Image */}
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />

            {/* Info */}
            <div className="p-4 flex flex-col flex-grow space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {skill.skillName}
              </h2>
              <p className="text-sm text-gray-700">
                Instructor: {skill.providerName}
              </p>
              <p className="text-sm text-gray-600">
                Category: {skill.category}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>⭐ {skill.rating}</p>
                <p className="font-medium text-gray-800">${skill.price}</p>
              </div>
              <p className="text-sm text-gray-700">
                Slots Available: {skill.slotsAvailable}
              </p>

              {/* Spacer to push button to bottom */}
              <div className="mt-auto">
                <Link
                  to={`/category/${skill.skillId}`}
                  className="mt-3 block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 text-center  rounded-lg hover:scale-105 transition-transform"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
