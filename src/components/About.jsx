import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../store/slices/themeSlice';
import profileImage from '../../public/projects/new_image.jpeg'
const About = () => {
  const darkMode = useSelector(selectDarkMode);

  const highlights = [
    { label: 'Experience', value: 'Fresher' },
    // { label: 'Projects', value: '50+' },
    {
    label: 'Certificate',
    value: (
      <div>
        <h5 className="font-semibold text-blue-500">Namaste React <a href=""></a></h5>
        <p className="text-sm">Issued by: Akshay Saini</p>
        <p className="text-sm">Key Learnings: React fundamentals, Hooks, Routing, API integration</p>
      </div>
    ),
  },
    { label: 'Education', value: 'Computer Science' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
      </h2>
      <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full max-w-md mx-auto lg:max-w-full"
      >
        <div className="w-full h-auto overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 dark:bg-indigo-500 rounded-2xl -z-10"></div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-2"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Who am I?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
          I’m a passionate and aspiring web developer with a strong foundation in building modern, 
          responsive, and user-friendly web applications. Proficient in front-end technologies like React, 
          Tailwind CSS, and JavaScript, I focus on creating clean, efficient, and intuitive user interfaces.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
          Though I’m a fresher, I’ve been consistently learning and working on personal and academic projects over the past few years—gaining hands-on experience in translating ideas into functional web solutions. I'm committed to staying up to date with the latest web 
          development trends and continuously improving my skills.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{item.label}</h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default About;