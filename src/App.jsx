import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// Page Components
import Home from './pages/home.jsx';
import Signature from './pages/Signature.jsx';
import Collections from './pages/collections.jsx';
import About from './pages/about.jsx';

// ScrollToTop Component: Automatically scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Main wrapper with Flexbox to keep Footer at bottom */}
      <div className="min-h-screen flex flex-col bg-[#faf9f6]">
        
        {/* Persistent Navigation Header */}
        <Header />

        {/* Dynamic Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Signature Gallery Page */}
            <Route path="/signature" element={<Signature />} />
            
            {/* Product Catalog Page */}
            <Route path="/collections" element={<Collections />} />
            
            {/* Heritage Story Page */}
            <Route path="/about" element={<About />} />
            
            {/* Catch-all: Redirects to Home */}
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