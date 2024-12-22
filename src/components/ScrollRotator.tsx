import '../styles/ProductDetail.css';
import { Car } from '../types/modelsTypes';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRotatorProps {
  carData: Car;  // 타입을 Car로 지정
}

gsap.registerPlugin(ScrollTrigger);

const ScrollRotator = ({ carData }: ScrollRotatorProps) => {
  
  useGSAP(() => {
    const rotator_tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.rotator-container',
        start: 1500,
        end: 2500,
        scrub: 1.5,
      }
    });

    const images = document.querySelectorAll('.rotator-image');

    images.forEach((image) => {
      const delayTime = 2;
    
      // 각 이미지의 교체 애니메이션
      rotator_tl.fromTo(image,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        })
        .to(image, {
          opacity: 0,
          duration: 1,
          ease: 'power2.in',
        }, `+=${delayTime}`);
    });
  }, [carData.rotatorImages]);

  return (
    <div className="rotator-container">
       {carData.rotatorImages.map((imageSrc, index) => (
        <img
          key={index}
          className="rotator-image"
          src={imageSrc}
          alt={`Image ${index + 1}`}
        />
       ))}
    </div>
  );
};

export default ScrollRotator;
