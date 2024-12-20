import '../styles/ProductDetail.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollRotator = () => {
  useGSAP(() => {

    const rotator_tl = gsap.timeline();

    rotator_tl
        .to('.rotator-image', {
          scrollTrigger: {
            trigger: '.rotator-container',
            start: 1500,
            end: 1800,
            scrub: 1.5,
          },
          rotation: 360, // 회전
          stagger: 0.2,  // 각 이미지가 차례대로 등장하도록
          opacity: 1, // 서서히 나타나도록
          duration: 1.5,
          ease: 'sine.out',
        });
     }, []);

  return (
    <div className="rotator-container">
      <img className="rotator-image" src="/images/CarListImages/cooper_0.png" alt="Image 1" />
      <img className="rotator-image" src="/images/CarListImages/cooper_45.png" alt="Image 2" />
      <img className="rotator-image" src="/images/CarListImages/cooper_90.png" alt="Image 3" />
      <img className="rotator-image" src="/images/CarListImages/cooper_135.png" alt="Image 4" />
      <img className="rotator-image" src="/images/CarListImages/cooper_180.png" alt="Image 5" />
      <img className="rotator-image" src="/images/CarListImages/cooper_225.png" alt="Image 6" />
      <img className="rotator-image" src="/images/CarListImages/cooper_270.png" alt="Image 7" />
      <img className="rotator-image" src="/images/CarListImages/cooper_315.png" alt="Image 8" />
    </div>
  );
};

export default ScrollRotator;
