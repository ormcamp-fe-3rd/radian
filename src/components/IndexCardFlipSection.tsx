import '../styles/Home.css';
import CARD_DATA from '../data/indexCarImagePath.json';

const IndexCardFlipSection = ({
  getFlipScroll,
  flipContainer,
  flipScollContainer,
}) => {
  return (
    <div className="flip-card-scroll" ref={flipScollContainer}>
      <div className="flip-card-section" ref={flipContainer}>
        <h1 className="company-message">Discover Our Timeless Collection</h1>
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
  );
};

export default IndexCardFlipSection;
