import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      <Navbar />

      <main>
        
        <Hero />

        <About />

        <Education />

        <Skills />

        <Certifications />

        <Projects />

        <Experience />

        <Achievements />

        <Contact />

        <Footer />

      </main>

    </div>
  );
}

export default App;