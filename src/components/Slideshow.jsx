import React, { useState, useEffect, useRef } from 'react';
import '../css/pages/home/slideshow.css';

import skif_group2 from '../assets/slideshow/skif_group2.jpg';
import skif_group from '../assets/slideshow/skif_group.jpg';
import karate_group_big from '../assets/slideshow/karate_group_big.jpg';

const images = [skif_group2, skif_group, karate_group_big];
const SLIDE_TRANSITION_DURATION = 500; // Matches CSS transition duration

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideshowWrapperRef = useRef(null); // Ref for touch events

  // Touch and Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating || images.length <= 1) return;
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex, isAnimating]); 

  let touchStartX = useRef(0);
  let touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (isAnimating || images.length <= 1) return;

    if (touchEndX.current < touchStartX.current - swipeThreshold) {
      goToNext();
    } else if (touchEndX.current > touchStartX.current + swipeThreshold) {
      goToPrev();
    }
  };

  const goToPrev = () => {
    if (isAnimating || images.length <= 1) return;
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
    setTimeout(() => setIsAnimating(false), SLIDE_TRANSITION_DURATION);
  };

  const goToNext = () => {
    if (isAnimating || images.length <= 1) return;
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
    setTimeout(() => setIsAnimating(false), SLIDE_TRANSITION_DURATION);
  };

  const goToSlide = (index) => {
    if (index === currentImageIndex || isAnimating || images.length <= 1) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAnimating(false), SLIDE_TRANSITION_DURATION);
  };

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-wrapper"
        ref={slideshowWrapperRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => {
          const position = index - currentImageIndex;
          const transformValue = `translateX(${position * 100}%)`;
          const zIndexValue = index === currentImageIndex ? 2 : 1;
          const transition = isAnimating ? `transform ${SLIDE_TRANSITION_DURATION / 1000}s ease` : 'none'; 

          return (
            <img 
              key={index} 
              src={image} 
              alt={`Slideshow image ${index + 1}`} 
              className="slide-image" 
              style={{ 
                transform: transformValue, 
                zIndex: zIndexValue,
                transition: transition 
              }} 
            />
          );
        })}
      </div>
      <div className="slideshow-nav">
        <button className="nav-button prev-button" aria-label="Föregående" onClick={goToPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <div className="slide-indicators">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button className="nav-button next-button" aria-label="Nästa" onClick={goToNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slideshow; 