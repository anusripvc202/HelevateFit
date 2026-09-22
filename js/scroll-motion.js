/**
 * HELEVATE.FIT — CALM, ELEGANT INTERACTION & SCROLL ENGINE
 * 
 * Design Philosophy:
 * - Clarity > Animation
 * - Health Service Trust & Clinical Calm
 * - Subtle fade-in reveals and gentle upward transitions (10-15px max)
 * - Zero dizzying rotations, zero laser sweeps, zero heavy canvas loops
 * - Lightweight IntersectionObserver with fallback for instant rendering
 */

(function() {
  'use strict';

  const MotionEngine = {
    observer: null,

    init() {
      this.initHeaderScroll();
      this.initIntersectionObserver();
      this.initSmoothScrollLinks();
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
        // Fallback: make all elements immediately visible
        document.querySelectorAll('.reveal, .reveal-up, .reveal-fade').forEach(el => {
          el.classList.add('is-revealed');
        });
        return;
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
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
      const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-fade, .process-card, .pillar-card, .report-card-mockup');
      elements.forEach(el => {
        this.observer.observe(el);
      });
    },

    // Re-trigger observer when router swaps views
    refresh() {
      setTimeout(() => {
        this.observeElements();
      }, 50);
    },

    // 3. Smooth Scroll to In-Page Anchors
    initSmoothScrollLinks() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#section-"]');
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
    }
  };

  window.MotionEngine = MotionEngine;

  document.addEventListener('DOMContentLoaded', () => {
    MotionEngine.init();
  });
})();
