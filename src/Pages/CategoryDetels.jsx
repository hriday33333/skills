import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryDetels = () => {
  const { skillId } = useParams();
  const data = useLoaderData();
  const [skill, setSkill] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Find skill by ID
  useEffect(() => {
    const foundSkill = data.find(
      (singleSkill) => singleSkill.skillId == skillId
    );
    setSkill(foundSkill);
  }, [skillId, data]);

  if (!skill) return <p className="text-center py-10">Loading...</p>;

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit handler (SweetAlert Added)
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Thanks, ${formData.name}! 🎉`,
      text: "You have successfully enrolled.",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#4f46e5",
      background: "#ffffff",
      color: "#111",
      timer: 2500,
      timerProgressBar: true,
    });

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen px-4 animate__backInDown"
      data-aos="fade-up"
    >
      <div
        className="hero-content flex-col lg:flex-row gap-10"
        data-aos="zoom-in-up"
      >
        {/* Skill Image */}
        <img
          src={skill.image}
          alt={skill.skillName}
          className="max-w-sm w-[250px] md:h-[250px] md:w-[300px] rounded-2xl shadow-2xl"
          data-aos="fade-right"
        />

        {/* Skill Details */}
        <div className="space-y-4 w-full max-w-md" data-aos="fade-left">
          <h1 className="text-4xl font-bold text-primary">{skill.skillName}</h1>
          <p className="text-gray-700">{skill.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
            <p><span className="font-semibold">Provider:</span> {skill.providerName}</p>
            <p><span className="font-semibold">Email:</span> {skill.providerEmail}</p>
            <p><span className="font-semibold">Category:</span> {skill.category}</p>
            <p><span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}</p>
            <p><span className="font-semibold">Price:</span> ${skill.price}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {skill.rating}</p>
          </div>

          {/* Booking Form */}
          <h1 className="text-3xl font-bold">Book Session</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetels;
