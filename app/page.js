import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Hero/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}
