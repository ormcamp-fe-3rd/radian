import '../styles/Home.css';

const IndexCardHoverSection = ({
  isHoveringLeft,
  isHoveringRight,
  setIsHoveringLeft,
  setIsHoveringRight,
}) => {
  return (
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
  );
};

export default IndexCardHoverSection;
