import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

const Home = (): JSX.Element => {
  const companyVisionRef = useRef<HTMLHeadingElement | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollingSectionRef = useRef<HTMLDivElement | null>(null);
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
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (imageContainerRef.current && scrollingSectionRef.current) {
        const imageContainer =
          imageContainerRef.current.getBoundingClientRect();
        const scrollingSection =
          scrollingSectionRef.current.getBoundingClientRect();
        if (imageContainer.top == 30) {
          let scrolledDistance = Math.min(
            1,
            Math.abs(scrollingSection.top / window.innerHeight),
          );
          console.log(divWidth);
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
        <div className="scrolling-section" ref={scrollingSectionRef}>
          <div
            ref={imageContainerRef}
            className="image-container"
            style={{ width: `${divWidth * 100}%` }}
          >
            <img
              className="home-main-image"
              src="/images/main-images/Mini-Cooper-Classic-Electric-conversion-1.webp"
              alt="Mini Cooper Classic Electric Conversion"
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
              src="/images/main-images/Mini-EV-Conversion.jpg"
              alt="Mini Cooper Classic Electric Vehicle Conversion"
              onMouseOver={() => setIsHoveringLeft(true)}
              onMouseOut={() => setIsHoveringLeft(false)}
            />
          </div>
          <div className="image-container-half">
            <img
              className={`home-sub-image ${isHoveringRight ? 'content-zoom-in' : ''}`}
              src="/images/main-images/Classic-Mini-Appeal.jpg"
              alt="Classic Mini Cooper Appeal"
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
                    <h2
                      className="categoryTitle"
                      style={{ fontFamily: contentLink.titleFont }}
                    >
                      {contentLink.logoTitle}
                    </h2>
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
