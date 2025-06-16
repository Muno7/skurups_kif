import { useEffect, useRef } from 'react';

const useScrollAnimation = (options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after playing to ensure animation plays only once
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );

    observer.observe(currentElement);

    // Cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useScrollAnimation;