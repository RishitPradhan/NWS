"use client";

import React from 'react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      {/* Sound wave rings */}
      <div className={styles.ringsContainer}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.ring} style={{ animationDelay: `${i * 0.8}s` }} />
        ))}
      </div>
      
      <div className={styles.glow} />

      <div className={`${styles.content} reveal-up`}>
        <div className={`sticker ${styles.sticker}`}>FINAL_STAGE</div>
        <h2 className={styles.h2}>
          Ready to Create<br />
          <span className="text-outline text-brand-red stretch-text chromatic-hover">Your Next Hit?</span>
        </h2>
        
        <div className={styles.btnGroup}>
          <button className={`${styles.primaryBtn} magnetic`}>
            [ Book Studio Time ]
          </button>
          <button className={`${styles.secondaryBtn} magnetic`}>
            Contact Us -&gt;
          </button>
        </div>
      </div>
    </section>
  );
}
