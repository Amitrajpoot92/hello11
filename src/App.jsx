import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard.jsx';
import InternApply from './components/Apply/InternApply.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Students is link par apply karenge */}
        <Route path="/apply" element={<InternApply />} />

        {/* Dashboard Route: Aapka main control panel */}
        <Route path="/dashboard/*" element={<MainDashboard />} />

        {/* Default Route: Agar koi galat URL dale toh dashboard par redirect ho jaye */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;