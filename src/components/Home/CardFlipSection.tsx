import { useRef } from 'react';
import { Link } from 'react-router-dom';

import CARD_DATA from '../../data/Home/indexCarImagePath.json';
import useFlipOnScroll from '../../hooks/useFlipOnScroll';

const CardFlipSection = () => {
  const flipContainer = useRef<HTMLDivElement>(null);
  const flipScollContainer = useRef<HTMLDivElement>(null);
  const flipTriggerPoint = {
    sportCard: 10,
    compactCard: 80,
    utilityCard: 150,
  };

  const getFlipScroll = useFlipOnScroll({ flipContainer, flipScollContainer });
  return (
    <div className="flip-card-scroll" ref={flipScollContainer}>
      <div className="flip-card-section" ref={flipContainer}>
        <h1 className="company-message">Discover Our Timeless Collection</h1>
        {CARD_DATA.map((contentLink) => {
          return (
            <div
              key={contentLink.productUrl}
              className={`card-frame ${
                (contentLink.carType === 'sport' &&
                  getFlipScroll > flipTriggerPoint.sportCard) ||
                (contentLink.carType === 'compact' &&
                  getFlipScroll > flipTriggerPoint.compactCard) ||
                (contentLink.carType === 'utility' &&
                  getFlipScroll > flipTriggerPoint.utilityCard)
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
              <Link
                to={`/product-detail/${contentLink.productUrl}`}
                className="card-back"
                style={{ backgroundImage: `url(${contentLink.backImage})` }}
              >
                <h2
                  className="categoryTitle"
                  style={{ fontFamily: contentLink.titleFont }}
                >
                  {contentLink.logoTitle}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardFlipSection;
