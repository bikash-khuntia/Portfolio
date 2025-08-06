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
import ComingSoon from './pages/ComingSoon'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <CertificateSection />
                  <Projects />
                  <Contact />
                </main>
              }
            />
            <Route path="/" element={<Hero />} />
            <Route path="/coming-soon" element={<ComingSoon />} /> 
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
