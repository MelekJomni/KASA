import { useState } from "react";
import "../styles/slideshow.css";

export default function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  function nextSlide() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>
      )}

      <img src={pictures[currentIndex]} alt={`${title} ${currentIndex + 1}`} />


      {pictures.length > 1 && (
        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>
      )}

      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}