import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [
    { 
      id: 1, 
      title: 'Understanding JavaScript Closures', 
      details: 'Closures are a fundamental concept in JavaScript that allows functions to retain access to their outer scope, even after the outer function has returned.', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
    },
    { 
      id: 2, 
      title: 'A Guide to CSS Flexbox', 
      details: 'CSS Flexbox is a powerful layout tool that helps create flexible and responsive layouts easily, allowing for better control over alignment and space distribution.', 
      image: 'https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png' 
    },
    { 
      id: 3, 
      title: 'Getting Started with React', 
      details: 'React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to create large web applications that can change data, without reloading the page.', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' 
    },
    { 
      id: 4, 
      title: 'Mastering Asynchronous JavaScript', 
      details: 'Asynchronous programming is a key part of JavaScript development, enabling the handling of multiple tasks simultaneously without blocking the main thread.', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' 
    },
    { 
      id: 5, 
      title: 'An Introduction to TypeScript', 
      details: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static typing, interfaces, and other powerful features to enhance the development process.', 
      image: 'data:image/png;base64,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' 
    },
    { 
      id: 6, 
      title: 'Exploring the New Features of ES2021', 
      details: 'ECMAScript 2021 introduced several new features, such as Promise.any, logical assignment operators, and more, improving the overall JavaScript experience.', 
      image: 'data:image/png;base64,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' 
    },
  ],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    },
    updateArticle: (state, action) => {
      const index = state.articles.findIndex(article => article.id === action.payload.id);
      if (index !== -1) {
        state.articles[index] = action.payload;
      }
    },
  },
});

export const { addArticle, deleteArticle, updateArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
