import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectDarkMode } from '../store/slices/themeSlice';
import { Sun, Moon, Heart } from 'lucide-react';

const Footer = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-bold text-xl mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building beautiful, responsive, and user-friendly web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 capitalize"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <a href="mailto:bikashkhuntia2600@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  bikashkhuntia2600@gmail.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <a href="tel:+1234567890" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                 8144956321
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                BANGALORE, KARNATAKA, India 
              </li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/bikash-khuntia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            © {currentYear} Portfolio. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Bikash khuntia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;