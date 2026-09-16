/**
 * HELEVATE.FIT — FULL-PAGE MODULAR ANIMATION & MOTION GRAPHICS ENGINE
 * 
 * Comprehensive Modular Architecture:
 * 1. Multi-Directional Scroll Reveals (Left, Right, Top, Bottom, Scale-In, Scale-Down)
 * 2. Section Movement & Transitions (Scale panels: 0.95 → 1.0 → 0.98, Perspective tilt: -1.5° → 0° → 1.5°)
 * 3. Coordinated Card Composition Rotations (Scroll-driven subtle rotation scrub 0° → 8° → -6° → 0°)
 * 4. Concentric Bi-Directional Scroll Rings Engine (Scroll Down = Clockwise, Scroll Up = Counter-Clockwise)
 * 5. Multi-Node Orbital Ecosystem System (6 nodes orbiting central silhouette with SVG dynamic connectors)
 * 6. Multi-Speed Parallax Depth Planes (Background slow, middle telemetry, foreground interactive)
 * 7. Horizontal Parallax Translation (Vertical scroll drives horizontal motion on secondary bands)
 * 8. Image Settle Zoom & Clip-Path Mask Reveals
 * 9. Physics-Based Magnetic Button Attraction with Spring Easing
 * 10. Desktop Ambient Cursor Spotlight Glow
 * 11. Tagline Text Morphing (ASSESS → UNDERSTAND → OPTIMIZE → ELEVATE)
 * 12. Circular Metric Donut Progress Rings & Count-Up Rollups
 * 13. Interactive Health & Performance Data Lab Spline Engine
 * 14. Performance Complete CTA Convergence Stage
 * 15. Micro-Interactions (3D Card Perspective Tilt & Magnetic Button Glow)
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
    orbitAnimId: null,
    cursorSpotlightEl: null,
    morphIntervalId: null,
    lastScrollY: 0,
    scrollVelocity: 0,

    init() {
      this.checkReducedMotion();
      this.isGsapAvailable = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
      
      if (this.isGsapAvailable) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.ScrollTrigger.config({ limitCallbacks: true, syncInterval: 60 });
      }

      this.initHeaderScroll();
      this.initScrollProgressWidgets();
      this.initHeroParallax();
      this.initConcentricRings();
      this.initOrbitalEcosystem();
      this.initSectionTransitions();
      this.initCardCompositionEngine();
      this.initParallaxDepthEngine();
      this.initImageRevealEngine();
      this.initMagneticButtons();
      this.initCursorSpotlight();
      this.initTextMorphing();
      this.initBiDirectionalScrollEngine();
      this.initSignaturePerformancePulse();
      this.initHealthDataLab();
      this.initDataInsightPipeline();
      this.initHowItWorksProgressTracker();
      this.initAssessmentScanningEffects();
      this.initMicroInteractions();
      this.initCtaConvergence();
      this.initSunLightTracking();
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
      let progressBar = document.getElementById('scroll-progress-line');
      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-line';
        progressBar.className = 'scroll-progress-line';
        document.body.appendChild(progressBar);
      }

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

        if (progressBar) {
          progressBar.style.width = `${progress * 100}%`;
        }

        if (circleFill) {
          const offset = circumference - (progress * circumference);
          circleFill.style.strokeDashoffset = offset;
        }

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
    // 3. HERO PARALLAX & MULTI-LAYER DEPTH
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
    // 4. CONCENTRIC ROTATING BI-DIRECTIONAL SCROLL RINGS ENGINE
    // (Outer rotates clockwise on scroll down / counter on up, Middle counter-rotates)
    // ------------------------------------------------------------------------
    initConcentricRings() {
      if (this.reducedMotion) return;

      const outerRing = document.getElementById('hero-outer-ring');
      const middleRing = document.getElementById('hero-middle-ring');
      const innerRing = document.getElementById('hero-inner-ring');

      if (!outerRing && !middleRing) return;

      let currentScrollY = window.scrollY;
      let targetScrollY = window.scrollY;

      const updateRings = (now) => {
        targetScrollY = window.scrollY;
        currentScrollY += (targetScrollY - currentScrollY) * 0.12;
        
        const delta = targetScrollY - currentScrollY;
        this.scrollVelocity = Math.min(Math.abs(delta) * 0.05, 1.5);

        const outerAngle = currentScrollY * 0.18;
        const middleAngle = -currentScrollY * 0.28;

        if (outerRing) {
          outerRing.style.transform = `rotate(${outerAngle}deg)`;
        }
        if (middleRing) {
          middleRing.style.transform = `rotate(${middleAngle}deg)`;
        }
        if (innerRing) {
          const innerScale = 1 + Math.sin(now * 0.003) * 0.04 + (this.scrollVelocity * 0.03);
          innerRing.style.transform = `scale(${innerScale})`;
        }

        requestAnimationFrame(updateRings);
      };

      requestAnimationFrame(updateRings);
    },

    // ------------------------------------------------------------------------
    // 5. MULTI-NODE ORBITAL ECOSYSTEM SYSTEM
    // (6 nodes orbiting central silhouette with dynamic SVG connector vectors)
    // ------------------------------------------------------------------------
    initOrbitalEcosystem() {
      const stage = document.getElementById('hero-orbit-stage');
      const ecosystem = document.getElementById('hero-orbit-ecosystem');
      const connectorsSvg = document.getElementById('hero-orbital-connectors');

      if (!stage || !ecosystem) return;

      const nodes = Array.from(ecosystem.querySelectorAll('.orbiting-node'));
      if (!nodes.length) return;

      let baseAngle = 0;
      let isPaused = false;
      let hoveredIndex = -1;
      let lastScrollPos = window.scrollY;

      const onScrollScrub = () => {
        const curY = window.scrollY;
        const deltaY = curY - lastScrollPos;
        lastScrollPos = curY;
        baseAngle += deltaY * 0.0022;
      };

      window.addEventListener('scroll', onScrollScrub, { passive: true });

      nodes.forEach((node, idx) => {
        node.addEventListener('mouseenter', () => {
          isPaused = true;
          hoveredIndex = idx;
          node.classList.add('is-focused');
          updateConnectorLines();
        });

        node.addEventListener('mouseleave', () => {
          isPaused = false;
          hoveredIndex = -1;
          node.classList.remove('is-focused');
          updateConnectorLines();
        });
      });

      const updateConnectorLines = () => {
        if (!connectorsSvg || !stage) return;
        const rect = stage.getBoundingClientRect();
        const width = rect.width || 420;
        const height = rect.height || 420;
        const cx = width / 2;
        const cy = height / 2;

        let svgHtml = '';
        nodes.forEach((node, idx) => {
          const nx = parseFloat(node.dataset.posX) || cx;
          const ny = parseFloat(node.dataset.posY) || cy;
          const isActive = (idx === hoveredIndex);

          svgHtml += `
            <line 
              x1="${cx}" y1="${cy}" 
              x2="${nx}" y2="${ny}" 
              class="orbital-connector-line ${isActive ? 'active' : ''}" 
              stroke-opacity="${isActive ? '0.9' : '0.22'}"
            />
          `;
        });
        connectorsSvg.innerHTML = svgHtml;
      };

      const animateOrbit = () => {
        if (!this.reducedMotion && !isPaused) {
          baseAngle += 0.0042;
        }

        const rect = stage.getBoundingClientRect();
        const width = rect.width || 420;
        const height = rect.height || 420;
        const cx = width / 2;
        const cy = height / 2;

        const rx = width * 0.40;
        const ry = height * 0.38;

        const totalNodes = nodes.length;
        const step = (2 * Math.PI) / totalNodes;

        nodes.forEach((node, i) => {
          const angle = baseAngle + (i * step);
          const x = cx + rx * Math.cos(angle);
          const y = cy + ry * Math.sin(angle);

          node.dataset.posX = x;
          node.dataset.posY = y;
          node.style.left = `${x}px`;
          node.style.top = `${y}px`;
        });

        updateConnectorLines();

        this.orbitAnimId = requestAnimationFrame(animateOrbit);
      };

      if (this.orbitAnimId) cancelAnimationFrame(this.orbitAnimId);
      this.orbitAnimId = requestAnimationFrame(animateOrbit);
    },

    // ------------------------------------------------------------------------
    // 6. SECTION SCALE & EDITORIAL PERSPECTIVE PANELS
    // ------------------------------------------------------------------------
    initSectionTransitions() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const scalePanels = activeView.querySelectorAll('.section-scale-panel');
      const perspectivePanels = activeView.querySelectorAll('.section-perspective-panel');

      if (this.isGsapAvailable) {
        scalePanels.forEach(panel => {
          window.gsap.fromTo(panel,
            { scale: 0.95, opacity: 0.88 },
            {
              scale: 1,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 1
              }
            }
          );
        });

        perspectivePanels.forEach(panel => {
          const innerContainer = panel.querySelector('.container') || panel;
          window.gsap.fromTo(innerContainer,
            { rotateX: 2.2, transformOrigin: 'center top' },
            {
              rotateX: 0,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 90%',
                end: 'top 40%',
                scrub: 1.2
              }
            }
          );
        });
      }
    },

    // ------------------------------------------------------------------------
    // 7. COORDINDATED CARD COMPOSITION & SCROLL ROTATION
    // ------------------------------------------------------------------------
    initCardCompositionEngine() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const rotatingCards = activeView.querySelectorAll('.card-composition-rotate');

      if (!rotatingCards.length) return;

      let lastY = window.scrollY;
      const updateCardRotations = () => {
        const curY = window.scrollY;
        const delta = Math.min(Math.max((curY - lastY) * 0.08, -6), 6);
        lastY = curY;

        rotatingCards.forEach((card, idx) => {
          const factor = (idx % 2 === 0) ? 1 : -1;
          const rot = delta * factor * 0.75;
          card.style.transform = `rotate(${rot}deg)`;
        });
      };

      window.addEventListener('scroll', updateCardRotations, { passive: true });
    },

    // ------------------------------------------------------------------------
    // 8. MULTI-SPEED PARALLAX DEPTH & HORIZONTAL TRANSLATION
    // ------------------------------------------------------------------------
    initParallaxDepthEngine() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const parallaxFast = activeView.querySelectorAll('.parallax-layer-fast');
      const parallaxMed = activeView.querySelectorAll('.parallax-layer-med');
      const parallaxSlow = activeView.querySelectorAll('.parallax-layer-slow');
      const horizontalElements = activeView.querySelectorAll('.parallax-horizontal');

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

        horizontalElements.forEach(el => {
          window.gsap.fromTo(el,
            { x: -30 },
            {
              x: 30,
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
              }
            }
          );
        });
      }
    },

    // ------------------------------------------------------------------------
    // 9. IMAGE REVEAL MASKS & SETTLE ZOOM
    // ------------------------------------------------------------------------
    initImageRevealEngine() {
      const activeView = document.querySelector('.app-view.active') || document;
      const images = activeView.querySelectorAll('.image-reveal-clip');
      if (!images.length) return;

      const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            entry.target.classList.remove('is-revealed');
          }
        });
      }, { threshold: 0.15 });

      images.forEach(img => imgObserver.observe(img));
    },

    // ------------------------------------------------------------------------
    // 10. PHYSICS-BASED MAGNETIC BUTTON ATTRACTION
    // ------------------------------------------------------------------------
    initMagneticButtons() {
      if (this.reducedMotion) return;

      const isTouch = window.matchMedia('(hover: none)').matches;
      if (isTouch) return;

      const buttons = document.querySelectorAll('.btn-magnetic, .btn-primary, .btn-secondary-glass, .btn-toggle-testimonials, .pricing-card-cta');

      buttons.forEach(btn => {
        if (btn.dataset.magneticBound === 'true') return;
        btn.dataset.magneticBound = 'true';

        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const btnCenterX = rect.left + rect.width / 2;
          const btnCenterY = rect.top + rect.height / 2;

          const dx = e.clientX - btnCenterX;
          const dy = e.clientY - btnCenterY;

          const strength = 0.26;
          btn.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate3d(0px, 0px, 0) scale(1)';
        });
      });
    },

    // ------------------------------------------------------------------------
    // 11. DESKTOP AMBIENT CURSOR SPOTLIGHT GLOW
    // ------------------------------------------------------------------------
    initCursorSpotlight() {
      if (this.reducedMotion) return;

      const isDesktop = window.matchMedia('(pointer: fine)').matches;
      if (!isDesktop) return;

      let spotlight = document.querySelector('.cursor-spotlight-glow');
      if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.className = 'cursor-spotlight-glow';
        document.body.appendChild(spotlight);
      }
      this.cursorSpotlightEl = spotlight;

      let mouseX = -500;
      let mouseY = -500;
      let curX = -500;
      let curY = -500;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.classList.add('cursor-active');
      }, { passive: true });

      window.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
      });

      const updateCursor = () => {
        curX += (mouseX - curX) * 0.14;
        curY += (mouseY - curY) * 0.14;

        if (spotlight) {
          spotlight.style.left = `${curX}px`;
          spotlight.style.top = `${curY}px`;
        }

        requestAnimationFrame(updateCursor);
      };

      requestAnimationFrame(updateCursor);
    },

    // ------------------------------------------------------------------------
    // 12. HERO TAGLINE TEXT MORPHING
    // ------------------------------------------------------------------------
    initTextMorphing() {
      const target = document.getElementById('hero-tagline-morph');
      if (!target) return;

      const phrases = ['ASSESS', 'UNDERSTAND', 'OPTIMIZE', 'ELEVATE'];
      let phraseIdx = 0;

      if (this.morphIntervalId) clearInterval(this.morphIntervalId);

      this.morphIntervalId = setInterval(() => {
        target.classList.add('morph-out');
        target.classList.remove('morph-in');

        setTimeout(() => {
          phraseIdx = (phraseIdx + 1) % phrases.length;
          target.textContent = phrases[phraseIdx];
          target.classList.remove('morph-out');
          target.classList.add('morph-in');
        }, 360);
      }, 2900);
    },

    // ------------------------------------------------------------------------
    // 13. CONTINUOUS BI-DIRECTIONAL SCROLL & REVEAL ENGINE
    // ------------------------------------------------------------------------
    initBiDirectionalScrollEngine() {
      if (this.reducedMotion) {
        document.querySelectorAll(
          '.reveal-on-scroll, .reveal-text, .reveal-blur, .reveal-card, .reveal-from-left, .reveal-from-right, .reveal-from-top, .reveal-from-bottom, .reveal-scale-in, .reveal-scale-down, .card-clean, .card-navy, .assessment-card, .program-card, .pricing-card, .community-card, .testimonial-card, .team-card, .insight-card, .problem-card, .solution-card-main'
        ).forEach(el => el.classList.add('is-revealed', 'revealed'));
        return;
      }

      if (this.mainObserver) {
        this.mainObserver.disconnect();
      }

      this.mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('is-revealed', 'revealed');
          } else {
            target.classList.remove('is-revealed', 'revealed');
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '10px 0px -25px 0px'
      });

      const revealSelectors = [
        '.reveal-on-scroll',
        '.reveal-text',
        '.reveal-blur',
        '.reveal-card',
        '.reveal-from-left',
        '.reveal-from-right',
        '.reveal-from-top',
        '.reveal-from-bottom',
        '.reveal-scale-in',
        '.reveal-scale-down',
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
        '.transformation-overlay-text',
        '.global-cta-band'
      ];

      const activeView = document.querySelector('.app-view.active') || document;
      const elements = activeView.querySelectorAll(revealSelectors.join(', '));
      
      const vh = window.innerHeight || document.documentElement.clientHeight;
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.95 && rect.bottom > 0) {
          el.classList.add('is-revealed', 'revealed');
        } else {
          el.classList.remove('is-revealed', 'revealed');
        }
        this.mainObserver.observe(el);
      });

      this.initCircularStatRings();
      this.initCounterRollups();
    },

    // ------------------------------------------------------------------------
    // 14. CIRCULAR METRIC STAT DONUT PROGRESS RINGS
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
    // 15. METRIC NUMBER ROLLUPS
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
    // 16. HOW IT WORKS DYNAMIC PROGRESS TRACKER
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
    // 17. ASSESSMENT CARDS SCANNING BEAM EFFECT
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
    // 18. ELEGANT MICRO-INTERACTIONS (Cards Tilt, Spotlight & Button Glow)
    // ------------------------------------------------------------------------
    initMicroInteractions() {
      if (this.reducedMotion) return;

      const activeView = document.querySelector('.app-view.active') || document;
      const tiltCards = activeView.querySelectorAll('.spotlight-card, .hero-visual-card, .dexa-visualizer-container, .card-navy, .circle-stat-card, .lab-chart-card');
      
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
          
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${mouseX}px`);
          card.style.setProperty('--mouse-y', `${mouseY}px`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
          card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
          card.style.transition = 'none';
        });
      });

      const buttons = activeView.querySelectorAll('.btn-primary, .btn-secondary-glass, .btn-toggle-testimonials, .pricing-card-cta');
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
    // 19. SIGNATURE PERFORMANCE PULSE ENGINE
    // ------------------------------------------------------------------------
    initSignaturePerformancePulse() {
      const stage = document.getElementById('pulse-canvas-stage');
      const mainPath = document.getElementById('pulse-main-path');
      const glowPath = document.getElementById('pulse-glow-path');
      const areaPath = document.getElementById('pulse-area-path');
      const nodes = document.querySelectorAll('.pulse-telemetry-node');
      const stageItems = document.querySelectorAll('.pulse-stage-item');

      if (!stage || !mainPath) return;

      let mouseX = 500;
      let mouseY = 160;
      let isHovering = false;
      let animFrameId = null;
      let scrollProgress = 0;

      const updateScrollProgress = () => {
        const rect = stage.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        if (rect.bottom > 0 && rect.top < vh) {
          const totalDistance = vh + rect.height;
          const currentPos = vh - rect.top;
          scrollProgress = Math.min(Math.max(currentPos / totalDistance, 0), 1);
        }
      };

      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      updateScrollProgress();

      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 1000;
        mouseY = ((e.clientY - rect.top) / rect.height) * 320;
        isHovering = true;
      });

      stage.addEventListener('mouseleave', () => {
        isHovering = false;
      });

      let time = 0;
      const animateWave = () => {
        if (!this.reducedMotion) {
          time += 0.025;
          const baselineY = 160;
          const waveAmp = 40 + Math.sin(time * 0.8) * 12 + scrollProgress * 25;
          
          const p1x = 150, p1y = baselineY - Math.sin(time + 1) * waveAmp - (isHovering ? (mouseY - baselineY) * 0.15 : 0);
          const p2x = 250, p2y = baselineY + Math.cos(time + 2) * (waveAmp * 0.8);
          const p3x = 500, p3y = baselineY - Math.sin(time + 3) * (waveAmp * 1.3) + (scrollProgress * 20);
          const p4x = 750, p4y = baselineY + Math.cos(time + 4) * (waveAmp * 1.1);
          const p5x = 1000, p5y = baselineY - Math.sin(time + 5) * (waveAmp * 0.9);

          const dCurve = `M 0 ${baselineY} Q ${p1x} ${p1y}, ${p2x} ${p2y} T ${p3x} ${p3y} T ${p4x} ${p4y} T ${p5x} ${p5y}`;
          const dArea = `${dCurve} L 1000 320 L 0 320 Z`;

          mainPath.setAttribute('d', dCurve);
          if (glowPath) glowPath.setAttribute('d', dCurve);
          if (areaPath) areaPath.setAttribute('d', dArea);
        }

        animFrameId = requestAnimationFrame(animateWave);
      };

      if (animFrameId) cancelAnimationFrame(animFrameId);
      animateWave();

      nodes.forEach((node, idx) => {
        node.addEventListener('mouseenter', () => {
          stageItems.forEach((item, sIdx) => {
            item.classList.toggle('active', sIdx === idx);
          });
        });

        node.addEventListener('click', (e) => {
          e.stopPropagation();
          nodes.forEach(n => n.classList.remove('is-active'));
          node.classList.add('is-active');
          stageItems.forEach((item, sIdx) => {
            item.classList.toggle('active', sIdx === idx);
          });
        });
      });

      stageItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
          stageItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          nodes.forEach((n, nIdx) => {
            n.classList.toggle('is-active', nIdx === idx);
          });
        });
      });
    },

    // ------------------------------------------------------------------------
    // 20. INTERACTIVE HEALTH & PERFORMANCE DATA LAB ENGINE
    // ------------------------------------------------------------------------
    initHealthDataLab() {
      const tabs = document.querySelectorAll('.lab-tab-btn');
      const titleEl = document.getElementById('lab-chart-title');
      const subtitleEl = document.getElementById('lab-chart-subtitle');
      const kpiEl = document.getElementById('lab-chart-kpi');
      const chartPath = document.getElementById('lab-chart-path');
      const chartFill = document.getElementById('lab-chart-fill');
      const dotsGroup = document.getElementById('lab-chart-dots');

      if (!tabs.length || !chartPath) return;

      const labData = {
        metabolic: {
          title: "Visceral Fat (VAT) Mobilization Curve",
          subtitle: "Objective 90-day progress timeline across quarterly DEXA scans",
          kpi: "-36.4%",
          path: "M 0 140 Q 120 120, 250 80 T 500 35",
          fill: "M 0 140 Q 120 120, 250 80 T 500 35 L 500 180 L 0 180 Z",
          dots: [[0, 140], [125, 115], [250, 80], [375, 55], [500, 35]],
          metrics: [
            { title: "Visceral Adipose Tissue", desc: "Inflammatory organ fat reduction", val: "-36%", offset: 35 },
            { title: "HOMA-IR Insulin Index", desc: "Fasting insulin & glucose normalization", val: "-48%", offset: 22 },
            { title: "Lean Skeletal Mass", desc: "Pure functional muscle hypertrophy", val: "+3.8kg", offset: 15 }
          ]
        },
        strength: {
          title: "Force-Velocity & Progressive Overload Curve",
          subtitle: "Biomechanical output tracking across compound resistance phases",
          kpi: "+45.2%",
          path: "M 0 155 Q 130 115, 260 70 T 500 25",
          fill: "M 0 155 Q 130 115, 260 70 T 500 25 L 500 180 L 0 180 Z",
          dots: [[0, 155], [130, 115], [260, 70], [380, 45], [500, 25]],
          metrics: [
            { title: "Peak 1RM Strength", desc: "Compound multi-joint progressive load", val: "+45%", offset: 28 },
            { title: "Hip & Joint ROM", desc: "Biomechanical mobility and alignment", val: "Full ROM", offset: 10 },
            { title: "Power Velocity", desc: "Explosive movement & neuromuscular firing", val: "+32%", offset: 42 }
          ]
        },
        recovery: {
          title: "Autonomic HRV & Parasympathetic Recovery",
          subtitle: "Heart rate variability & central nervous system restoration",
          kpi: "+48.0%",
          path: "M 0 135 Q 110 95, 230 110 T 500 20",
          fill: "M 0 135 Q 110 95, 230 110 T 500 20 L 500 180 L 0 180 Z",
          dots: [[0, 135], [115, 95], [230, 110], [365, 60], [500, 20]],
          metrics: [
            { title: "Heart Rate Variability (HRV)", desc: "Autonomic balance & stress tolerance", val: "+48%", offset: 20 },
            { title: "Cardio VO2 Max", desc: "Aerobic capacity & mitochondrial density", val: "+22%", offset: 46 },
            { title: "Resting Heart Rate", desc: "Cardiovascular efficiency in clubhouse", val: "58 bpm", offset: 12 }
          ]
        }
      };

      const updateCategory = (catKey) => {
        const data = labData[catKey];
        if (!data) return;

        if (titleEl) titleEl.textContent = data.title;
        if (subtitleEl) subtitleEl.textContent = data.subtitle;
        if (kpiEl) kpiEl.textContent = data.kpi;

        if (chartPath) {
          chartPath.style.opacity = '0';
          setTimeout(() => {
            chartPath.setAttribute('d', data.path);
            chartPath.style.opacity = '1';
          }, 150);
        }

        if (chartFill) {
          chartFill.style.opacity = '0';
          setTimeout(() => {
            chartFill.setAttribute('d', data.fill);
            chartFill.style.opacity = '0.25';
          }, 150);
        }

        if (dotsGroup) {
          dotsGroup.innerHTML = data.dots.map(pt => `
            <circle cx="${pt[0]}" cy="${pt[1]}" r="5"></circle>
          `).join('');
        }

        data.metrics.forEach((m, idx) => {
          const num = idx + 1;
          const mTitle = document.getElementById(`lab-metric-${num}-title`);
          const mDesc = document.getElementById(`lab-metric-${num}-desc`);
          const mVal = document.getElementById(`lab-metric-${num}-val`);
          const mGauge = document.getElementById(`lab-gauge-${num}`);

          if (mTitle) mTitle.textContent = m.title;
          if (mDesc) mDesc.textContent = m.desc;
          if (mVal) mVal.textContent = m.val;
          if (mGauge) mGauge.style.strokeDashoffset = m.offset;
        });
      };

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const cat = tab.getAttribute('data-category');
          updateCategory(cat);
        });
      });
    },

    // ------------------------------------------------------------------------
    // 21. DATA → INSIGHT PIPELINE SEQUENCER
    // ------------------------------------------------------------------------
    initDataInsightPipeline() {
      const pipeline = document.querySelector('.data-insight-pipeline');
      if (!pipeline) return;

      const steps = pipeline.querySelectorAll('.pipeline-step-card');
      if (!steps.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            steps.forEach((step, idx) => {
              setTimeout(() => {
                step.classList.add('active');
              }, idx * 140);
            });
          }
        });
      }, { threshold: 0.2 });

      observer.observe(pipeline);
    },

    // ------------------------------------------------------------------------
    // 22. CTA CONVERGENCE SCROLL DYNAMICS
    // ------------------------------------------------------------------------
    initCtaConvergence() {
      const ctaBands = document.querySelectorAll('.global-cta-band');
      if (!ctaBands.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            entry.target.classList.remove('is-revealed');
          }
        });
      }, { threshold: 0.2 });

      ctaBands.forEach(band => observer.observe(band));
    },

    // ------------------------------------------------------------------------
    // 23. SUNROOOF LUXURY AMBIENT LIGHT & CURSOR VECTOR TRACKING
    // ------------------------------------------------------------------------
    initSunLightTracking() {
      if (this.reducedMotion) return;

      const interactiveCards = document.querySelectorAll(
        '.assessment-card, .program-card, .pricing-card, .who-we-are-card, .circle-stat-card, .dexa-visualizer-container, .health-data-lab, .hero-visual-card'
      );

      interactiveCards.forEach(card => {
        if (card.dataset.sunLightBound === 'true') return;
        card.dataset.sunLightBound = 'true';

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }, { passive: true });
      });

      // Background ambient light gentle drift on scroll
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollY / docHeight) : 0;
            const lightShift = Math.sin(scrollPercent * Math.PI * 2) * 20;

            document.documentElement.style.setProperty('--sun-light-shift', `${lightShift}px`);
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    // ------------------------------------------------------------------------
    // 24. REFRESH & ROUTE CHANGE LIFECYCLE
    // ------------------------------------------------------------------------
    refresh() {
      setTimeout(() => {
        if (this.isGsapAvailable && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
        if (this.updateScrollProgress) {
          this.updateScrollProgress();
        }
        this.initConcentricRings();
        this.initOrbitalEcosystem();
        this.initSectionTransitions();
        this.initCardCompositionEngine();
        this.initParallaxDepthEngine();
        this.initImageRevealEngine();
        this.initMagneticButtons();
        this.initCursorSpotlight();
        this.initTextMorphing();
        this.initBiDirectionalScrollEngine();
        this.initSignaturePerformancePulse();
        this.initHealthDataLab();
        this.initDataInsightPipeline();
        this.initHowItWorksProgressTracker();
        this.initAssessmentScanningEffects();
        this.initMicroInteractions();
        this.initCtaConvergence();
        this.initSunLightTracking();
      }, 60);
    }
  };

  // Expose globally
  window.ScrollMotionEngine = ScrollMotionEngine;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScrollMotionEngine.init());
  } else {
    ScrollMotionEngine.init();
  }
})();
