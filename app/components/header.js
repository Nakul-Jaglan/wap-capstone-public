// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import '../styles/header.css';

// function useWindowWidth() {
//   const [width, setWidth] = useState(
//     typeof window !== 'undefined' ? window.innerWidth : 0
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return width;
// }

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const width = useWindowWidth();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <section className="main-header">
//       <div className="logo-div">
//         <img src="/logo.png" alt="Logo" className="logo-image"/>
//         <Link href="/" className="link-myweb">Meal Mate</Link>
//       </div>
//       <label className="menu-icon" onClick={toggleMenu}>☰</label>
//       {(width > 768 || isMenuOpen) && (
//         <nav className='main-header-nav'>
//           <Link href="/" className="link-nav">Home</Link>
//           <Link href="/services" className="link-nav">Services</Link>
//           <Link href="/about" className="link-nav">About</Link>
//           <Link href="/contact" className="link-nav">Contact</Link>
//         </nav>
//       )}
//     </section>
//   );
// }

// export default Header;


// components/Header.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="main-header">
      <div className="logo-div">
        <img src="/logo.png" alt="Logo" className="logo-image"/>
        <Link href="/" className="link-myweb">Meal Mate</Link>
      </div>
      <label className="menu-icon" onClick={toggleMenu}>☰</label>
      {isClient && (width > 768 || isMenuOpen) && (
        <nav className='main-header-nav'>
          <Link href="/" className="link-nav">Home</Link>
          <Link href="/services" className="link-nav">Services</Link>
          <Link href="/about" className="link-nav">About</Link>
          <Link href="/contact" className="link-nav">Contact</Link>
        </nav>
      )}
    </section>
  );
}

export default Header;
