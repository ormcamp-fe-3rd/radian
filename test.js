import '../styles/test.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/** 컴포넌트 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailIntro from '../components/DetailIntro';
import Specs from '../components/DetailSpecs';
import Characteristics from '../components/Characteristics';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ensure all elements are available
    const wrapWin = document.getElementById('wrapWin');
    const liberty = document.getElementById('liberty');
    const logo = document.getElementById('logo');
    const introH1 = document.getElementById('intro-h1');
    const introH3 = document.getElementById('intro-h3');
    const models = document.querySelectorAll('.models li');
    const specs = document.querySelector('.specs');
    const chars = document.querySelector('.chars');
    const outro = document.querySelector('.outro');

    // Check if elements are available before running animations
    if (!wrapWin || !liberty || !logo || !introH1 || !introH3 || !models || !specs || !chars || !outro) return;

    const scene = gsap.timeline();
    const intro_tl = gsap.timeline();
    const part1_tl = gsap.timeline();
    const part2_tl = gsap.timeline();
    const part3_tl = gsap.timeline();
    const part4_tl = gsap.timeline();
    const part5_tl = gsap.timeline();
    const outro_tl = gsap.timeline();

    // ScrollTrigger 전체 컨테이너
    ScrollTrigger.create({
      trigger: containerRef.current,
      pin: true,
      start: "top top",
      end: "+=3000", // 스크롤 끝 위치를 줄여서 테스트
      scrub: true, // 스크롤과 애니메이션을 동기화
      markers: true, // 디버깅을 위해 마커 추가
    });

    // 초기 설정
    gsap.set(".specs", {
      x: -160,
      opacity: 0
    });
    gsap.set(".chars", {
      x: 260
    });
    part2_tl.set(".models li", { opacity: 0 });
    part3_tl.set(".specs dt", { opacity: 0 });
    part3_tl.set(".specs dd", { opacity: 0 });
    part4_tl.set(".chars h2", { opacity: 0 });
    part4_tl.set(".chars dt", { opacity: 0 });
    part4_tl.set(".chars dd", { opacity: 0 });

    // 1. Intro 애니메이션
    intro_tl
      .fromTo(
        wrapWin,
        { height: 80 },
        { height: 800, duration: 0.1 }
      )
      .fromTo(
        liberty,
        { scale: 0.8, y: -300 },
        { scale: 1, y: 0, duration: 0.1 }
      )
      .to(logo, {
        scrollTrigger: {
          start: 300,
          end: 500,
          scrub: 0.5
        },
        y: -190,
        scale: 0.6,
        duration: 0.6,
        ease: "expo.out"
      })
      .to(introH1, {
        scrollTrigger: {
          start: 500,
          end: 700,
          scrub: 0.5
        },
        scale: 0,
        duration: 0.6,
        ease: "expo.out"
      })
      .to(introH3, {
        scrollTrigger: {
          start: 550,
          end: 750,
          scrub: 0.5
        },
        scale: 0,
        duration: 0.6,
        ease: "expo.out"
      });

    // 2. Part 1 애니메이션
    part1_tl
      .fromTo(models, {
        opacity: 0,
        y: 10
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
      });

    // 3. Part 2 애니메이션: Specs 리스트 애니메이션
    part2_tl
      .to(specs, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

    // 4. Part 3 애니메이션: 모델과 스펙 디테일
    part3_tl
      .to(".specs dt", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(".specs dd", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });

    // 5. Part 4 애니메이션: Characteristics 섹션
    part4_tl
      .to(".chars h2", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(".chars dt", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      })
      .to(".chars dd", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      });

    // 6. Part 5 애니메이션: Outro (마지막 부분)
    outro_tl
      .fromTo(".outro h2", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .fromTo(".outro p", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .fromTo(".outro button", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      });

    // 모든 타임라인을 하나로 합침
    scene.add(intro_tl)
      .add(part1_tl)
      .add(part2_tl)
      .add(part3_tl)
      .add(part4_tl)
      .add(part5_tl)
      .add(outro_tl);

    return () => {
      // Cleanup ScrollTriggers and animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf("#wrapWin, #liberty, .models li, .specs, .chars, .outro");
    };
  }, []);

  return (
    <>
      <Header />
      <DetailIntro />
      <div id="container" ref={containerRef}>
        <div className="wrapper" id="wrapper">
          <div className="header">
            {/* Insert header content here */}
          </div>
          <div className="panel">
            <div className="intro" id="intro">
              <img id="logo" src="/public/images/logo.png" alt="logo-icon" />
              <h1 id="intro-h1">Ready to Cruise</h1>
              <h3 id="intro-h3">Relax and enjoy the drive</h3>
            </div>
            <img id="liberty" src="/src/assets/Detail/car-side.png" alt="liberty 150 png" />
            <h1 id="panel-h1">Radian Rover</h1>
            <ul className="models">
              <li>Liberty 50</li>
              <li>Liberty 150</li>
              <li>Liberty 150 Sport</li>
            </ul>
            <div className="rotator">
              <p>0°</p>
              <svg version="1.1" viewBox="0 0 10 30">
                <path d="M5 5.663V40" fill="none" stroke="#999" strokeWidth=".92" />
                <circle cx="7.423" cy="7.159" r="2.577" fill="#fff" />
              </svg>
              <p>360°</p>
            </div>
            <Specs />
            <Characteristics />
            <div className="outro">
              <h2>Radian Rover</h2>
              <p>$2999.00</p>
              <button>Build Now</button>
            </div>
          </div>
          <div className="bkg"></div>
        </div>
        <footer>
          <p>Based on this <a href="https://dribbble.com/shots/3265546-KTM-RC-390-Landing-page-Animation" target="blank">Dribble</a> by <a href="https://dribbble.com/divanraj" target="blank">Divan Raj</a></p>
          <p>All info and images are sourced from the <a href="https://www.piaggio.com/ca_EN/" target="blank">Piaggio website</a></p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;