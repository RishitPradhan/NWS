"use client";

import React from 'react';
import styles from './StudioShowcase.module.css';

export interface Product {
  _id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  slug: { current: string };
  imageUrl?: string;
}

interface ShowcaseProps {
  products?: Product[];
}

const getCategoryIcon = (category: string): string => {
  const cat = category.toLowerCase();
  if (cat.includes('mic')) return 'mic';
  if (cat.includes('guitar')) return 'music_note';
  if (cat.includes('headphone')) return 'headphones';
  if (cat.includes('keyboard') || cat.includes('piano') || cat.includes('workstation')) return 'piano';
  if (cat.includes('interface') || cat.includes('monitor') || cat.includes('amp')) return 'router';
  return 'settings';
};

const getLocalImageUrl = (category: string): string | undefined => {
  const cat = category.toLowerCase();
  if (cat.includes('mic')) return "/tools/studio_microphone_1779286877973.png";
  if (cat.includes('guitar')) return "/tools/studio_guitar_1779286912278.png";
  if (cat.includes('headphone')) return "/tools/studio_headphones_1779286928163.png";
  if (cat.includes('keyboard') || cat.includes('piano') || cat.includes('workstation')) return "/tools/studio_workstation_1779286897078.png";
  if (cat.includes('interface') || cat.includes('monitor') || cat.includes('amp')) return "/tools/studio_interface_1779286947746.png";
  return undefined;
};

// Standard fallback inventory data matching Stitch visual layout mockups
const defaultProducts: Product[] = [
  {
    _id: "default-mic",
    title: "AKG P120",
    category: "Microphone",
    tagline: "Looks can often be deceiving",
    description: "Whatever it is you need to create your best work, we have it here at Next Wave Studios. It has all the perks of being the best in class microphone.",
    slug: { current: "akg-p120-microphone" },
    imageUrl: "/tools/studio_microphone_1779286877973.png"
  },
  {
    _id: "default-workstation",
    title: "CASIO WK-7600",
    category: "Workstation",
    tagline: "The Goat",
    description: "Although it's not a midi controller keyboard, it is a workhorse as to its capabilities. This 76 key Workstation Keyboard provides excellent touch response and authentic piano feel.",
    slug: { current: "casio-wk-7600-keyboard" },
    imageUrl: "/tools/studio_workstation_1779286897078.png"
  },
  {
    _id: "default-guitar",
    title: "CORT CR200 GT",
    category: "Guitar",
    tagline: "Slasher",
    description: "The Classic Rock Series CR200's PAF-inspired Alnico II pickups deliver the look, feel and raw vintage response of sought-after golden era instruments.",
    slug: { current: "cort-cr200-gt-guitar" },
    imageUrl: "/tools/studio_guitar_1779286912278.png"
  },
  {
    _id: "default-headphones",
    title: "AKG K371 BT",
    category: "Headphones",
    tagline: "The Mixing Headphone",
    description: "Precision-engineered studio headphones matching AKG's Reference Response targets for balanced and extraordinarily detailed audio monitoring.",
    slug: { current: "akg-k371-bt-headphones" },
    imageUrl: "/tools/studio_headphones_1779286928163.png"
  },
  {
    _id: "default-interface",
    title: "MOTU M2",
    category: "Audio Interface",
    tagline: "Recording GOAT",
    description: "ESS Sabre32 Ultra DAC technology delivers unmatched low latency recording and top-of-the-line preamps for capturing anything in the studio.",
    slug: { current: "motu-m2-audio-interface" },
    imageUrl: "/tools/studio_interface_1779286947746.png"
  }
];

export default function StudioShowcase({ products }: ShowcaseProps) {
  // Use loaded items or default mock data if empty
  const activeProducts = products && products.length > 0 ? products : defaultProducts;

  // Filter or pick the focal main feature (AKG P120 Microphone preferred, or fallback to first item)
  const mainFeature = activeProducts.find(p => p.title.toLowerCase().includes('p120')) || activeProducts[0];
  
  // Filter out the main feature and take up to 4 smaller items to build the 2x2 grid
  const smallerItems = activeProducts
    .filter(p => p._id !== mainFeature._id)
    .slice(0, 4);

  return (
    <section className={styles.section} id="showcase">
      <div className={styles.maxContainer}>
        {/* Section header row */}
        <div className={`${styles.headerRow} reveal-up`}>
          <div className={styles.titleContainer}>
            <div className={styles.arsenalBadge}>[ ARSENAL_DB ]</div>
            <h2 className={`${styles.h2} stretch-text`}>The Tools.</h2>
          </div>
          <div className={styles.navBtns}>
            <button className={`${styles.navBtn} magnetic`}>
              <span className={`material-symbols-outlined ${styles.navIcon}`}>west</span>
            </button>
            <button className={`${styles.navBtn} magnetic`}>
              <span className={`material-symbols-outlined ${styles.navIcon}`}>east</span>
            </button>
          </div>
        </div>

        {/* Brutalist Asymmetric Showcase Layout */}
        <div className={styles.showcaseGrid}>
          {/* Main big feature card (Left side) */}
          <div className={`${styles.mainFeatureCard} reveal-scale magnetic`}>
            <div className={styles.techGridBg} />
            <div className={styles.cardHeader}>
              <span className={styles.categoryBadge}>{mainFeature.category}</span>
              <div className={styles.specsTable}>
                FREQ RES: 20Hz - 20kHz<br />
                SENSITIVITY: 24 mV/Pa<br />
                STAT: <span className={styles.specsActive}>ACTIVE</span>
              </div>
            </div>
            
            {/* Visual ambient glow ring */}
            <div className={styles.gradientVisual} />
            {(mainFeature.imageUrl || getLocalImageUrl(mainFeature.category)) && (
              <img 
                src={mainFeature.imageUrl || getLocalImageUrl(mainFeature.category)} 
                alt={mainFeature.title} 
                className={styles.mainImage} 
              />
            )}
            
            <div className={styles.cardFooter}>
              <div className={styles.cardId}>ID: EQ_{mainFeature.slug?.current?.substring(0, 3).toUpperCase() || 'XXX'}</div>
              <h3 className={`${styles.mainTitle} chromatic-hover`}>{mainFeature.title}</h3>
              <p className={styles.mainDesc}>
                {mainFeature.description || mainFeature.tagline}
              </p>
            </div>
          </div>

          {/* 2x2 Smaller cards grid (Right side) */}
          <div className={styles.secondaryGrid}>
            {smallerItems.map((item, idx) => (
              <div 
                key={item._id} 
                className={`${styles.smallCard} reveal-up magnetic`}
                style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}
              >
                <div className={styles.smallCardHeader}>
                  <span className={styles.smallCategory}>{item.category}</span>
                  <span className={`material-symbols-outlined ${styles.smallIcon}`}>
                    {getCategoryIcon(item.category)}
                  </span>
                </div>
                {(item.imageUrl || getLocalImageUrl(item.category)) && (
                  <img 
                    src={item.imageUrl || getLocalImageUrl(item.category)} 
                    alt={item.title} 
                    className={styles.smallImage} 
                  />
                )}
                <div className={styles.smallCardFooter}>
                  <div className={styles.smallId}>
                    {item.slug?.current?.substring(0, 5).toUpperCase() || 'ITEM'}_{idx + 1}
                  </div>
                  <h3 className={`${styles.smallTitle} chromatic-hover`}>
                    {item.title.replace(' Guitar', '').replace(' Keyboard', '').replace(' Headphones', '').replace(' Audio Interface', '')}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
