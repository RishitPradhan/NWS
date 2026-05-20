"use client";

import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">

      {/* ── Kinetic Wallpaper ── */}
      <div className={styles.wallpaperLayer}>
        <div className={styles.marqueeContainer}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`${styles.marqueeRow} ${i % 2 === 0 ? styles.marqueeLeft : styles.marqueeRight}`}>
              <span>AN ARTIST-FIRST EXPERIENCE // AN ARTIST-FIRST EXPERIENCE // AN ARTIST-FIRST EXPERIENCE //&nbsp;</span>
              <span>AN ARTIST-FIRST EXPERIENCE // AN ARTIST-FIRST EXPERIENCE // AN ARTIST-FIRST EXPERIENCE //&nbsp;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className={styles.contentGrid}>

        {/* LEFT: Text column */}
        <div className={styles.textCol}>
          <span className={styles.badge}>[ PHILOSOPHY ]</span>

          <h2 className={styles.headline}>
            An<br />
            Artist-First<br />
            <em className={styles.headlineAccent}>Experience.</em>
          </h2>

          <div className={styles.divider} />

          <p className={styles.body}>
            At Next Wave Studios, we believe that the environment dictates the art. Our spaces are meticulously engineered not just for acoustic perfection, but to inspire creative flow.
          </p>
          <p className={styles.bodyFaded}>
            We merge the raw energy of modern streetwear aesthetics with the clinical precision of elite audio tools — a hybrid space where intuition meets technical excellence.
          </p>

          {/* Stats row */}
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statValue}>2022</span>
              <span className={styles.statLabel}>// ESTABLISHED</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>BBS</span>
              <span className={styles.statLabel}>// LOCATION</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>A</span>
              <span className={styles.statLabel}>// CLASS</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Image stack */}
        <div className={styles.imageCol}>
          {/* Large hero image */}
          <div className={styles.imgHero}>
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070" alt="Studio Main" />
            <span className={styles.imgLabel}>STUDIO_A // MAIN</span>
          </div>

          {/* Two smaller images side by side */}
          <div className={styles.imgRow}>
            <div className={styles.imgSmall}>
              <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070" alt="Hardware" />
            </div>
            <div className={`${styles.imgSmall} ${styles.imgSmallAccent}`}>
              <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070" alt="Piano" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
