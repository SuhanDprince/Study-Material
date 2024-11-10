import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import MainCard from './components/MainCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <MainCard />
      <Footer />
    </div>
  );
};

export default App;
