import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectProjects, selectActiveFilters, filterProjects, clearFilters } from '../store/slices/projectsSlice';
import { selectDarkMode } from '../store/slices/themeSlice';
import { ExternalLink, Github, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const activeFilters = useSelector(selectActiveFilters);
  const darkMode = useSelector(selectDarkMode);
  
  // Get all unique technologies from projects
  const allTechnologies = [];
  useSelector(state => state.projects.projects).forEach(project => {
    project.technologies.forEach(tech => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });
  allTechnologies.sort();

  const handleFilterToggle = (technology) => {
    dispatch(filterProjects(technology));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Use the filters below to sort by technology.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => handleFilterToggle(tech)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilters.includes(tech) ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                {tech}
              </button>
            ))}
          </div>
          
          {activeFilters.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
              >
                <X size={16} />
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}
              >
                <div className="h-88 overflow-hidden">
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {project.status === 'completed' ? (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-1">
                        <ExternalLink size={18} className='text-white'/>
                        <Link to="/coming-soon">
                          <button className="flex items-center gap-1 text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Live Demo</button>
                        </Link>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                No projects match the selected filters. Please try different filters.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;