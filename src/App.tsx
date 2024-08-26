import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Pages/Home/Header';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home'; // Import the Home component
import AllRemodelingProjects from './Pages/Home/AllRemodelingProjects';
import ContactUs from './Pages/ContactUs';
import Articles from './Pages/Articles'; 
import Lawn from './Pages/Lawn';
import Interior from './Pages/Interior';
import Exterior from './Pages/Exterior';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/all-remodeling-projects" element={<AllRemodelingProjects />} /> 
        <Route path="/contact-us" element={<ContactUs />} />  
        <Route path="/articles" element={<Articles />} />  
        <Route path="/lawn" element={<Lawn />} /> 
        <Route path="/interior" element={<Interior />} />  
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/sign-up" element={<SignUp />} />  
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
