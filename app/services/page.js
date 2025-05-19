"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import './services.css'
import Gemini from '../components/gemini'

function Services() {
    const [showText, setShowText] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 800);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="main">
                    <section className="hero-section">
                        <section className="hero-bg">
                            <img src="/meal-mate.png" className="hero-bg-img" alt="Meal Mate" />
                        </section>
                        {showText && (
                            <section className="content-overlay">
                                <section className="title">
                                    <h1 className="title-text">Our Product</h1>
                                    <p className="text-below-title">
                                        Meal Mate is your all-in-one solution for effortless meal planning, recipe discovery, and smart grocery management. Whether you're looking to organize your weekly meals, find new recipes, or streamline your grocery shopping, Meal Mate makes the process simple and enjoyable.
                                    </p>
                                </section>
                                <section className="list-below-title">
                                    <h2 className="list-title">What our product does:</h2>
                                    <ul className="title-list">
                                        <li className="title-list-item">Instantly generate ingredient checklists from any dish you want to cook.</li>
                                        <li className="title-list-item">Easily track what you have at home and what you need to buy.</li>
                                        <li className="title-list-item">Search for missing ingredients on your favorite e-commerce platforms with a single click.</li>
                                        <li className="title-list-item">Access step-by-step cooking instructions and personalized meal plans.</li>
                                    </ul>
                                </section>
                            </section>
                        )}
                    </section>

                    <Gemini/>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Services