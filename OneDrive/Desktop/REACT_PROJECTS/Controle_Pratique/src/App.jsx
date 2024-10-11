import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './app/store'; // Import your Redux store
import Navbar from './components/Navbar';
import BMICalculator from './components/BMICalculator';
import ArticleManager from './components/ArticleManager';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/crud" element={<ArticleManager />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
