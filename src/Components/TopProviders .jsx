import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { use, useEffect } from 'react';


const providerPromise = fetch('/skills.json').then((res) => res.json());

const TopProviders = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const providers = use(providerPromise);


  const topProviders = [...providers]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10" data-aos="fade-up">
      {/* Title */}
      <h2
        className="text-3xl font-bold mb-8 text-center animate__bounce"
        data-aos="fade-down"
      >
        🌟 Top Rated Providers
      </h2>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topProviders.map((provider, index) => (
          <div
            key={provider.skillId}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center animate__animated animate__fadeInUp border-b-4 border-r"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <img
              src={provider.image}
              alt={provider.skillName}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />

            {/* Provider Info */}
            <h3 className="text-lg font-semibold">{provider.providerName}</h3>
            <p className="text-gray-600">{provider.skillName}</p>

            <div className="flex justify-between items-center w-full mt-3 text-gray-700">
              <p>⭐ {provider.rating}</p>
              <p className="font-medium">${provider.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProviders;
