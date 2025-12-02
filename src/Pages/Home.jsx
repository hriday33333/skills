import { Suspense } from 'react';
import FeaturedProviders from '../Components/FeaturedProviders';
import Hreo from '../Components/Hreo';
import { default as Skills } from '../Components/skills';
import SkillsCard from '../Components/skillsCard';
import TopProviders from '../Components/TopProviders ';

const Home = () => {
  return (
    <div className="w-11/12 mx-auto mb-5 ">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Hreo></Hreo>
      </Suspense>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <SkillsCard></SkillsCard>
      </Suspense>
      <Suspense>
        <TopProviders></TopProviders>
      </Suspense>
      <Skills></Skills>
      <FeaturedProviders></FeaturedProviders>
    </div>
  );
};

export default Home;
