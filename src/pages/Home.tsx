import { useRef } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';

import useHomeTitleVisible from '../hooks/useHomeTitleVisible';

import VideoSection from '../components/Home/VideoSection';
import COMPANY_VISION from '../data/companyVision';
import TitleSection from '../components/Home/TitleSection';
import CardZoomSection from '../components/Home/CardZoomSection';
import CardHoverSection from '../components/Home/CardHoverSection';
import CardFlipSection from '../components/Home/CardFlipSection';

const Home = (): JSX.Element => {
  const companyMainTitleRef = useRef<HTMLHeadingElement | null>(null);
  const companySubTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isMainTitleVisible = useHomeTitleVisible(companyMainTitleRef);
  const isSubTitleVisible = useHomeTitleVisible(companySubTitleRef);

  return (
    <div className="home-container">
      <VideoSection />
      <TitleSection
        text={COMPANY_VISION.mainTitle}
        isVisible={isMainTitleVisible}
        reference={companyMainTitleRef}
      />
      <CardZoomSection />
      <TitleSection
        text={COMPANY_VISION.subTitle}
        isVisible={isSubTitleVisible}
        reference={companySubTitleRef}
      />
      <CardHoverSection />
      <CardFlipSection />
    </div>
  );
};

export default Home;
