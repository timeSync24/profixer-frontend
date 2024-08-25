// src/Pages/Home/Home.tsx

import React from 'react';
import HeroSection from './HeroSection';
import Recommended from './Recommended';
import PopularRemodelingProjects from './PopularRemodelingProjects';
import Popular from './Popular';
import CostGuide from './CostGuide';
import PopularHomeProject from './PopularHomeProject';
import ProjectQuote from './ProjectQuote';
import ProFixers from './ProFixers';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Recommended />
      <PopularRemodelingProjects />
      <Popular />
      <CostGuide />
      <PopularHomeProject />
      <ProjectQuote />
      <ProFixers />
    </div>
  );
};

export default Home;
