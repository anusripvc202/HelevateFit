/**
 * HELEVATE.FIT — CLIENT ROUTER ENGINE
 * Handles client-side hash routing, dynamic detail pages,
 * community dynamic landing pages (/communities/:slug),
 * assessment details, navigation active states, and lifecycle views.
 * Design Inspiration: Tulah Life, Sunrooof, A Better Lou
 */

const Router = {
  routes: {},
  currentRoute: "",

  init() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("popstate", () => this.handleRoute());
    this.handleRoute();
  },

  navigate(path) {
    if (path.startsWith("#")) {
      window.location.hash = path;
    } else {
      window.location.hash = "#" + (path.startsWith("/") ? path.slice(1) : path);
    }
  },

  handleRoute() {
    let rawHash = window.location.hash.slice(1) || "/";
    if (rawHash === "") rawHash = "/";
    if (!rawHash.startsWith("/")) rawHash = "/" + rawHash;

    // Handle query params if any
    const [pathOnly] = rawHash.split("?");
    const normalizedPath = pathOnly;
    this.currentRoute = normalizedPath;

    // 1. Hide all views
    document.querySelectorAll(".app-view").forEach((view) => {
      view.classList.remove("active");
    });

    // 2. Update navigation active state
    document.querySelectorAll(".nav-link").forEach((link) => {
      const target = link.getAttribute("href") || "";
      const targetClean = target.replace("#", "");
      if (
        (normalizedPath === "/" && (targetClean === "/" || targetClean === "" || targetClean === "home")) ||
        (normalizedPath !== "/" && targetClean.length > 1 && normalizedPath.startsWith(targetClean))
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // 3. Route Matching
    if (normalizedPath === "/" || normalizedPath === "/home") {
      this.showView("view-home");
    } else if (normalizedPath === "/how-it-works") {
      this.showView("view-how-it-works");
      if (window.App && window.App.renderHowItWorks) {
        window.App.renderHowItWorks();
      }
    } else if (normalizedPath === "/about") {
      this.showView("view-about");
      if (window.App && window.App.renderAbout) {
        window.App.renderAbout();
      }
    } else if (normalizedPath === "/services" || normalizedPath === "/programs") {
      this.showView("view-programs");
      if (window.App && window.App.renderPrograms) {
        window.App.renderPrograms();
      }
    } else if (normalizedPath === "/assessments") {
      this.showView("view-assessments");
      if (window.App && window.App.renderAssessmentsOverview) {
        window.App.renderAssessmentsOverview();
      }
    } else if (normalizedPath.startsWith("/assessments/")) {
      const assessmentId = normalizedPath.split("/")[2];
      this.renderAssessmentDetail(assessmentId);
      this.showView("view-assessment-detail");
    } else if (normalizedPath === "/pricing" || normalizedPath === "/memberships") {
      this.showView("view-pricing");
      if (window.App && window.App.renderMemberships) {
        window.App.renderMemberships();
      }
    } else if (normalizedPath === "/communities") {
      this.showView("view-communities");
      if (window.App && window.App.renderCommunities) {
        window.App.renderCommunities();
      }
    } else if (normalizedPath.startsWith("/communities/")) {
      const communitySlug = normalizedPath.split("/")[2];
      this.renderCommunityLandingPage(communitySlug);
      this.showView("view-community-detail");
    } else if (normalizedPath === "/careers") {
      this.showView("view-careers");
      if (window.App && window.App.renderCareers) {
        window.App.renderCareers();
      }
    } else if (normalizedPath === "/insights") {
      this.showView("view-insights");
      if (window.App && window.App.renderInsights) {
        window.App.renderInsights();
      }
    } else if (normalizedPath.startsWith("/insights/")) {
      const insightId = normalizedPath.split("/")[2];
      this.showView("view-insights");
      if (window.App && window.App.openInsightModal) {
        window.App.openInsightModal(insightId);
      }
    } else if (normalizedPath === "/booking" || normalizedPath === "/consultation") {
      this.showView("view-booking");
      if (window.App && window.App.initConsultationForm) {
        window.App.initConsultationForm();
      }
    } else if (normalizedPath === "/reports") {
      this.showView("view-reports-concept");
      if (window.App && window.App.renderReportsConcept) {
        window.App.renderReportsConcept();
      }
    } else if (normalizedPath === "/contact") {
      this.showView("view-contact");
    } else if (normalizedPath === "/login" || normalizedPath === "/signup") {
      this.showView("view-auth");
    } else if (normalizedPath.startsWith("/dashboard")) {
      this.showView("view-reports-concept");
      if (window.App && window.App.renderReportsConcept) {
        window.App.renderReportsConcept();
      }
    } else {
      // Fallback
      this.showView("view-home");
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Close mobile drawer if open
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer) drawer.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
  },

  showView(viewId) {
    const el = document.getElementById(viewId);
    if (el) {
      el.classList.add("active");
      // Trigger scroll observer on newly revealed view
      if (window.App && window.App.initScrollObserver) {
        window.App.initScrollObserver();
      }
      // Trigger VideoEngine refresh to bind newly visible video elements
      if (window.VideoEngine && window.VideoEngine.refresh) {
        window.VideoEngine.refresh();
      }
      // Trigger ScrollMotionEngine refresh to re-measure and re-bind ScrollTrigger instances
      if (window.ScrollMotionEngine && window.ScrollMotionEngine.refresh) {
        window.ScrollMotionEngine.refresh();
      }
    }
  },

  renderAssessmentDetail(id) {
    const assessment = HELEVATE_DATA.assessments.find((a) => a.id === id) || HELEVATE_DATA.assessments[0];
    const container = document.getElementById("assessment-detail-container");
    if (!container) return;

    container.innerHTML = `
      <div style="max-width: 920px; margin: 0 auto;">
        <a href="#/assessments" class="btn btn-secondary btn-sm" style="margin-bottom: 20px;">← Back to Assessments</a>
        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-navy">${assessment.badge}</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-text-dim);">TIMEFRAME: ${assessment.timeframe}</span>
        </div>
        <h1 style="font-size: clamp(2rem, 3.5vw, 2.7rem); margin-bottom: 14px; color: var(--color-primary-navy);">${assessment.title}</h1>
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px; color: var(--color-text-main);">${assessment.longDesc}</p>

        <div style="width: 100%; height: 260px; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 28px; box-shadow: var(--shadow-card); position: relative;">
          <img src="${assessment.image}" alt="${assessment.title}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(7,34,56,0.6) 100%);"></div>
        </div>

        <div class="card-clean" style="margin-bottom: 24px; padding: 28px 24px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
            <span style="font-size: 1.3rem;">🔬</span>
            <h3 style="font-size: 1.3rem; color: var(--color-primary-navy);">What Is Evaluated</h3>
          </div>
          <ul style="display: flex; flex-direction: column; gap: 10px;">
            ${assessment.evaluated.map(item => `
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.94rem; font-weight: 600; color: var(--color-text-main); line-height: 1.5;">
                <span style="color: var(--color-primary-navy); font-weight: 700;">✓</span>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="card-clean" style="margin-bottom: 28px; padding: 28px 24px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px;">
            <span style="font-size: 1.3rem;">📋</span>
            <h3 style="font-size: 1.3rem; color: var(--color-primary-navy);">Step-by-Step Process</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${assessment.process.map((step, idx) => `
              <div style="display: flex; align-items: center; gap: 14px; background: var(--color-bg-subtle); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary-navy); color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; font-size: 0.9rem;">${idx + 1}</div>
                <div style="font-size: 0.94rem; font-weight: 600; color: var(--color-text-main);">${step}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="card-blue" style="text-align: center; margin-bottom: 36px; padding: 32px 24px;">
          <h3 style="font-size: 1.5rem; color: var(--color-primary-navy); margin-bottom: 10px;">Ready to Book Your ${assessment.title}?</h3>
          <p style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 20px;">Turnaround Time: <strong>${assessment.timeframe}</strong> &bull; Doorstep Sample & Scan Delivery</p>
          <a href="#/booking" class="btn btn-primary btn-lg">Book a Free Consultation →</a>
        </div>
      </div>
    `;
  },

  renderCommunityLandingPage(slug) {
    const community = HELEVATE_DATA.communities.find((c) => c.slug === slug) || HELEVATE_DATA.communities[0];
    const container = document.getElementById("community-detail-container");
    if (!container) return;

    container.innerHTML = `
      <div style="max-width: 980px; margin: 0 auto;">
        <a href="#/communities" class="btn btn-secondary btn-sm" style="margin-bottom: 20px;">← Back to Communities</a>
        <span class="badge badge-navy" style="margin-bottom: 10px;">${community.status}</span>
        <h1 style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 10px; color: var(--color-primary-navy);">Helevate is now available in ${community.name}</h1>
        <p style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 24px; font-weight: 600;">
          📍 ${community.location} &bull; ⏰ ${community.availability}
        </p>

        <div class="card-navy" style="margin-bottom: 28px; padding: 32px 28px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Doorstep Human Performance Inside Your Clubhouse</h3>
          <p style="font-size: 1.02rem; line-height: 1.7; margin-bottom: 22px; color: var(--color-primary-light-blue);">
            ${community.description} Zero commute, full privacy, and certified coaches conducting assessment-led training directly in your community.
          </p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
            <div style="background: rgba(221, 241, 239, 0.15); padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid rgba(221, 241, 239, 0.25);">
              <div style="font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-light-blue); font-weight: 700;">Clubhouse Facility</div>
              <div style="font-size: 0.98rem; font-weight: 700; color: #FFFFFF; margin-top: 4px;">${community.facilities}</div>
            </div>
            <div style="background: rgba(221, 241, 239, 0.15); padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid rgba(221, 241, 239, 0.25);">
              <div style="font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-light-blue); font-weight: 700;">Session Schedule</div>
              <div style="font-size: 0.98rem; font-weight: 700; color: #FFFFFF; margin-top: 4px;">${community.schedule}</div>
            </div>
          </div>
        </div>

        <div class="card-clean" style="margin-bottom: 28px; padding: 32px 28px;">
          <h3 style="font-size: 1.4rem; color: var(--color-primary-navy); margin-bottom: 20px;">Available Programs for Residents</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
            <div style="background: var(--color-bg-subtle); padding: 18px 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">🏋️ 1-on-1 Strength Coaching</h4>
              <p style="font-size: 0.885rem; color: var(--color-text-muted); margin-bottom: 0; line-height: 1.55;">Undivided coach attention tailored to your biomechanics and bone density.</p>
            </div>
            <div style="background: var(--color-bg-subtle); padding: 18px 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">🔥 Fat Loss Transformation (H75)</h4>
              <p style="font-size: 0.885rem; color: var(--color-text-muted); margin-bottom: 0; line-height: 1.55;">Multi-phase fat loss protocol with DEXA checkpoints and nutrition.</p>
            </div>
            <div style="background: var(--color-bg-subtle); padding: 18px 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">👥 Community Group Cohorts</h4>
              <p style="font-size: 0.885rem; color: var(--color-text-muted); margin-bottom: 0; line-height: 1.55;">High-energy morning and evening batches capped at 5–10 residents.</p>
            </div>
            <div style="background: var(--color-bg-subtle); padding: 18px 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); margin-bottom: 6px;">🔬 Precision Assessments</h4>
              <p style="font-size: 0.885rem; color: var(--color-text-muted); margin-bottom: 0; line-height: 1.55;">Doorstep metabolic panels, DEXA scans, gut microbiome, and DNA tests.</p>
            </div>
          </div>
        </div>

        <div class="card-blue" style="text-align: center; margin-bottom: 36px; padding: 32px 24px;">
          <h3 style="font-size: 1.5rem; color: var(--color-primary-navy); margin-bottom: 10px;">Start Your Journey at ${community.name}</h3>
          <p style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 20px;">Book a free introductory consultation with our Head Coach.</p>
          <a href="#/booking" class="btn btn-primary btn-lg">Book a Free Consultation →</a>
        </div>
      </div>
    `;
  }
};

window.Router = Router;
