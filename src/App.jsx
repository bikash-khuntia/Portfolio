import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './store/slices/themeSlice';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateSection from './components/CertificateSection';

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <CertificateSection/>
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
