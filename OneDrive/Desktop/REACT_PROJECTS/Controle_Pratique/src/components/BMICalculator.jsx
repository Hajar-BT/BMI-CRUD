import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight, setHeight, calculateBMI, resetBMI } from '../features/bmiSlice';
import Swal from 'sweetalert2';

const BMICalculator = () => {
  const dispatch = useDispatch();
  const { weight, height, bmi, category, image } = useSelector((state) => state.bmi);

  const handleCalculate = () => {
    // Validate inputs
    if (weight <= 0 || height <= 0) {
      // Use SweetAlert for validation
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Input',
        text: 'Please enter valid weight and height.',
        confirmButtonText: 'OK',
      });
      return;
    }
    
    dispatch(calculateBMI());
  };

  useEffect(() => {
    if (bmi > 0) {
      // Show SweetAlert with the BMI result after calculation
      Swal.fire({
        title: 'Your BMI Result',
        html: `
          <div class="text-center">
            <p class="text-lg font-semibold">Your BMI: ${bmi}</p>
            <p class="mt-2 text-lg font-semibold">${category}</p>
            <img src="${image}" alt="${category}" class="mt-2" style="width: 150px; height: auto;" />
          </div>
        `,
        confirmButtonText: 'OK',
      });
    }
  }, [bmi, category, image]); // Runs when bmi, category, or image changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => dispatch(setWeight(Number(e.target.value)))}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your weight"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => dispatch(setHeight(Number(e.target.value)))}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your height"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white font-semibold w-full py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calculate BMI
        </button>
        <button
          onClick={() => dispatch(resetBMI())}
          className="mt-4 bg-gray-500 text-white font-semibold w-full py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
