import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Shop from "./shop";
import React from 'react';
import Item from "./ItemDetails";
import './App.css';

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </Router>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default RouteSwitch;
