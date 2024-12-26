import '../styles/ProductDetail.css';
import { Car } from '../types/modelsTypes'; // 타입
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProductDetailScroll = (carData: Car | null) => {
    useGSAP(() => {

        if (!carData) return; // carData가 로드되지 않으면 애니메이션 실행 안함

        console.log("Animating for:", carData.name);
        
        const intro_tl = gsap.timeline();
        const part1_tl = gsap.timeline();
        const part2_tl = gsap.timeline();
        const part3_tl = gsap.timeline();
        const part4_tl = gsap.timeline();
        const part5_tl = gsap.timeline();
        const outro_tl = gsap.timeline();

        ScrollTrigger.create({
        trigger: '#detail-container',
        pin: true,
        start: 'top -5%',
        end: '+=8150',
        });

        // 초반 세팅
        gsap.set('#radian-model', { x: '50%', y: '50%', transformOrigin: 'center center' });
        gsap.set('.specs', { x: -160, opacity: 0 });
        gsap.set('.chars', { x: 260 });
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
        .fromTo('#wrapWin', {
            height: 80
        },
        {
            height: 800,
            duration: 0.1
        })
        .fromTo('#radian-model', {
            scale: 0.7,
            x: 100,
            y: 100
        },
        {
            scale: 1,
            x: 100,
            y: 100,
            duration: 0.1
        })
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
        .fromTo('#radian-model', {
            scale: 1,
            y: 0
        },
        {
            scrollTrigger: {
                start: 1250,
                end: 1550,
                scrub: 0.75,
            },
            scale: 0.8,
            y: -200,
            duration: 0.5,
            ease: 'sine.out',
        })
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
        });

        // TIMELINE: Part 3
        part3_tl
        .fromTo('#wrapWin', {
            height: 800
        },
        {
            scrollTrigger: {
                start: 3400,
                end: 3700,
                scrub: 1.5,
            },
            height: 80,
            duration: 3,
            ease: 'sine.out',
        })
        .to('#radian-model', {
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
            scrollTrigger: {
                start: 3550,
                end: 3850,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 0,
            x: -30,
        })
        .from('.specs dt', {
            scrollTrigger: {
                start: 3550,
                end: 3850,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: -30,
        })
        .from('.specs dd', {
            scrollTrigger: {
                start: 3550,
                end: 3850,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: -30,
        }, '-=.5')
        .from('.specs dd', {
            scrollTrigger: {
                start: 4450,
                end: 4750,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 1,
            stagger: 0.3,
            x: 0,
        }, '-=.5')
        .from('.specs dt', {
            scrollTrigger: {
                start: 4450,
                end: 4750,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 1,
            stagger: 0.3,
            x: 0,
        })
        .from('.specs h2', {
            scrollTrigger: {
                start: 4450,
                end: 4750,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 1,
            x: 0,
        })
        .fromTo('#radian-model', {
            x: 400
        },
        {
            scrollTrigger: {
                start: 4900,
                end: 5200,
                scrub: 1.5,
            },
            x: -360,
            duration: 4.5,
            ease: 'sine.out',
        });

        // TIMELINE: Part 4
        part4_tl
        .from('.chars h2', {
            scrollTrigger: {
                start: 5200,
                end: 5500,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 0,
            x: 30,  
        })
        .from('.chars dt', {
            scrollTrigger: {
                start: 5200,
                end: 5500,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: 30,
        })
        .from('.chars dd', {
            scrollTrigger: {
                start: 5200,
                end: 5500,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: 30,
        }, '-=.5');

        // TIMELINE: Part 5
        part5_tl
        .fromTo('.chars h2', {
            opacity: 1,
            x: 0
        },
        {
            scrollTrigger: {
                start: 5800,
                end: 6100,
                scrub: 1.5,
            },
            duration: 1.5,
            opacity: 0,
            x: 30,
        })
        .fromTo('.chars dt', {
            opacity: 1,
            x: 0
        },
        {
            scrollTrigger: {
                start: 5800,
                end: 6100,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: 30,
        })
        .fromTo('.chars dd', {
            opacity: 1,
            x: 0
        },
        {
            scrollTrigger: {
                start: 5800,
                end: 6100,
                scrub: 3,
            },
            duration: 1.5,
            opacity: 0,
            stagger: 0.3,
            x: 30,
        })
        .fromTo("#radian-model", {
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
        });
        
        // TIMELINE: Outro
        outro_tl
        .fromTo("#wrapWin", {
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
        })
        .fromTo("#radian-model", {
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
        })
        .from(".outro h2", {
            scrollTrigger: {
                start: 7450,
                end: 7750,
                scrub: 1.5,
            },
            duration: 1.5,
            y: -50,
            opacity: 0,
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
            opacity: 0,
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
            opacity: 0,
            ease: "none",
        });
    }, [carData]);
};

export default useProductDetailScroll;