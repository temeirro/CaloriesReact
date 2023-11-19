import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFood, removeFood } from './redux/caloriesSlice';
import AddFoodForm from './addFoodForm';
import FoodList from './foodList';

const App = () => {
  const dispatch = useDispatch();
  const foods = useSelector(state => state.calories.foods);
  const totalCalories = useSelector(state => state.calories.totalCalories);

  const handleAddFood = (food) => {
    dispatch(addFood(food));
  };

  const handleRemoveFood = (foodId) => {
    dispatch(removeFood(foodId));
  };

  return (
    <div className="App">
      <h1 className='header'>Calorie Tracker</h1>
     <div className='center'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif' width={100}></img>
     </div>
      <div className='add'>
      <AddFoodForm onAddFood={handleAddFood} />
      </div>
      <div className='foodlist'>

      <FoodList foods={foods} onRemoveFood={handleRemoveFood} />
      </div>
      <div className='add'>
        <h2>Total Calories: {totalCalories}</h2>
      </div>
    </div>
  );
};

export default App;