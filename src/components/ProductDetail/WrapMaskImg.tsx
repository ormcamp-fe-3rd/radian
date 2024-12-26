import '../../styles/ProductDetail.css';

const WrapMaskImg = () => {
  return (
    <svg version="1.1" id="mask">
      <defs>
        <clipPath id="wrapMask">
          <rect id="wrapWin" width="1300" height="1100" fill="black" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WrapMaskImg;