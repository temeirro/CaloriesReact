import React, { useState } from 'react';

const AddFoodForm = ({ onAddFood }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddFood = () => {
    if (foodName && calories) {
      const newFood = {
        id: Date.now(), // простий спосіб генерувати унікальний id
        name: foodName,
        calories: parseInt(calories, 10),
      };

      onAddFood(newFood);

      // Очистити поля форми
      setFoodName('');
      setCalories('');
    }
  };

  return (
    <div>
      <h2>Add Food</h2>
      <div>
        <label htmlFor="foodName">• Food Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="calories">• Calories:</label>
        <input
          type="number"
          id="calories"
          min="1"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button className="button-17" onClick={handleAddFood}>Add</button>
    </div>
  );
};

export default AddFoodForm;
