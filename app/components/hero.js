// import '../styles/hero.css';

// function Hero() {
//   return (
//     <section className="hero-section">
//         <h1 className='main-title'>Welcome to Meal Mate</h1>
//         <p className='text-below-title'>Your one-stop solution for meal planning and recipes.</p>
//         <div className="hero-image">
//             <img src="/hero-background.avif" alt="Meal Mate" />
//         </div>
//         <p className='text-below-image'>Explore our features and start your culinary journey today!</p>
//     </section>
//   )
// }

// export default Hero

// components/Hero.js
// components/hero.js

"use client";

import React from "react";
import { useEffect, useState } from "react";
import "../styles/hero.css";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 800); // Wait for image fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-bg">
          <img src="/hero-background.avif" className="hero-bg-img" alt="Meal Mate" />
          </div>
      {showText && (
        <div
          className="overlay"
        >
          <h1 className="main-title">Welcome to Meal Mate</h1>
          <p className="text-below-title">
            Your one-stop solution for meal planning and recipes.
          </p>
          <p className="text-below-image">
            Explore our features and start your culinary journey today!
          </p>
        </div>
      )}
    </section>
  );
}
