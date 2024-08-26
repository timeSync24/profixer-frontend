import React from 'react';
import HeroSection from './HeroSection';
import Recommended from './Recommended';
import PopularRemodelingProjects from './PopularRemodelingProjects';
import Popular from './Popular';
import CostGuide from './CostGuide';
import PopularHomeProject from './PopularHomeProject';
import ProjectQuote from './ProjectQuote';
import ProFixers from './ProFixers';
import BecomeAProfixer from './BecomeAProfixer';
import CertifiedProBadge from './CertifiedProBadge'; // Import the badge component

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CertifiedProBadge />
      <Recommended />
      <PopularRemodelingProjects />
      <Popular />
      <CostGuide />
      <PopularHomeProject />
      <ProjectQuote />
      <BecomeAProfixer />
      <ProFixers />
    </div>
  );
};

export default Home;
