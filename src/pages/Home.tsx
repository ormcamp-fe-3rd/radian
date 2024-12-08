import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';
import styles from '../styles/Home.module.css';
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
      { threshold: 0.8 },
    );
    observer.observe(companyVisionRef.current);
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const imageContainer = imageContainerRef.current.getBoundingClientRect();
      const scrollingSection =
        scrollingSectionRef.current.getBoundingClientRect();
      if (imageContainer.top == 0) {
        let scrolledDistance = Math.abs(
          scrollingSection.top / window.innerHeight,
        ).toFixed(1);
        setDivWidth(scrolledDistance);
        console.log(divWidth);
      } else if (imageContainer.top >= 0) {
        setDivWidth(0);
      }
    });
  });

  return (
    <>
      <div className="styles.container">
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
            style={{ width: `${divWidth * 95}vw` }}
          >
            <img
              className="image-sizing"
              src="https://monochrome-watches.com/wp-content/uploads/2020/10/Mini-Cooper-Classic-Electric-conversion-1.jpg"
              alt="Mini Cooper Classic Electric"
            />
          </div>
        </div>
        <h1 className="company-message">
          We breathe new life into the timeless beauty of classic car design
          with modern electric vehicle technology.{' '}
        </h1>
        <div className="content-section"></div>
      </div>
    </>
  );
};

export default Home;
