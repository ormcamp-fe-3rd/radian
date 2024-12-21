import { useEffect, useState } from 'react';

function useHomeTitleVisible(companyVisionRef) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsTextVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (companyVisionRef.current) {
      observer.observe(companyVisionRef.current);
    }

    return () => observer.disconnect();
  }, [companyVisionRef]);

  return isTextVisible;
}

export default useHomeTitleVisible;
