import { createSlice } from '@reduxjs/toolkit';
import LmsSystemImage from '../../assets/Lms-system.png';
import Ecommerce from '../../assets/Ecommerce.png';
import Gemini from '../../assets/Gemini-Clone.png';
import Apple from '../../assets/Apple-Clone.png';
import Poftfolio from '../../assets/portfolio.png';

const projectsData = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'An online shopping platform that allows users to browse products, add items to a cart, and securely complete purchases with integrated payment processing.',
    image: Ecommerce,
    technologies: ['React', 'Context', 'CSS', 'Lucide-react'],
    link: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.yourdomain.com',
    status: 'in-progress'
  },
  {
    id: 2,
    name: 'LMS System',
    description: 'A Learning Management System designed to offer course creation, progress tracking, and interactive learning features for students and instructors.',
    image: LmsSystemImage,
    technologies: ['React', 'Clerk', 'Tailwind CSS', 'Redux', 'React Router'],
    link: 'https://github.com/yourusername/taskmanager',
    demo: 'https://www.google.com',
    status: 'in-progress'
  },
  {
    id: 3,
    name: 'Gemini Clone',
    description: 'A UI/UX clone of Google’s Gemini AI interface built to replicate its layout and design for experimentation and learning purposes.',
    image: Gemini,
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'API Integration'],
    link: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-demo.yourdomain.com',
    status: 'in-progress'
  },
  {
    id: 4,
    name: 'Apple Clone',
    description: 'A front-end replica of Apple’s official website, showcasing smooth transitions, premium design aesthetics, and responsive layouts.',
    image: Apple,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Lucide-react', 'React Router'],
    link: 'https://github.com/yourusername/social-platform',
    demo: 'https://social-demo.yourdomain.com',
    status: 'in-progress'
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'A modern and responsive personal portfolio to highlight web development projects, skills, and professional background.',
    image: Poftfolio,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Lucide-react', 'React Router'],
    link: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.yourdomain.com',
    status: 'in-progress'
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