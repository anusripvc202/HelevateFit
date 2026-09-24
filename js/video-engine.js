/**
 * HELEVATE.FIT — PREMIUM VIDEO & LIVE MOTION ENGINE
 * Handles cinematic video sections, lazy loading, scroll-driven multi-step storytelling,
 * card hover previews, responsive mobile fallbacks, and IntersectionObserver viewport optimization.
 * 
 * Strict Brand Guidelines:
 * - Approved Palette: #0E3A5D, #153255, #DDF1EF, #072238, #FFFFFF
 * - Non-disruptive, highly performant, zero layout shifts
 */

class PremiumVideoSection {
  constructor(options = {}) {
    this.container = options.container;
    this.videoSrc = options.videoSrc || "";
    this.posterSrc = options.posterSrc || "";
    this.title = options.title || "";
    this.subtitle = options.subtitle || "";
    this.badge = options.badge || "";
    this.aspectRatio = options.aspectRatio || "16/9";
    this.autoplay = options.autoplay !== false;
    this.loop = options.loop !== false;
    this.muted = options.muted !== false;
    this.scrim = options.scrim || "navy-deep";
    this.lazy = options.lazy !== false;
    this.className = options.className || "";
  }

  render() {
    return `
      <div class="premium-video-wrap ${this.className}" style="aspect-ratio: ${this.aspectRatio};">
        <video
          class="premium-video-element lazy-video"
          ${this.lazy ? `data-src="${this.videoSrc}"` : `src="${this.videoSrc}"`}
          poster="${this.posterSrc}"
          ${this.autoplay ? 'autoplay' : ''}
          ${this.muted ? 'muted' : ''}
          ${this.loop ? 'loop' : ''}
          playsinline
          preload="${this.lazy ? 'none' : 'metadata'}"
          aria-label="${this.title || 'Helevate human performance video'}"
        >
          <source ${this.lazy ? `data-src="${this.videoSrc}"` : `src="${this.videoSrc}"`} type="video/mp4">
        </video>
        <div class="video-scrim-overlay scrim-${this.scrim}"></div>
        ${this.badge || this.title || this.subtitle ? `
          <div class="video-caption-overlay">
            ${this.badge ? `<span class="badge badge-navy" style="margin-bottom: 8px;">${this.badge}</span>` : ''}
            ${this.title ? `<h3 class="video-caption-title">${this.title}</h3>` : ''}
            ${this.subtitle ? `<p class="video-caption-sub">${this.subtitle}</p>` : ''}
          </div>
        ` : ''}
        <button class="video-sound-toggle-btn" aria-label="Toggle video sound" title="Toggle audio">
          <span class="sound-icon-muted">🔇</span>
          <span class="sound-icon-unmuted" style="display:none;">🔊</span>
        </button>
      </div>
    `;
  }
}

const VideoEngine = {
  observer: null,
  activeVideos: new Set(),
  howItWorksStepVideos: [
    {
      step: 1,
      name: "01 ASSESS",
      title: "Precision Biological Diagnostics",
      desc: "Comprehensive blood chemistry, DEXA visceral fat mapping & gut sequencing to establish objective baseline data.",
      videoSrc: "assets/video-step1.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&auto=format&fit=crop&q=80"
    },
    {
      step: 2,
      name: "02 PERSONALISE",
      title: "Biomarker Interpretation & Protocol",
      desc: "Our clinical coaches decode your unique lipid ratios, insulin sensitivity, and posture to formulate a custom plan.",
      videoSrc: "assets/video-about.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=80"
    },
    {
      step: 3,
      name: "03 TRAIN & ACT",
      title: "1-on-1 Dedicated Clubhouse Coaching",
      desc: "Certified performance training and biomarker-led nutrition executed inside your gated community gym.",
      videoSrc: "assets/video-performance.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=80"
    },
    {
      step: 4,
      name: "04 REASSESS",
      title: "Periodic 90-Day DEXA Checkpoints",
      desc: "Re-measuring visceral fat loss, lean muscle gains, and blood lipid evolution with zero guesswork.",
      videoSrc: "assets/video-lab.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=80"
    },
    {
      step: 5,
      name: "05 EVOLVE",
      title: "Long-Term Healthspan & Longevity",
      desc: "Continuous refinement of training intensity and nutrition as your body composition evolves over time.",
      videoSrc: "assets/video-careers.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&auto=format&fit=crop&q=80"
    }
  ],

  init() {
    this.initIntersectionObserver();
    this.bindSoundToggles();
    this.bindHoverPreviews();
    this.bindHowItWorksScrollStorytelling();
    this.checkReducedMotion();
  },

  initIntersectionObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const isMobile = window.innerWidth <= 768;
    const rootMargin = isMobile ? "50px 0px" : "150px 0px";

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          // Lazy load video source
          if (video.dataset.src && !video.src) {
            video.src = video.dataset.src;
            video.load();
          }

          // Check for fallback source
          video.onerror = () => {
            if (video.dataset.fallback && video.src !== video.dataset.fallback) {
              video.src = video.dataset.fallback;
              video.load();
              video.play().catch(() => {});
            }
          };

          // Play when in viewport
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy prevented playback, keep poster image visible
            });
          }
          this.activeVideos.add(video);
        } else {
          // Pause when scrolled out of viewport to conserve CPU/battery
          if (!video.paused) {
            video.pause();
          }
          this.activeVideos.delete(video);
        }
      });
    }, {
      rootMargin,
      threshold: 0.1
    });

    // Observe all videos
    document.querySelectorAll("video.lazy-video, video.video-card-thumb-video, video.hero-bg-video, video.cinematic-video, video.inline-motion-video, video.editorial-video-element, video.hero-ambient-video, video.hero-block-video").forEach((v) => {
      this.observer.observe(v);
    });
  },

  bindSoundToggles() {
    document.querySelectorAll(".video-sound-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = btn.closest(".editorial-video-wrap, .premium-video-wrap, .hero-block, .video-showcase-container, .hero-video-bg-wrap");
        if (!wrap) return;
        const video = wrap.querySelector("video");
        if (!video) return;

        video.muted = !video.muted;
        const mutedIcon = btn.querySelector(".sound-icon-muted");
        const unmutedIcon = btn.querySelector(".sound-icon-unmuted");
        if (mutedIcon && unmutedIcon) {
          mutedIcon.style.display = video.muted ? "inline" : "none";
          unmutedIcon.style.display = video.muted ? "none" : "inline";
        }
      });
    });
  },

  bindHoverPreviews() {
    // Optional card hover video previews (Performance-friendly: only loads on pointer interaction)
    const hoverCards = document.querySelectorAll(".video-hover-card");
    hoverCards.forEach((card) => {
      const video = card.querySelector("video.hover-preview-video");
      if (!video) return;

      card.addEventListener("mouseenter", () => {
        if (video.dataset.src && !video.src) {
          video.src = video.dataset.src;
          video.load();
        }
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
      });
    });
  },

  bindHowItWorksScrollStorytelling() {
    const videoElement = document.getElementById("how-it-works-active-video");
    const titleElement = document.getElementById("how-it-works-video-title");
    const descElement = document.getElementById("how-it-works-video-desc");
    const badgeElement = document.getElementById("how-it-works-video-badge");
    const stepRows = document.querySelectorAll(".detailed-step-row, .timeline-step-row");

    if (!videoElement || stepRows.length === 0) return;

    let currentStepIndex = 0;

    const setStepVideo = (index) => {
      if (index === currentStepIndex && videoElement.src && !videoElement.paused) return;
      currentStepIndex = index;
      const data = this.howItWorksStepVideos[index] || this.howItWorksStepVideos[0];

      // Highlight active step card
      stepRows.forEach((row, i) => {
        if (i === index) {
          row.classList.add("active");
        } else {
          row.classList.remove("active");
        }
      });

      // Update caption overlay
      if (titleElement) titleElement.textContent = data.title;
      if (descElement) descElement.textContent = data.desc;
      if (badgeElement) badgeElement.textContent = data.name;

      // Smooth video transition
      videoElement.style.opacity = "0.4";
      setTimeout(() => {
        videoElement.poster = data.poster;
        videoElement.src = data.videoSrc;
        videoElement.load();
        videoElement.play().catch(() => {
          videoElement.src = "assets/video1.mp4";
          videoElement.play().catch(() => {});
        });
        videoElement.style.opacity = "1";
      }, 140);
    };

    // Set initial active state
    if (stepRows[0]) stepRows[0].classList.add("active");

    // Click on step row switches video
    stepRows.forEach((row, idx) => {
      row.setAttribute("data-step-index", idx);
      row.addEventListener("click", () => setStepVideo(idx));
    });
  },

  checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll("video").forEach((v) => {
        v.pause();
        v.removeAttribute("autoplay");
      });
    }
  },

  refresh() {
    this.initIntersectionObserver();
    this.bindSoundToggles();
    this.bindHoverPreviews();
    this.bindHowItWorksScrollStorytelling();
  }
};

window.PremiumVideoSection = PremiumVideoSection;
window.VideoEngine = VideoEngine;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => VideoEngine.init());
} else {
  VideoEngine.init();
}
