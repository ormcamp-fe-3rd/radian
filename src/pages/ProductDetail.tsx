import '../styles/ProductDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import modelsData from '../data/modelsData.json'; // 데이터

/** 컴포넌트 */
import ProductDetailIntro from '../components/ProductDetailIntro';
import ScrollHeader from '../components/ScrollHeader';
import ScrollPanel from '../components/ScrollPanel';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const { model } = useParams<{ model: string }>();

  // modelsData는 배열이므로 첫 번째 객체를 선택하고, 그 객체에서 모델 이름을 키로 사용하여 찾습니다.
  const selectedModel = modelsData[0][model as keyof typeof modelsData[0]];

  if (!selectedModel) return <div>모델을 찾을 수 없습니다.</div>;

    useEffect(() => {

    // Set up the timelines
    const intro_tl = gsap.timeline();
    const part1_tl = gsap.timeline();
    const part2_tl = gsap.timeline();
    const part3_tl = gsap.timeline();
    const part4_tl = gsap.timeline();
    const part5_tl = gsap.timeline();
    const outro_tl = gsap.timeline();

    // ScrollTrigger for the container
    ScrollTrigger.create({
      trigger: '#container',
      pin: true,
      start: 'top -5%',
      end: '+=8150',
    });

    // Initial set-up for elements
    gsap.set('#liberty', { x: '50%', y: '50%', transformOrigin: 'center center' }); // 화면 중앙에 차 고정
    gsap.set('.specs', { x: -160, opacity: 0 });
    gsap.set('.chars', { x: 260 });
    part2_tl.set('.models li', { opacity: 0 });
    part3_tl.set('.specs dt', { opacity: 0 });
    part3_tl.set('.specs dd', { opacity: 0 });
    part4_tl.set('.chars h2', { opacity: 0 });
    part4_tl.set('.chars dt', { opacity: 0 });
    part4_tl.set('.chars dd', { opacity: 0 });
    outro_tl.set('.outro h2', { opacity: 0 });
    outro_tl.set('.outro p', { opacity: 0 });
    outro_tl.set('.outro button', { opacity: 0 });

    // TIMELINE: Intro
    intro_tl
      .fromTo(
        '#wrapWin',
        { height: 80 },
        { height: 800, duration: 0.1 }
      )
      .fromTo(
        '#liberty',
        { scale: 0.7, x: 100, y: 100 },
        { scale: 1, x: 100, y: 100, duration: 0.1 }
      )
      .to('#logo', {
        scrollTrigger: {
          start: 800,
          end: 1100,
          scrub: 0.75,
        },
        y: -190,
        scale: 0.6,
        duration: 0.9,
        ease: 'expo.out',
      })
      .to('#intro-h1', {
        scrollTrigger: {
          start: 1000,
          end: 1300,
          scrub: 0.75,
        },
        scale: 0,
        duration: 0.9,
        ease: 'expo.out',
      })
      .to('#intro-h3', {
        scrollTrigger: {
          start: 1050,
          end: 1350,
          scrub: 0.75,
        },
        scale: 0,
        duration: 0.9,
        ease: 'expo.out',
      });

    // TIMELINE: Part 1
    part1_tl
      .fromTo(
        '#liberty',
        { scale: 1, y: 0 },
        {
          scale: 0.8,
          y: -200,
          duration: 1.5,
          ease: 'sine.out',
          scrollTrigger: {
            start: 1250,
            end: 1550,
            scrub: 0.75,
          },
        }
      )
      .from('#panel-h1', {
        scrollTrigger: {
          start: 1550,
          end: 1850,
          scrub: 0.75,
        },
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'sine.out',
      })
      .from('.models li', {
        scrollTrigger: {
          start: 1500,
          end: 1800,
          scrub: 1.5,
        },
        opacity: 0,
        x: -20,
        duration: 1.5,
        stagger: 0.3,
        ease: 'sine.out',
      });

    // TIMELINE: Part 2
    part2_tl
      .from('#panel-h1', {
        scrollTrigger: {
          start: 2650,
          end: 2950,
          scrub: 1.5,
        },
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'sine.out',
      })
      .fromTo(
        '.models li',
        { x: 0, opacity: 1 },
        {
          x: -20,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: 'sine.out',
          scrollTrigger: {
            start: 2650,
            end: 2950,
            scrub: 1.5,
          },
        }
      );

    // TIMELINE: Part 3
    part3_tl
      .fromTo(
        '#wrapWin',
        { height: 800 },
        {
          scrollTrigger: {
            start: 3400,
            end: 3700,
            scrub: 1.5,
          },
          height: 80,
          duration: 3,
          ease: 'sine.out',
        }
      )
      .to('#liberty', {
        scrollTrigger: {
          start: 3550,
          end: 3850,
          scrub: 1.5,
        },
        x: 600,
        duration: 3,
        ease: 'sine.out',
      })
      .to('.specs', {
        scrollTrigger: {
          start: 3550,
          end: 3850,
          scrub: 1.5,
        },
        opacity: 1,
        duration: 3,
        ease: 'sine.out',
      })
      .from('.specs h2', {
        duration: 1.5,
        opacity: 0,
        x: -30,
        scrollTrigger: {
          start: 3550,
          end: 3850,
          scrub: 1.5,
        },
      })
      .from('.specs dt', {
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        x: -30,
        scrollTrigger: {
          start: 3550,
          end: 3850,
          scrub: 3,
        },
      })
      .from('.specs dd', {
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        x: -30,
        scrollTrigger: {
          start: 3550,
          end: 3850,
          scrub: 3,
        },
      }, '-=.5')
      .from(
        '.specs dd',
        {
          duration: 1.5,
          opacity: 1,
          stagger: 0.3,
          x: 0,
          scrollTrigger: {
            start: 4450,
            end: 4750,
            scrub: 1.5,
          },
        },
        '-=.5'
      )
      .from('.specs dt', {
        duration: 1.5,
        opacity: 1,
        stagger: 0.3,
        x: 0,
        scrollTrigger: {
          start: 4450,
          end: 4750,
          scrub: 1.5,
        },
      })
      .from('.specs h2', {
        duration: 1.5,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          start: 4450,
          end: 4750,
          scrub: 1.5,
        },
      })
      .fromTo(
        '#liberty',
        { x: 400 },
        {
          scrollTrigger: {
            start: 4900,
            end: 5200,
            scrub: 1.5,
          },
          x: -360,
          duration: 4.5,
          ease: 'sine.out',
        }
      );

    // TIMELINE: Part 4
    part4_tl
      .from('.chars h2', {
        duration: 1.5,
        opacity: 0,
        x: 30,
        scrollTrigger: {
          start: 5200,
          end: 5500,
          scrub: 1.5,
        },
      })
      .from('.chars dt', {
        duration: 1.5,
        opacity: 0,
        stagger: 0.3,
        x: 30,
        scrollTrigger: {
          start: 5200,
          end: 5500,
          scrub: 3,
        },
      })
      .from(
        '.chars dd',
        {
          duration: 1.5,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 5200,
            end: 5500,
            scrub: 3,
          },
        },
        '-=.5'
      );

    // TIMELINE: Part 5
    part5_tl
      .fromTo(
        '.chars h2',
        { opacity: 1, x: 0 },
        {
          duration: 1.5,
          opacity: 0,
          x: 30,
          scrollTrigger: {
            start: 5800,
            end: 6100,
            scrub: 1.5,
          },
        }
      )
      .fromTo(
        '.chars dt',
        { opacity: 1, x: 0 },
        {
          duration: 1.5,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 5800,
            end: 6100,
            scrub: 3,
          },
        }
      )
      .fromTo(
        '.chars dd',
        { opacity: 1, x: 0 },
        {
          duration: 1.5,
          opacity: 0,
          stagger: 0.3,
          x: 30,
          scrollTrigger: {
            start: 5800,
            end: 6100,
            scrub: 3,
          },
        }
      )
      .fromTo(
        "#liberty",
        {
          x: -360,
        },
        {
          scrollTrigger: {
            start: 6100,
            end: 6400,
            scrub: 1.5,
          },
          x: 0,
          duration: 4.5,
          ease: "sine.out",
        }
      );
      
    // TIMELINE: Outro
    outro_tl
        .fromTo(
          "#wrapWin",
          {
            height: 80,
          },
          {
            scrollTrigger: {
              start: 7000,
              end: 7300,
              scrub: 1.5,
            },
            height: 800,
            duration: 3,
            ease: "sine.out",
          }
        )
        .fromTo(
          "#liberty",
          {
            scale: 0.8,
            y: -300,
          },
          {
            scrollTrigger: {
              start: 7300,
              end: 7600,
              scrub: 1.5,
            },
            x: 30,
            scale: 0.7,
            y: -340,
            duration: 4.5,
            ease: "sine.out",
          }
        )
        .from(".outro h2", {
          scrollTrigger: {
            start: 7450,
            end: 7750,
            scrub: 1.5,
          },
          duration: 1.5,
          y: -50,
          opacity: 1,
          ease: "none",
        })
        .from(".outro p", {
          scrollTrigger: {
            start: 7600,
            end: 7900,
            scrub: 1.5,
          },
          duration: 1.5,
          y: -50,
          opacity: 1,
          ease: "none",
        })
        .from(".outro button", {
          scrollTrigger: {
            start: 7750,
            end: 8050,
            scrub: 1.5,
          },
          duration: 1.5,
          y: -50,
          opacity: 1,
          ease: "none",
        });

    return () => {
      // Clean up GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  if (!selectedModel) return <div>Loading...</div>;
  
  return (
    
    <>
      <ProductDetailIntro />

      <div className="container" id="container">
        <div className="wrapper" id="wrapper">
          
          <ScrollHeader />

          <ScrollPanel selectedModel={selectedModel} /> {/* 데이터 전달 */}

          <div className="bkg"></div>
        </div>
            
        <svg version="1.1" id="mask">
          <defs>
            <clipPath id="wrapMask">
              <rect id="wrapWin" width="1300" height="1100" fill="black" />
            </clipPath>
          </defs>
        </svg>
      </div>

    </>
  );
};

export default ProductDetail;




