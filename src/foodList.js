import React from 'react';

const FoodList = ({ foods, onRemoveFood }) => {
  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.calories} calories
            <button className='button-17' onClick={() => onRemoveFood(food.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
