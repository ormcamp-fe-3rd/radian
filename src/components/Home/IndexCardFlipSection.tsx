import { useRef } from 'react';
import { Link } from 'react-router-dom';

import CARD_DATA from '../../data/indexCarImagePath.json';
import useFlipOnScroll from '../../hooks/useFlipOnScroll';

const IndexCardFlipSection = () => {
  const flipContainer = useRef<HTMLDivElement>(null);
  const flipScollContainer = useRef<HTMLDivElement>(null);

  const getFlipScroll = useFlipOnScroll({ flipContainer, flipScollContainer });
  return (
    <div className="flip-card-scroll" ref={flipScollContainer}>
      <div className="flip-card-section" ref={flipContainer}>
        <h1 className="company-message">Discover Our Timeless Collection</h1>
        {CARD_DATA.map((contentLink, cardId) => {
          return (
            <div
              key={cardId}
              className={`card-frame ${
                (cardId === 0 && getFlipScroll > 10) ||
                (cardId === 1 && getFlipScroll > 80) ||
                (cardId === 2 && getFlipScroll > 150)
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

export default IndexCardFlipSection;
