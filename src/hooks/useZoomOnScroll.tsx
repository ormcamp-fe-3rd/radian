import { useState, useRef, useEffect } from 'react';

function useZoomOnScroll({ scrollingSectionRef, imageContainerRef }) {
  const [divWidth, setDivWidth] = useState(0);
  useEffect(() => {
    const handler = () => {
      if (imageContainerRef.current && scrollingSectionRef.current) {
        const imageContainer =
          imageContainerRef.current.getBoundingClientRect();
        const scrollingSection =
          scrollingSectionRef.current.getBoundingClientRect();
        if (imageContainer.top === 30) {
          const scrolledDistance = Math.min(
            1,
            Math.abs(scrollingSection.top / window.innerHeight),
          );

          setDivWidth(scrolledDistance);
        } else if (imageContainer.top > 30) {
          setDivWidth(0);
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return divWidth;
}

export default useZoomOnScroll;
