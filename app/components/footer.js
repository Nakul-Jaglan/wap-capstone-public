import '../styles/footer.css';

function Footer() {
  return (
    <section className="footer">
        <div className="main-footer">
            <div className="footer-content">
                <div className="logo-div">
                    <img src="/logo.png" alt="Logo" className="logo-image"/>
                    <h2 className="footer-title">Meal Mate</h2>
                </div>
                <p className="text-below-footer-title">&copy; 2025 Meal Mate. All rights reserved.</p>
            </div>

            <div className="footer-links">
                <p className="text-below-footer-title">Follow us on social media:</p>

                <div className="social-media-links">

                    <a href="https://www.linkedin.com/in/nakuljaglan/" target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/linkedin.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>Linkedin</div>
                        </div>
                    </a>

                    <a href="https://github.com/Nakul-Jaglan" target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/github.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>GitHub</div>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/@NakulNST" target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/youtube.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>YouTube</div>
                        </div>
                    </a>

                    <a href="https://www.x.com/Nakul_Jaglan" target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/twitter.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>Twitter</div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/nakul.jaglan" target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/instagram.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>Instagram</div>
                        </div>
                    </a>
                    
                    <a href='https://www.reddit.com/r/newtonschooloftech/' target="_blank" className="social-links-text">
                        <div className='socials-div'>
                            <img src="/reddit.png" alt="Logo" className="social-image"/>
                            <div className='text-inside-link'>Reddit</div>
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer 