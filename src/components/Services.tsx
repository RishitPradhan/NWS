"use client";

import React from 'react';
import styles from './Services.module.css';

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  delay: string;
  mlClass?: string;
}

const servicesData: ServiceItem[] = [
  {
    num: "01/",
    title: "Music Production",
    description: "Full-scale production from initial concept to final polished arrangement.",
    delay: "0.1s"
  },
  {
    num: "02/",
    title: "Recording",
    description: "Capture pristine audio in our acoustically treated rooms with top-tier gear.",
    delay: "0.2s",
    mlClass: "mlRow1"
  },
  {
    num: "03/",
    title: "Mixing & Mastering",
    description: "Elevate your tracks with industry-standard sonic balance and loudness.",
    delay: "0.3s",
    mlClass: "mlRow2"
  },
  {
    num: "04/",
    title: "Vocal Recording",
    description: "Dedicated vocal booths designed to capture every nuance of your performance.",
    delay: "0.4s",
    mlClass: "mlRow3"
  }
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      {/* Huge background text watermark */}
      <div className={styles.hugeBgText}>
        SERVICES_SYS
      </div>

      <div className="max-w-container">
        <div className={`${styles.headerContainer} reveal-up`}>
          <div className={styles.titleContainer}>
            <div className={`sticker ${styles.sticker}`}>CAPABILITIES</div>
            <h2 className={styles.h2}>
              Sonic<br />
              <span className={styles.gradientText}>Architecture.</span>
            </h2>
          </div>
          <p className={styles.desc}>
            {"We don't just record; we sculpt sound. Our services cover the entire spectrum of audio creation."}
          </p>
        </div>

        <div className={styles.listContainer}>
          {servicesData.map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.row} reveal-up magnetic`} 
              style={{ transitionDelay: item.delay }}
            >
              <div className={`${styles.leftMeta} ${item.mlClass ? styles[item.mlClass] : ''}`}>
                <span className={styles.num}>{item.num}</span>
                <h3 className={`${styles.rowTitle} stretch-text chromatic-hover`}>
                  {item.title}
                </h3>
              </div>
              <div className={styles.rowDesc}>
                {item.description}
              </div>
              <div className={styles.arrowBtn}>
                <span className={`material-symbols-outlined ${styles.arrowIcon}`}>arrow_outward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
