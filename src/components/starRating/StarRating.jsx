import { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function StarRating(noOfStars = 5) {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <CiStar
            key={index}
            onClick={() => {}}
            onMouseMove={() => {}}
            onMouseLeave={() => {}}
            size={40}
          />
        );
      })}
    </div>
  );
}
