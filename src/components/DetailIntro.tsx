import React from 'react';
import '../styles/test.css'

const DetailIntro: React.FC = () => {
  return (
    <section className="detail-intro flex">
      <h1>Radian-Rover,<br />"The Utility" :Smart, Spacious, and Ready for Anything</h1>
      <img src="/src/assets/Detail/range-rover-header.jfif" alt="Range Rover" />
    </section>
  );
};

export default DetailIntro;
