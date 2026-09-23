/**
 * HELEVATE.FIT — MAIN APPLICATION CONTROLLER
 * Handles:
 * - Interactive Helevate Report tab switcher (Health, Lifestyle, Nutrition, Fitness)
 * - 3-step Quick Assessment Intake Modal & Consultation Scheduler
 * - Mobile Navigation Drawer
 * - Toast Notification System
 */

const App = {
  selectedGoal: "Metabolic Health & Energy",
  selectedActivity: "Sedentary / Desk Work",

  init() {
    this.initReportTabs();
    this.initIntakeModal();
    this.initMobileDrawer();
    this.initGlobalDelegatedClicks();
    
    // Initialize Router
    if (window.Router) {
      window.Router.init();
    }
  },

  // --------------------------------------------------------------------------
  // 1. HELEVATE REPORT INTERACTIVE TAB SWITCHER
  // --------------------------------------------------------------------------
  initReportTabs() {
    const tabBtns = document.querySelectorAll('.report-tab-btn');
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update active buttons
        tabBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Update active content panels
        document.querySelectorAll('.report-category-content').forEach(panel => {
          panel.classList.remove('is-active');
        });

        const targetPanel = document.getElementById(`tab-content-${tabId}`);
        if (targetPanel) {
          targetPanel.classList.add('is-active');
        }
      });
    });
  },

  // --------------------------------------------------------------------------
  // 2. QUICK ASSESSMENT INTAKE MODAL CONTROLLER
  // --------------------------------------------------------------------------
  initIntakeModal() {
    const modal = document.getElementById('intake-modal');
    const closeBtn = document.getElementById('close-intake-modal-btn');
    const successCloseBtn = document.getElementById('intake-success-close-btn');

    // Close triggers
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeIntakeModal());
    }
    if (successCloseBtn) {
      successCloseBtn.addEventListener('click', () => this.closeIntakeModal());
    }

    // Backdrop click close
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeIntakeModal();
        }
      });
    }

    // Step 1: Goal Option Selection
    const optionBtns = document.querySelectorAll('.intake-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        optionBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        this.selectedGoal = btn.getAttribute('data-value') || "Metabolic Health";
      });
    });

    // Step 2: Activity level selection
    const activityBtns = document.querySelectorAll('.activity-level-btn');
    activityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activityBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        this.selectedActivity = btn.getAttribute('data-val') || "Sedentary";
      });
    });

    // Step Navigation Buttons
    const toStep2Btn = document.getElementById('intake-to-step-2');
    const backTo1Btn = document.getElementById('intake-back-to-1');
    const toStep3Btn = document.getElementById('intake-to-step-3');
    const backTo2Btn = document.getElementById('intake-back-to-2');
    const finalForm = document.getElementById('intake-final-form');

    if (toStep2Btn) {
      toStep2Btn.addEventListener('click', () => this.goToStep(2));
    }
    if (backTo1Btn) {
      backTo1Btn.addEventListener('click', () => this.goToStep(1));
    }
    if (toStep3Btn) {
      toStep3Btn.addEventListener('click', () => {
        const commInput = document.getElementById('intake-community');
        if (commInput && !commInput.value.trim()) {
          commInput.value = "Hyderabad Community";
        }
        this.goToStep(3);
      });
    }
    if (backTo2Btn) {
      backTo2Btn.addEventListener('click', () => this.goToStep(2));
    }

    // Form submission
    if (finalForm) {
      finalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('intake-name')?.value || "";
        const phone = document.getElementById('intake-phone')?.value || "";
        const email = document.getElementById('intake-email')?.value || "";

        // Show Success Step
        document.querySelectorAll('.intake-step-container').forEach(c => c.classList.remove('is-active'));
        const successEl = document.getElementById('intake-step-success');
        if (successEl) successEl.classList.add('is-active');

        const progFill = document.getElementById('intake-prog-fill');
        const progLabel = document.getElementById('intake-step-label');
        if (progFill) progFill.style.width = '100%';
        if (progLabel) progLabel.textContent = 'Completed';

        this.showToast(`Thank you, ${name}! Your consultation request has been received.`);
      });
    }

    // Contact form submission
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name')?.value || "there";
        this.showToast(`Thank you, ${name}! Your consultation request has been received. We will contact you shortly.`);
        contactForm.reset();
      });
    }

    // Community Referral RWA Form
    const referralForm = document.getElementById('community-referral-form');
    if (referralForm) {
      referralForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const society = document.getElementById('ref-community')?.value || "your society";
        this.showToast(`Thank you! We have received your inquiry for ${society}. Our team will connect with your management committee.`);
        referralForm.reset();
      });
    }

    // Careers Application Form
    const careerForm = document.getElementById('career-apply-form');
    if (careerForm) {
      careerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const applicantName = document.getElementById('career-name')?.value || "there";
        const role = document.getElementById('career-role')?.value || "the role";
        this.showToast(`Thank you, ${applicantName}! Your application for ${role} has been received. Our leadership will review your profile.`);
        careerForm.reset();
      });
    }
  },

  // --------------------------------------------------------------------------
  // 3. GLOBAL DELEGATED CLICKS & MODAL TRIGGERS
  // --------------------------------------------------------------------------
  initGlobalDelegatedClicks() {
    document.addEventListener('click', (e) => {
      // Intake modal triggers
      const intakeTrigger = e.target.closest('.open-intake-trigger, #header-get-started-btn, #mobile-get-started-btn');
      if (intakeTrigger) {
        e.preventDefault();
        this.openIntakeModal();
        return;
      }

      // Video Testimonial Modal triggers
      const videoCard = e.target.closest('[data-video-id]');
      if (videoCard) {
        e.preventDefault();
        const vidId = videoCard.getAttribute('data-video-id');
        this.openVideoModal(vidId);
        return;
      }

      const closeVideoBtn = e.target.closest('#close-video-modal-btn');
      if (closeVideoBtn) {
        e.preventDefault();
        this.closeVideoModal();
        return;
      }

      // Article Reader Modal triggers
      const articleCard = e.target.closest('[data-article-id]');
      if (articleCard) {
        e.preventDefault();
        const artId = articleCard.getAttribute('data-article-id');
        this.openArticleModal(artId);
        return;
      }

      const closeArticleBtn = e.target.closest('#close-article-modal-btn');
      if (closeArticleBtn) {
        e.preventDefault();
        this.closeArticleModal();
        return;
      }

      // Find Us Filter Pills
      const findusPill = e.target.closest('.findus-pill-btn');
      if (findusPill) {
        e.preventDefault();
        const area = findusPill.getAttribute('data-area');
        document.querySelectorAll('.findus-pill-btn').forEach(p => p.classList.remove('is-active'));
        findusPill.classList.add('is-active');
        this.filterFindUsSocieties("", area);
        return;
      }

      // Find Us View All / Show Less Toggle
      const findusToggleBtn = e.target.closest('#findus-toggle-btn');
      if (findusToggleBtn) {
        e.preventDefault();
        const isExpanded = findusToggleBtn.getAttribute('data-expanded') === 'true';
        this.toggleFindUsExpanded(!isExpanded);
        return;
      }

      // Community Reviews Filter Pills
      const reviewPill = e.target.closest('.community-filter-btn');
      if (reviewPill) {
        e.preventDefault();
        const commName = reviewPill.getAttribute('data-filter-community');
        document.querySelectorAll('.community-filter-btn').forEach(p => p.classList.remove('is-active'));
        reviewPill.classList.add('is-active');
        this.filterCommunityReviews(commName);
        return;
      }

      // Society Quick Consultation Trigger
      const societyBookBtn = e.target.closest('.book-society-trigger');
      if (societyBookBtn) {
        e.preventDefault();
        const socName = societyBookBtn.getAttribute('data-society-name');
        const commInput = document.getElementById('intake-community');
        const contactCommInput = document.getElementById('contact-community');
        if (commInput && socName) commInput.value = socName;
        if (contactCommInput && socName) contactCommInput.value = socName;
        this.openIntakeModal();
        return;
      }
    });

    // Find Us Search Input live filtering
    const searchInput = document.getElementById('findus-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterFindUsSocieties(query, "all");
      });
    }

    const videoModal = document.getElementById('video-testimonial-modal');
    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
          this.closeVideoModal();
        }
      });
    }

    const articleModal = document.getElementById('article-reader-modal');
    if (articleModal) {
      articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) {
          this.closeArticleModal();
        }
      });
    }
  },

  openVideoModal(videoId) {
    if (!window.HELEVATE_DATA || !window.HELEVATE_DATA.testimonials) return;
    const testm = window.HELEVATE_DATA.testimonials.find(t => t.id === videoId) || window.HELEVATE_DATA.testimonials[0];
    if (!testm) return;

    const modal = document.getElementById('video-testimonial-modal');
    const videoEl = document.getElementById('video-modal-player');
    const nameEl = document.getElementById('video-modal-name');
    const roleEl = document.getElementById('video-modal-role');
    const commEl = document.getElementById('video-modal-community');
    const quoteEl = document.getElementById('video-modal-quote');
    const storyEl = document.getElementById('video-modal-story');
    const metricEl = document.getElementById('video-modal-metric');

    if (nameEl) nameEl.textContent = testm.name;
    if (roleEl) roleEl.textContent = testm.role;
    if (commEl) commEl.textContent = testm.community;
    if (quoteEl) quoteEl.textContent = `“${testm.quote}”`;
    if (storyEl) storyEl.textContent = testm.fullStory || testm.quote;
    if (metricEl) metricEl.textContent = testm.metricBadge || "";

    if (videoEl) {
      videoEl.src = testm.videoSrc || "assets/video-performance.webm";
      videoEl.poster = testm.poster || "";
      videoEl.load();
      videoEl.play().catch(() => {});
    }

    if (modal) {
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
    }
  },

  closeVideoModal() {
    const modal = document.getElementById('video-testimonial-modal');
    const videoEl = document.getElementById('video-modal-player');
    if (videoEl) {
      videoEl.pause();
      videoEl.src = "";
    }
    if (modal) {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  findUsExpanded: false,

  toggleFindUsExpanded(expand) {
    this.findUsExpanded = expand;
    const toggleBtn = document.getElementById('findus-toggle-btn');
    if (toggleBtn) {
      toggleBtn.setAttribute('data-expanded', expand ? 'true' : 'false');
      toggleBtn.innerHTML = expand 
        ? `<span>Show Less</span> <span class="findus-toggle-icon">↑</span>`
        : `<span>View All 6 Communities</span> <span class="findus-toggle-icon">↓</span>`;
    }
    
    const searchInput = document.getElementById('findus-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const activePill = document.querySelector('.findus-pill-btn.is-active');
    const area = activePill ? activePill.getAttribute('data-area') : "all";
    this.filterFindUsSocieties(query, area);
  },

  filterFindUsSocieties(searchQuery = "", areaFilter = "all") {
    const cards = document.querySelectorAll('.findus-society-card');
    const toggleWrap = document.querySelector('.findus-toggle-wrap');
    const isFiltered = Boolean(searchQuery) || (areaFilter && areaFilter !== "all");

    if (toggleWrap) {
      toggleWrap.style.display = isFiltered ? "none" : "block";
    }

    cards.forEach((card, index) => {
      const name = (card.getAttribute('data-society-name') || "").toLowerCase();
      const area = (card.getAttribute('data-area') || "").toLowerCase();
      const services = (card.innerText || "").toLowerCase();

      const matchesSearch = !searchQuery || name.includes(searchQuery) || area.includes(searchQuery) || services.includes(searchQuery);
      const matchesArea = !areaFilter || areaFilter === "all" || area.includes(areaFilter.toLowerCase());

      if (matchesSearch && matchesArea) {
        if (!isFiltered && !this.findUsExpanded && index >= 3) {
          card.style.display = "none";
        } else {
          card.style.display = "flex";
        }
      } else {
        card.style.display = "none";
      }
    });
  },

  filterCommunityReviews(communityFilter = "all") {
    const sections = document.querySelectorAll('.community-section-block');
    sections.forEach(sec => {
      const secCommunity = (sec.getAttribute('data-community-group') || "").toLowerCase();
      if (communityFilter === "all" || secCommunity === communityFilter.toLowerCase()) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  },

  openArticleModal(articleId) {
    if (!window.HELEVATE_DATA || !window.HELEVATE_DATA.insights) return;
    const article = window.HELEVATE_DATA.insights.find(a => a.id === articleId) || window.HELEVATE_DATA.insights[0];
    if (!article) return;

    const modal = document.getElementById('article-reader-modal');
    const titleEl = document.getElementById('article-modal-title');
    const metaEl = document.getElementById('article-modal-meta');
    const bodyEl = document.getElementById('article-modal-body');
    const imgEl = document.getElementById('article-modal-img');

    if (titleEl) titleEl.textContent = article.title;
    if (metaEl) metaEl.textContent = `${article.category} • ${article.readTime} • By ${article.author}`;
    if (bodyEl) bodyEl.innerHTML = article.content;
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.title;
    }

    if (modal) {
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
    }
  },

  closeArticleModal() {
    const modal = document.getElementById('article-reader-modal');
    if (modal) {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  updateCommunityView(communityName) {
    const nameEls = document.querySelectorAll('.dynamic-community-name');
    nameEls.forEach(el => {
      el.textContent = communityName;
    });
    const subEls = document.querySelectorAll('.dynamic-community-sub');
    subEls.forEach(el => {
      el.textContent = `On-site precision diagnostics, DEXA imaging, and coaching available now at ${communityName}, Hyderabad.`;
    });
  },

  goToStep(stepNumber) {
    document.querySelectorAll('.intake-step-container').forEach(c => c.classList.remove('is-active'));
    const targetStep = document.getElementById(`intake-step-${stepNumber}`);
    if (targetStep) targetStep.classList.add('is-active');

    const progFill = document.getElementById('intake-prog-fill');
    const progLabel = document.getElementById('intake-step-label');
    if (progFill) {
      progFill.style.width = `${stepNumber * 33.33}%`;
    }
    if (progLabel) {
      progLabel.textContent = `Step ${stepNumber} of 3`;
    }
  },

  openIntakeModal() {
    const modal = document.getElementById('intake-modal');
    if (modal) {
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      this.goToStep(1);
      this.closeMobileDrawer();
    }
  },

  closeIntakeModal() {
    const modal = document.getElementById('intake-modal');
    if (modal) {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  // --------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  initMobileDrawer() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-drawer-btn');
    const backdrop = document.getElementById('drawer-backdrop');
    const drawerLinks = document.querySelectorAll('.nav-link-mobile');

    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.openMobileDrawer());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeMobileDrawer());
    }
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeMobileDrawer());
    }
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileDrawer());
    });
  },

  openMobileDrawer() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
  },

  closeMobileDrawer() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
  },

  // --------------------------------------------------------------------------
  // 4. TOAST NOTIFICATIONS
  // --------------------------------------------------------------------------
  showToast(message) {
    let shelf = document.getElementById('toast-shelf');
    if (!shelf) {
      shelf = document.createElement('div');
      shelf.id = 'toast-shelf';
      shelf.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
      document.body.appendChild(shelf);
    }

    const toast = document.createElement('div');
    toast.style.cssText = 'background:#071A2E;color:#FFFFFF;border:1px solid #00D2B4;padding:14px 20px;border-radius:12px;font-size:0.92rem;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,0.3);max-width:380px;pointer-events:auto;transition:all 0.3s ease;';
    toast.textContent = message;

    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

window.App = App;

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

