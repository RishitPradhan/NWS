"use client";

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const equipment = [
    "AKG P120", "CASIO WK-7600", "AKG P3 S", "AKG K371 BT", 
    "AUDIO TECHNICA ATH-M30X", "CORT CR200 GT", "IBANEZ GRG150DXB", 
    "FENDER CC-60SCE", "MOTU M2", "MACKIE MR624", "MACKIE HM4"
  ];
  
  const marqueeItems = [...equipment, ...equipment];

  return (
    <footer className={styles.footer}>
      {/* Equipment Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {marqueeItems.map((item, i) => (
            <React.Fragment key={i}>
              <span className={styles.marqueeItem}>{item}</span>
              <span className={styles.marqueeDot}>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a href="#" className={`${styles.logo} chromatic-hover`}>
              <div className={styles.logoBlock} />
              NWS_
            </a>
            <p className={styles.studioAddress}>
              HQ // BHUBANESWAR, ODISHA<br />
              CLASS A ACOUSTICS
            </p>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>BOOKING & INQUIRIES</span>
              <a href="tel:8280002017" className={`${styles.contactPhone} chromatic-hover`}>+91 82800 02017</a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <span className={styles.colTitle}>INDEX</span>
            <a className={`${styles.link} chromatic-hover`} href="#">Home</a>
            <a className={`${styles.link} chromatic-hover`} href="#services">Services</a>
            <a className={`${styles.link} chromatic-hover`} href="#about">About</a>
            <a className={`${styles.link} chromatic-hover`} href="#">Book Online</a>
          </div>

          <div className={styles.linkCol}>
            <span className={styles.colTitle}>SOCIALS</span>
            <a className={`${styles.link} chromatic-hover`} href="#">Instagram</a>
            <a className={`${styles.link} chromatic-hover`} href="#">Twitter</a>
            <a className={`${styles.link} chromatic-hover`} href="#">YouTube</a>
          </div>

          <div className={styles.linkCol}>
            <span className={styles.colTitle}>LEGAL</span>
            <a className={`${styles.link} chromatic-hover`} href="#">Privacy Policy</a>
            <a className={`${styles.link} chromatic-hover`} href="#">Terms of Service</a>
          </div>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.meta}>SYS.VER 2.0.26</div>
          <div className={styles.meta}>© {new Date().getFullYear()} NEXT WAVE STUDIOS.</div>
        </div>
      </div>

    </footer>
  );
}
