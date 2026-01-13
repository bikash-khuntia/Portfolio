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
    link: 'https://github.com/bikash-khuntia/Learning-management-system',
    demo: 'https://learning-management-system-2.netlify.app',
    status: 'completed'
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
    link: 'https://melodic-daifuku-949d52.netlify.app/',
    demo: 'https://melodic-daifuku-949d52.netlify.app/',
    status: 'completed'
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'A modern and responsive personal portfolio to highlight web development projects, skills, and professional background.',
    image: Poftfolio,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Lucide-react', 'React Router'],
    link: 'https://github.com/bikash-khuntia/Portfolio',
    demo: 'https://bikash-khuntia-portfolio.netlify.app',
    status: 'completed'
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

      // Fix: Compare with first, but check if it's actually different
      if (state.activeFilters.length === 1 && state.activeFilters[0] === technology) {
        // Same filter clicked again → clear
        state.activeFilters = [];
        state.filteredProjects = state.projects;
      } else {
        // New filter clicked → reset everything
        state.activeFilters = [technology];
        state.filteredProjects = state.projects.filter(project =>
          project.technologies.some(
            tech => tech.toLowerCase() === technology.toLowerCase()
          )
        );
        console.log(`Number of projects using ${technology}:`, state.filteredProjects.length);
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