import { configureStore } from '@reduxjs/toolkit';
import caloriesReducer from './caloriesSlice';

const store = configureStore({
  reducer: {
    calories: caloriesReducer,
  },
});

export default store;
