import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import '../styles/test.css'

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const phoneElem = useRef<HTMLDivElement>(null);
  const timeElem = useRef<HTMLDivElement>(null);
  const contentElem = useRef<HTMLDivElement>(null);
  const articles = useRef<NodeListOf<HTMLElement>>(null);

  useEffect(() => {
    if (!phoneElem.current || !timeElem.current || !contentElem.current) return;

    const setTime = () => {
      if (timeElem.current) {
        timeElem.current.textContent = new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });
      }
    };

    setTime();
    const timeInterval = setInterval(setTime, 5000);

    const roll = (article: HTMLElement, index: number) => {
      const animation = gsap.timeline()
        .to(article, {
          '--clip': `${article.offsetHeight + 112}px`,
          '--compact-s': 1,
          '--compact-o': 1,
          duration: 1,
          delay: 0.05,
          ease: 'none'
        })
        .to(article, {
          '--border-radius-h': '180px',
          '--border-radius-v': '20px',
          repeat: 1,
          yoyo: true,
          duration: 0.15,
          onStart() {
            article.style.overflow = 'hidden';
          },
          onComplete() {
            article.style.overflow = 'visible';
          }
        }, 0)
        .to(article, {
          '--article-r': getComputedStyle(article).getPropertyValue('--to-article-r'),
          '--article-x': getComputedStyle(article).getPropertyValue('--to-article-x'),
          '--article-y': getComputedStyle(article).getPropertyValue('--to-article-y'),
          duration: 0.15
        });

      if (index === 0) {
        animation.to(phoneElem.current, {
          '--headline-y': '-28px',
          duration: 0.3
        }, 1.05);
      }

      if (index === 1) {
        animation.to(articles.current?.[index - 1], {
          '--article-y': '-64px',
          '--article-r': '-2deg',
          duration: 0.15
        }, 1.08);
      }

      if (index === 2) {
        animation.to(articles.current?.[index - 2], {
          '--article-y': '-70px',
          duration: 0.15
        }, 1.14);
        animation.to(articles.current?.[index - 1], {
          '--article-y': '-42px',
          '--article-r': '-2deg',
          duration: 0.15
        }, 1.08);
      }

      if (index === (articles.current?.length || 0) - 1) {
        animation.to(phoneElem.current, {
          '--empty-mask': '0%',
          duration: 0.3
        });
      }

      return ScrollTrigger.create({
        animation,
        trigger: article,
        scroller: contentElem.current,
        scrub: true,
        start: `top top+=184`,
        end: `bottom top+=112`
      });
    };

    if (articles.current) {
      articles.current.forEach((article, index) => {
        roll(article, index);
      });
    }

    // contentElem에 스크롤을 제어하는 이벤트 추가
    if (contentElem.current) {
      contentElem.current.addEventListener("scroll", (e) => {
        if (contentElem.current?.scrollTop > 2550) {
          contentElem.current.scrollTop = 2550;
        }
      });
    }

    // window resize시 스크롤 상태 유지
    const progressST = ScrollTrigger.create({
      scroller: contentElem.current,
      start: 0,
      end: 2550,
    });

    let oldProgress: number | undefined;

    ScrollTrigger.addEventListener("refreshInit", () => {
      oldProgress = progressST.progress;
      contentElem.current!.scrollTop = 0;
    });

    ScrollTrigger.addEventListener("refresh", () => {
      progressST.scroll(oldProgress! * 2550);
    });

    return () => {
      clearInterval(timeInterval); // 타이머 정리
    };
  }, []);

  return (
    <>
      <section className="intro flex">
        <h1>Radian-Rover,<br />"The Utility" :Smart, Spacious, and Ready for Anything</h1>
        <img src="/src/assets/Detail/range-rover-header.jfif" alt="Range Rover" />
      </section>

      <nav className="detail-navbar">
        <ul className="detail-navbar-menu">
          <li><a href="">HIGHLIGHT</a></li>
          <li><a href="">DESIGN</a></li>
          <li><a href="">PERFORMANCE</a></li>
          <li><a href="">CONVENIENCE</a></li>
          <li><a href="">SAFETY</a></li>
        </ul>
      </nav>

      <div id="phone" ref={phoneElem}>
        <div className="screen">
          <h1>Historical letters</h1>
          <div className="empty">
            <svg viewBox="0 0 48 48">
              <path d="M47.3296 9.02336C46.9238 8.85514 46.4566 8.94821 46.1461 9.25869L26.2748 29.13C26.1703 29.2345 26.0916 29.3551 26.0386 29.4836C25.9866 29.6094 25.9576 29.7471 25.9567 29.8914C25.9567 29.892 25.9567 29.8925 25.9567 29.8929C25.9567 29.8932 25.9567 29.8933 25.9567 29.8934C25.9567 29.8938 25.9567 29.8941 25.9567 29.8946C25.9567 29.8949 25.9567 29.8951 25.9567 29.8954C25.9567 29.8958 25.9567 29.8959 25.9567 29.8962C25.9567 29.8967 25.9567 29.8973 25.9567 29.8979C25.9567 37.2506 19.975 43.2324 12.6223 43.2324C6.85987 43.2324 2.17195 38.5443 2.17195 32.7821C2.17195 28.2919 5.82494 24.639 10.315 24.639C13.7874 24.639 16.6122 27.4639 16.6122 30.9362C16.6122 33.5944 14.4497 35.7569 11.7916 35.7569C9.78483 35.7569 8.15229 34.1242 8.15229 32.1175C8.15229 30.6319 9.36098 29.4232 10.8466 29.4232C11.4463 29.4232 11.9326 28.9371 11.9326 28.3373C11.9326 27.7375 11.4463 27.2513 10.8466 27.2513C8.16337 27.2513 5.98034 29.4343 5.98034 32.1175C5.98034 35.3219 8.58722 37.9288 11.7916 37.9288C13.6865 37.9288 15.4077 37.1712 16.6683 35.943C16.6915 35.9233 16.7141 35.9026 16.736 35.8808L36.6075 16.0094C37.9281 14.6887 38.6555 12.9328 38.6555 11.065C38.6555 6.39509 34.8563 2.5957 30.1864 2.5957C27.4311 2.5957 24.8408 3.66864 22.8925 5.61688L3.02118 25.4882C2.99522 25.5142 2.97079 25.5412 2.94798 25.569C1.12539 27.4303 0 29.9774 0 32.7821C0 37.5295 4.56059 42.0901 9.80704 42.0901C12.3703 42.0901 14.637 39.8238 14.637 37.2589C14.637 34.7999 12.6403 32.8001 10.0132 32.8001C9.27756 32.8001 8.59964 33.1941 8.19324 33.9117C8.15207 33.9983 8.12217 34.0886 8.10272 34.1804L8.08796 34.2823L8.03128 34.5123C8.04645 34.6991 8.04234 34.8874 8.01989 35.0759C7.92461 35.3576 7.77157 35.6451 7.53957 35.9091C7.05319 36.3915 6.45576 36.6286 5.79474 36.5972C5.13152 36.5655 4.52153 36.1831 4.1489 35.6466C4.14528 35.6403 4.14173 35.6339 4.13817 35.6277C3.81971 35.2444 3.57346 34.8035 3.42097 34.3352L3.02118 25.4882L2.2765 21.4333L2.2299 20.7695C2.13459 19.4942 2.37229 18.2594 3.0396 17.3331L25.6166 3.54192C28.6749 1.70528 32.6937 1.087 36.6125 2.92493C37.4052 3.32389 38.0045 4.04719 38.2669 4.90075C38.5338 5.76066 38.4047 6.73364 37.8196 7.3388L47.3296 9.02336Z"></path>
            </svg>
          </div>
          <div className="time" ref={timeElem} />
        </div>
        <div className="mask">
          <div className="content" ref={contentElem}>
            <article ref={articles}></article> {/* Article element included here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;







