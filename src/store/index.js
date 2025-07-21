import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import projectsReducer from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
});