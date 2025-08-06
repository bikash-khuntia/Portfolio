import { useSelector } from 'react-redux';
import { selectDarkMode } from '../store/slices/themeSlice';
import { Wrench, Hourglass, AlertTriangle } from 'lucide-react'; // Icons
import { useNavigate } from 'react-router-dom';


const ComingSoon = () => {
  const darkMode = useSelector(selectDarkMode);
  const navigate = useNavigate();
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      
      
      <div className="animate-bounce mb-6">
        <Wrench size={80} className="text-indigo-600 dark:text-indigo-400" />
      </div>

      
      <h1 className="text-4xl sm:text-5xl sm:leading-[1.5] font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        🚧 Coming Soon!
      </h1>

      <p className="text-lg sm:text-xl max-w-xl mb-6">
        This project is currently under active development. Stay tuned for the launch!
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Hourglass size={18} />
        <span>Work in progress... Please check back later</span>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
      >
        ⬅️ Back to Home
      </button>

    </div>
  );
};

export default ComingSoon;
