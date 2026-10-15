/**
 * HELEVATE.FIT — SUNROOOF-INSPIRED PREMIUM MOTION & INTERACTION ENGINE
 * 
 * Features:
 * - Fluid scroll reveals with Sunrooof cubic-bezier easing (fade-in, slide-up, scale)
 * - Mobile-first viewport detection with zero-jank IntersectionObserver
 * - Sequential stagger cascades for card grids and metrics
 * - Desktop-exclusive magnetic 3D tilt with spring return (disabled on touch to preserve smooth scroll)
 * - Mobile 1-card swipe carousel synchronization with dynamic progress indicators
 * - Telemetry number count-up animation on viewport entry
 * - Subtle desktop-only media parallax
 * - Full prefers-reduced-motion accessibility support
 */

(function() {
  'use strict';

  const MotionEngine = {
    observer: null,
    storytellingInitialized: false,

    init() {
      // Respect accessibility settings
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        this.revealAllInstantly();
        return;
      }

      this.initHeaderScroll();
      this.initIntersectionObserver();
      this.initSmoothScrollLinks();
      this.init3DTilt();
      this.initParallaxImages();
      this.initMobileCarouselIndicators();
      this.initStorytellingScroll();
    },

    // 1. Sticky Header Glassmorphic State
    initHeaderScroll() {
      const header = document.querySelector('.site-header');
      if (!header) return;

      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.scrollY > 20) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    },

    // 2. Sunrooof Scroll Reveals via IntersectionObserver
    initIntersectionObserver() {
      if (!('IntersectionObserver' in window)) {
        this.revealAllInstantly();
        return;
      }

      const isMobile = window.innerWidth <= 768;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('is-revealed');
            
            // Trigger count-up telemetry numbers if present
            const counter = target.querySelector('[data-count-to]');
            if (counter && !counter.classList.contains('has-counted')) {
              this.animateCounter(counter);
            }
            if (target.hasAttribute('data-count-to') && !target.classList.contains('has-counted')) {
              this.animateCounter(target);
            }

            // Cascade staggered child reveals
            const staggerChildren = target.querySelectorAll('.reveal-child');
            if (staggerChildren.length) {
              staggerChildren.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('is-revealed');
                }, index * 80);
              });
            }

            this.observer.unobserve(target);
          }
        });
      }, {
        threshold: isMobile ? 0.08 : 0.12,
        rootMargin: isMobile ? '0px 0px -25px 0px' : '0px 0px -35px 0px'
      });

      this.observeElements();
    },

    observeElements() {
      if (!this.observer) return;
      
      const selector = '.app-view.active .reveal, .app-view.active .reveal-up, .app-view.active .reveal-fade, .app-view.active .reveal-scale, .reveal, .reveal-up, .reveal-fade, .reveal-scale';
      const elements = document.querySelectorAll(selector);
      const windowH = window.innerHeight;

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is already in or above the visible viewport on view load, reveal immediately
        if (rect.top < windowH - 20 && rect.bottom > 0) {
          el.classList.add('is-revealed');
          const counter = el.querySelector('[data-count-to]');
          if (counter && !counter.classList.contains('has-counted')) {
            this.animateCounter(counter);
          }
        } else if (!el.classList.contains('is-revealed')) {
          this.observer.observe(el);
        }
      });

      // Safety fallback: Ensure all content in active view becomes visible within 2.5s
      setTimeout(() => {
        document.querySelectorAll('.app-view.active .reveal:not(.is-revealed), .app-view.active .reveal-up:not(.is-revealed)').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 120) {
            el.classList.add('is-revealed');
          }
        });
      }, 2200);
    },

    revealAllInstantly() {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-fade, .reveal-scale').forEach(el => {
        el.classList.add('is-revealed');
      });
    },

    // 3. Desktop-Exclusive Magnetic 3D Tilt on Visual Cards ([data-tilt])
    init3DTilt() {
      // ONLY attach mousemove tilt on desktop devices with precise pointer (eliminates mobile scroll jitter)
      const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      if (isTouch) return;

      const cards = document.querySelectorAll('[data-tilt]');
      if (!cards.length) return;

      cards.forEach(card => {
        if (card.dataset.tiltInitialized === 'true') return;
        card.dataset.tiltInitialized = 'true';

        let isHovered = false;

        card.addEventListener('mouseenter', () => {
          isHovered = true;
          card.style.transition = 'transform 0.15s ease-out, box-shadow 0.25s ease';
        });

        card.addEventListener('mousemove', (e) => {
          if (!isHovered) return;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -4.5;
          const rotateY = ((x - centerX) / centerX) * 4.5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
          isHovered = false;
          card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
      });
    },

    // 4. Smooth Telemetry Counter Animation
    initNumberCounters() {
      // Handled automatically via IntersectionObserver
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

    // 5. Subtle Desktop-Only Parallax
    initParallaxImages() {
      if (window.innerWidth <= 768) return;

      const parallaxImages = document.querySelectorAll('.food-editorial-img, .hero-ambient-video');
      if (!parallaxImages.length) return;

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            parallaxImages.forEach(img => {
              const speed = img.classList.contains('hero-ambient-video') ? 0.08 : 0.04;
              img.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    // 6. Mobile 1-Card Swipe Carousel Indicator Sync
    initMobileCarouselIndicators() {
      if (window.innerWidth > 768) return;

      const scrollSelector = [
        '.cards-scroll-mobile',
        '.overview-pillars-grid',
        '.services-grid-4',
        '.services-grid-main',
        '.assessments-grid-4',
        '.assessments-compact-grid',
        '.what-we-assess-grid',
        '.journey-track-grid',
        '.clinical-team-grid',
        '.video-testimonials-grid',
        '.pricing-grid-3',
        '.about-pillars-grid',
        '.team-grid-4',
        '.simple-roles-grid',
        '.insights-grid',
        '.community-reviews-grid',
        '.reviews-community-grid',
        '.h75-phase-grid',
        '.journey-stages-grid',
        '.journey-flow-5',
        '.findus-societies-grid'
      ].join(', ');

      const scrollTracks = document.querySelectorAll(scrollSelector);
      scrollTracks.forEach(track => {
        // Collect visible card children
        const cards = Array.from(track.children).filter(el => 
          el.nodeType === 1 && 
          !el.classList.contains('mobile-carousel-indicator') && 
          !el.classList.contains('is-hidden')
        );
        if (cards.length <= 1) return;

        // If indicator already exists in DOM right after track, reuse or re-sync it
        let indicator = track.nextElementSibling;
        if (!indicator || !indicator.classList.contains('mobile-carousel-indicator')) {
          indicator = document.createElement('div');
          indicator.className = 'mobile-carousel-indicator';
          indicator.setAttribute('aria-hidden', 'true');
          track.parentNode.insertBefore(indicator, track.nextSibling);
        }

        // Render dot for each visible card
        indicator.innerHTML = '';
        for (let i = 0; i < cards.length; i++) {
          const dot = document.createElement('span');
          dot.className = `mobile-carousel-dot${i === 0 ? ' active' : ''}`;
          indicator.appendChild(dot);
        }

        if (track.dataset.hasSwipeListener === 'true') return;
        track.dataset.hasSwipeListener = 'true';

        let ticking = false;
        track.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              if (!cards.length || !cards[0].offsetWidth) {
                ticking = false;
                return;
              }
              const cardStep = cards[0].offsetWidth + 14;
              const activeIndex = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / cardStep)));
              const dots = indicator.querySelectorAll('.mobile-carousel-dot');
              dots.forEach((d, idx) => {
                d.classList.toggle('active', idx === activeIndex);
              });
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
      });
    },

    // 7. Smooth Scroll to In-Page Anchors
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

    // 8. Ultrahuman-Inspired Synchronized Sticky Visual + Single-Pane Content Controller
    initStorytellingScroll() {
      const section = document.getElementById('homepage-story-scroll');
      if (!section) return;

      const visualItems = section.querySelectorAll('.story-visual-item');
      const textPanes = section.querySelectorAll('.story-text-pane');
      const indicatorDots = section.querySelectorAll('.story-indicator-dot');
      const stepCounter = section.querySelector('#story-step-counter .current-step-num');
      const totalSteps = visualItems.length;

      if (!totalSteps) return;

      let currentActiveIndex = -1;

      const setActiveStep = (index) => {
        if (index === currentActiveIndex || index < 0 || index >= totalSteps) return;
        currentActiveIndex = index;

        visualItems.forEach((item, i) => {
          item.classList.toggle('is-active', i === index);
        });

        textPanes.forEach((pane, i) => {
          pane.classList.toggle('is-active', i === index);
        });

        indicatorDots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === index);
        });

        if (stepCounter) {
          stepCounter.textContent = `0${index + 1}`;
        }
      };

      indicatorDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          const rect = section.getBoundingClientRect();
          const sectionTop = window.pageYOffset + rect.top;
          const scrollDistance = section.offsetHeight - window.innerHeight;
          const targetScroll = sectionTop + (index / (totalSteps - 1)) * scrollDistance;
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        });
      });

      let ticking = false;

      const updateScrollStory = () => {
        const rect = section.getBoundingClientRect();
        const totalScroll = section.offsetHeight - window.innerHeight;
        if (totalScroll <= 0) return;

        const progress = -rect.top / totalScroll;
        const clampedProgress = Math.max(0, Math.min(0.999, progress));
        const step = Math.min(totalSteps - 1, Math.floor(clampedProgress * totalSteps));
        setActiveStep(step);
      };

      if (!this.storytellingInitialized) {
        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              updateScrollStory();
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });

        window.addEventListener('resize', () => {
          updateScrollStory();
        }, { passive: true });

        this.storytellingInitialized = true;
      }

      setActiveStep(0);
      updateScrollStory();
    },

    refresh() {
      setTimeout(() => {
        this.observeElements();
        this.init3DTilt();
        this.initMobileCarouselIndicators();
        this.initStorytellingScroll();
      }, 50);
    }
  };

  window.MotionEngine = MotionEngine;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      MotionEngine.init();
    });
  } else {
    MotionEngine.init();
  }
})();
