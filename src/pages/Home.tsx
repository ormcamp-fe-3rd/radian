import { useRef } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

import useHomeTitleVisible from '../hooks/useHomeTitleVisible';

import CardFlipSection from '../components/Home/CardFlipSection';
import CardHoverSection from '../components/Home/CardHoverSection';
import CardZoomSection from '../components/Home/CardZoomSection';
import VideoSection from '../components/Home/VideoSection';
import TitleSection from '../components/Home/TitleSection';

const Home = (): JSX.Element => {
  const companyMainTitleRef = useRef<HTMLHeadingElement | null>(null);
  const companySubTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isMainTitleVisible = useHomeTitleVisible(companyMainTitleRef);
  const isSubTitleVisible = useHomeTitleVisible(companySubTitleRef);

  return (
    <div className="home-container">
      <VideoSection />
      <TitleSection
        text="We have a bold vision for the future of travel, presenting ways for
          you to better connect with nature and each other. Radian’s electric
          classic cars allow you to explore new corners of the world while
          providing the joy of preserving the environment along the way."
        isVisible={isMainTitleVisible}
        reference={companyMainTitleRef}
      />
      <CardZoomSection />
      <TitleSection
        text="We breathe new life into the timeless beauty of classic car design
          with modern electric vehicle technology."
        isVisible={isSubTitleVisible}
        reference={companySubTitleRef}
      />
      <CardHoverSection />
      <CardFlipSection />
    </div>
  );
};

export default Home;
