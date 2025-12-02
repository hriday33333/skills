import { use, useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillPromise = fetch('/skills.json').then((res) => res.json());

const SkillsCard = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillData = use(skillPromise);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" data-aos="fade-up">
      <h1
        className="text-4xl text-center mt-5 font-bold mb-6"
        data-aos="fade-down"
      >
        Popular Skills
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeInUp "
      >
        {skillData.map((skill, index) => (
          <div
            key={skill.skillId}
            className="bg-gray-400 rounded-xl shadow-2xl hover:shadow-lg transition-shadow overflow-hidden "
            data-aos="zoom-in"
            data-aos-delay={index * 100} 
          >
            {/* Image */}
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />

            {/* Info */}
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {skill.skillName}
              </h2>

              {/* Rating & Price */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>⭐ {skill.rating}</p>
                <p className="font-medium text-gray-800">${skill.price}</p>
              </div>

              {/* Button */}
              <Link
                to={`/category/${skill.skillId}`}
                className="mt-3 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
