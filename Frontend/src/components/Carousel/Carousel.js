import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { pictures } from "./Data";

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      slideRight();
    }, 3000);
  });

  const slideRight = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };
  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {pictures.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_cards carousel_cards-active"
                  : "carousel_cards"
              }
            >
              <img
                className="card_image"
                src={image.Pictures}
                alt="image_here"
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;