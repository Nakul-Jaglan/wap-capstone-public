import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/contact.css";

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
                        <div className="yap-container">
                            <h1 className="contact-subtitle">Get in Touch</h1>

                            <br></br>

                            <div className="yap-container-for-grid">
                                <div className="yap-adrs">
                                    <img className="adrs-icon" src="/location.png" alt="Address"/>
                                    <h3>Address:</h3>
                                    <a href="https://maps.app.goo.gl/bDBSwXKFqJdTYyWP8" target="_blank">
                                        <p>NH44, Chowk, Bahalgarh, Sonipat, Haryana 131021</p>
                                    </a>
                                </div>

                                <div className="yap-phone">
                                    <img className="phone-icon" src="/phone.png" alt="Phone"/>
                                    <h3>Phone:</h3>
                                    <a href="tel:+917988223181" target="_blank">
                                        <p>+91 7988223181</p>
                                    </a>
                                </div>

                                <div className="yap-email">
                                    <img className="email-icon" src="/mail.png" alt="Email"/>
                                    <h3>Email:</h3>
                                    <a href="mailto:jaglan.nakul@gmail.com" target="_blank">
                                        <p>jaglan.nakul@gmail.com</p>
                                    </a>
                                </div>

                                <div className="yap-whatsapp">
                                    <img className="whatsapp-icon" src="/whatsapp.png" alt="WhatsApp"/>
                                    <h3>WhatsApp:</h3>
                                    <button className="whatsapp-btn">
                                        <a href="https://wa.me/917988223181" target="_blank">
                                            Chat with us
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form">
                            <label className="contact-name">Name:</label>
                            <input type="text" id="name-box" name="name" required />
                            
                            <label className="contact-email">Email:</label>
                            <input type="email-box" id="email" name="email" required />
                            
                            <label className="contact-msg">Message:</label>
                            <textarea id="msg-box" name="message" required/>
                            
                            <button type="submit" className="submit-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="map-container">
                <h1 className="map-title">Find Us Here</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.644637812188!2d77.08754637645173!3d28.982911575475278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db15c164f0a91%3A0xcab7be79bc1b3bac!2sNewton%20School%20of%20Technology%2C%20Delhi%20NCR!5e1!3m2!1sen!2sin!4v1745759785743!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}