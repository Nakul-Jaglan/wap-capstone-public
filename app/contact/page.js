"use client";
import "./contact.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "./components/form";
import Map from "./components/map";
import Detail from "./components/detail";

export default function Contact() {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <div className="div-line">
                    <div className="two-cols-container">
                        <Detail/>
                        <Form/>
                    </div>
                </div>
            </div>
            <Map/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}