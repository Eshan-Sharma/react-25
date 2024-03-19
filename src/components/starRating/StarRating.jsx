import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex);
  }
  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(0);
    console.log(hover);
  }
  return (
    <div className="star-rating flex justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            color={index <= (rating || hover) ? "gold" : "gray"}
            style={{ cursor: "pointer" }}
            size={40}
          />
        );
      })}
    </div>
  );
}
