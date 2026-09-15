/**
 * HELEVATE.FIT — MAIN APPLICATION CONTROLLER
 * Controls all dynamic renderers, interactive visualizers,
 * animations, consultation conversion engine, and client dashboard.
 * Design Inspiration: Tulah Life, Sunrooof, A Better Lou
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  consultationState: {
    name: "",
    phone: "",
    society: "",
    goal: "Fat Loss",
    preferredTime: "Morning (7 AM – 10 AM)"
  },

  init() {
    this.renderHome();
    this.renderPrograms();
    this.renderAssessmentsOverview();
    this.renderHowItWorks();
    this.renderAbout();
    this.renderMemberships();
    this.renderCommunities();
    this.renderTestimonials();
    this.renderCareers();
    this.renderInsights();
    this.renderReportsConcept();
    this.bindHeader();
    this.bindHeroVisualizer();
    this.bindConsultationForm();
    this.bindNominateSocietyForm();
    this.bindCareerModal();
    this.bindInsightModal();
    this.bindContactForm();
    this.bindCinemaModal();
    this.initScrollObserver();

    if (window.ScrollMotionEngine && window.ScrollMotionEngine.init) {
      window.ScrollMotionEngine.init();
    }

    if (window.VideoEngine && window.VideoEngine.init) {
      window.VideoEngine.init();
    }

    if (window.Router) {
      window.Router.init();
    }
  },

  // --------------------------------------------------------------------------
  // 1. RENDER HOME & KEY SECTIONS
  // --------------------------------------------------------------------------
  renderHome() {
    // 1. Render Assessment Cards (Section 10)
    const assessmentsContainer = document.getElementById("home-assessments-grid");
    if (assessmentsContainer) {
      assessmentsContainer.innerHTML = HELEVATE_DATA.assessments.map((a, idx) => `
        <div class="assessment-card reveal-on-scroll">
          <div class="assessment-card-img">
            <div class="assessment-card-num">0${idx + 1}</div>
            <img src="${a.image}" alt="${a.title}" loading="lazy">
            <div class="assessment-card-img-scrim"></div>
          </div>
          <div class="assessment-card-body">
            <div>
              <span class="badge badge-navy" style="font-size: 0.72rem; padding: 4px 12px; margin-bottom: 10px;">${a.badge}</span>
              <h3>${a.title}</h3>
              <p>${a.shortDesc}</p>
            </div>
            <a href="#/assessments/${a.id}" class="assessment-card-link">Learn More →</a>
          </div>
        </div>
      `).join("");
    }

    // 2. Render Program Cards (Section 12)
    const programsContainer = document.getElementById("home-programs-grid");
    if (programsContainer) {
      programsContainer.innerHTML = HELEVATE_DATA.programs.map((p, idx) => `
        <div class="program-card reveal-on-scroll">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span class="badge badge-navy">${p.badge}</span>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-dim);">PROTOCOL 0${idx + 1}</span>
            </div>
            <h3>${p.title}</h3>
            <p>${p.shortDesc}</p>
            <ul class="program-bullets">
              ${p.bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>
          <div style="margin-top: 24px;">
            <a href="#/booking" class="btn btn-primary btn-sm" style="width: 100%; text-align: center;">Find Your Program →</a>
          </div>
        </div>
      `).join("");
    }

    // 3. Render 3-Tier Memberships (Section 22)
    const membershipsContainer = document.getElementById("home-memberships-grid");
    if (membershipsContainer) {
      membershipsContainer.innerHTML = HELEVATE_DATA.memberships.map((m, idx) => `
        <div class="pricing-card ${idx === 1 ? 'featured' : ''} reveal-on-scroll">
          <div>
            <div class="pricing-card-header">
              <span class="badge badge-navy" style="margin-bottom: 10px;">${m.badge}</span>
              <h3>${m.name}</h3>
              <div class="pricing-card-tagline">${m.tagline}</div>
            </div>
            <div class="pricing-card-price-box">
              <div class="pricing-display-text">${m.pricingDisplay}</div>
            </div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.6;">${m.description}</p>
            <ul class="pricing-features-list">
              ${m.features.map(f => `<li>${f}</li>`).join("")}
            </ul>
          </div>
          <a href="#/booking" class="btn ${idx === 1 ? 'btn-primary' : 'btn-secondary'} btn-sm" style="width: 100%; text-align: center;">
            ${m.cta} →
          </a>
        </div>
      `).join("");
    }
  },

  // --------------------------------------------------------------------------
  // 2. RENDER PROGRAMS & PROTOCOLS VIEW
  // --------------------------------------------------------------------------
  renderPrograms() {
    const container = document.getElementById("programs-list-container");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.programs.map((p, idx) => `
      <div class="card-clean reveal-on-scroll" style="margin-bottom: 24px; padding: 28px 24px;">
        <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 28px; align-items: center;">
          <div style="width: 100%; height: 230px; border-radius: var(--radius-md); overflow: hidden; position: relative; box-shadow: var(--shadow-card);">
            <div style="position: absolute; top: 12px; left: 12px; background: rgba(7, 34, 56, 0.85); color: #FFFFFF; padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.72rem; font-weight: 700; z-index: 2; border: 1px solid rgba(221,241,239,0.3);">
              DISCIPLINE 0${idx + 1}
            </div>
            <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div>
            <span class="badge badge-navy" style="margin-bottom: 8px;">${p.badge}</span>
            <h2 style="font-size: 1.7rem; color: var(--color-primary-navy); margin-bottom: 10px;">${p.title}</h2>
            <p style="font-size: 0.98rem; color: var(--color-text-muted); margin-bottom: 16px; line-height: 1.65;">${p.longDesc}</p>
            <ul class="program-bullets" style="margin-bottom: 20px;">
              ${p.bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
            <a href="#/booking" class="btn btn-primary">Find Your Program →</a>
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 3. RENDER ASSESSMENTS OVERVIEW
  // --------------------------------------------------------------------------
  renderAssessmentsOverview() {
    const container = document.getElementById("assessments-overview-grid");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.assessments.map((a, idx) => `
      <div class="assessment-card reveal-on-scroll">
        <div class="assessment-card-img">
          <div class="assessment-card-num">0${idx + 1}</div>
          <img src="${a.image}" alt="${a.title}" loading="lazy">
          <div class="assessment-card-img-scrim"></div>
        </div>
        <div class="assessment-card-body">
          <div>
            <span class="badge badge-navy" style="font-size: 0.72rem; padding: 4px 12px; margin-bottom: 10px;">${a.badge}</span>
            <h3>${a.title}</h3>
            <p>${a.shortDesc}</p>
          </div>
          <div style="margin-top: 18px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <a href="#/assessments/${a.id}" class="assessment-card-link">View Protocol →</a>
            <a href="#/booking" class="btn btn-primary btn-sm">Book Scan</a>
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 4. RENDER HOW IT WORKS VIEW
  // --------------------------------------------------------------------------
  renderHowItWorks() {
    const container = document.getElementById("how-it-works-timeline-container");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.howItWorksSteps.map((s, idx) => `
      <div class="timeline-step-row reveal-on-scroll" data-step-index="${idx}">
        <div class="timeline-step-num">${s.step}</div>
        <div class="timeline-step-content">
          <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-dim); margin-bottom: 4px; letter-spacing: 0.05em;">${s.name}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div style="margin-top: 10px; font-size: 0.88rem; font-weight: 600; color: var(--color-primary-navy); background: var(--color-bg-subtle); padding: 8px 14px; border-radius: var(--radius-sm); display: inline-block;">
            💡 ${s.details}
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 5. RENDER ABOUT & TEAM VIEW
  // --------------------------------------------------------------------------
  renderAbout() {
    const container = document.getElementById("about-team-grid");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.team.map(t => `
      <div class="team-card reveal-on-scroll">
        <div class="team-card-media">
          <img src="${t.photo}" alt="${t.name}" class="team-card-img" loading="lazy">
          <div class="team-card-scrim"></div>
          <div class="team-card-badge-floating">${t.badge || "Faculty"}</div>
          <div class="team-card-exp-tag">${t.experience || "Certified"}</div>
        </div>
        <div class="team-card-body">
          <div class="team-card-header">
            <h3 class="team-card-name">${t.name}</h3>
            <div class="team-card-role-title">${t.role}</div>
          </div>
          
          <div class="team-card-cert-box">
            <span class="team-card-cert-icon">🎓</span>
            <span class="team-card-cert-text">${t.certification}</span>
          </div>

          <div class="team-card-specialty-box">
            <strong>Clinical Focus:</strong> ${t.specialty}
          </div>

          <p class="team-card-bio-text">${t.bio}</p>

          <div class="team-card-capabilities-list">
            ${(t.capabilities || []).map(cap => `
              <span class="team-card-cap-pill">✓ ${cap}</span>
            `).join("")}
          </div>

          <div class="team-card-footer">
            <a href="#/booking" class="team-card-cta-link">Book Consultation →</a>
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 6. RENDER MEMBERSHIPS & PRICING
  // --------------------------------------------------------------------------
  renderMemberships() {
    const container = document.getElementById("pricing-page-grid");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.memberships.map((m, idx) => `
      <div class="pricing-card ${idx === 1 ? 'featured' : ''} reveal-on-scroll">
        <div>
          <div class="pricing-card-header">
            <span class="badge badge-navy" style="margin-bottom: 10px;">${m.badge}</span>
            <h3>${m.name}</h3>
            <div class="pricing-card-tagline">${m.tagline}</div>
          </div>
          <div class="pricing-card-price-box">
            <div class="pricing-display-text">${m.pricingDisplay}</div>
          </div>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.6;">${m.description}</p>
          <ul class="pricing-features-list">
            ${m.features.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>
        <a href="#/booking" class="btn ${idx === 1 ? 'btn-primary' : 'btn-secondary'} btn-sm" style="width: 100%; text-align: center;">
          ${m.cta} →
        </a>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 7. RENDER COMMUNITIES WE SERVE
  // --------------------------------------------------------------------------
  renderCommunities() {
    const container = document.getElementById("communities-list-grid");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.communities.map(c => `
      <div class="community-card reveal-on-scroll">
        <div>
          <span class="community-status-badge">${c.status}</span>
          <h3>${c.name}</h3>
          <div class="community-card-loc">📍 ${c.location}</div>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.6;">${c.description}</p>
          <div style="font-size: 0.825rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 22px; background: var(--color-bg-subtle); padding: 8px 12px; border-radius: var(--radius-sm);">
            ⏰ ${c.availability}
          </div>
        </div>
        <div style="display: flex; gap: 10px;">
          <a href="#/communities/${c.slug}" class="btn btn-secondary btn-sm" style="flex: 1; text-align: center;">View Society →</a>
          <a href="#/booking" class="btn btn-primary btn-sm">Book</a>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 7b. RENDER TESTIMONIALS & CLINICAL CASE STUDIES
  // --------------------------------------------------------------------------
  renderTestimonials() {
    const container = document.getElementById("testimonials-container");
    if (!container || !HELEVATE_DATA.testimonials) return;

    container.innerHTML = HELEVATE_DATA.testimonials.map(t => `
      <div class="testimonial-card reveal-on-scroll">
        <div>
          <div class="testimonial-header">
            <div class="testimonial-avatar-wrap">
              <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy">
              <span class="testimonial-verified-badge" title="Verified Gated Community Resident">✓</span>
            </div>
            <div class="testimonial-author-meta">
              <h4 class="testimonial-name">${t.name}</h4>
              <div class="testimonial-role">${t.role}</div>
              <div class="testimonial-community">📍 ${t.community}</div>
            </div>
          </div>

          <div class="testimonial-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>

          <p class="testimonial-quote">“${t.quote}”</p>
        </div>

        <div>
          <div class="testimonial-program-tag">
            🎯 ${t.program}
          </div>

          <div class="testimonial-metrics-row">
            ${t.metrics.map(m => `
              <div class="testimonial-metric-chip">
                <span class="metric-chip-label">${m.label}</span>
                <span class="metric-chip-val">${m.change}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 8. RENDER CAREERS PAGE
  // --------------------------------------------------------------------------
  renderCareers() {
    const container = document.getElementById("careers-roles-container");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.careers.roles.map(r => `
      <div class="card-clean reveal-on-scroll" style="margin-bottom: 26px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
          <div>
            <span class="badge badge-navy" style="margin-bottom: 8px;">${r.type}</span>
            <h3 style="font-size: 1.45rem; color: var(--color-primary-navy); margin-bottom: 6px;">${r.title}</h3>
            <div style="font-size: 0.88rem; font-weight: 700; color: var(--color-text-muted);">📍 ${r.location}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.openCareerModal('${r.id}', '${r.title}')">Apply for Position →</button>
        </div>
        <div style="margin-bottom: 14px; font-size: 0.92rem; color: var(--color-text-main); line-height: 1.6;">
          <strong>Requirements:</strong> ${r.requirements}
        </div>
        <div style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6;">
          <strong>Key Responsibilities:</strong> ${r.responsibilities}
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 9. RENDER CLINICAL INSIGHTS BLOG
  // --------------------------------------------------------------------------
  renderInsights() {
    const container = document.getElementById("insights-articles-grid");
    if (!container) return;

    container.innerHTML = HELEVATE_DATA.insights.map(i => `
      <div class="insight-card reveal-on-scroll" onclick="App.openInsightModal('${i.id}')">
        <img src="${i.image}" alt="${i.title}" class="insight-card-img" loading="lazy">
        <div class="insight-card-body">
          <div>
            <span class="badge badge-navy" style="margin-bottom: 10px;">${i.category} &bull; ${i.readTime}</span>
            <h3>${i.title}</h3>
            <p>${i.excerpt}</p>
          </div>
          <div style="font-size: 0.885rem; font-weight: 700; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px;">
            Read Clinical Analysis →
          </div>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // 10. RENDER REPORTS CONCEPT
  // --------------------------------------------------------------------------
  renderReportsConcept() {
    const container = document.getElementById("reports-concept-container");
    if (!container) return;

    const r = HELEVATE_DATA.sampleReport;
    container.innerHTML = `
      <div class="card-clean reveal-on-scroll" style="max-width: 980px; margin: 0 auto; padding: 28px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border); padding-bottom: 18px; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
          <div>
            <span class="badge badge-navy" style="margin-bottom: 6px;">Clinical Synthesis Dashboard</span>
            <h2 style="font-size: 1.7rem; color: var(--color-primary-navy); margin-bottom: 4px;">Quarterly Health & Performance Report</h2>
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">Client: ${r.clientName} &bull; Cycle: ${r.assessmentDate}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div class="circle-progress-container" style="width: 72px; height: 72px;">
              <svg viewBox="0 0 60 60">
                <circle class="circle-progress-bg" cx="30" cy="30" r="25" />
                <circle class="circle-progress-bar" cx="30" cy="30" r="25" data-percent="${r.overallScore}" />
              </svg>
              <div class="circle-progress-center" style="font-size: 1.05rem;">${r.overallScore}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-dim); letter-spacing: 0.05em;">Composite Score</div>
              <div style="font-weight: 700; color: var(--color-primary-navy); font-size: 0.95rem;">Optimal Zone</div>
            </div>
          </div>
        </div>

        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 24px;">
          ${r.summary}
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 26px;">
          <div class="card-blue reveal-on-scroll" style="padding: 18px 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-primary-navy);">1. Lean Mass & Strength</div>
              <div class="pulse-radar-dot"></div>
            </div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">${r.pillars.fitness.stat}</div>
            <p style="font-size: 0.825rem; color: var(--color-primary-navy); margin-bottom: 0; line-height: 1.45;">${r.pillars.fitness.detail}</p>
          </div>
          <div class="card-blue reveal-on-scroll" style="padding: 18px 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-primary-navy);">2. Insulin & Blood Chemistry</div>
              <div class="pulse-radar-dot"></div>
            </div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">${r.pillars.nutrition.stat}</div>
            <p style="font-size: 0.825rem; color: var(--color-primary-navy); margin-bottom: 0; line-height: 1.45;">${r.pillars.nutrition.detail}</p>
          </div>
          <div class="card-blue reveal-on-scroll" style="padding: 18px 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--color-primary-navy);">3. Autonomic & Recovery</div>
              <div class="pulse-radar-dot"></div>
            </div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px;">${r.pillars.recovery.stat}</div>
            <p style="font-size: 0.825rem; color: var(--color-primary-navy); margin-bottom: 0; line-height: 1.45;">${r.pillars.recovery.detail}</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 14px;">
          <a href="#/booking" class="btn btn-primary btn-lg">Book Your Starting Assessment →</a>
        </div>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // 11. INTERACTIVE HERO SILHOUETTE & PARTICLE CANVAS VISUALIZER
  // --------------------------------------------------------------------------
  bindHeroVisualizer() {
    const canvas = document.getElementById("hero-particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.parentElement.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement.clientHeight || 380);

    const particles = [];
    const particleCount = 32;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1,
        alpha: Math.random() * 0.55 + 0.25
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines in mint cyan
      ctx.strokeStyle = "rgba(221, 241, 239, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(221, 241, 239, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    });
  },

  // --------------------------------------------------------------------------
  // 12. DEDICATED BOOK CONSULTATION FORM (Section 19)
  // --------------------------------------------------------------------------
  initConsultationForm() {
    const goalBtns = document.querySelectorAll(".goal-option-btn");
    goalBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        goalBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.consultationState.goal = btn.getAttribute("data-goal") || "Fat Loss";
      });
    });
  },

  bindConsultationForm() {
    this.initConsultationForm();

    const form = document.getElementById("consultation-page-form");
    const formCard = document.getElementById("consultation-form-wrapper");
    const confirmBox = document.getElementById("consultation-confirmation-box");
    const confirmDetails = document.getElementById("consultation-confirm-details");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("consult-name").value.trim();
        const phone = document.getElementById("consult-phone").value.trim();
        const society = document.getElementById("consult-society").value.trim();
        const time = document.getElementById("consult-time").value;

        this.consultationState.name = name;
        this.consultationState.phone = phone;
        this.consultationState.society = society;
        this.consultationState.preferredTime = time;

        // Animate Confirmation
        if (formCard && confirmBox) {
          formCard.style.display = "none";
          confirmBox.style.display = "block";
          if (confirmDetails) {
            confirmDetails.innerHTML = `
              <strong>Name:</strong> ${name}<br>
              <strong>Phone/WhatsApp:</strong> ${phone}<br>
              <strong>Community:</strong> ${society}<br>
              <strong>Primary Goal:</strong> ${this.consultationState.goal}<br>
              <strong>Preferred Time:</strong> ${time}
            `;
          }
        }

        this.showToast("Consultation Request Received!");
      });
    }

    // WhatsApp Confirmation Trigger
    const waBtn = document.getElementById("consult-whatsapp-btn");
    if (waBtn) {
      waBtn.addEventListener("click", () => {
        const text = encodeURIComponent(
          `Hi Harish, I would like to book a free consultation for Helevate.fit.\nName: ${this.consultationState.name}\nCommunity: ${this.consultationState.society}\nGoal: ${this.consultationState.goal}\nPreferred Time: ${this.consultationState.preferredTime}`
        );
        window.open(`https://wa.me/919963960259?text=${text}`, "_blank");
      });
    }

    // Calendar Invite (.ics download)
    const calBtn = document.getElementById("consult-calendar-btn");
    if (calBtn) {
      calBtn.addEventListener("click", () => {
        const icsData = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//Helevate Fit Pvt Ltd//Consultation Booking//EN",
          "BEGIN:VEVENT",
          "SUMMARY:Helevate.fit — Free Discovery Consultation",
          `DESCRIPTION:Discussion with Head Coach Harish for ${this.consultationState.name} (${this.consultationState.society}) regarding ${this.consultationState.goal}.`,
          "LOCATION:Phone / WhatsApp Call (+91 99639 60259)",
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "Helevate-Consultation.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.showToast("Calendar event downloaded");
      });
    }
  },

  // --------------------------------------------------------------------------
  // 13. DEXA BODY COMPOSITION INTERACTIVE EXPLORER (Section 16)
  // --------------------------------------------------------------------------
  bindDexaExplorer() {
    const slider = document.getElementById("dexa-weight-slider");
    const weightVal = document.getElementById("dexa-weight-val");
    const fatVal = document.getElementById("dexa-fat-val");
    const leanVal = document.getElementById("dexa-lean-val");
    const vatVal = document.getElementById("dexa-vat-val");

    if (slider) {
      slider.addEventListener("input", (e) => {
        const w = parseFloat(e.target.value);
        if (weightVal) weightVal.textContent = `${w.toFixed(1)} kg`;

        // Progressive transformation calculation: lean muscle preserved, visceral fat mobilized
        const progress = (85 - w) / 10; // Normalized 0 to 1
        const fatKg = (w * (0.28 - progress * 0.08)).toFixed(1);
        const leanKg = (w - parseFloat(fatKg)).toFixed(1);
        const vatKg = Math.max(0.4, (1.8 - progress * 1.3)).toFixed(2);

        if (fatVal) fatVal.textContent = `${fatKg} kg (${((parseFloat(fatKg)/w)*100).toFixed(0)}%)`;
        if (leanVal) leanVal.textContent = `${leanKg} kg`;
        if (vatVal) vatVal.textContent = `${vatKg} kg`;
      });
    }
  },

  // --------------------------------------------------------------------------
  // 14. MODALS & FORMS
  // --------------------------------------------------------------------------
  bindHeader() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });

    const mobileBtn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    const closeBtn = document.getElementById("close-drawer-btn");

    if (mobileBtn && drawer && backdrop) {
      mobileBtn.addEventListener("click", () => {
        drawer.classList.add("active");
        backdrop.classList.add("active");
      });
      backdrop.addEventListener("click", () => {
        drawer.classList.remove("active");
        backdrop.classList.remove("active");
      });
      closeBtn?.addEventListener("click", () => {
        drawer.classList.remove("active");
        backdrop.classList.remove("active");
      });
      drawer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          drawer.classList.remove("active");
          backdrop.classList.remove("active");
        });
      });
    }
  },

  bindNominateSocietyForm() {
    const form = document.getElementById("bring-helevate-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast("Society Nomination Submitted! We will contact your RWA.");
        form.reset();
      });
    }
  },

  bindCareerModal() {
    const modal = document.getElementById("career-application-modal");
    const closeBtn = document.getElementById("close-career-modal-btn");
    const form = document.getElementById("career-application-form");

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.classList.remove("active"));
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal?.classList.remove("active");
        this.showToast("Application Submitted Successfully! Our team will connect.");
        form.reset();
      });
    }
  },

  openCareerModal(roleId, roleTitle) {
    const modal = document.getElementById("career-application-modal");
    const titleEl = document.getElementById("modal-career-role-title");
    const inputId = document.getElementById("career-app-role-id");
    if (titleEl) titleEl.textContent = `Apply for ${roleTitle}`;
    if (inputId) inputId.value = roleId;
    if (modal) modal.classList.add("active");
  },

  bindInsightModal() {
    const modal = document.getElementById("article-reader-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    }
  },

  openInsightModal(id) {
    const article = HELEVATE_DATA.insights.find(i => i.id === id);
    const modal = document.getElementById("article-reader-modal");
    const content = document.getElementById("article-reader-content-inner");
    if (!article || !modal || !content) return;

    content.innerHTML = `
      <button style="position: absolute; top: 18px; right: 18px; background: none; border: none; font-size: 1.7rem; color: var(--color-primary-navy); cursor: pointer;" onclick="document.getElementById('article-reader-modal').classList.remove('active')">&times;</button>
      <span class="badge badge-navy" style="margin-bottom: 12px;">${article.category} &bull; ${article.readTime}</span>
      <h1 style="font-size: 1.85rem; color: var(--color-primary-navy); margin: 12px 0; line-height: 1.3;">${article.title}</h1>
      <div style="font-size: 0.885rem; color: var(--color-text-muted); margin-bottom: 26px;">Published by ${article.author} &bull; Clinical Insights</div>
      <div style="line-height: 1.8; font-size: 1.02rem; color: var(--color-text-main); margin-bottom: 36px;">
        ${article.fullContent}
      </div>
      <div class="card-blue" style="text-align: center; padding: 28px;">
        <h4 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 8px;">Translate This Research into Action</h4>
        <p style="font-size: 0.94rem; color: var(--color-text-muted); margin-bottom: 18px;">Book a free baseline consultation with our clinical coaching team.</p>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('article-reader-modal').classList.remove('active'); Router.navigate('/booking');">Book a Free Consultation →</button>
      </div>
    `;
    modal.classList.add("active");
  },

  bindContactForm() {
    const form = document.getElementById("contact-page-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.showToast("Message Sent to Helevate Team!");
        form.reset();
      });
    }
  },

  bindCinemaModal() {
    const modal = document.getElementById("cinema-video-modal");
    const closeBtn = document.getElementById("close-cinema-modal-btn");
    const video = document.getElementById("cinema-modal-video");

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        video?.pause();
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
          video?.pause();
        }
      });
    }
  },

  openCinemaModal(videoSrc) {
    const modal = document.getElementById("cinema-video-modal");
    const video = document.getElementById("cinema-modal-video");
    if (modal && video) {
      video.src = videoSrc;
      modal.classList.add("active");
      video.play().catch(() => {});
    }
  },

  showToast(msg) {
    const shelf = document.getElementById("toast-shelf");
    if (!shelf) return;
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = msg;
    shelf.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  initScrollObserver() {
    if (window.ScrollMotionEngine && window.ScrollMotionEngine.refresh) {
      window.ScrollMotionEngine.refresh();
    }
  }
};

window.App = App;
