import React, { useEffect, useState, useRef } from "react";
import "./hero.css";
// import { Link } from 'react-router-dom'

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // -- SLIDE LOOP FUNCTION --
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="hero">
      <div className="hero-wrapper">
        {slides.map((slide, index) => {
          return (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                  <img
                    src={slide.image[0]}
                    alt={slide.alt}
                    className="hero-img"
                  />
                </div>
              )}
            </div>
          );
        })}
        <div className="slider-buttons">
          <i
            className="fas fa-chevron-circle-left hero-arrow"
            onClick={prevSlide}
          ></i>
          <i
            className="fas fa-chevron-circle-right hero-arrow"
            onClick={nextSlide}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
