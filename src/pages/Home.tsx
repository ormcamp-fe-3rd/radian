import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

import useHomeTitleVisible from '../hooks/useHomeTitleVisible';
import useZoomOnScroll from '../hooks/useZoomOnScroll';
import useFlipOnScroll from '../hooks/useFlipOnScroll';
import IndexCardFlipSection from '../components/IndexCardFlipSection';
import IndexCardHoverSection from '../components/IndexCardHoverSection';
import IndexCardZoomSection from '../components/IndexCardZoomSection';

const Home = (): JSX.Element => {
  const companyVisionRef = useRef<HTMLHeadingElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollingSectionRef = useRef<HTMLDivElement | null>(null);
  const flipContainer = useRef<HTMLDivElement>(null);
  const flipScollContainer = useRef<HTMLDivElement>(null);

  const isTextVisible = useHomeTitleVisible(companyVisionRef);
  const divWidth = useZoomOnScroll({
    scrollingSectionRef,
    imageContainerRef,
  });
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const getFlipScroll = useFlipOnScroll({ flipContainer, flipScollContainer });

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
