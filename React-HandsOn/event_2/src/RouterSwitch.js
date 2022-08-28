import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Shop from "./shop";
import React from 'react';
import Item from "./ItemDetails";
import App from './components/App'
import './App.css';

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
