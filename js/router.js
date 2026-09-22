/**
 * HELEVATE.FIT — CLIENT ROUTER
 * Handles clean client-side hash routing across:
 * - / (Complete 12-section Homepage)
 * - /assessments (Dedicated Assessments Page)
 * - /reports (Sample Helevate Report Deep-Dive)
 * - /care (Personalised Care & Treatment Pathways)
 * - /nutrition (Personalised Food & Diet Guidance)
 * - /how-it-works (5-Step Operational Roadmap)
 * - /reviews (Community Testimonials & Trust)
 * - /about (Mission, Science & Operations)
 * - /get-started & /booking (Quick Intake Modal)
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

      case "/assessments":
      case "/assessment":
        this.showView("view-assessments");
        break;

      case "/reports":
      case "/report":
      case "/helevate-report":
        this.showView("view-reports");
        break;

      case "/care":
      case "/treatment":
      case "/guidance":
      case "/care-pathways":
        this.showView("view-care");
        break;

      case "/nutrition":
      case "/diet":
      case "/food":
      case "/nutrition-guidance":
        this.showView("view-nutrition");
        break;

      case "/how-it-works":
      case "/process":
      case "/roadmap":
        this.showView("view-how-it-works");
        break;

      case "/reviews":
      case "/testimonials":
      case "/stories":
      case "/results":
        this.showView("view-reviews");
        break;

      case "/about":
      case "/about-us":
      case "/mission":
        this.showView("view-about");
        break;

      case "/services":
      case "/approach":
        this.showView("view-home");
        setTimeout(() => {
          const servicesSection = document.getElementById("homepage-services");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
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
