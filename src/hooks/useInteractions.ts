import { useEffect } from 'react';

export function useInteractions() {
  useEffect(() => {
    // 1. Custom Cursor Follower Logic
    const cursorDot = document.getElementById('cursor-dot');
    const cursorTrail = document.getElementById('cursor-trail');

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      document.documentElement.style.setProperty('--mouse-x', `${posX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${posY}px`);

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 2. Magnetic/Zoom Hover Transition
    const magneticElements = document.querySelectorAll('.magnetic');
    
    // 3. Hover expansion of cursor trail when targeting magnetic components
    const handleMagneticHoverEnter = (e: Event) => {
      const elem = e.currentTarget as HTMLElement;
      elem.style.transform = 'scale(1.02)';
      elem.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMagneticHoverLeave = (e: Event) => {
      const elem = e.currentTarget as HTMLElement;
      // We don't reset to translate(0,0) forcefully to avoid breaking reveal transforms,
      // but we reset the scale part. It's safer to just remove the transform override:
      elem.style.transform = '';
    };

    magneticElements.forEach((elem) => {
      elem.addEventListener('mouseenter', handleMagneticHoverEnter);
      elem.addEventListener('mouseleave', handleMagneticHoverLeave);
    });

    // 4. Intersection Observer for Scroll Reveals
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left');
    revealElements.forEach((el) => observer.observe(el));

    // 5. System Clock / Live Timestamp updater
    const timestampEl = document.getElementById('timestamp');
    let clockInterval: NodeJS.Timeout;
    if (timestampEl) {
      const updateClock = () => {
        const now = new Date();
        timestampEl.textContent = now.toISOString().split('T')[1].slice(0, -1) + 'Z';
      };
      updateClock();
      clockInterval = setInterval(updateClock, 1000);
    }

    // Cleanup listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      magneticElements.forEach((elem) => {
        elem.removeEventListener('mouseenter', handleMagneticHoverEnter);
        elem.removeEventListener('mouseleave', handleMagneticHoverLeave);
      });
      revealElements.forEach((el) => observer.unobserve(el));
      if (clockInterval) clearInterval(clockInterval);
    };
  }, []);
}
