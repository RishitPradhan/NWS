"use client";

import React from 'react';
import styles from './FinalCTA.module.css';

// Pre-compute sine wave SVG paths at module level (SSR-safe, runs once)
// Each wave: { centerY (0-600), amplitude, periods, opacity, color, strokeW }
const WAVES = [
  { centerY: 80,  amp: 12, periods: 2.5, opacity: 0.07, color: '#ffffff', sw: 1   },
  { centerY: 180, amp: 22, periods: 1.8, opacity: 0.12, color: '#ff0033', sw: 1.2 },
  { centerY: 300, amp: 35, periods: 2.2, opacity: 0.09, color: '#ffffff', sw: 1   },
  { centerY: 420, amp: 18, periods: 3.0, opacity: 0.13, color: '#ff0033', sw: 1.5 },
  { centerY: 520, amp: 10, periods: 1.5, opacity: 0.06, color: '#ffffff', sw: 1   },
];

const W = 2400; // SVG logical width (double-wide for seamless loop)
const H = 600;
const PTS = 240; // point count per wave

function makePath(centerY: number, amp: number, periods: number): string {
  const cmds: string[] = [];
  for (let i = 0; i <= PTS; i++) {
    const x = (i / PTS) * W;
    const y = centerY + amp * Math.sin((i / PTS) * Math.PI * 2 * periods);
    cmds.push(i === 0 ? `M${x.toFixed(1)} ${y.toFixed(2)}` : `L${x.toFixed(1)} ${y.toFixed(2)}`);
  }
  return cmds.join(' ');
}

// Duplicate each path side-by-side so translateX(-50%) loops seamlessly
const wavePaths = WAVES.map(w => ({
  ...w,
  d: makePath(w.centerY, w.amp, w.periods) +
     ' ' +
     makePath(w.centerY, w.amp, w.periods).replace(/M/, `M${W} `), // shift second copy by W
}));

export default function FinalCTA() {
  return (
    <section className={styles.section}>

      {/* ── Ghost watermark (always visible, very dim) ── */}
      <span className={styles.watermark} aria-hidden="true">NWS</span>

      {/* ── Watermark spotlight: same flashlight pattern as Hero ── */}
      <div className={styles.watermarkMask} aria-hidden="true">
        <span className={styles.watermarkGlow}>NWS</span>
      </div>

      {/* ── Animated waveform lines (audio / DAW aesthetic) ── */}
      <div className={styles.waveformBg} aria-hidden="true">
        <svg
          className={styles.waveformSvg}
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {wavePaths.map((w, i) => (
            <path
              key={i}
              d={w.d}
              fill="none"
              stroke={w.color}
              strokeWidth={w.sw}
              opacity={w.opacity}
              className={styles[`wave${i}`]}
            />
          ))}
        </svg>
      </div>

      {/* ── Noise grain (matches hero) ── */}
      <div className={styles.grain} aria-hidden="true" />

      {/* ── Floating colour orbs ── */}
      <div className={`${styles.orb} ${styles.orbA}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbB}`} aria-hidden="true" />

      {/* ── Vertical side label (editorial, matches hero) ── */}
      <div className={styles.verticalLabel} aria-hidden="true">
        <span>Next Wave Studios // Book Now</span>
      </div>

      {/* ── Top metadata bar ── */}
      <div className={styles.metaBar}>
        <span className={styles.metaDot} />
        <span>SESSION_BOOKING // OPEN</span>
        <span className={styles.metaDivider}>|</span>
        <span>BBS // STUDIO_A</span>
        <span className={styles.metaDivider}>|</span>
        <span>96kHz / 24-bit</span>
      </div>

      {/* ── Main content ── */}
      <div className={`${styles.inner} reveal-up`}>

        {/* Sticker */}
        <div className={`sticker sticker-red ${styles.sticker}`}>FINAL_STAGE</div>

        {/* Headline block */}
        <div className={styles.headlineBlock}>
          <h2 className={styles.h2}>
            <span className={styles.h2Line1}>Ready to</span>
            <span className={styles.h2Line2}>Create</span>
            <span className={`stretch-text text-outline chromatic-hover ${styles.h2Line3}`}>
              Your Next Hit?
            </span>
          </h2>
        </div>

        {/* Bottom row: callout + buttons */}
        <div className={styles.bottomRow}>
          {/* Left callout strip (like hero desc) */}
          <div className={styles.callout}>
            <p className={styles.calloutText}>
              Slots fill fast.<br />
              Secure your session in the main room before it&apos;s gone.
            </p>
            <div className={styles.calloutMeta}>
              <span className={styles.recDot} />
              <span>Recording available 24 / 7</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className={styles.btnGroup}>
            <button className={`${styles.primaryBtn} magnetic`}>
              [ Book Studio Time ]
            </button>
            <button className={`${styles.secondaryBtn} magnetic`}>
              Contact Us -&gt;
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom rule ── */}
      <div className={styles.bottomRule}>
        <span>©2026 NEXT WAVE STUDIOS</span>
        <span className={styles.ruleLine} />
        <span>BBS, INDIA</span>
      </div>

    </section>
  );
}
