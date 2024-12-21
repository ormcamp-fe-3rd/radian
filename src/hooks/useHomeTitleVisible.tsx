import { useEffect, useState } from 'react';

function useHomeTitleVisible(indexTitleRef) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsTextVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (indexTitleRef.current) {
      observer.observe(indexTitleRef.current);
    }

    return () => observer.disconnect();
  }, [indexTitleRef]);

  return isTextVisible;
}

export default useHomeTitleVisible;
