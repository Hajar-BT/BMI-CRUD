import { configureStore } from '@reduxjs/toolkit';
import bmiReducer from '../features/bmiSlice';
import articlesReducer from '../features/articlesSlice';

const store = configureStore({
  reducer: {
    bmi: bmiReducer,
    articles: articlesReducer,
  },
});

export default store;
