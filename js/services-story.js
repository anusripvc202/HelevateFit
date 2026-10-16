/**
 * HELEVATE.FIT — OUR SERVICES: IMAGE-LED SCROLL STORYTELLING
 * Scope: #homepage-services only.
 *
 * - Fades images in once loaded (no flash of empty frames)
 * - Reveals each service's explanation card as it enters the viewport
 * - Drives a subtle image zoom-out / scrim deepening via a CSS variable (--svc-p)
 * - Uses native scrolling only (passive listeners, rAF-throttled) — no scroll-jacking
 * - Honours prefers-reduced-motion (static images, content shown immediately)
 */
(function () {
  'use strict';

  function init() {
    var section = document.getElementById('homepage-services');
    if (!section || !section.classList.contains('svc-story')) return;

    var items = Array.prototype.slice.call(section.querySelectorAll('.svc-story-item'));
    if (!items.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    section.classList.add('js-ready');

    // 1. Image load fade-in
    section.querySelectorAll('.svc-story-img').forEach(function (img) {
      var done = function () { img.classList.add('is-loaded'); };
      if (img.complete && img.naturalWidth > 0) {
        done();
      } else {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      }
    });

    // 2. Keep the sticky offset aligned with the real header height
    var header = document.querySelector('.site-header');
    var syncTop = function () {
      if (header && header.offsetHeight) {
        section.style.setProperty('--svc-top', header.offsetHeight + 'px');
      }
    };
    syncTop();

    // 3. Reveal explanation cards on entry
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-in'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.closest('.svc-story-item').classList.add('is-in');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      items.forEach(function (item) {
        var content = item.querySelector('.svc-story-content');
        if (content) revealObserver.observe(content);
      });
    }

    // 4. Scroll-linked image transition (zoom settles + scrim deepens as card rises)
    if (reduceMotion) {
      window.addEventListener('resize', syncTop, { passive: true });
      return;
    }

    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      items.forEach(function (item) {
        var card = item.querySelector('.svc-story-card');
        var media = item.querySelector('.svc-story-media');
        if (!card || !media) return;
        var rect = card.getBoundingClientRect();
        if (rect.height === 0) return;                         // view hidden by router
        if (rect.top > vh * 1.5 || rect.bottom < -vh) return;  // far off-screen
        // 0 while the card sits at the image's lower edge, 1 once it has risen ~60% over the image
        var m = media.getBoundingClientRect();
        var bottom = Math.min(m.bottom, vh);
        var p = (bottom - rect.top - 60) / (m.height * 0.6);
        p = Math.max(0, Math.min(1, p));
        item.style.setProperty('--svc-p', p.toFixed(3));
      });
    };
    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { syncTop(); onScroll(); }, { passive: true });
    window.addEventListener('hashchange', function () { setTimeout(function () { syncTop(); update(); }, 60); });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
