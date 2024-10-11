import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: 0,
  height: 0,
  bmi: 0,
  category: '',
  image: '' 
};

const bmiSlice = createSlice({
  name: 'bmi',
  initialState,
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    calculateBMI: (state) => {
      if (state.height > 0 && state.weight > 0) {
        const heightInMeters = state.height / 100; // Convert cm to meters
        state.bmi = Number((state.weight / (heightInMeters * heightInMeters)).toFixed(2)); // Calculate BMI and round

        // Assign category and image based on BMI
        if (state.bmi < 18.5) {
          state.category = 'Underweight';
          state.image = 'https://as2.ftcdn.net/v2/jpg/01/24/96/75/1000_F_124967503_lJg9y3kwyehqeVoB2tfmLjwokcmM7Vmj.jpg';
        } else if (state.bmi >= 18.5 && state.bmi < 24.9) {
          state.category = 'Normal weight';
          state.image = 'https://thumbs.dreamstime.com/z/normal-weight-man-isolated-white-background-d-illustration-266483842.jpg'; // Replace with a valid URL
        } else if (state.bmi >= 25 && state.bmi < 29.9) {
          state.category = 'Overweight';
          state.image = 'https://www.shutterstock.com/image-photo/overweight-man-weight-scale-260nw-45593023.jpg'; // Replace with a valid URL
        } else {
          state.category = 'Obese';
          state.image = 'https://st4.depositphotos.com/16122460/31443/i/1600/depositphotos_314439564-stock-photo-portrait-of-overweight-man-posing.jpg'; // Replace with a valid URL
        }
      }
    },
    resetBMI: (state) => {
      state.weight = 0;
      state.height = 0;
      state.bmi = 0;
      state.category = '';
      state.image = ''; 
    }
  }
});

export const { setWeight, setHeight, calculateBMI, resetBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
