import { useRef } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

import useHomeTitleVisible from '../hooks/useHomeTitleVisible';

import IndexCardFlipSection from '../components/IndexCardFlipSection';
import IndexCardHoverSection from '../components/IndexCardHoverSection';
import IndexCardZoomSection from '../components/IndexCardZoomSection';

const Home = (): JSX.Element => {
  const companyMainTitleRef = useRef<HTMLHeadingElement | null>(null);
  const companySubTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isMainTitleVisible = useHomeTitleVisible(companyMainTitleRef);
  const isSubTitleVisible = useHomeTitleVisible(companySubTitleRef);

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
          className={`company-vision ${isMainTitleVisible ? 'visible' : ''}`}
          ref={companyMainTitleRef}
        >
          We have a bold vision for the future of travel, presenting ways for
          you to better connect with nature and each other. Radian’s electric
          classic cars allow you to explore new corners of the world while
          providing the joy of preserving the environment along the way.
        </h1>
        <IndexCardZoomSection />
        <h1
          className={`company-vision ${isSubTitleVisible ? 'visible' : ''}`}
          ref={companySubTitleRef}
        >
          We breathe new life into the timeless beauty of classic car design
          with modern electric vehicle technology.
        </h1>
        <IndexCardHoverSection />
        <IndexCardFlipSection />
      </div>
    </>
  );
};

export default Home;
