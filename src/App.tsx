import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Pages/Home/Header';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home'; // Import the Home component
import AllRemodelingProjects from './Pages/Home/AllRemodelingProjects';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/all-remodeling-projects" element={<AllRemodelingProjects />} /> 
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
