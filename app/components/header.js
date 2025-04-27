import Link from 'next/link';
import '../styles/header.css';

function Header() {
  return (
    <section className="main-header">
        <div className="logo-div">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            <Link href="/" className="link-myweb">Meal Mate</Link>
        </div>
        <nav className='main-header-nav'>
            <Link href="/" className="link-nav">Home</Link>
            <Link href="/about" className="link-nav">About</Link>
            <Link href="/services" className="link-nav">Services</Link>
            <Link href="/contact" className="link-nav">Contact</Link>
        </nav>
    </section>
  )
}

export default Header