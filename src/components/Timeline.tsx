import '../styles/ProductDetail.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  useEffect(() => {
    // 애니메이션 타임라인 설정
    gsap.fromTo(
      '.timeline-item .timeline-content',
      {
        opacity: 0, 
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top 80%',  // 뷰포트의 80%에서 시작
          end: 'bottom top',
          scrub: true,  // 스크롤에 따라 애니메이션을 부드럽게 적용
          markers: true, // 디버깅용 마커 표시 (개발 중에만 사용)
        },
      }
    );
    
    gsap.fromTo(
      '.timeline-item .timeline-menu',
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top 70%',  // 70% 위치에서 트리거
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    
    // 추가적으로 각 이미지를 애니메이션할 수 있습니다
    gsap.fromTo(
      '.timeline-item .timeline-img img',
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top 70%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    
  }, []);

  return (
    <>
      
      <div className="detail-main-img">
        <img src="/src/assets/Detail/detail-car1.png" />
      </div>

      <nav className="detail-navbar">
          <ul className="detail-navbar-menu">
              <li><a href="">HILIGHT</a></li>
              <li><a href="">DESIGN</a></li>
              <li><a href="">PERFORMANCE</a></li>
              <li><a href="">CONVINIENCE</a></li>
              <li><a href="">SAFTEY</a></li>
          </ul>
      </nav>

      <section className="timeline">
          <div className="container">
              <div className="timeline-item">
                  <div className="timeline-menu">HILIGHT</div>

                  <div className="timeline-content js--fadeInLeft">
                      <div className="timeline-img">
                          <img className="car1" src="/src/assets/Detail/detail-car2.png" />
                          <img className="car2" src="/src/assets/Detail/detail-car2.png" />
                      </div>
                      <div className="timeline-text">
                          <p className="text-hilight">TECHNICAL REVOLUTION<br />IN CLASSNameclassNameIC MOOD</p>
                      </div>
                  </div>
              </div>

              <div className="timeline-item">
                  <div className="timeline-menu">DESIGN</div>

                  <div className="timeline-content js--fadeInRight">
                      <div className="timeline-img">
                          <img className="car-head" src="/src/assets/Detail/car-front.png" />
                          <img className="car-side" src="/src/assets/Detail/car-side.png" />
                          <img className="car-rear" src="/src/assets/Detail/car-front.png" />
                      </div>
                      <div className="timeline-text">
                          <p className="text-design1">HEAD<br/>CONCEPT</p>
                          <p className="text-design2">SIDE<br/>CONCEPT</p>
                          <p className="text-design3">REAR<br/>CONCEPT</p>
                      </div>
                  </div>
              </div>

              <div className="timeline-item">
                  <div className="timeline-menu">PERFORMANCE</div>

                  <div className="timeline-content js--fadeInLeft">
                      <div className="timeline-img">
                          <img className="car-performance" src="/src/assets/Detail/car-perfonmance.png" />
                          <img className="car-performance2" src="/src/assets/Detail/car-performance2.png" />
                      </div>
                      <div className="timeline-text">
                          <p className="text-title">5th-Generation Hybrid System</p>
                          <p className="text-description">The hybrid system, which has evolved from<br/>
                              the first generation, features enhanced<br/>
                              engine and motor output. It provides<br/>
                              powerful performance and stable driving,<br/>
                              allowing you to tackle any rugged road with ease.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="timeline-item">
                  <div className="timeline-menu">CONVINIENCE</div>

                  <div className="timeline-content js--fadeInRight">
                      <div className="timeline-img">
                          <img className="car-interior" src="/src/assets/Detail/CAR-INTERIOR.png" />
                      </div>
                      <div className="timeline-text">
                          <p className="text-title">Convenient Interior Features</p>
                          <p className="text-description">Experience a seamlessly designed interior that prioritizes<br/>
                              comfort and functionality. With advanced climate control,<br/>
                              intuitive infotainment systems, and smart storage solutions,<br/>
                              every drive becomes an effortless journey. Enjoy the perfect<br/>
                              blend of technology and convenience, making every moment behind the wheel a pleasure.
                          </p>
                      </div>
                  </div>
              </div>

              <div className="timeline-item">
                  <div className="timeline-menu">SAFTEY</div>

                  <div className="timeline-content js--fadeInLeft">
                      <div className="timeline-img">
                          <img className="car-safety" src="/src/assets/Detail/CAR SAFETY.png" />
                      </div>
                      <div className="timeline-text">
                          <p className="text-title">Advanced Collision Prevention Technology</p>
                          <p className="text-description">Our electric vehicle is equipped with cutting-edge front and rear automatic detection<br/>
                              technology that helps prevent collisions. This system continuously monitors<br/>
                              your surroundings, automatically identifying potential obstacles and taking action<br/>
                              to avoid any impact, ensuring a safer and stress-free driving experience.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section> 
    </>
  );
};

export default Timeline;