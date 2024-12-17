import '../styles/ProductDetail.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {

    useEffect(() => {

      const tsqdElement = document.querySelector('.tsqd-parent-container');
       if (tsqdElement) {
         tsqdElement.remove(); // 요소 제거
       }
      
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
      trigger: '#detail-container',
      pin: true,
      once: true,
      start: 'top -5%',
      end: '+=8150',
    });

    // Initial set-up for elements
    gsap.set('#radian-model', { x: '50%', y: '50%', transformOrigin: 'center center' }); // 화면 중앙에 차 고정
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
        '#radian-model',
        { scale: 0.7, x: 100, y: 100 },
        { scale: 1, x: 100, y: 100, duration: 0.1 }
      )
      .to('#logo', {
        scrollTrigger: {
          trigger: '#logo',
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
          trigger: '#intro-h1',
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
          trigger: '#intro-h3',
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
        '#radian-model',
        { scale: 1, y: 0 },
        {
          scale: 0.8,
          y: -200,
          duration: 1.5,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: '#radian-model',
            start: 1250,
            end: 1550,
            scrub: 0.75,
          },
        }
      )
      .from('#panel-h1', {
        scrollTrigger: {
          trigger: '#panel-h1',
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
          trigger: '.models li',
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
          trigger: '#panel-h1',
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
            trigger: '.models li',
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
            trigger: '#wrapWin',
            start: 3400,
            end: 3700,
            scrub: 1.5,
          },
          height: 80,
          duration: 3,
          ease: 'sine.out',
        }
      )
      .to('#radian-model', {
        scrollTrigger: {
          trigger: '#radian-model',
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
          trigger: '.specs',
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
          trigger: '.specs h2',
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
          trigger: '.specs dt',
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
          trigger: '.specs dd',
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
            trigger: '.specs dd',
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
          trigger: '.specs dt',
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
          trigger: '.specs h2',
          start: 4450,
          end: 4750,
          scrub: 1.5,
        },
      })
      .fromTo(
        '#radian-model',
        { x: 400 },
        {
          scrollTrigger: {
            trigger: '#radian-model',
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
          trigger: '.chars h2',
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
          trigger: '.chars dt',
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
            trigger: '.chars dd',
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
            trigger: '.chars h2',
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
            trigger: '.chars dt',
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
            trigger: '.chars dd',
            start: 5800,
            end: 6100,
            scrub: 3,
          },
        }
      )
      .fromTo(
        "#radian-model",
        {
          x: -360,
        },
        {
          scrollTrigger: {
            trigger: '#radian-model',
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
              trigger: '#wrapWin',
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
          "#radian-model",
          {
            scale: 0.8,
            y: -300,
          },
          {
            scrollTrigger: {
              trigger: '#radian-model',
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
            trigger: '.outro h2',
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
            trigger: '.outro p',
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
            trigger: '.outro button',
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
    
    return (
      
      <>

        <section className="detail-intro">
          <div className='detail-intro-img'>
            <img src="/images/ProductDetail/range-rover-header.jfif" />
          </div>
          <h1 className='detail-intro-title'>Radian-Rover,<br />"The Utility" :Smart, Spacious,<br />and Ready for Anything</h1>
        </section>
        <div className="detail-container" id="detail-container">
            <div className="detail-wrapper" id="detail-wrapper">
                <div className="detail-header">
                  <svg version="1.1" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <div className='detail-header-options'>
                    <p>More Options</p>
                    <svg version="1.1" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
                <div className="panel">
                    <div className="panel-intro" id="intro">
                      <img id="logo" src="/images/common/logo.svg" alt="logo-icon" />
                      <h1 id="intro-h1">Ready to Cruise</h1>
                      <h3 id="intro-h3">Relax and enjoy the drive</h3>
                    </div>
                    <img id="radian-model" src="/images/ProductDetail/radian-rover-side.webp" alt="liberty 150 png" />
                    <h1 id="panel-h1">Radian Rover</h1>
                    <ul className="models">
                      <li>Radian RD6</li>
                      <li>Radian Rover</li>
                      <li>Radian Cooper</li>
                    </ul>
                    <div className="rotator">
                      <p>0&deg;</p>
                      <svg version="1.1" viewBox="0 0 10 30">
                        <path d="M5 5.663V40" fill="none" stroke="#999" strokeWidth="0.92" transform="matrix(1 0 0 1.16492 0 -6.597)" />
                        <circle cx="7.423" cy="7.159" r="2.577" fill="#fff" transform="translate(-2.423 -4.582)" />
                      </svg>
                      <p>360&deg;</p>
                    </div>
                    <div className="specs">
                      <h2>Engine</h2>
                      <dl>
                        <dt>Bore x Stroke</dt>
                        <dd>58mm x 58.6mm</dd>
                        <dt>Clutch</dt>
                        <dd>Automatic centrifugal dry clutch</dd>
                        <dt>Consumption</dt>
                        <dd>36.8 Km/I (WMTC cycle)</dd>
                        <dt>Cooling</dt>
                        <dd>Air</dd>
                        <dt>CO2 Emissions</dt>
                        <dd>65 g/Km</dd>
                        <dt>Distribution</dt>
                        <dd>Single overhead camshaft, 3 valves (2 input, 1 output)</dd>
                        <dt>Engine</dt>
                        <dd>Single cylinder 4-stroke -i-get</dd>
                      </dl>
                      <dl>
                        <dt>Engine Capacity</dt>
                        <dd>155c</dd>
                        <dt>Fuel system</dt>
                        <dd>Electronic injection</dd>
                        <dt>Lubrication</dt>
                        <dd>Oil with wet sump</dd>
                        <dt>Max Power</dt>
                        <dd>12.9hp (9.6kW) @ 7,750 rpm</dd>
                        <dt>Max Torque</dt>
                        <dd>9.58 ft-lbs (13 Nm) @ 5250 rpm</dd>
                        <dt>Transmission</dt>
                        <dd>Automatic CVT</dd>
                        <dt>Starter</dt>
                        <dd>Electric</dd>
                      </dl>
                    </div>
                    <div className="chars">
                      <h2>Characteristics</h2>
                      <dl>
                        <dt>Frame</dt>
                        <dd>High resistance tubular steel</dd>
                        <dt>Front tyre</dt>
                        <dd>Tubeless 90/80 - 16", 51J</dd>
                        <dt>Rear brake</dt>
                        <dd>Tamburo 140mm</dd>
                        <dt>Seat height</dt>
                        <dd>31.1" (790mm)</dd>
                        <dt>Front suspension</dt>
                        <dd>Telescopic hydraulic fork, 76mm stroke</dd>
                        <dt>Rear tyre</dt>
                        <dd>Tubeless 100/80 - 14", 54J</dd>
                        <dt>ABS</dt>
                        <dd>Front wheel standard ABS</dd>
                      </dl>
                      <dl>
                        <dt>Fuel Tank Capacity</dt>
                        <dd>1.58 gal (6 liters)</dd>
                        <dt>Rear suspension</dt>
                        <dd>Single hydraulic shock absorber with 5-position preload adjustment</dd>
                        <dt>Front brake</dt>
                        <dd>Single disk 240mm</dd>
                        <dt>Length/Width/Wheelbase</dt>
                        <dd>76.5" / 27.1" / 52.7"</dd>
                        <dt>Emission compliance</dt>
                        <dd>EPA, CARB, Transport Canada</dd>
                      </dl>
                    </div>
                    <div className="outro">
                      <h2>Radian Rover</h2>
                      <p>$2999.00</p>
                      <button>Build Now</button>
                    </div>
                </div>
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


