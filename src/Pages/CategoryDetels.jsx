import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const CategoryDetels = () => {
  const { skillId } = useParams();
  const data = useLoaderData();
  const [skill, setSkill] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const foundSkill = data.find(
      (singleSkill) => singleSkill.skillId == skillId
    );
    setSkill(foundSkill);
  }, [skillId, data]);

  if (!skill) return <p className="text-center py-10">Loading...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    toast.success(`🎉 Thanks ${formData.name}! You enrolled successfully.`, {
      duration: 3000,
      position: 'top-center',
      style: {
        border: '1px solid #4ade80',
        padding: '12px 20px',
        color: '#064e3b',
        background: '#dcfce7',
        fontWeight: '500',
        borderRadius: '10px',
      },
      iconTheme: {
        primary: '#22c55e',
        secondary: '#ffffff',
      },
    });

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen px-4 animate__backInDown"
      data-aos="fade-up"
    >

      <Toaster />

      <div
        className="hero-content flex-col lg:flex-row gap-10"
        data-aos="zoom-in-up"
      >
        <img
          src={skill.image}
          alt={skill.skillName}
          className="max-w-sm w-[250px] md:h-[250px] md:w-[300px] rounded-2xl shadow-2xl"
          data-aos="fade-right"
        />

        <div className="space-y-4 w-full max-w-md" data-aos="fade-left">
          <h1 className="text-4xl font-bold text-primary">{skill.skillName}</h1>
          <p className="text-gray-700">{skill.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
            <p>
              <span className="font-semibold">Provider:</span>{' '}
              {skill.providerName}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              {skill.providerEmail}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {skill.category}
            </p>
            <p>
              <span className="font-semibold">Slots Available:</span>{' '}
              {skill.slotsAvailable}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${skill.price}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {skill.rating}
            </p>
          </div>

          <h1 className="text-3xl font-bold">Book session</h1>
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
