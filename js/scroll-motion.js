/**
 * HELEVATE.FIT — CONTINUOUS BI-DIRECTIONAL SCROLL MOTION ENGINE
 * 
 * Powered by GSAP ScrollTrigger + Bi-Directional IntersectionObserver.
 * Triggers animation effects EVERY TIME on both SCROLL UP and SCROLL DOWN,
 * across all 15 views and dynamically rendered pages on client-side route changes.
 * 
 * Features:
 * - Continuous Staggered Blur-to-Sharp & Translate-Up Reveals (Bi-Directional)
 * - Circular Metric Progress Donut Rings (Fills on enter, resets on leave)
 * - Metric Counter Number Rollups (Counts on enter, resets on leave)
 * - Floating Circular Scroll Progress & Back-to-Top Indicator
 * - Top Neon Cyan/Navy Progress Line
 * - Parallax Floating Scientific Telemetry Circles & Crosshairs
 * - How It Works Timeline Continuous Progress Tracker
 * - Assessment Card Scanning Beam Effects
 * - Micro-Interactions (3D Card Tilt & Magnetic Button Glow)
 */

(function() {
  'use strict';

  const ScrollMotionEngine = {
    isGsapAvailable: false,
    reducedMotion: false,
    mainObserver: null,
    ringObserver: null,
    counterObserver: null,
    scrollTriggers: [],

    init() {
      this.checkReducedMotion();
      this.isGsapAvailable = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
      
      if (this.isGsapAvailable) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.ScrollTrigger.config({ limitCallbacks: true, syncInterval: 80 });
      }

      this.initHeaderScroll();
      this.initScrollProgressWidgets();
      this.initHeroParallax();
      this.initBiDirectionalScrollEngine();
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

      const updateHeader = () => {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();
    },

    // ------------------------------------------------------------------------
    // 2. CIRCULAR SCROLL PROGRESS & TOP PROGRESS LINE WIDGETS
    // ------------------------------------------------------------------------
    initScrollProgressWidgets() {
      // 1. Top progress bar
      let progressBar = document.getElementById('scroll-progress-line');
      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-line';
        progressBar.className = 'scroll-progress-line';
        document.body.appendChild(progressBar);
      }

      // 2. Floating Circular Progress & Back-to-Top button
      let circleWidget = document.getElementById('floating-scroll-circle');
      if (!circleWidget) {
        circleWidget = document.createElement('div');
        circleWidget.id = 'floating-scroll-circle';
        circleWidget.className = 'floating-scroll-circle';
        circleWidget.setAttribute('role', 'button');
        circleWidget.setAttribute('aria-label', 'Scroll to top');
        circleWidget.title = 'Scroll to top';
        circleWidget.innerHTML = `
          <svg class="progress-ring" viewBox="0 0 60 60">
            <circle class="progress-ring-bg" cx="30" cy="30" r="25" />
            <circle class="progress-ring-fill" id="progress-circle-fill" cx="30" cy="30" r="25" />
          </svg>
          <div class="scroll-arrow-icon">↑</div>
        `;
        document.body.appendChild(circleWidget);

        circleWidget.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      const circleFill = document.getElementById('progress-circle-fill');
      const circumference = 2 * Math.PI * 25; // ~157.08

      this.updateScrollProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

        // Update top line
        if (progressBar) {
          progressBar.style.width = `${progress * 100}%`;
        }

        // Update circular fill
        if (circleFill) {
          const offset = circumference - (progress * circumference);
          circleFill.style.strokeDashoffset = offset;
        }

        // Show/hide floating circle
        if (circleWidget) {
          if (scrollTop > 120) {
            circleWidget.classList.add('visible');
          } else {
            circleWidget.classList.remove('visible');
          }
        }
      };

      window.addEventListener('scroll', this.updateScrollProgress, { passive: true });
      this.updateScrollProgress();
    },

    // ------------------------------------------------------------------------
    // 3. HERO PARALLAX & LIVE BACKGROUND
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
          yPercent: 12,
          opacity: 0.85,
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
            yPercent: -8,
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
    // 4. CONTINUOUS BI-DIRECTIONAL SCROLL & REVEAL ENGINE
    // (Triggers every time on Scroll Down AND Scroll Up across all pages)
    // ------------------------------------------------------------------------
    initBiDirectionalScrollEngine() {
      if (this.reducedMotion) {
        document.querySelectorAll(
          '.reveal-on-scroll, .reveal-text, .reveal-card, .card-clean, .card-navy, .assessment-card, .program-card, .pricing-card, .community-card, .testimonial-card, .team-card, .insight-card, .problem-card, .solution-card-main'
        ).forEach(el => el.classList.add('is-revealed', 'revealed'));
        return;
      }

      // Cleanup old observer if any
      if (this.mainObserver) {
        this.mainObserver.disconnect();
      }

      // 1. Bi-Directional IntersectionObserver for General Reveals
      this.mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // Entered viewport (from top OR bottom) -> reveal!
            target.classList.add('is-revealed', 'revealed');
          } else {
            // Left viewport (above or below) -> remove reveal class so it animates again on next entry
            target.classList.remove('is-revealed', 'revealed');
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '10px 0px -25px 0px'
      });

      // Target element selectors
      const revealSelectors = [
        '.reveal-on-scroll',
        '.reveal-text',
        '.reveal-card',
        '.section-title',
        '.section-subtitle',
        '.hero-flow-banner',
        '.problem-card',
        '.solution-card-main',
        '.trust-bar',
        '.trust-bar-item',
        '.assessment-card',
        '.program-card',
        '.pricing-card',
        '.community-card',
        '.testimonial-card',
        '.team-card',
        '.insight-card',
        '.card-clean',
        '.card-navy',
        '.circle-stat-card',
        '.solution-pill-card',
        '.assessment-step-card',
        '.transformation-overlay-text'
      ];

      // Observe all elements within the active view or document
      const activeView = document.querySelector('.app-view.active') || document;
      const elements = activeView.querySelectorAll(revealSelectors.join(', '));
      
      const vh = window.innerHeight || document.documentElement.clientHeight;
      elements.forEach(el => {
        // If element is already in the viewport on page load/route switch, reveal it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          el.classList.add('is-revealed', 'revealed');
        } else {
          el.classList.remove('is-revealed', 'revealed');
        }
        this.mainObserver.observe(el);
      });

      // 2. Circular Stat Rings & Counter Rollups
      this.initCircularStatRings();
      this.initCounterRollups();
      this.initBackgroundParallax();
    },

    // ------------------------------------------------------------------------
    // 5. CIRCULAR METRIC STAT DONUT PROGRESS RINGS
    // (Fills on enter, resets on leave, works bi-directionally)
    // ------------------------------------------------------------------------
    initCircularStatRings() {
      if (this.ringObserver) {
        this.ringObserver.disconnect();
      }

      const activeView = document.querySelector('.app-view.active') || document;
      const statRings = activeView.querySelectorAll('.circle-progress-bar');
      if (statRings.length === 0) return;

      const circumference = 2 * Math.PI * 25; // ~157.08

      this.ringObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const bar = entry.target;
          if (entry.isIntersecting) {
            const percent = parseFloat(bar.getAttribute('data-percent')) || 85;
            const targetOffset = circumference - (percent / 100 * circumference);
            bar.style.transition = 'stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1)';
            bar.style.strokeDashoffset = targetOffset;
          } else {
            // Reset when out of view so it animates again next time
            bar.style.transition = 'none';
            bar.style.strokeDashoffset = circumference;
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '10px 0px -20px 0px'
      });

      const vh = window.innerHeight || document.documentElement.clientHeight;
      statRings.forEach(bar => {
        bar.style.strokeDasharray = circumference;
        const rect = bar.getBoundingClientRect();
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          const percent = parseFloat(bar.getAttribute('data-percent')) || 85;
          bar.style.strokeDashoffset = circumference - (percent / 100 * circumference);
        } else {
          bar.style.strokeDashoffset = circumference;
        }
        this.ringObserver.observe(bar);
      });
    },

    // ------------------------------------------------------------------------
    // 6. METRIC NUMBER ROLLUPS (Bi-directional on scroll down and scroll up)
    // ------------------------------------------------------------------------
    initCounterRollups() {
      if (this.counterObserver) {
        this.counterObserver.disconnect();
      }

      const activeView = document.querySelector('.app-view.active') || document;
      const counters = activeView.querySelectorAll('.count-up-number');
      if (counters.length === 0) return;

      const animateCounter = (el) => {
        const targetVal = parseFloat(el.getAttribute('data-count')) || 0;
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const duration = 1400;
        const startTime = performance.now();

        const updateCount = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = targetVal * easeProgress;

          el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            el._countAnimId = requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${targetVal.toFixed(decimals)}${suffix}`;
          }
        };

        if (el._countAnimId) cancelAnimationFrame(el._countAnimId);
        el._countAnimId = requestAnimationFrame(updateCount);
      };

      const resetCounter = (el) => {
        if (el._countAnimId) cancelAnimationFrame(el._countAnimId);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        el.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`;
      };

      this.counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            animateCounter(el);
          } else {
            resetCounter(el);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '10px 0px -20px 0px'
      });

      const vh = window.innerHeight || document.documentElement.clientHeight;
      counters.forEach(c => {
        const rect = c.getBoundingClientRect();
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          animateCounter(c);
        } else {
          resetCounter(c);
        }
        this.counterObserver.observe(c);
      });
    },

    // ------------------------------------------------------------------------
    // 7. PARALLAX FLOATING SCIENTIFIC CIRCULAR TELEMETRY ELEMENTS
    // ------------------------------------------------------------------------
    initBackgroundParallax() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const parallaxFast = activeView.querySelectorAll('.parallax-layer-fast');
      const parallaxMed = activeView.querySelectorAll('.parallax-layer-med');
      const parallaxSlow = activeView.querySelectorAll('.parallax-layer-slow');

      if (this.isGsapAvailable) {
        parallaxFast.forEach(el => {
          window.gsap.to(el, {
            y: -45,
            rotation: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          });
        });

        parallaxMed.forEach(el => {
          window.gsap.to(el, {
            y: -28,
            rotation: -5,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8
            }
          });
        });

        parallaxSlow.forEach(el => {
          window.gsap.to(el, {
            y: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2.2
            }
          });
        });
      }
    },

    // ------------------------------------------------------------------------
    // 8. HOW IT WORKS DYNAMIC PROGRESS TRACKER (Bi-directional on scroll)
    // ------------------------------------------------------------------------
    initHowItWorksProgressTracker() {
      const timelineContainer = document.getElementById('how-it-works-timeline-container');
      if (!timelineContainer) return;

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
              start: 'top 75%',
              end: 'bottom 65%',
              scrub: 0.8
            }
          }
        );

        stepRows.forEach((row) => {
          window.gsap.fromTo(row,
            { opacity: 0.35, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 82%',
                end: 'bottom 35%',
                toggleActions: 'play reverse play reverse',
                onEnter: () => row.classList.add('active', 'is-revealed'),
                onLeave: () => row.classList.remove('active'),
                onEnterBack: () => row.classList.add('active', 'is-revealed'),
                onLeaveBack: () => row.classList.remove('active', 'is-revealed')
              }
            }
          );
        });
      } else {
        const stepObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active', 'is-revealed');
            } else {
              entry.target.classList.remove('active', 'is-revealed');
            }
          });
        }, { threshold: 0.25 });

        stepRows.forEach(row => stepObserver.observe(row));
      }
    },

    // ------------------------------------------------------------------------
    // 9. ASSESSMENT CARDS SCANNING BEAM EFFECT
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
    // 10. ELEGANT MICRO-INTERACTIONS (Cards Tilt & Button Magnetic Glow)
    // ------------------------------------------------------------------------
    initMicroInteractions() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const tiltCards = activeView.querySelectorAll('.hero-visual-card, .dexa-visualizer-container, .card-navy, .circle-stat-card');
      
      tiltCards.forEach(card => {
        if (card.dataset.tiltBound === 'true') return;
        card.dataset.tiltBound = 'true';

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 3.5;
          const rotateY = (x / rect.width) * 3.5;

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

      const buttons = activeView.querySelectorAll('.btn-primary, .btn-secondary-glass');
      buttons.forEach(btn => {
        if (btn.dataset.glowBound === 'true') return;
        btn.dataset.glowBound = 'true';

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
    // 11. REFRESH & ROUTE CHANGE LIFECYCLE
    // ------------------------------------------------------------------------
    refresh() {
      setTimeout(() => {
        if (this.isGsapAvailable && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
        if (this.updateScrollProgress) {
          this.updateScrollProgress();
        }
        this.initBiDirectionalScrollEngine();
        this.initHowItWorksProgressTracker();
        this.initAssessmentScanningEffects();
        this.initMicroInteractions();
      }, 50);
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
