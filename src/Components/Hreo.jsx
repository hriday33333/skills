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
      className="w-full mx-auto mt-16 md:mt-10 rounded-2xl overflow-hidden shadow-xl"
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
            <div
              className="relative w-full h-[60vh] md:h-[70vh]"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
                <h2
                  className="text-3xl md:text-5xl font-bold mb-2"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  {skill.skillName}
                </h2>

                <h3
                  className="text-lg md:text-2xl font-semibold"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  {skill.providerName}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hreo;
