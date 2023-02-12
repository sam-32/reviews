import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cine from './components/Cine';
import Musica from './components/Musica';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Cine" element={<Cine />} />
      <Route path="/Musica" element={<Musica />} />
    </Routes>
  </Router>
  );
}

export default App;
