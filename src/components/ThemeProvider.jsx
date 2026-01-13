import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../store/slices/themeSlice';

const ThemeProvider = ({ children }) => {
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return children;
};

export default ThemeProvider;