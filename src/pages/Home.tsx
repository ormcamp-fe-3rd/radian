import { useState, useRef, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';
import styles from '../styles/Home.module.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Home = (): JSX.Element => {
  const aboutCompanyTitle = useRef();
  const greenBoxRef = useRef();
  const blackSectionRef = useRef();
  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        let scrollRatio = e[0].intersectionRatio;
      },
      { threshold: 0.4 },
    );
    observer.observe(aboutCompanyTitle.current);
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const greenBox = greenBoxRef.current.getBoundingClientRect();
      const blackBox = blackSectionRef.current.getBoundingClientRect();
      if (greenBox.top == 0) {
        let scrolledDistance = Math.abs(
          blackBox.top / window.innerHeight,
        ).toFixed(1);
        setDivWidth(scrolledDistance);
        console.log(divWidth);
      } else if (greenBox.top >= 0) {
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
        <h1 className="home-title">
          We have a bold vision for the future of travel where you can better
          connect with the outdoors and each other. Lightship’s electric travel
          trailers allow you to visit new corners of the world while doing your
          part to preserve it.
        </h1>
        <div className="black-section" ref={blackSectionRef}>
          <div
            ref={greenBoxRef}
            className="green-box"
            style={{ width: `${divWidth * 100}vw` }}
          >
            <img
              className="image-fit"
              src="https://monochrome-watches.com/wp-content/uploads/2020/10/Mini-Cooper-Classic-Electric-conversion-1.jpg"
              alt="Mini Cooper Classic Electric"
            />
          </div>
        </div>
        <div className="red-box" ref={aboutCompanyTitle}></div>
      </div>
    </>
  );
};

export default Home;
