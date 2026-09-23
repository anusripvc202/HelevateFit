/**
 * HELEVATE.FIT — ULTRAHUMAN-INSPIRED CALM CINEMATIC MOTION ENGINE
 * 
 * Features:
 * - Magnetic 3D tilt on cards and interactive visuals ([data-tilt])
 * - Smooth count-up telemetry numbers ([data-count-to])
 * - Subtle parallax image effects
 * - IntersectionObserver reveals (fade-in, slide-up, blur-to-sharp)
 * - Sticky header glassmorphism state
 */

(function() {
  'use strict';

  const MotionEngine = {
    observer: null,

    init() {
      this.initHeaderScroll();
      this.initIntersectionObserver();
      this.initSmoothScrollLinks();
      this.init3DTilt();
      this.initNumberCounters();
      this.initParallaxImages();
    },

    // 1. Sticky Header Glassmorphic State
    initHeaderScroll() {
      const header = document.querySelector('.site-header');
      if (!header) return;

      const onScroll = () => {
        if (window.scrollY > 24) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    },

    // 2. Gentle, Calm Scroll Reveals via IntersectionObserver
    initIntersectionObserver() {
      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal, .reveal-up, .reveal-fade').forEach(el => {
          el.classList.add('is-revealed');
        });
        return;
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            
            // Trigger count-up if element contains counter
            const counter = entry.target.querySelector('[data-count-to]');
            if (counter && !counter.classList.contains('has-counted')) {
              this.animateCounter(counter);
            }
            if (entry.target.hasAttribute('data-count-to') && !entry.target.classList.contains('has-counted')) {
              this.animateCounter(entry.target);
            }

            this.observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      this.observeElements();
    },

    observeElements() {
      if (!this.observer) return;
      const elements = document.querySelectorAll('.app-view.active .reveal, .app-view.active .reveal-up, .app-view.active .reveal-fade, .reveal, .reveal-up, .reveal-fade');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
          const counter = el.querySelector('[data-count-to]');
          if (counter && !counter.classList.contains('has-counted')) {
            this.animateCounter(counter);
          }
        } else {
          this.observer.observe(el);
        }
      });
    },

    // 3. Magnetic 3D Tilt Effect on Visual Cards ([data-tilt])
    init3DTilt() {
      const cards = document.querySelectorAll('[data-tilt]');
      if (!cards.length) return;

      cards.forEach(card => {
        let isHovered = false;

        card.addEventListener('mouseenter', () => {
          isHovered = true;
        });

        card.addEventListener('mousemove', (e) => {
          if (!isHovered) return;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
          isHovered = false;
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
      });
    },

    // 4. Smooth Telemetry Counter Animation
    initNumberCounters() {
      // Handled via IntersectionObserver
    },

    animateCounter(el) {
      el.classList.add('has-counted');
      const target = parseInt(el.getAttribute('data-count-to'), 10);
      if (isNaN(target)) return;

      const duration = 1400;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };

      requestAnimationFrame(update);
    },

    // 5. Subtle Parallax Effect on Editorial Images
    initParallaxImages() {
      const parallaxImages = document.querySelectorAll('.food-editorial-img, .hero-ambient-video');
      if (!parallaxImages.length) return;

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            parallaxImages.forEach(img => {
              const speed = 0.04;
              img.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    // 6. Smooth Scroll to In-Page Anchors
    initSmoothScrollLinks() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#section-"], a[href^="#homepage-"]');
        if (!link) return;
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    },

    refresh() {
      setTimeout(() => {
        this.observeElements();
        this.init3DTilt();
      }, 40);
    }
  };

  window.MotionEngine = MotionEngine;

  document.addEventListener('DOMContentLoaded', () => {
    MotionEngine.init();
  });
})();

