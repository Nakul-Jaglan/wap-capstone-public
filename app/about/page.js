import Header from '../components/header'
import Footer from '../components/footer'
import Card from './components/card'
import './about.css'

function About() {
  return (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <section className='title-container'>
                <h1 className='main-title'>About Meal Mate</h1>
                <p className='text-below-title'>Here you can find information about our company and our team.</p>
                <img className='about-image' src='/about.jpg' alt='About Us'/>
            </section>

            <section className='about-container'>
                <h2 className='about-title'>About Us</h2>
                <section className='sub-about-container'>
                    <p className='about-text'>Welcome to Meal Mate! We are a company dedicated to providing the best meal planning and preparation services. Our goal is to make healthy eating easy and accessible for everyone.</p>
                    <br></br>
                    <p className='about-text'>At Meal Mate, we understand that life can be busy and finding time to plan and prepare healthy meals can be a challenge. That's why we offer a range of services to help you save time and eat well.</p>
                </section>
            </section>

            <section className='team-container'>
                <h2 className='team-title'>Meet Our Team</h2>
                <Card/>
            </section>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default About