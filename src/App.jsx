import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// Page Components
import Home from './pages/home.jsx';
import Signature from './pages/Signature.jsx';
import Collections from './pages/collections.jsx';
import About from './pages/about.jsx';

function App() {
  return (
    <Router>
      {/* Main wrapper using Flexbox to ensure the Footer stays 
          at the bottom even if the page content is short.
      */}
      <div className="min-h-screen flex flex-col bg-[#faf9f6]">
        
        {/* Persistent Navigation Header */}
        <Header />

        {/* Dynamic Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Luxury Exhibition / Masterpieces Page */}
            <Route path="/signature" element={<Signature />} />
            
            {/* Product Catalog / Categories Page */}
            <Route path="/collections" element={<Collections />} />
            
            {/* Heritage & Founder Story Page */}
            <Route path="/about" element={<About />} />
            
            {/* Fallback Route: Redirects undefined paths to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;