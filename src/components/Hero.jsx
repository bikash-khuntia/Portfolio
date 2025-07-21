import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown } from 'lucide-react';
import { selectDarkMode } from '../store/slices/themeSlice';

const Hero = () => {
  const darkMode = useSelector(selectDarkMode);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} opacity-90`}></div>
        {/* Background pattern/gradient */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Bikash Khuntia</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            I'm a{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              <Typewriter
                words={['Frontend Developer', 'React Developer', 'Web Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300">
            Empowering brands with sleek, responsive, and user-first web applications built on cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors"
            >
              Contact Me
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="Bikash Khunita Dev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-md border border-indigo-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
        >
          <ArrowDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;