import { useState } from 'react';

const CardHoverSection = () => {
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  return (
    <div className="home-content-container">
      <div className="image-container-half">
        <img
          className={`home-sub-image ${isHoveringLeft ? 'content-zoom-in' : ''}`}
          src="/images/Home/Mini-EV-Conversion.jpg"
          alt="Mini Cooper Classic Electric Vehicle Conversion"
          onMouseOver={() => setIsHoveringLeft(true)}
          onMouseOut={() => setIsHoveringLeft(false)}
        />
      </div>
      <div className="image-container-half">
        <img
          className={`home-sub-image ${isHoveringRight ? 'content-zoom-in' : ''}`}
          src="/images/Home/Classic-Mini-Appeal.jpg"
          alt="Classic Mini Cooper Appeal"
          onMouseOver={() => setIsHoveringRight(true)}
          onMouseOut={() => setIsHoveringRight(false)}
        />
      </div>
    </div>
  );
};

export default CardHoverSection;
