/**
 * HELEVATE.FIT — CLIENT ROUTER
 * Handles clean client-side hash routing across:
 * - / (Home overview)
 * - /how-it-works (4-step process)
 * - /report (The Helevate Report)
 * - /services (Our 4 Unified Pillars)
 * - /about (Mission & Standards)
 * - /get-started & /booking (Quick intake modal)
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
    // 1. Force top scroll on route changes
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    let rawHash = window.location.hash.slice(1) || "/";
    if (rawHash === "") rawHash = "/";
    if (!rawHash.startsWith("/")) rawHash = "/" + rawHash;

    const [pathOnly] = rawHash.split("?");
    const normalizedPath = pathOnly;
    this.currentRoute = normalizedPath;

    // 2. Hide all views
    document.querySelectorAll(".app-view").forEach((view) => {
      view.classList.remove("active");
    });

    // 3. Update nav active links
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

    // 4. Match route to view
    if (normalizedPath === "/" || normalizedPath === "/home") {
      this.showView("view-home");
    } else if (normalizedPath === "/how-it-works") {
      this.showView("view-how-it-works");
    } else if (normalizedPath === "/report" || normalizedPath === "/helevate-report") {
      this.showView("view-report");
    } else if (normalizedPath === "/services" || normalizedPath === "/approach") {
      this.showView("view-services");
    } else if (normalizedPath === "/about") {
      this.showView("view-about");
    } else if (normalizedPath === "/get-started" || normalizedPath === "/booking") {
      this.showView("view-home");
      if (window.App && window.App.openIntakeModal) {
        window.App.openIntakeModal();
      }
    } else {
      // Default fallback to home
      this.showView("view-home");
    }

    // Refresh Motion Engine observer
    if (window.MotionEngine && window.MotionEngine.refresh) {
      window.MotionEngine.refresh();
    }
  },

  showView(viewId) {
    const targetView = document.getElementById(viewId);
    if (targetView) {
      targetView.classList.add("active");
    }
  }
};

if (typeof window !== 'undefined') {
  window.Router = Router;
}
