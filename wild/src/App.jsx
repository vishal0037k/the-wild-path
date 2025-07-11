import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import ExplorePage from './components/Explore/Explore';
import GallerySection from './components/Gallery/Gallery';
import AboutSection from './components/About/About';
import ContactSection from './components/Contact/Contact';
import HeroSection from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import ViewTrips from './components/Dashboard/ViewTrips';
import CreateNewTrips from './components/Dashboard/CreateNewTrips';
import Show from './components/Dashboard/Show';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/dashboard" element={<Dashboard />} />

<Route path="/CreateNewTrips" element={<CreateNewTrips />} />
<Route path="/CreateNewTrips/:id" element={<CreateNewTrips />} />

 <Route path="/viewTrips" element={<ViewTrips />} />
 <Route path="/show/:id" element={<Show />} />

        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}


export default App;
