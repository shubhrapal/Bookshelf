import React, { useState } from 'react';
import StarRating from './StarRating';

const App = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='Rating'>
      <h1>Rate this product:</h1>
      <StarRating maxValue={5} initialRating={rating} onChange={handleRatingChange} />
      <p>Rating: {rating}</p>
    </div>
  );
};

export default App;
