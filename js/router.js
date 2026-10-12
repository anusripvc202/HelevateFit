/**
 * HELEVATE.FIT — CLIENT ROUTER & SEO CONTROLLER
 * Handles clean client-side routing, HTML5 pushState & hash fallback,
 * dynamic SEO metadata, canonical links, and view transitions.
 */

const Router = {
  currentRoute: "/",

  init() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Support both popstate and hashchange
    window.addEventListener("popstate", () => this.handleRoute());
    window.addEventListener("hashchange", () => this.handleRoute());

    // Intercept internal link clicks for smooth routing
    document.addEventListener("click", (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external, mailto, tel, and whatsapp links
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("https://wa.me") ||
        anchor.getAttribute("target") === "_blank"
      ) {
        return;
      }

      // Check if it's an internal route
      if (href.startsWith("#/") || href.startsWith("/")) {
        e.preventDefault();
        this.navigate(href);
      }
    });

    this.handleRoute();
  },

  navigate(path) {
    let cleanPath = path;
    if (cleanPath.startsWith("#")) {
      cleanPath = cleanPath.slice(1);
    }
    if (!cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }

    if (window.history && window.history.pushState) {
      try {
        window.history.pushState({}, "", cleanPath);
      } catch (err) {
        window.location.hash = "#" + cleanPath;
      }
    } else {
      window.location.hash = "#" + cleanPath;
    }

    this.handleRoute();
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

    // Determine current route from hash or pathname
    let rawPath = "/";
    if (window.location.hash && window.location.hash.length > 1) {
      rawPath = window.location.hash.slice(1);
    } else if (window.location.pathname && window.location.pathname !== "/index.html") {
      rawPath = window.location.pathname;
    }

    if (!rawPath.startsWith("/")) rawPath = "/" + rawPath;
    const [pathOnly] = rawPath.split("?");
    const normalizedPath = pathOnly.toLowerCase().replace(/\/$/, "") || "/";
    this.currentRoute = normalizedPath;

    // 2. Hide all views
    document.querySelectorAll(".app-view").forEach((view) => {
      view.classList.remove("active");
    });

    // 3. Update active nav links
    this.updateActiveNavLinks(normalizedPath);

    // 4. Route dispatcher
    if (normalizedPath === "/" || normalizedPath === "/home") {
      this.showView("view-home");
      this.updateMetadata(
        "Helevate.fit | Better Health. Right in Your Community. | Hyderabad",
        "Measured, coach-led wellness programs inside Hyderabad’s gated communities. Helevate Body Report, 2-clients-per-slot coaching, and DEXA tracking in your clubhouse.",
        "https://helevate.fit/"
      );
    } else if (normalizedPath.startsWith("/programs/")) {
      const slug = normalizedPath.replace("/programs/", "");
      this.renderProgramDetail(slug);
    } else if (normalizedPath === "/programs" || normalizedPath === "/services") {
      this.showView("view-home");
      setTimeout(() => {
        const progSection = document.getElementById("homepage-programs");
        if (progSection) progSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
      this.updateMetadata(
        "Our Programs | Helevate RESET, RESTORE, BUILD & THRIVE | Hyderabad",
        "Explore four coach-led wellness programs delivered directly in your gated community clubhouse in Hyderabad: RESET, RESTORE, BUILD, and THRIVE.",
        "https://helevate.fit/programs"
      );
    } else if (normalizedPath === "/body-report" || normalizedPath === "/assessments" || normalizedPath === "/diagnostics") {
      this.showView("view-body-report");
      this.updateMetadata(
        "Helevate Body Report | DEXA Body Composition Scan, Hyderabad",
        "Know what your body is really made of. Accurate DEXA scan measuring body fat, visceral fat, lean muscle, and bone density with coach consultation in Hyderabad.",
        "https://helevate.fit/body-report"
      );
    } else if (normalizedPath === "/how-it-works" || normalizedPath === "/methodology") {
      this.showView("view-how-it-works");
      this.updateMetadata(
        "How It Works | 4-Step Clubhouse Coaching Roadmap | Helevate.fit",
        "Discover the 4-step Helevate journey: Body Report, personalized program, coach-led clubhouse sessions, and week-12 DEXA retest. Zero commute.",
        "https://helevate.fit/how-it-works"
      );
    } else if (normalizedPath === "/results" || normalizedPath === "/reviews") {
      this.showView("view-results");
      this.updateMetadata(
        "Measured Results | Objective Health Transformations | Helevate.fit",
        "How Helevate measures real results using DEXA baseline scans and week-12 retests. Individual results vary. No guesswork, no false claims.",
        "https://helevate.fit/results"
      );
    } else if (normalizedPath === "/for-communities" || normalizedPath === "/communities") {
      this.showView("view-for-communities");
      this.updateMetadata(
        "For Communities & RWAs | Bring Helevate to Your Clubhouse | Hyderabad",
        "Helevate is the premium wellness partner for gated communities in Hyderabad. We bring measured, coach-led health and performance programs into your clubhouse — so you get real results without the commute, the crowd or the guesswork.",
        "https://helevate.fit/for-communities"
      );
    } else if (normalizedPath === "/about" || normalizedPath === "/about-us") {
      this.showView("view-about");
      this.updateMetadata(
        "About Helevate Fit | Elevating Human Performance & Lifestyle",
        "Helevate is the premium wellness partner for gated communities in Hyderabad. We bring measured, coach-led health and performance programs into your clubhouse — so you get real results without the commute, the crowd or the guesswork.",
        "https://helevate.fit/about"
      );
    } else if (normalizedPath === "/insights" || normalizedPath === "/blog") {
      this.showView("view-insights");
      this.updateMetadata(
        "Health & Performance Insights | Helevate.fit Hyderabad",
        "Science-backed articles on visceral fat, lean muscle preservation after 35, DEXA interpretation, and joint-safe movement.",
        "https://helevate.fit/insights"
      );
    } else if (normalizedPath === "/careers" || normalizedPath === "/jobs") {
      this.showView("view-careers");
      this.updateMetadata(
        "Careers at Helevate Fit | Join Our Coaching Team | Hyderabad",
        "Join Helevate Fit as a certified Human Performance Coach delivering premium small-group training in gated community clubhouses across Hyderabad.",
        "https://helevate.fit/careers"
      );
    } else if (normalizedPath === "/contact" || normalizedPath === "/contact-us") {
      this.showView("view-contact");
      this.updateMetadata(
        "Contact Helevate Fit | WhatsApp, Phone & Office | Hyderabad",
        "Speak with Head Coach Harish or book your community Body Report. Connect on WhatsApp +91 99639 60259 or visit our Jubilee Hills office.",
        "https://helevate.fit/contact"
      );
    } else if (normalizedPath.startsWith("/in/")) {
      const commSlug = normalizedPath.replace("/in/", "");
      this.renderCommunityLanding(commSlug);
    } else if (normalizedPath === "/privacy-policy" || normalizedPath === "/privacy") {
      this.showView("view-privacy");
      this.updateMetadata(
        "Privacy Policy | Helevate Fit Pvt Ltd",
        "Privacy policy and data protection terms for Helevate Fit Pvt Ltd compliant with India's Digital Personal Data Protection Act, 2023.",
        "https://helevate.fit/privacy-policy"
      );
    } else if (normalizedPath === "/terms-of-service" || normalizedPath === "/terms") {
      this.showView("view-terms");
      this.updateMetadata(
        "Terms of Service | Helevate Fit Pvt Ltd",
        "Terms of service, membership rules, session attendance, and liability policies for Helevate Fit Pvt Ltd.",
        "https://helevate.fit/terms-of-service"
      );
    } else if (normalizedPath === "/medical-disclaimer" || normalizedPath === "/disclaimer") {
      this.showView("view-disclaimer");
      this.updateMetadata(
        "Medical Disclaimer | Helevate Fit Pvt Ltd",
        "Helevate provides fitness and performance coaching. It is not a substitute for medical advice, diagnosis or treatment.",
        "https://helevate.fit/medical-disclaimer"
      );
    } else {
      // Default fallback to home
      this.showView("view-home");
      this.updateMetadata(
        "Helevate.fit | Better Health. Right in Your Community.",
        "Measured, coach-led wellness programs inside Hyderabad’s gated communities.",
        "https://helevate.fit/"
      );
    }

    // Refresh Motion & Video engines if loaded
    if (window.MotionEngine && window.MotionEngine.refresh) {
      window.MotionEngine.refresh();
    }
    if (window.VideoEngine && window.VideoEngine.refresh) {
      window.VideoEngine.refresh();
    }

    // Trigger Analytics PageView
    if (window.App && window.App.trackPageView) {
      window.App.trackPageView(normalizedPath);
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
  },

  updateActiveNavLinks(normalizedPath) {
    const updateLinks = (selector) => {
      document.querySelectorAll(selector).forEach((link) => {
        const href = (link.getAttribute("href") || "").replace("#", "").toLowerCase();
        const isHome = (normalizedPath === "/" || normalizedPath === "/home") && (href === "/" || href === "");
        const isMatch = href.length > 1 && (normalizedPath === href || normalizedPath.startsWith(href + "/"));
        if (isHome || isMatch) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };
    updateLinks(".nav-link");
    updateLinks(".nav-link-mobile");
  },

  updateMetadata(title, description, canonicalUrl) {
    document.title = title;
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.name = "description";
      document.head.appendChild(descMeta);
    }
    descMeta.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl || `https://helevate.fit${this.currentRoute}`;

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;
  },

  renderProgramDetail(slug) {
    const progData = window.HELEVATE_DATA?.programs?.find((p) => p.slug === slug);
    if (!progData) {
      this.showView("view-home");
      return;
    }

    const container = document.getElementById("view-program-detail");
    if (!container) return;

    // Render the 10-Block Fixed Template with spacious, handsome Hero and balanced sections
    container.innerHTML = `
      <div class="program-detail-compact">
        <!-- Block 1: Hero (Spacious & Premium) -->
        <section class="section section-dark hero-program" style="padding: 68px 0 56px; position: relative;">
          <div class="container">
            <div style="max-width: 860px;">
              <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px; flex-wrap: wrap;">
                <span class="tag-program ${progData.tagClass}" style="margin: 0;">${progData.descriptor}</span>
                <span style="color: var(--color-gold-accent); font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;">Gated Communities • Hyderabad</span>
              </div>
              <h1 style="color: #FFFFFF; font-size: clamp(2.1rem, 4vw, 3rem); margin-bottom: 14px; font-weight: 700; line-height: 1.2;">
                ${progData.heroHeadline}
              </h1>
              <p style="color: var(--color-secondary-aqua); font-size: 1.15rem; line-height: 1.6; margin-bottom: 24px; max-width: 760px;">
                ${progData.subtitle}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 28px;">
                ${progData.trustPoints.map(tp => `
                  <div style="display: flex; align-items: center; gap: 8px; color: #FFFFFF; font-size: 0.9rem; background: rgba(255,255,255,0.08); padding: 7px 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.14);">
                    <span style="color: var(--color-gold-accent); font-weight: 700;">✓</span> ${tp}
                  </div>
                `).join('')}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 14px;">
                <a href="#booking-form-anchor" class="btn btn-gold btn-lead-scroll" style="padding: 13px 26px; font-size: 1rem;">Book My Body Report</a>
                <a href="https://wa.me/919963960259?text=${encodeURIComponent("Hi Helevate, I'd like to ask about " + progData.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 13px 24px; font-size: 1rem;">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Block 2: The Problem -->
        <section class="section" style="padding: 44px 0; background: #FFFFFF;">
          <div class="container container-narrow">
            <div style="background: var(--color-bg-subtle); border-left: 4px solid var(--color-gold-accent); padding: 26px 30px; border-radius: 0 14px 14px 0; box-shadow: var(--shadow-subtle);">
              <div style="color: var(--color-gold-accent); font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">The Real Challenge</div>
              <h3 style="color: var(--color-primary-navy); font-size: 1.35rem; margin-bottom: 10px; font-weight: 700; font-style: italic;">
                “${progData.clientQuote || "Normal weight, but belly fat won't go"}”
              </h3>
              <p style="color: var(--color-text-main); font-size: 1rem; line-height: 1.65; margin: 0;">
                ${progData.problemCopy}
              </p>
            </div>
          </div>
        </section>

        <!-- Block 3: Who It's For / Who It's Not For -->
        <section class="section section-light-blue" style="padding: 48px 0;">
          <div class="container">
            <div class="section-header text-center" style="max-width: 680px; margin: 0 auto 24px;">
              <span class="badge badge-navy">Suitability Check</span>
              <h2 class="section-title">Is ${progData.name} Right For You?</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              <div style="background: #FFFFFF; padding: 26px 24px; border-radius: 14px; border: 1px solid rgba(14,58,93,0.1); box-shadow: var(--shadow-card);">
                <h4 style="color: #2E9A68; font-size: 1.1rem; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <span style="font-weight: 800;">✓</span> Who It's For
                </h4>
                <ul style="display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; list-style: none;">
                  ${progData.whoItsFor.map(item => `
                    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.94rem; color: var(--color-text-main); line-height: 1.5;">
                      <span style="color: #2E9A68; font-weight: bold; flex-shrink: 0;">•</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div style="background: #FFFFFF; padding: 26px 24px; border-radius: 14px; border: 1px solid rgba(14,58,93,0.1); box-shadow: var(--shadow-card);">
                <h4 style="color: #C59B27; font-size: 1.1rem; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
                  <span style="font-weight: 800;">✕</span> Who It's Not For
                </h4>
                <ul style="display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; list-style: none;">
                  ${progData.whoItsNotFor.map(item => `
                    <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.94rem; color: var(--color-text-main); line-height: 1.5;">
                      <span style="color: #C59B27; font-weight: bold; flex-shrink: 0;">•</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Block 4: What You Get -->
        <section class="section" style="padding: 48px 0;">
          <div class="container">
            <div class="section-header text-center" style="max-width: 680px; margin: 0 auto 24px;">
              <span class="badge badge-teal">Full Inclusions</span>
              <h2 class="section-title">What You Receive in ${progData.name}</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px;">
              ${progData.whatYouGet.map(inc => `
                <div style="background: #FFFFFF; border: 1px solid rgba(14,58,93,0.1); border-radius: 12px; padding: 16px 18px; display: flex; gap: 12px; align-items: center; box-shadow: var(--shadow-subtle);">
                  <div style="width: 30px; height: 30px; border-radius: 50%; background: rgba(14,58,93,0.08); color: var(--color-primary-navy); display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div style="font-size: 0.94rem; font-weight: 600; color: var(--color-primary-navy); line-height: 1.4;">${inc}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Block 5: Your Week (5-Day Strip) -->
        <section class="section section-light-blue" style="padding: 48px 0;">
          <div class="container">
            <div class="section-header text-center" style="max-width: 700px; margin: 0 auto 24px;">
              <span class="badge badge-navy">Simple 5-Day Strip</span>
              <h2 class="section-title">Your Week: 4 Coached + 1 Guided</h2>
              <p style="color: var(--color-text-muted); font-size: 0.94rem; margin-top: 6px;">Small-group coaching (2 per slot) so your coach watches every single rep.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; margin-bottom: 20px;">
              ${(progData.yourWeek?.simple5Day || []).map(s => `
                <div style="background: #FFFFFF; border-radius: 12px; padding: 18px 16px; text-align: center; border: 1px solid rgba(14,58,93,0.1); box-shadow: var(--shadow-subtle); display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="font-weight: 800; color: var(--color-primary-navy); font-size: 1.05rem; margin-bottom: 4px;">${s.day}</div>
                    <span style="display: inline-block; font-size: 0.72rem; font-weight: 800; color: ${s.type === 'Guided' ? '#C59B27' : '#0E3A5D'}; background: ${s.type === 'Guided' ? 'rgba(197,155,39,0.12)' : 'rgba(14,58,93,0.08)'}; padding: 3px 9px; border-radius: 999px; text-transform: uppercase; margin-bottom: 8px;">
                      ${s.type}
                    </span>
                    <div style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-main); line-height: 1.35; margin-bottom: 8px;">${s.title}</div>
                  </div>
                  <div style="font-size: 0.76rem; color: var(--color-text-muted); padding-top: 8px; border-top: 1px dashed rgba(14,58,93,0.1);">${s.location}</div>
                </div>
              `).join('')}
            </div>
            <div style="text-align: center; background: #FFFFFF; border-radius: 12px; padding: 14px 20px; border: 1px solid rgba(14,58,93,0.08); max-width: 720px; margin: 0 auto; box-shadow: var(--shadow-subtle);">
              <p style="color: var(--color-text-muted); font-size: 0.9rem; margin: 0;">
                <strong>Clubhouse Sessions:</strong> ${progData.yourWeek?.commonNote || "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."}
              </p>
            </div>
          </div>
        </section>

        <!-- Block 6: Your 12 Weeks -->
        <section class="section" style="padding: 48px 0;">
          <div class="container container-narrow">
            <div class="section-header text-center" style="margin-bottom: 24px;">
              <span class="badge badge-teal">The 12-Week Roadmap</span>
              <h2 class="section-title">Your 12 Weeks: 3 Clear Phases</h2>
            </div>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${progData.your12Weeks.map(w => `
                <div style="background: #FFFFFF; border-radius: 12px; padding: 18px 22px; border: 1px solid rgba(14,58,93,0.12); box-shadow: var(--shadow-subtle); display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                  <div style="font-weight: 800; color: var(--color-primary-navy); font-size: 0.96rem; min-width: 130px; border-left: 3px solid var(--color-gold-accent); padding-left: 12px;">${w.phase}</div>
                  <div style="flex: 1; min-width: 220px;">
                    <h4 style="font-size: 1rem; color: var(--color-primary-navy); margin-bottom: 3px; font-weight: 700;">${w.title}</h4>
                    <p style="font-size: 0.9rem; color: var(--color-text-muted); margin: 0; line-height: 1.5;">${w.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Block 7: How We Measure -->
        <section class="section section-dark" style="padding: 50px 0;">
          <div class="container container-narrow text-center">
            <span class="badge badge-teal" style="margin-bottom: 10px;">How We Measure</span>
            <h2 style="color: #FFFFFF; font-size: clamp(1.5rem, 2.8vw, 2rem); margin-bottom: 10px;">Baseline Body Report → Week 12 Retest</h2>
            <p style="color: var(--color-secondary-aqua); font-size: 1rem; line-height: 1.55; margin-bottom: 24px; max-width: 680px; margin-inline: auto;">
              ${progData.measureSummary}
            </p>

            <!-- 3-Step Flow Diagram -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-bottom: 20px;">
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px 18px;">
                <div style="color: var(--color-gold-accent); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 6px;">Week 1</div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.96rem; margin-bottom: 4px;">DEXA Baseline Scan</div>
                <div style="color: var(--color-secondary-aqua); font-size: 0.82rem;">Visceral fat, muscle, bone density</div>
              </div>
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px 18px;">
                <div style="color: var(--color-gold-accent); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 6px;">Weeks 1–12</div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.96rem; margin-bottom: 4px;">Clubhouse Coaching</div>
                <div style="color: var(--color-secondary-aqua); font-size: 0.82rem;">2 clients per slot, WhatsApp guidance</div>
              </div>
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px 18px;">
                <div style="color: var(--color-gold-accent); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 6px;">Week 12</div>
                <div style="color: #FFFFFF; font-weight: 700; font-size: 0.96rem; margin-bottom: 4px;">Objective DEXA Retest</div>
                <div style="color: var(--color-secondary-aqua); font-size: 0.82rem;">Identical calibration comparison</div>
              </div>
            </div>

            <p style="color: var(--color-text-inverse-muted); font-size: 0.82rem; font-style: italic; margin: 0;">
              ${window.HELEVATE_DATA?.brand?.resultsDisclaimer || "Individual results vary."}
            </p>
          </div>
        </section>

        <!-- Block 8: Real Proof -->
        <section class="section" style="padding: 44px 0; background: #FFFFFF;">
          <div class="container container-narrow text-center">
            <span class="badge badge-navy" style="margin-bottom: 10px;">Real Proof Policy</span>
            <h3 style="color: var(--color-primary-navy); font-size: 1.35rem; margin-bottom: 10px; font-weight: 700;">
              Objective Clinical Proof Over Unverified Marketing
            </h3>
            <p style="color: var(--color-text-main); font-size: 0.96rem; line-height: 1.6; max-width: 680px; margin: 0 auto 16px;">
              We do not manufacture before-and-after photos or promise unrealistic overnight transformations. Every Helevate client journey is documented through clinical DEXA body composition scans under identical calibration. Verified, consented case studies are published only with explicit client authorization.
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--color-bg-subtle); padding: 8px 18px; border-radius: 999px; font-size: 0.85rem; color: var(--color-text-dim);">
              <span>🛡️</span> Verified coach credentials • Clinical DEXA calibration • Consented data
            </div>
          </div>
        </section>

        <!-- Block 9: FAQs -->
        <section class="section section-light-blue" style="padding: 48px 0;">
          <div class="container">
            <div class="section-header text-center" style="max-width: 680px; margin: 0 auto 24px;">
              <span class="badge badge-navy">Frequently Asked Questions</span>
              <h2 class="section-title">Common Questions About ${progData.name}</h2>
            </div>
            <div class="faq-accordion-clean" style="max-width: 740px; margin: 0 auto;">
              ${progData.faqs.map(faq => `
                <details class="faq-item-clean" style="margin-bottom: 12px; background: #FFFFFF; border-radius: 10px; border: 1px solid rgba(14,58,93,0.1);">
                  <summary class="faq-summary-clean" style="padding: 14px 18px; font-size: 0.96rem; font-weight: 600;">
                    <span>${faq.q}</span>
                    <span style="font-size: 1.15rem; color: var(--color-primary-navy);">+</span>
                  </summary>
                  <div class="faq-content-clean" style="padding: 0 18px 16px; font-size: 0.92rem; line-height: 1.55; color: var(--color-text-main);">${faq.a}</div>
                </details>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Block 10: Final Button & Lead Form -->
        <section class="section" id="booking-form-anchor" style="padding: 52px 0; background: #FFFFFF;">
          <div class="container container-narrow">
            <div style="background: #FFFFFF; border-radius: 16px; border: 1px solid rgba(14,58,93,0.15); box-shadow: var(--shadow-card); padding: 34px 30px;">
              <div class="text-center" style="margin-bottom: 22px;">
                <span class="badge badge-teal">Step 1: Your Body Report</span>
                <h2 style="font-size: 1.7rem; color: var(--color-primary-navy); margin-top: 8px; margin-bottom: 6px; font-weight: 700;">
                  Book Your ${progData.name} Consultation
                </h2>
                <p style="color: var(--color-text-muted); font-size: 0.94rem; margin: 0;">
                  Your coach will review your goals and schedule your baseline Body Report inside your community.
                </p>
              </div>
              
              <form class="lead-gen-form" data-source="program-${progData.slug}">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                  <div>
                    <label style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Full Name *</label>
                    <input type="text" class="form-control lead-input-name" placeholder="e.g. Rahul Sharma" required style="width: 100%; padding: 11px 14px; border-radius: 8px; border: 1px solid var(--color-border); font-family: var(--font-body); font-size: 0.94rem;">
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">WhatsApp Number * (+91)</label>
                    <input type="tel" class="form-control lead-input-phone" placeholder="e.g. 9876543210" pattern="[0-9]{10}" required style="width: 100%; padding: 11px 14px; border-radius: 8px; border: 1px solid var(--color-border); font-family: var(--font-body); font-size: 0.94rem;">
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                  <div>
                    <label style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Gated Community *</label>
                    <select class="form-control lead-input-community" required style="width: 100%; padding: 11px 14px; border-radius: 8px; border: 1px solid var(--color-border); font-family: var(--font-body); font-size: 0.94rem;">
                      <option value="" disabled selected>Select Your Society</option>
                      ${(window.HELEVATE_DATA?.dropdownCommunities || []).map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">Best Time to Call</label>
                    <select class="form-control lead-input-time" style="width: 100%; padding: 11px 14px; border-radius: 8px; border: 1px solid var(--color-border); font-family: var(--font-body); font-size: 0.94rem;">
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div style="margin-bottom: 18px;">
                  <label style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.84rem; color: var(--color-text-muted); cursor: pointer;">
                    <input type="checkbox" required style="margin-top: 2px;" class="lead-input-consent">
                    <span>I agree to be contacted on WhatsApp / phone. View <a href="#/privacy-policy" style="color: var(--color-primary-navy); text-decoration: underline;">Privacy Policy</a>.</span>
                  </label>
                </div>

                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <button type="submit" class="btn btn-gold" style="flex: 2; padding: 13px 20px; font-size: 1rem;">
                    Book My Body Report →
                  </button>
                  <a href="https://wa.me/919963960259?text=${encodeURIComponent("Hi Helevate, I'd like to book my Body Report for " + progData.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1; padding: 13px 18px; font-size: 1rem;">
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    `;

    this.showView("view-program-detail");
    this.updateMetadata(
      `${progData.name} | ${progData.descriptor} in Gated Communities, Hyderabad`,
      `${progData.subtitle} Delivered inside your community clubhouse gym in Hyderabad. Baseline Body Report and week-12 retest.`,
      `https://helevate.fit/programs/${slug}`
    );

    // Rebind form listeners for the newly injected view
    if (window.App && window.App.bindLeadForms) {
      window.App.bindLeadForms();
    }
  },

  renderCommunityLanding(slug) {
    const comm = window.HELEVATE_DATA?.communities?.find((c) => c.slug === slug);
    if (!comm) {
      this.showView("view-home");
      return;
    }

    const container = document.getElementById("view-community-landing");
    if (!container) return;

    container.innerHTML = `
      <section class="section section-dark" style="padding-top: 100px; padding-bottom: 60px;">
        <div class="container container-narrow text-center">
          <span class="badge badge-teal" style="margin-bottom: 14px;">${comm.tagline}</span>
          <h1 style="color: #FFFFFF; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.15; margin-bottom: 18px;">
            ${comm.headline}
          </h1>
          <p style="color: var(--color-secondary-aqua); font-size: 1.15rem; line-height: 1.6; max-width: 720px; margin: 0 auto 28px;">
            ${comm.commuteText}
          </p>
          <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.08); padding: 8px 18px; border-radius: 999px; color: #FFFFFF; font-size: 0.92rem; margin-bottom: 30px;">
            <span style="color: var(--color-gold-accent);">🕒</span> Available Clubhouse Hours: ${comm.slots}
          </div>
          <div>
            <a href="#community-booking-anchor" class="btn btn-gold btn-lead-scroll">Book My Body Report in ${comm.name}</a>
          </div>
        </div>
      </section>

      <section class="section" style="padding: 60px 0; background: #FFFFFF;">
        <div class="container container-narrow">
          <div class="section-header text-center" style="margin-bottom: 36px;">
            <span class="badge badge-navy">Local Clubhouse Access</span>
            <h2 class="section-title">Bringing Coach-Led Health to ${comm.name}</h2>
            <p style="color: var(--color-text-muted);">Serving residents across ${comm.landmarks}</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 48px;">
            <div style="background: var(--color-bg-subtle); padding: 26px; border-radius: 14px; text-align: center;">
              <h4 style="color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">Zero Commute</h4>
              <p style="font-size: 0.92rem; color: var(--color-text-main); margin: 0;">Step from your elevator into your community clubhouse gym. No traffic jams on ORR or main roads.</p>
            </div>
            <div style="background: var(--color-bg-subtle); padding: 26px; border-radius: 14px; text-align: center;">
              <h4 style="color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">DEXA-Measured</h4>
              <p style="font-size: 0.92rem; color: var(--color-text-main); margin: 0;">Track body fat, visceral fat, muscle and bone. Retested at week 12 to verify real progress.</p>
            </div>
            <div style="background: var(--color-bg-subtle); padding: 26px; border-radius: 14px; text-align: center;">
              <h4 style="color: var(--color-primary-navy); margin-bottom: 8px; font-weight: 700;">Small Groups of Two</h4>
              <p style="font-size: 0.92rem; color: var(--color-text-main); margin: 0;">Dedicated coach attention. Form checks on every rep. Weekly WhatsApp support.</p>
            </div>
          </div>

          <!-- Community Booking Form -->
          <div id="community-booking-anchor" style="background: #FFFFFF; border-radius: 20px; border: 1px solid rgba(14,58,93,0.15); box-shadow: var(--shadow-card); padding: 40px 32px;">
            <h3 style="color: var(--color-primary-navy); font-size: 1.6rem; text-align: center; margin-bottom: 8px; font-weight: 700;">
              Check Availability in ${comm.name}
            </h3>
            <p style="color: var(--color-text-muted); font-size: 0.94rem; text-align: center; margin-bottom: 24px;">
              Request your Helevate Body Report or ask how to bring our coaches into your society clubhouse.
            </p>

            <form class="lead-gen-form" data-source="local-${comm.slug}">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                <input type="text" class="form-control lead-input-name" placeholder="Full Name *" required style="padding: 12px 14px; border-radius: 10px; border: 1px solid var(--color-border);">
                <input type="tel" class="form-control lead-input-phone" placeholder="WhatsApp Phone * (10 digits)" pattern="[0-9]{10}" required style="padding: 12px 14px; border-radius: 10px; border: 1px solid var(--color-border);">
              </div>
              <div style="margin-bottom: 14px;">
                <input type="text" class="form-control lead-input-community" placeholder="Society / Gated Community in ${comm.name} *" required style="width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--color-border);">
              </div>
              <div style="margin-bottom: 20px;">
                <label style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--color-text-muted);">
                  <input type="checkbox" required class="lead-input-consent">
                  <span>I agree to be contacted on WhatsApp / phone. <a href="#/privacy-policy" style="color: var(--color-primary-navy); text-decoration: underline;">Privacy Policy</a>.</span>
                </label>
              </div>
              <button type="submit" class="btn btn-gold" style="width: 100%; padding: 14px;">
                Request Body Report in ${comm.name} →
              </button>
            </form>
          </div>
        </div>
      </section>
    `;

    this.showView("view-community-landing");
    this.updateMetadata(
      `Health Coaching in ${comm.name} Gated Communities | Helevate.fit`,
      `Measured, coach-led wellness programs inside ${comm.name} community clubhouses. Zero commute. DEXA-measured body reports.`,
      `https://helevate.fit/in/${slug}`
    );

    if (window.App && window.App.bindLeadForms) {
      window.App.bindLeadForms();
    }
  }
};

if (typeof window !== "undefined") {
  window.Router = Router;
}
