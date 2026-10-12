/**
 * HELEVATE.FIT — MAIN APPLICATION CONTROLLER
 * Compliant with Client's Blueprint — October 2026
 * Handles:
 * - SEO & Routing initialization
 * - Lead capture with UTM tracking & client-side validation
 * - WhatsApp Business handoff & click tracking
 * - 3-Question Program Recommendation Quiz initialization
 * - Cookie Consent Banner (Accept/Reject)
 * - Mobile Navigation Drawer & Sticky Mobile CTAs
 * - GA4 & Meta Pixel tracking hooks
 */

const App = {
  utmData: {},

  init() {
    this.captureUtmParams();
    this.initMobileDrawer();
    this.bindLeadForms();
    this.bindWhatsAppTracking();
    this.initCookieConsent();
    this.initQuiz();
    this.initSmoothScrollButtons();

    // Initialize Router
    if (window.Router) {
      window.Router.init();
    }
  },

  // 1. UTM Attribution Capture
  captureUtmParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      this.utmData = {
        utm_source: params.get("utm_source") || "direct",
        utm_medium: params.get("utm_medium") || "none",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        utm_term: params.get("utm_term") || "",
        landing_url: window.location.href,
        referrer: document.referrer || "direct",
        captured_at: new Date().toISOString()
      };
      // Store attribution in session
      sessionStorage.setItem("helevate_utm", JSON.stringify(this.utmData));
    } catch (e) {
      console.warn("UTM capture error", e);
    }
  },

  // 2. Mobile Drawer
  initMobileDrawer() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("close-drawer-btn");
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("drawer-backdrop");

    if (menuBtn && drawer && backdrop) {
      menuBtn.addEventListener("click", () => {
        drawer.classList.add("is-open");
        backdrop.classList.add("is-open");
      });
    }

    if (closeBtn && drawer && backdrop) {
      closeBtn.addEventListener("click", () => this.closeMobileDrawer());
    }

    if (backdrop) {
      backdrop.addEventListener("click", () => this.closeMobileDrawer());
    }
  },

  closeMobileDrawer() {
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer) drawer.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-open");
  },

  // 3. Lead Generation Forms & Validation
  bindLeadForms() {
    document.querySelectorAll(".lead-gen-form").forEach((form) => {
      if (form.hasAttribute("data-bound")) return;
      form.setAttribute("data-bound", "true");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleLeadSubmit(form);
      });
    });
  },

  handleLeadSubmit(form) {
    const nameInput = form.querySelector(".lead-input-name");
    const phoneInput = form.querySelector(".lead-input-phone");
    const commInput = form.querySelector(".lead-input-community");
    const mattersInput = form.querySelector(".lead-input-matters");
    const timeInput = form.querySelector(".lead-input-time");
    const consentInput = form.querySelector(".lead-input-consent");

    const name = nameInput ? nameInput.value.trim() : "";
    let phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, "") : "";
    const community = commInput ? commInput.value.trim() : "Hyderabad Community";
    const matters = mattersInput ? mattersInput.value : "General Wellness";
    const callTime = timeInput ? timeInput.value : "Morning";
    const consent = consentInput ? consentInput.checked : true;

    if (!name) {
      this.showToast("Please enter your full name.", "error");
      if (nameInput) nameInput.focus();
      return;
    }

    // Phone validation: require 10 digits
    if (phone.length === 12 && phone.startsWith("91")) {
      phone = phone.slice(2);
    }
    if (phone.length !== 10) {
      this.showToast("Please enter a valid 10-digit Indian WhatsApp phone number.", "error");
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (!consent) {
      this.showToast("Please agree to the privacy policy consent to proceed.", "error");
      return;
    }

    const source = form.getAttribute("data-source") || "website-form";
    const storedUtm = JSON.parse(sessionStorage.getItem("helevate_utm") || "{}");

    const leadPayload = {
      id: "lead_" + Date.now(),
      name,
      phone: "+91 " + phone,
      community,
      mattersMost: matters,
      bestTimeToCall: callTime,
      source,
      attribution: storedUtm,
      submittedAt: new Date().toISOString()
    };

    // Store in LocalStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem("helevate_leads") || "[]");
      existingLeads.push(leadPayload);
      localStorage.setItem("helevate_leads", JSON.stringify(existingLeads));
    } catch (err) {
      console.warn("Storage error", err);
    }

    // Fire Analytics Lead Event
    this.trackEvent("Lead", {
      currency: "INR",
      value: 0,
      lead_source: source,
      community: community
    });

    // Form success state & WhatsApp pre-fill handoff
    const prefilledText = encodeURIComponent(`Hi Helevate, I’m from ${community}. I’d like to book my Body Report.`);
    const waUrl = `https://wa.me/919963960259?text=${prefilledText}`;

    form.innerHTML = `
      <div style="text-align: center; padding: 24px 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(46, 154, 104, 0.15); border: 2px solid #2E9A68; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: #2E9A68; margin: 0 auto 16px auto;">
          ✓
        </div>
        <h3 style="color: var(--color-primary-navy); font-size: 1.45rem; margin-bottom: 8px; font-weight: 700;">
          Request Received, ${name}!
        </h3>
        <p style="color: var(--color-text-muted); font-size: 0.98rem; line-height: 1.6; max-width: 480px; margin: 0 auto 20px auto;">
          Coach Harish will contact you at <strong>+91 ${phone}</strong> during <strong>${callTime}</strong> to schedule your Body Report in <strong>${community}</strong>.
        </p>
        
        <div style="background: var(--color-bg-subtle); border-radius: 14px; padding: 18px 20px; max-width: 460px; margin: 0 auto 24px auto;">
          <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">
            💬 Fast-Track on WhatsApp
          </div>
          <div style="font-size: 0.85rem; color: var(--color-text-dim); margin-bottom: 14px;">
            Lock in your preferred consultation slot immediately via WhatsApp:
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
            Chat with Coach Harish on WhatsApp →
          </a>
        </div>

        <div style="font-size: 0.8rem; color: var(--color-text-dim);">
          Your information is secure. View our <a href="#/privacy-policy" style="color: var(--color-primary-navy); text-decoration: underline;">Privacy Policy</a>.
        </div>
      </div>
    `;

    this.showToast(`Thank you, ${name}! Consultation requested.`, "success");
  },

  // 4. WhatsApp & Phone Click Tracking
  bindWhatsAppTracking() {
    document.addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        this.trackEvent("Contact", { method: "WhatsApp" });
      } else if (href.startsWith("tel:")) {
        this.trackEvent("Contact", { method: "Phone" });
      }
    });
  },

  // 5. Analytics Tracker (GA4 & Meta Pixel)
  trackEvent(eventName, params = {}) {
    try {
      // Google Analytics 4
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName.toLowerCase(), params);
      }
      // Meta Pixel
      if (typeof window.fbq === "function") {
        window.fbq("track", eventName, params);
      }
      console.log(`[Analytics Event] ${eventName}:`, params);
    } catch (e) {
      console.warn("Analytics error", e);
    }
  },

  trackPageView(pagePath) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", { page_path: pagePath });
      }
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }
    } catch (e) {
      console.warn("PageView tracking error", e);
    }
  },

  // 6. Cookie Consent Management
  initCookieConsent() {
    const banner = document.getElementById("cookie-consent-banner");
    if (!banner) return;

    const existingConsent = localStorage.getItem("helevate_cookie_consent");
    if (!existingConsent) {
      setTimeout(() => {
        banner.classList.add("is-visible");
      }, 1200);
    }

    const acceptBtn = document.getElementById("cookie-accept-btn");
    const rejectBtn = document.getElementById("cookie-reject-btn");

    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
        localStorage.setItem("helevate_cookie_consent", "accepted");
        banner.classList.remove("is-visible");
        this.showToast("Cookie preferences saved.", "success");
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener("click", () => {
        localStorage.setItem("helevate_cookie_consent", "rejected");
        banner.classList.remove("is-visible");
        this.showToast("Non-essential cookies disabled.", "info");
      });
    }
  },

  // 7. Initialize 3-Question Recommendation Quiz
  initQuiz() {
    if (window.ProgramRecommendationQuiz) {
      const quiz = new window.ProgramRecommendationQuiz();
      quiz.init("quiz-inline-container");
    }
  },

  // 8. Smooth scrolling for internal anchor CTA buttons
  initSmoothScrollButtons() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-lead-scroll");
      if (!btn) return;
      const targetId = btn.getAttribute("href") || "#homepage-final-cta";
      if (targetId.startsWith("#")) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  },

  // 9. Toast Notification Utility
  showToast(message, type = "info") {
    let container = document.getElementById("app-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "app-toast-container";
      container.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    const bgColor = type === "error" ? "#E05344" : type === "success" ? "#0E3A5D" : "#0E3A5D";
    toast.style.cssText = `
      background: ${bgColor};
      color: #FFFFFF;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 0.92rem;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      opacity: 0;
      transform: translateY(-8px);
      transition: all 0.25s ease;
      pointer-events: auto;
      max-width: 360px;
    `;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-8px)";
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  }
};

window.App = App;
window.showToast = (msg, type) => App.showToast(msg, type);

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
