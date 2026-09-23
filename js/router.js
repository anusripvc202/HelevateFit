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
        const isPageActive = targetClean.length > 1 && 
          (normalizedPath === targetClean || normalizedPath.startsWith(targetClean + "/"));

        if (isHomeActive || isPageActive) {
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

      case "/assessments":
      case "/assessment":
      case "/diagnostics":
      case "/panels":
        this.showView("view-assessments");
        break;

      case "/services":
      case "/programs":
      case "/care":
      case "/guidance":
      case "/nutrition":
        this.showView("view-services");
        break;

      case "/about":
      case "/about-us":
      case "/mission":
      case "/team":
        this.showView("view-about");
        break;

      case "/careers":
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
  },

  showView(viewId) {
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.classList.add("active");
      targetView.querySelectorAll(".reveal, .reveal-up, .reveal-fade").forEach((el) => {
        el.classList.add("is-revealed");
      });
    }
  }
};

if (typeof window !== 'undefined') {
  window.Router = Router;
}

