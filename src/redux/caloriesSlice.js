import { createSlice } from '@reduxjs/toolkit';

const caloriesSlice = createSlice({
  name: 'calories',
  initialState: {
    foods: [],
    totalCalories: 0,
  },
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payload);
      state.totalCalories += action.payload.calories;
    },
    removeFood: (state, action) => {
      const index = state.foods.findIndex(food => food.id === action.payload);
      if (index !== -1) {
        state.totalCalories -= state.foods[index].calories;
        state.foods.splice(index, 1);
      }
    },
  },
});

export const { addFood, removeFood } = caloriesSlice.actions;
export default caloriesSlice.reducer;
