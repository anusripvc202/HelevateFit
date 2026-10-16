/**
 * HELEVATE.FIT — CLIENT ROUTER
 * Handles clean client-side hash routing across:
 * - / (Concise Homepage with conversion flow)
 * - /how-it-works (5-Step Operational Roadmap)
 * - /assessments (Comprehensive Diagnostic Panels)
 * - /services (Strength, Fat-Loss H75, Nutrition & Group Coaching)
 * - /about (Mission, Story, Team & Standards)
 * - /contact (Consultation Booking & RWA Community Referral)
 * - /privacy & /terms (Legal views)
 */

const Router = {
  currentRoute: "",

  init() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
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
    // 0. Auto-close mobile drawer if open
    if (window.App && window.App.closeMobileDrawer) {
      window.App.closeMobileDrawer();
    }

    // 1. Force top scroll on route changes
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    let rawHash = window.location.hash.slice(1) || "/";
    if (rawHash === "") rawHash = "/";
    if (!rawHash.startsWith("/")) rawHash = "/" + rawHash;

    const [pathOnly] = rawHash.split("?");
    const normalizedPath = pathOnly.toLowerCase();
    this.currentRoute = normalizedPath;

    // 2. Hide all views
    document.querySelectorAll(".app-view").forEach((view) => {
      view.classList.remove("active");
    });

    // 3. Update desktop and mobile nav active links
    const updateNavLinks = (selector) => {
      document.querySelectorAll(selector).forEach((link) => {
        const target = link.getAttribute("href") || "";
        const targetClean = target.replace("#", "").toLowerCase();
        
        const isHomeActive = (normalizedPath === "/" || normalizedPath === "/home") && 
          (targetClean === "/" || targetClean === "" || targetClean === "home");
        const isAssessActive = (normalizedPath === "/what-we-assess" || normalizedPath === "/assessments" || normalizedPath === "/what-we-test") && 
          (targetClean === "/what-we-assess" || targetClean === "/assessments");
        const isPageActive = targetClean.length > 1 && 
          (normalizedPath === targetClean || normalizedPath.startsWith(targetClean + "/"));
        const isCareersActive = (normalizedPath === "/careers" || normalizedPath === "/career" || normalizedPath === "/carrier" || normalizedPath === "/carriers" || normalizedPath === "/jobs" || normalizedPath === "/hiring") && 
          (targetClean === "/careers" || targetClean === "/career" || targetClean === "/carrier");

        if (isHomeActive || isPageActive || isAssessActive || isCareersActive) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    updateNavLinks(".nav-link");
    updateNavLinks(".nav-link-mobile");

    // 4. Match route to view
    switch (normalizedPath) {
      case "/":
      case "/home":
        this.showView("view-home");
        break;

      case "/how-it-works":
      case "/process":
      case "/roadmap":
      case "/methodology":
        this.showView("view-how-it-works");
        break;

      case "/what-we-assess":
      case "/what-we-test":
      case "/assessments":
      case "/assessment":
      case "/diagnostics":
      case "/panels":
        this.showView("view-assessments");
        break;

      case "/services":
      case "/care":
      case "/guidance":
      case "/nutrition":
        this.showView("view-services");
        break;

      case "/programs":
      case "/structured-programs":
      case "/four-programs":
        this.showView("view-home");
        setTimeout(() => {
          const progSection = document.getElementById("homepage-programs");
          if (progSection) {
            progSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        break;

      case "/about":
      case "/about-us":
      case "/mission":
      case "/team":
        this.showView("view-about");
        break;

      case "/careers":
      case "/career":
      case "/carrier":
      case "/carriers":
      case "/jobs":
      case "/hiring":
        this.showView("view-careers");
        break;

      case "/insights":
      case "/blog":
      case "/articles":
        this.showView("view-insights");
        break;

      case "/reviews":
      case "/review":
      case "/testimonials":
      case "/community":
      case "/communities":
      case "/society":
        this.showView("view-reviews");
        break;

      case "/h75":
      case "/transformation":
      case "/fat-loss":
        this.showView("view-h75");
        break;

      case "/contact":
      case "/refer":
      case "/location":
        this.showView("view-contact");
        break;

      case "/for-communities":
      case "/for-community":
      case "/communities-partnership":
      case "/partner-with-us":
        this.showView("view-home");
        setTimeout(() => {
          const commSection = document.getElementById("homepage-community-flow") || document.getElementById("homepage-community-cta");
          if (commSection) {
            commSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        break;

      case "/partner":
      case "/partner-with-helevate":
        this.showView("view-home");
        if (window.App && window.App.openPartnerModal) {
          window.App.openPartnerModal();
        }
        break;

      case "/get-started":
      case "/booking":
      case "/consultation":
        this.showView("view-home");
        if (window.App && window.App.openIntakeModal) {
          window.App.openIntakeModal();
        }
        break;

      default:
        // Default fallback to home
        this.showView("view-home");
        break;
    }

    // Refresh Motion Engine observer
    if (window.MotionEngine && window.MotionEngine.refresh) {
      window.MotionEngine.refresh();
    }

    // Refresh Video Engine observers and controllers
    if (window.VideoEngine && window.VideoEngine.refresh) {
      window.VideoEngine.refresh();
    }

    // Direct section scroll parameter support (for targeted section views)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollToId = urlParams.get('scroll');
      if (scrollToId) {
        setTimeout(() => {
          const el = document.getElementById(scrollToId);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, 120);
      }
    } catch (e) {}
  },

  showView(viewId) {
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.classList.add("active");

      // Immediately ensure all elements inside subview-hero and what-we-assess-hero are visible
      targetView.querySelectorAll(".subview-hero *, .what-we-assess-hero *").forEach((el) => {
        el.classList.add("is-revealed");
      });

      if (window.MotionEngine && window.MotionEngine.refresh) {
        window.MotionEngine.refresh();
      } else {
        targetView.querySelectorAll(".reveal, .reveal-up, .reveal-fade, .reveal-scale").forEach((el) => {
          el.classList.add("is-revealed");
        });
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.Router = Router;
}

