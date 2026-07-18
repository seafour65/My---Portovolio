import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


export default function App() {
  return (
   <>
  {<SmoothScroll />}

  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</>
  );
}