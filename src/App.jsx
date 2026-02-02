import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/header';
import Footer from './components/footer';

// Pages
import Home from './pages/home';
import Ride from './pages/ride';
import Rent from './pages/rent';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col selection:bg-yellow-400 selection:text-black">
        
        {/* Header fixed hai, navigation handle karta hai */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Home Page Route */}
            <Route path="/" element={<Home />} />

            {/* 2. Ride Page Route (Pickup/Drop/Local) */}
            <Route path="/ride" element={<Ride />} />

            {/* 3. Rent Page Route (Self-Drive/Rental) */}
            <Route path="/rent" element={<Rent />} />

            {/* 4. About Page Route (Our Story/Legacy) */}
            <Route path="/about" element={<About />} />
            
            {/* Optional: Agar koi galat URL daale toh Home par bhej do */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer bottom mein rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;