import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Home = (): JSX.Element => {
  const companyVisionRef = useRef();
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageContainerRef = useRef();
  const scrollingSectionRef = useRef();
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsTextVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 },
    );
    observer.observe(companyVisionRef.current);
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const imageContainer = imageContainerRef.current.getBoundingClientRect();
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
    });
  });

  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

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
              src="https://mediapool.bmwgroup.com/download/edown/pressclub/publicq?square=0&dokNo=P90045990&attachment=0&actEvent=scaleZoom&quality=80"
              alt="Mini Cooper Classic Electric"
              onMouseOver={() => setIsHoveringLeft(true)}
              onMouseOut={() => setIsHoveringLeft(false)}
            />
          </div>
          <div className="image-container-half">
            <img
              className={`home-sub-image ${isHoveringRight ? 'content-zoom-in' : ''}`}
              src="https://monochrome-watches.com/wp-content/uploads/2020/10/Mini-Cooper-Classic-Electric-conversion-1.jpg"
              alt="Mini Cooper Classic Electric"
              onMouseOver={() => setIsHoveringRight(true)}
              onMouseOut={() => setIsHoveringRight(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
