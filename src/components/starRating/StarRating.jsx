import { useState } from "react";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating flex justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            color={index <= rating || index <= hover ? "gold" : "gray"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            style={{ cursor: "pointer" }}
            size={40}
          />
        );
      })}
      {console.log(hover)}
      {console.log(rating)}
    </div>
  );
}
