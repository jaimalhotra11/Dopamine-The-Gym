import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Careers from './pages/Careers';
import Facilities from './pages/Facilities';
import VirtualTour from './pages/VirtualTour';
import SuccessStoryForm from './pages/SuccessStoryForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/share-story" element={<SuccessStoryForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;