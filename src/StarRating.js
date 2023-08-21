import React, { useState } from 'react';

const StarRating = ({ maxValue, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (value) => {
    setRating(value);
    onChange(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxValue; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => handleRatingClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
