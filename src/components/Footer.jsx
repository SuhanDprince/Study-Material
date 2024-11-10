import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const quotes = [
    "Dream big.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Keep moving forward.",
    "Believe in yourself.",
    "Do what you can with all you have, wherever you are.",
    "It always seems impossible until it's done.",
    "Never give up.",
    "Believe you can and you're halfway there.",
    "Opportunities don't happen, you create them.",
    "Stay positive.",
    "The future belongs to those who believe in the beauty of their dreams."
  ];

  const [quote, setQuote] = useState('');

  useEffect(() => {
    const changeQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };

    // Change the quote every 10 seconds
    const interval = setInterval(changeQuote, 10000);
    
    // Set the first quote immediately
    changeQuote();

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <footer className="footer">
      <p className="quote-text">{quote}</p>
    </footer>
  );
};

export default Footer;
