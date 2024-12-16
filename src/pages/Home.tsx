import '../styles/reset.css';
import '../styles/Home.css';

import { useEffect, useRef, useState } from 'react';

interface CARD_DATA {
  frontImage: string;
  backImage: string;
  categoryLogo: string;
}

const CARD_DATA: CARD_DATA[] = [
  {
    frontImage: 'public/main-images/old-rover.jpg',
    backImage: 'public/main-images/range-rover-new.jpg',
    categoryLogo: 'src/assets/CarListImages/Utilty.png',
  },
  {
    frontImage: 'public/main-images/cooper-old.png',
    backImage: 'public/main-images/mini-new.jpg',
    categoryLogo: 'src/assets/CarListImages/Compact.png',
  },
  {
    frontImage: 'public/main-images/old-TR6.png',
    backImage: 'public/main-images/new-TR6.jpeg',
    categoryLogo: 'src/assets/CarListImages/SPORT.png',
  },
];

const Home = (): JSX.Element => {
  const companyVisionRef = useRef<HTMLHeadingElement>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const scrollingSectionRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(0);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      if (!imageContainerRef.current || !scrollingSectionRef.current) return;

      const imageContainer = imageContainerRef.current.getBoundingClientRect();
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
        console.log(scrolledDistance * 100);
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="video-container">
          <a tabIndex={0}>Classic but Electronic</a>
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
        <div className="scrolling-section" ref={scrollingSectionRef}>
          <div
            ref={imageContainerRef}
            className="image-container"
            style={{ width: `${divWidth * 100}%` }}
          >
            <img
              className="home-main-image"
              src="https://monochrome-watches.com/wp-content/uploads/2020/10/Mini-Cooper-Classic-Electric-conversion-1.jpg"
              alt="Mini Cooper Classic Electric"
            />
          </div>
        </div>

        <div>
          <h1 className="company-message">
            We breathe new life into the timeless beauty of classic car design
            with modern electric vehicle technology.
          </h1>
        </div>
        <div className="home-content-container">
          <div className="image-container-half">
            <img
              className={`home-sub-image ${isHoveringLeft ? 'content-zoom-in' : ''}`}
              src="public/main-images/Mini-EV-Conversion.jpg"
              alt="Mini Cooper Classic Electric"
              onMouseOver={() => setIsHoveringLeft(true)}
              onMouseOut={() => setIsHoveringLeft(false)}
            />
          </div>
          <div className="image-container-half">
            <img
              className={`home-sub-image ${isHoveringRight ? 'content-zoom-in' : ''}`}
              src="public/main-images/Classic-Mini-Appeal.jpg"
              alt="Mini Cooper Classic Electric"
              onMouseOver={() => setIsHoveringRight(true)}
              onMouseOut={() => setIsHoveringRight(false)}
            />
          </div>
        </div>
        <div className="flip-card-scroll" ref={flipScollContainer}>
          <div className="flip-card-section" ref={flipContainer}>
            <h1 className="company-message">
              Discover Our Timeless Collection
            </h1>
            {CARD_DATA.map((contentLink, cardId) => {
              return (
                <div
                  key={cardId}
                  className={`card-frame ${
                    (cardId === 0 && getFlipScroll > 20) ||
                    (cardId === 1 && getFlipScroll > 100) ||
                    (cardId === 2 && getFlipScroll > 200)
                      ? 'card-flip'
                      : ''
                  }`}
                >
                  <div
                    className="card-front"
                    style={{
                      backgroundImage: `url(${contentLink.frontImage})`,
                    }}
                  ></div>
                  <div
                    className="card-back"
                    style={{ backgroundImage: `url(${contentLink.backImage})` }}
                  >
                    <img src={contentLink.categoryLogo} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
