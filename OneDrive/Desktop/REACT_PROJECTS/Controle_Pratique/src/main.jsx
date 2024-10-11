import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './app/store';

const container = document.getElementById('root');  // Get the root container
const root = createRoot(container);  // Create a root with React 18 API

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
