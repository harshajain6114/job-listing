import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PostJobForm from './components/PostJobForm';
import About from './components/About';
import Contact from './components/Contact';
import FilterSidebar from './components/FilterSidebar';
import './App.css'

const App = () => {
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const location = useLocation();

  const handlePostJobClick = () => {
    setShowPostJobForm(true);
  };

  const handleClosePostJobForm = () => {
    setShowPostJobForm(false);
  };

  return (
    <div className="App">
      <Navbar onPostJobClick={handlePostJobClick} />
      
      {/* Ensure HeroSection is at the top */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Render FilterSidebar only on the home page, below HeroSection */}
      {location.pathname === '/' && <FilterSidebar />}
      
      {showPostJobForm && <PostJobForm onClose={handleClosePostJobForm} />}
      <Footer />
    </div>
  );
};

export default App;
