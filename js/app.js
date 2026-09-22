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
    const openBtns = document.querySelectorAll('.open-intake-trigger, #header-get-started-btn, #mobile-get-started-btn');
    const closeBtn = document.getElementById('close-intake-modal-btn');
    const successCloseBtn = document.getElementById('intake-success-close-btn');

    // Open triggers
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openIntakeModal();
      });
    });

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
    const shelf = document.getElementById('toast-shelf');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = message;

    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

window.App = App;

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
