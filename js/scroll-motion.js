/**
 * HELEVATE.FIT — ADVANCED SCROLL MOTION & SCIENTIFIC GRAPHICS ENGINE
 * Powered by GSAP + ScrollTrigger with native IntersectionObserver fallback.
 * 
 * Strict Brand Guidelines:
 * - Brand Palette: #0E3A5D (Navy Background), #153255 (Navy Text), #DDF1EF (Pale Mint), #072238 (Midnight Navy), #FFFFFF (White)
 * - Typography: Quicksand
 * - Aesthetic: Premium + Scientific + Calm + Modern + Luxury Health Technology
 * - 60fps GPU accelerated, zero layout shifts, smooth scrub & parallax
 */

(function() {
  'use strict';

  const ScrollMotionEngine = {
    isGsapAvailable: false,
    triggers: [],
    reducedMotion: false,

    init() {
      this.checkReducedMotion();
      this.isGsapAvailable = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
      
      if (this.isGsapAvailable) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.ScrollTrigger.config({ limitCallbacks: true, syncInterval: 100 });
      }

      this.initHeaderScroll();
      this.initHeroParallax();
      this.initTextBlurReveals();
      this.initCardMaskReveals();
      this.initBackgroundParallax();
      this.initHowItWorksProgressTracker();
      this.initAssessmentScanningEffects();
      this.initMicroInteractions();
    },

    checkReducedMotion() {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    // ------------------------------------------------------------------------
    // 1. HEADER GLASSMORPHIC SCROLL TRANSITION
    // ------------------------------------------------------------------------
    initHeaderScroll() {
      const header = document.querySelector('.site-header');
      if (!header) return;

      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateHeader = () => {
        const scrollY = window.scrollY;
        if (scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      }, { passive: true });

      updateHeader();
    },

    // ------------------------------------------------------------------------
    // 2. HERO PARALLAX & CONTINUOUS SCENE TRANSITION
    // ------------------------------------------------------------------------
    initHeroParallax() {
      if (this.reducedMotion) return;
      const heroSection = document.getElementById('hero-section');
      const heroBgVideo = document.getElementById('hero-bg-video');
      const heroVisualCard = document.querySelector('.hero-visual-card');

      if (!heroSection) return;

      if (this.isGsapAvailable && heroBgVideo) {
        window.gsap.to(heroBgVideo, {
          scale: 1.12,
          yPercent: 15,
          opacity: 0.75,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });

        if (heroVisualCard) {
          window.gsap.to(heroVisualCard, {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2
            }
          });
        }
      }
    },

    // ------------------------------------------------------------------------
    // 3. TEXT BLUR-TO-SHARP & TRANSLATE REVEALS
    // ------------------------------------------------------------------------
    initTextBlurReveals() {
      if (this.reducedMotion) {
        document.querySelectorAll('.reveal-text, .reveal-on-scroll').forEach(el => {
          el.classList.add('is-revealed');
        });
        return;
      }

      const textElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .badge, .reveal-text, .hero-flow-banner, .transformation-overlay-text'
      );

      if (this.isGsapAvailable) {
        textElements.forEach(el => {
          if (el.dataset.gsapBound) return;
          el.dataset.gsapBound = 'true';

          window.gsap.fromTo(el, 
            {
              opacity: 0,
              y: 36,
              filter: 'blur(8px)'
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      } else {
        // Fallback with IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        textElements.forEach(el => observer.observe(el));
      }
    },

    // ------------------------------------------------------------------------
    // 4. IMAGE & CARD MASK REVEALS (Scale 0.94 -> 1 + Stagger)
    // ------------------------------------------------------------------------
    initCardMaskReveals() {
      if (this.reducedMotion) return;

      const cardGroups = [
        { selector: '.assessments-grid-4 .assessment-card', stagger: 0.12 },
        { selector: '.programs-grid-4 .program-card', stagger: 0.14 },
        { selector: '.pricing-grid-3 .pricing-card', stagger: 0.12 },
        { selector: '.testimonials-grid-3 .testimonial-card', stagger: 0.12 },
        { selector: '.communities-grid .community-card', stagger: 0.1 },
        { selector: '.team-grid-4 .team-card', stagger: 0.12 },
        { selector: '.insights-grid-4 .insight-card', stagger: 0.1 },
        { selector: '.problem-card, .solution-card-main', stagger: 0.15 },
        { selector: '.trust-bar-item', stagger: 0.08 },
        { selector: '.assessment-step-card', stagger: 0.1 },
        { selector: '.solution-pill-card', stagger: 0.08 }
      ];

      if (this.isGsapAvailable) {
        cardGroups.forEach(group => {
          const cards = document.querySelectorAll(group.selector);
          if (cards.length === 0) return;

          cards.forEach(card => {
            if (card.dataset.gsapCardBound) return;
            card.dataset.gsapCardBound = 'true';

            window.gsap.fromTo(card,
              {
                opacity: 0,
                y: 42,
                scale: 0.94,
                filter: 'blur(6px)'
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.85,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none'
                }
              }
            );
          });
        });
      }
    },

    // ------------------------------------------------------------------------
    // 5. PARALLAX FLOATING SCIENTIFIC TELEMETRY ELEMENTS
    // ------------------------------------------------------------------------
    initBackgroundParallax() {
      if (this.reducedMotion) return;

      const parallaxFast = document.querySelectorAll('.parallax-layer-fast');
      const parallaxMed = document.querySelectorAll('.parallax-layer-med');
      const parallaxSlow = document.querySelectorAll('.parallax-layer-slow');

      if (this.isGsapAvailable) {
        parallaxFast.forEach(el => {
          window.gsap.to(el, {
            y: -70,
            rotation: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5
            }
          });
        });

        parallaxMed.forEach(el => {
          window.gsap.to(el, {
            y: -40,
            rotation: -5,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2
            }
          });
        });

        parallaxSlow.forEach(el => {
          window.gsap.to(el, {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2.5
            }
          });
        });
      }
    },

    // ------------------------------------------------------------------------
    // 6. HOW IT WORKS DYNAMIC PROGRESS TRACKER LINE
    // ------------------------------------------------------------------------
    initHowItWorksProgressTracker() {
      const timelineContainer = document.getElementById('how-it-works-timeline-container');
      if (!timelineContainer) return;

      // Check if progress tracker line already exists
      let trackerLine = timelineContainer.querySelector('.timeline-tracker-line');
      if (!trackerLine) {
        trackerLine = document.createElement('div');
        trackerLine.className = 'timeline-tracker-line';
        trackerLine.innerHTML = '<div class="timeline-progress-fill"></div>';
        timelineContainer.prepend(trackerLine);
      }

      const progressFill = trackerLine.querySelector('.timeline-progress-fill');
      const stepRows = timelineContainer.querySelectorAll('.timeline-step-row');

      if (this.isGsapAvailable && progressFill && stepRows.length > 0) {
        window.gsap.fromTo(progressFill, 
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineContainer,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.8
            }
          }
        );

        stepRows.forEach((row, idx) => {
          window.gsap.fromTo(row,
            {
              opacity: 0.3,
              x: -30
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 75%',
                end: 'bottom 40%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        });
      }
    },

    // ------------------------------------------------------------------------
    // 7. ASSESSMENT CARDS SCANNING BEAM EFFECT
    // ------------------------------------------------------------------------
    initAssessmentScanningEffects() {
      if (this.reducedMotion) return;

      const assessmentCards = document.querySelectorAll('.assessment-card');
      assessmentCards.forEach(card => {
        if (card.querySelector('.card-scan-beam')) return;
        const beam = document.createElement('div');
        beam.className = 'card-scan-beam';
        card.appendChild(beam);
      });
    },

    // ------------------------------------------------------------------------
    // 8. ELEGANT MICRO-INTERACTIONS (Cards Tilt & Button Magnetic Glow)
    // ------------------------------------------------------------------------
    initMicroInteractions() {
      if (this.reducedMotion) return;

      // Interactive 3D Subtle Tilt on Hero Cards & Clean Cards
      const tiltCards = document.querySelectorAll('.hero-visual-card, .dexa-visualizer-container, .card-navy');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 4;
          const rotateY = (x / rect.width) * 4;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
          card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
          card.style.transition = 'none';
        });
      });

      // Button Magnetic Glow Pulse
      const buttons = document.querySelectorAll('.btn-primary, .btn-secondary-glass');
      buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          btn.style.setProperty('--mouse-x', `${x}px`);
          btn.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    },

    // ------------------------------------------------------------------------
    // 9. REFRESH ON CLIENT-SIDE ROUTE TRANSITIONS
    // ------------------------------------------------------------------------
    refresh() {
      setTimeout(() => {
        if (this.isGsapAvailable && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
        this.initTextBlurReveals();
        this.initCardMaskReveals();
        this.initBackgroundParallax();
        this.initHowItWorksProgressTracker();
        this.initAssessmentScanningEffects();
        this.initMicroInteractions();
      }, 120);
    }
  };

  // Expose globally
  window.ScrollMotionEngine = ScrollMotionEngine;

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScrollMotionEngine.init());
  } else {
    ScrollMotionEngine.init();
  }
})();
