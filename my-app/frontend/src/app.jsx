import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AES from './components/AES';
import RSA from './components/RSA';
import DSA from './components/DSA';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aes" element={<AES />} />
        <Route path="/rsa" element={<RSA />} />
        <Route path="/dsa" element={<DSA />} />
      </Routes>
    </Router>
  );
};

export default App;
