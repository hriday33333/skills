import { use, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const skillPromise = fetch("/skills.json").then((res) => res.json());

const Hreo = () => {
  const skills = use(skillPromise);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div
      className="w-full mx-auto md:mt-10 mt-20 rounded-2xl overflow-hidden shadow-xl"
      data-aos="fade-up"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="relative" data-aos="zoom-in" data-aos-delay="100">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-6">
                <h2
                  className="text-3xl md:text-6xl font-bold mb-3"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {skill.skillName}
                </h2>
                <h2  className="text-xl md:text-2xl font-semibold mb-3"
                  data-aos="fade-down"
                  data-aos-delay="200">{skill.providerName}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hreo;
