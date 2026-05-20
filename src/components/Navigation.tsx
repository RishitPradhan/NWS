"use client";

import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftCol}>
        <a href="#" className={`${styles.logo} chromatic-hover group`}>
          <img 
            alt="NWS Logo" 
            className={styles.logoImg} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAavaIno0Ni2kGomzWdVG-IWPV6F_KZnXmC0vsgagMU5827xUBAUFdnbYd1g6ccifmtO2lmZYq8e847DjuxmP3uyvToDNRjhzGfiwjGRpeDo8GP_1NsU1LvD1I3snMkg3IlysV832fHCIsFptcBEM_HBf156N6OaQx363YrGNwZOy0WhcOTHrJqHbetmsoi2IHslV9kFlmQfjtiYTglWfkppac9q5b5EY5IufFlo6P9zvNVfcQByVzWyevDxHVToXjPtjx0KsPla8w" 
          />
        </a>
        <div className={styles.sysIndicator}>
          [LIVE: STD_A]
        </div>
      </div>
      
      <div className={styles.rightCol}>
        <div className={styles.menuBar}>
          <a className={`${styles.navLink} chromatic-hover`} href="#showcase">Showcase</a>
          <a className={`${styles.navLink} chromatic-hover`} href="#services">Services</a>
          <a className={`${styles.navLink} chromatic-hover`} href="#about">About</a>
        </div>
        <button className={`${styles.bookBtn} magnetic`}>
          [ BOOK_NOW ]
        </button>
      </div>

      <button className={`${styles.mobileMenuBtn} magnetic`}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
