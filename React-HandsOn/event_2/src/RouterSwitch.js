import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Upevents from "./upEvents";
import React from 'react';
import App from './components/App'
import './App.css';

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/upEvents" element={<Upevents />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
