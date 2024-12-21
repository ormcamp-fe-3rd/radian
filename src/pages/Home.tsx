import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

import useHomeTitleVisible from '../hooks/useHomeTitleVisible';
import IndexCardFlipSection from '../components/IndexCardFlipSection';
import IndexCardHoverSection from '../components/IndexCardHoverSection';
import IndexCardZoomSection from '../components/IndexCardZoomSection';

const Home = (): JSX.Element => {
  const companyVisionRef = useRef<HTMLHeadingElement | null>(null);
  const isTextVisible = useHomeTitleVisible(companyVisionRef);

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollingSectionRef = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (imageContainerRef.current && scrollingSectionRef.current) {
        const imageContainer =
          imageContainerRef.current.getBoundingClientRect();
        const scrollingSection =
          scrollingSectionRef.current.getBoundingClientRect();
        if (imageContainer.top === 30) {
          let scrolledDistance = Math.min(
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

  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  const flipContainer = useRef<HTMLDivElement>(null);
  const flipScollContainer = useRef<HTMLDivElement>(null);
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

  return (
    <>
      <div className="home-container">
        <div className="video-container">
          <h1>Classic but Electronic</h1>
          <video className="index-video" autoPlay muted loop>
            <source src="/videos/sample-cars-loop-clip.mp4" type="video/mp4" />
          </video>
        </div>

        <h1
          className={`company-vision ${isTextVisible ? 'visible' : ''}`}
          ref={companyVisionRef}
        >
          We have a bold vision for the future of travel, presenting ways for
          you to better connect with nature and each other. Radian’s electric
          classic cars allow you to explore new corners of the world while
          providing the joy of preserving the environment along the way.
        </h1>

        <IndexCardZoomSection
          scrollingSectionRef={scrollingSectionRef}
          imageContainerRef={imageContainerRef}
          divWidth={divWidth}
        />

        <h1 className="company-message">
          We breathe new life into the timeless beauty of classic car design
          with modern electric vehicle technology.
        </h1>

        <IndexCardHoverSection
          isHoveringLeft={isHoveringLeft}
          isHoveringRight={isHoveringRight}
          setIsHoveringLeft={setIsHoveringLeft}
          setIsHoveringRight={setIsHoveringRight}
        />

        <IndexCardFlipSection
          getFlipScroll={getFlipScroll}
          flipContainer={flipContainer}
          flipScollContainer={flipScollContainer}
        />
      </div>
    </>
  );
};

export default Home;
