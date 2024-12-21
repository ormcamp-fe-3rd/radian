import '../styles/Home.css';

const IndexCardZoomSection = ({
  scrollingSectionRef,
  imageContainerRef,
  divWidth,
}) => {
  return (
    <div className="scrolling-section" ref={scrollingSectionRef}>
      <div
        ref={imageContainerRef}
        className="image-container"
        style={{ width: `${divWidth * 100}%` }}
      >
        <img
          className="home-main-image"
          src="/images/main-images/Mini-Cooper-Classic-Electric-conversion-1.webp"
          alt="Mini Cooper Classic Electric Conversion"
        />
      </div>
    </div>
  );
};

export default IndexCardZoomSection;
