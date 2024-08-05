import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function StarRating() {
  const numberofStar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [hover, sethover] = useState(0);
  const [rating, setrating] = useState(0);

  function onClick(currentIndex) {
    setrating(currentIndex);
  }

  function onMouseOver(currentIndex) {
    console.log(currentIndex);
    sethover(currentIndex);
  }

  function handleMouseLeave() {
    sethover(rating);
  }
  return (
    <div>
      {numberofStar.map((arr) => {
        return (
          <FaStar
            key={arr}
            className={arr <= (hover || rating) ? "active" : "inactive"}
            onClick={() => onClick(arr)}
            onMouseOver={() => onMouseOver(arr)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}

export default StarRating;
