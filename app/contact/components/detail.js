import React from 'react'

function Detail() {
    const handleCopy = () => {
        navigator.clipboard.writeText("+91 79882 23181")
            .then(() => {
                alert("Phone number copied to clipboard!");
            })
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    }
  return (
    
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
                    <section className="phone-section">
                        <a href="tel:+917988223181" target="_blank">
                            <p>+91 79882 23181</p>
                        </a>
                        <img className="copy-icon" src="/copy.png" alt="Copy" onClick={handleCopy} style={{cursor : "pointer"}}/>
                    </section>
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
  )
}

export default Detail