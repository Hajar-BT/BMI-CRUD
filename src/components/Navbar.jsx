import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaTasks } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold">
          MyApp
        </div>
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/bmi" className="flex items-center text-white hover:text-gray-300">
              <FaCalculator className="mr-2" /> BMI Calculator
            </Link>
          </li>
          <li>
            <Link to="/crud" className="flex items-center text-white hover:text-gray-300">
              <FaTasks className="mr-2" /> CRUD App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
