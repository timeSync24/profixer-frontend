import React from 'react';
import './App.css';

import Headers from './Pages/Home/Header';
import HeroSection from './Pages/Home/HeroSection';
import Recommended from './Pages/Home/Recommended';
import Popular from './Pages/Home/Popular';
import PopularHomeProject from './Pages/Home/PopularHomeProject';
import ProjectQuote from './Pages/Home/ProjectQuote';
import  PopularRemodelingProjects from './Pages/Home/PopularRemodelingProjects';
import ProFixers from './Pages/Home/ProFixers';
import Footer from './Pages/Home/Footer';

const App: React.FC = () => {
  return (
    <div >
      <Headers />
      <HeroSection />
      <Recommended />
      <PopularRemodelingProjects />
      <Popular />
      <PopularHomeProject />
      <ProjectQuote />
      <ProFixers />
      <Footer />
    
     
    </div>
  );
};

export default App;
