import { createSlice } from '@reduxjs/toolkit';

// Sample project data
const projectsData = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and payment processing.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    link: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.yourdomain.com',
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    link: 'https://github.com/yourusername/taskmanager',
    demo: 'https://taskmanager-demo.yourdomain.com',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
    image: '/projects/weather.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    link: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-demo.yourdomain.com',
  },
  {
    id: 4,
    name: 'Social Media Platform',
    description: 'A social networking application with user profiles, posts, comments, and real-time messaging.',
    image: '/projects/socialmedia.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    link: 'https://github.com/yourusername/social-platform',
    demo: 'https://social-demo.yourdomain.com',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    link: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.yourdomain.com',
  },
];

const initialState = {
  projects: projectsData,
  filteredProjects: projectsData,
  activeFilters: [],
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterProjects: (state, action) => {
      const technology = action.payload;
      
      // Toggle the filter
      if (state.activeFilters.includes(technology)) {
        state.activeFilters = state.activeFilters.filter(filter => filter !== technology);
      } else {
        state.activeFilters.push(technology);
      }
      
      // Apply filters
      if (state.activeFilters.length === 0) {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter(project => 
          state.activeFilters.some(filter => project.technologies.includes(filter))
        );
      }
    },
    clearFilters: (state) => {
      state.activeFilters = [];
      state.filteredProjects = state.projects;
    },
  },
});

export const { filterProjects, clearFilters } = projectsSlice.actions;

export const selectProjects = (state) => state.projects.filteredProjects;
export const selectActiveFilters = (state) => state.projects.activeFilters;

export default projectsSlice.reducer;