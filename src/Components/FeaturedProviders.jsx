import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const providers = [
  {
    id: 1,
    name: 'Alex Martin',
    skill: 'Beginner Guitar Lessons',
    rating: 4.8,
    price: '$20/hr',
    img: 'https://i.ibb.co.com/BK7DPbj0/838be6b7e11a55ba2425f6222c669fb0.png',
  },
  {
    id: 2,
    name: 'Sara Lee',
    skill: 'Digital Marketing Basics',
    rating: 4.6,
    price: '$25/hr',
    img: 'https://i.ibb.co.com/x8wMbpQG/course-1728210573.jpg',
  },
  {
    id: 3,
    name: 'John Doe',
    skill: 'Photography for Beginners',
    rating: 4.9,
    price: '$30/hr',
    img: 'https://i.ibb.co.com/7JYh84C1/best-indian-wildlife-photographers-03.jpg',
  },
  {
    id: 4,
    name: 'Emily Clark',
    skill: 'Basic Cooking Skills',
    rating: 4.7,
    price: '$18/hr',
    img: 'https://i.ibb.co.com/WWmNKcY7/chef-instructor-teaching-learners-in-kitchen.jpg',
  },
];

const FeaturedProviders = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-down"
        >
          Featured Providers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8  border-b-4 border-l-2">
          {providers.map((provider, index) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2  "
              data-aos="zoom-in"
              data-aos-delay={index * 100} 
            >
              <img
                src={provider.img}
                alt={provider.skill}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{provider.skill}</h3>
                <p className="text-gray-600 mb-2">By {provider.name}</p>
                <p className="text-yellow-500 font-semibold mb-2">
                  {provider.rating}
                </p>
                <p className="text-gray-800 font-semibold">{provider.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
