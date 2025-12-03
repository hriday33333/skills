import AOS from 'aos';
import 'aos/dist/aos.css';
import { use, useEffect, useState } from 'react';
import { Link } from 'react-router';

const skillPromise = fetch('/skills.json').then((res) => res.json());

const AllItems = () => {
  const originalData = use(skillPromise);

  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, ] = useState('all');
  const [sortType, setSortType] = useState('none');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setSkills(originalData);
  }, [originalData]);

  // 🔍 Search + Filter + Sorting Logic
  const applyFilters = () => {
    let filtered = [...originalData];

    // Search
    if (search) {
      filtered = filtered.filter((item) =>
        item.skillName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    // Sorting
    if (sortType === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setSkills(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [search, categoryFilter, sortType]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10" data-aos="fade-up">
      <h1
        className="text-4xl text-center mt-5 font-bold mb-10"
        data-aos="fade-down"
      >
        All Items
      </h1>

      {/* 🔧 Filter Panel */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by skill name..."
          className="input input-bordered w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        {/* <select
          className="select select-bordered w-full md:w-1/4"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="music">Music</option>
          <option value="cooking">Cooking</option>
          <option value="design">Design</option>
          <option value="programming">Programming</option>
        </select> */}

        {/* Sorting */}
        <select
          className="select select-bordered w-full md:w-1/4"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="none">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.skillId}
            className=" rounded-xl shadow-2xl hover:shadow-lg transition-shadow overflow-hidden"
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
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {skill.skillName}
              </h2>

              {/* Provider Name */}
              <p className="text-sm text-gray-700">
                Instructor: {skill.providerName}
              </p>

              {/* Category */}
              <p className="text-sm text-gray-600">
                Category: {skill.category}
              </p>

              {/* Rating & Price */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>⭐ {skill.rating}</p>
                <p className="font-medium text-gray-800">${skill.price}</p>
              </div>

              {/* Slots Available */}
              <p className="text-sm text-gray-700">
                Slots Available: {skill.slotsAvailable}
              </p>

              {/* View Details Button */}
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

      {skills.length === 0 && (
        <p className="text-center text-xl font-semibold mt-10">
          No items found!
        </p>
      )}
    </div>
  );
};

export default AllItems;
