import { useState, useEffect } from 'react';

function useFlipOnScroll({ flipContainer, flipScollContainer }) {
  const [getFlipScroll, setGetFlipScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!flipContainer.current || !flipScollContainer.current) return;
      const getFlipContainerSize =
        flipContainer.current.getBoundingClientRect();

      const getFlipScollContainer =
        flipScollContainer.current.getBoundingClientRect();

      if (getFlipContainerSize.top <= 0) {
        const scrolledDistance = Number(
          Math.abs(getFlipScollContainer.top / window.innerHeight).toFixed(2),
        );
        setGetFlipScroll(scrolledDistance * 100);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return getFlipScroll;
}

export default useFlipOnScroll;
