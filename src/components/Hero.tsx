"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY <= window.innerHeight) {
        sectionRef.current.style.setProperty('--scroll-offset', `${scrollY}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background visual asset (B&W Base) */}
      <div 
        className={styles.bgImageContainer}
        style={{ transform: 'rotate(6deg) scale(1.1) translateY(calc(var(--scroll-offset, 0) * 0.2px))' }}
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDc26KKxo8sgSN1M1rFqOSwjP-1IHNdXRO8VzweqYYPMrJ_i-ysycAJ6ldDqFt3jkIrauGP99ZFBwYvn2rCH9tJP7cgmZsItaR7sTkNImwbV7CmNfAFpyYxjazhYyTT_9TR8_ykgz1PVvZkWlym2QiG7I0PdNS0TpUVvBfS9Z7s-m-nUw2J0Zw5h9uM2lHviWB9pX9ID59KTRNVdwDbajwBDInQvSNdjgh8SXCThG2Q-Y1XJuwzGLx1lVDANL1wZ-E5XdPMvMvQ0" 
          alt="Next Wave Studios Base" 
          className={styles.bgImage} 
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Colored Flashlight Overlay */}
      <div className={styles.flashlightMaskContainer}>
        <div 
          className={`${styles.bgImageContainer} ${styles.coloredContainerOverride}`}
          style={{ transform: 'rotate(6deg) scale(1.1) translateY(calc(var(--scroll-offset, 0) * 0.2px))' }}
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDc26KKxo8sgSN1M1rFqOSwjP-1IHNdXRO8VzweqYYPMrJ_i-ysycAJ6ldDqFt3jkIrauGP99ZFBwYvn2rCH9tJP7cgmZsItaR7sTkNImwbV7CmNfAFpyYxjazhYyTT_9TR8_ykgz1PVvZkWlym2QiG7I0PdNS0TpUVvBfS9Z7s-m-nUw2J0Zw5h9uM2lHviWB9pX9ID59KTRNVdwDbajwBDInQvSNdjgh8SXCThG2Q-Y1XJuwzGLx1lVDANL1wZ-E5XdPMvMvQ0" 
            alt="Next Wave Studios Colored" 
            className={styles.bgImageColored} 
          />
          <div className={styles.bgOverlay} />
        </div>
      </div>

      {/* Editorial layout text */}
      <div className={styles.verticalText}>
        <span className={styles.verticalTextSpan}>Audio Engineering / Bhubaneswar</span>
      </div>

      <div 
        className={styles.gridContainer}
        style={{ 
          transform: 'translateY(calc(var(--scroll-offset, 0) * 0.4px))',
          opacity: 'calc(1 - (var(--scroll-offset, 0) / 700))'
        }}
      >
        <div className={`${styles.leftCol} reveal-left`}>
          {/* Stickers */}
          <div className="sticker" style={{ top: '40px', left: '60%' }}>
            RAW AUDIO
          </div>
          <div className="sticker sticker-red" style={{ bottom: '128px', left: '-20px', display: 'var(--desktop-only, block)' }}>
            NO COMPROMISE
          </div>

          {/* High resolution hardware clock */}
          <div className={styles.techOverlay}>
            <span className={styles.recDot} />
            REC [96kHz / 24-bit] // <span className="text-white/50" id="timestamp">12:00:00.000Z</span>
          </div>

          <h1 className={styles.h1}>
            <span className={styles.h1Bg}>NEXT WAVE</span>
            <span className="stretch-text chromatic-hover block mix-blend-difference animate-breathe">Where</span>
            <div className={styles.imageRow}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAavaIno0Ni2kGomzWdVG-IWPV6F_KZnXmC0vsgagMU5827xUBAUFdnbYd1g6ccifmtO2lmZYq8e847DjuxmP3uyvToDNRjhzGfiwjGRpeDo8GP_1NsU1LvD1I3snMkg3IlysV832fHCIsFptcBEM_HBf156N6OaQx363YrGNwZOy0WhcOTHrJqHbetmsoi2IHslV9kFlmQfjtiYTglWfkppac9q5b5EY5IufFlo6P9zvNVfcQByVzWyevDxHVToXjPtjx0KsPla8w" 
                alt="" 
                className={styles.spinLogo} 
              />
              <span className={`stretch-text text-outline opacity-70 chromatic-hover block`}>Sound</span>
            </div>
            <span className={`stretch-text ${styles.mlRow2} text-brand-red chromatic-hover block opacity-90`}>Becomes</span>
            <span className={`stretch-text ${styles.mlRow3} text-glow italic chromatic-hover block`}>Art.</span>
          </h1>

          <div className={styles.bottomMeta}>
            <div className={styles.eqContainer}>
              <div className={`${styles.eqBar} eq-bar`} />
              <div className={`${styles.eqBarWhite} eq-bar`} />
              <div className={`${styles.eqBar} eq-bar`} />
              <div className={`${styles.eqBarWhite} eq-bar`} />
              <div className={`${styles.eqBar} eq-bar`} />
            </div>
            <p className={styles.desc}>
              Experience the pinnacle of audio engineering and creative production in our state-of-the-art cinematic studio.
            </p>
          </div>
        </div>

        <div className={`${styles.rightCol} reveal-up`} style={{ transitionDelay: '0.2s' }}>
          <div className={`${styles.card} group magnetic`}>
            <div className={styles.cardCorner} />
            <h3 className={styles.cardTitle}>Book a Session</h3>
            <p className={styles.cardText}>Secure your slot in the main room.</p>
            <button className={styles.cardBtn}>
              [ Schedule Now ]
            </button>
          </div>

          <div className={`${styles.galleryBtnContainer} magnetic`}>
            <h3 className={`${styles.cardTitle}`} style={{ color: 'white', opacity: 0.6 }}>Explore Studio</h3>
            <button className={styles.galleryBtn}>
              View Gallery -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
