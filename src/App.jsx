import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Cocurricular from './components/Cocurricular';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Cocurricular />
      <Contact />
    </div>
  );
}

export default App;
