/**
 * HELEVATE.FIT — 3-QUESTION PROGRAM RECOMMENDATION QUIZ
 * Compact interactive workflow embedded under the Programs section.
 * Maps resident responses to Helevate RESET, RESTORE, BUILD, or THRIVE.
 * Result format: "Your starting point looks like Helevate [Program]. Your coach confirms it after your Body Report."
 */

class ProgramRecommendationQuiz {
  constructor() {
    this.currentStep = 0;
    this.answers = {
      goal: null,
      condition: null,
      schedule: null
    };
    this.questions = [
      {
        id: "goal",
        title: "1. What is your primary health & body priority?",
        subtitle: "Select your main focus for the next 12 weeks.",
        options: [
          { text: "Lose belly fat & bring health markers to safe (BP / Glucose)", program: "reset" },
          { text: "Move without knee, back or shoulder pain", program: "restore" },
          { text: "Build real muscle & bone density after 35", program: "build" },
          { text: "Stay strong, fit and sharp for the next 30 years", program: "thrive" }
        ]
      },
      {
        id: "condition",
        title: "2. What describes your current movement & physical condition?",
        subtitle: "Helps us assess joint tolerance and coaching intensity.",
        options: [
          { text: "Pain, past injury, or stiffness that limits my exercise", program: "restore" },
          { text: "Sedentary routine, carry extra waistline fat, sluggish energy", program: "reset" },
          { text: "Work out regularly, but muscle and strength results stalled", program: "build" },
          { text: "Generally healthy and active, seeking structured continuity", program: "thrive" }
        ]
      },
      {
        id: "schedule",
        title: "3. What weekly schedule best fits your lifestyle?",
        subtitle: "Coached inside your community clubhouse gym.",
        options: [
          { text: "4 Coach-Led sessions + 1 Guided session / week (Recommended)", format: "4-Day Coached" },
          { text: "3 Coach-Led sessions + 1 Guided session / week (Lighter Schedule)", format: "3-Day Coached" }
        ]
      }
    ];
  }

  init(containerId = "quiz-inline-container") {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.render();
  }

  render() {
    if (this.currentStep < this.questions.length) {
      this.renderQuestion();
    } else {
      this.renderResult();
    }
  }

  renderQuestion() {
    const q = this.questions[this.currentStep];
    const progressPercent = Math.round(((this.currentStep + 1) / this.questions.length) * 100);

    this.container.innerHTML = `
      <div style="background: #FFFFFF; border-radius: 18px; border: 1px solid rgba(14,58,93,0.12); box-shadow: var(--shadow-card); padding: 32px 28px; max-width: 680px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-gold-accent); text-transform: uppercase;">
            Question ${this.currentStep + 1} of ${this.questions.length}
          </span>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-text-dim);">${progressPercent}% Complete</span>
        </div>
        <div style="height: 6px; background: rgba(14,58,93,0.08); border-radius: 999px; overflow: hidden; margin-bottom: 24px;">
          <div style="width: ${progressPercent}%; height: 100%; background: var(--color-primary-navy); transition: width 0.3s ease;"></div>
        </div>

        <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 6px; font-weight: 700;">
          ${q.title}
        </h3>
        <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 20px;">
          ${q.subtitle}
        </p>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
          ${q.options.map((opt, idx) => `
            <button type="button" class="quiz-choice-btn" data-idx="${idx}" style="background: var(--color-bg-subtle); border: 1px solid rgba(14,58,93,0.1); border-radius: 12px; padding: 14px 18px; text-align: left; font-size: 0.96rem; font-weight: 600; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 12px;">
              <span style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--color-primary-navy); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0;"></span>
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          ${this.currentStep > 0 ? `
            <button type="button" class="btn btn-secondary btn-sm" id="quiz-back-btn">← Back</button>
          ` : `<span></span>`}
          <span style="font-size: 0.78rem; color: var(--color-text-dim);">No medical diagnosis • Coach confirmed</span>
        </div>
      </div>
    `;

    // Bind option clicks
    const btns = this.container.querySelectorAll(".quiz-choice-btn");
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        const idx = parseInt(b.getAttribute("data-idx"), 10);
        const selectedOpt = q.options[idx];
        if (q.id === "goal") this.answers.goal = selectedOpt.program;
        if (q.id === "condition") this.answers.condition = selectedOpt.program;
        if (q.id === "schedule") this.answers.schedule = selectedOpt.format;

        this.currentStep++;
        this.render();
      });
    });

    const backBtn = this.container.querySelector("#quiz-back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.render();
        }
      });
    }
  }

  renderResult() {
    // Scoring logic
    let recommendedSlug = "reset";
    if (this.answers.condition === "restore" || this.answers.goal === "restore") {
      recommendedSlug = "restore";
    } else if (this.answers.goal === "build" || this.answers.condition === "build") {
      recommendedSlug = "build";
    } else if (this.answers.goal === "thrive" && this.answers.condition !== "restore" && this.answers.condition !== "reset") {
      recommendedSlug = "thrive";
    } else {
      recommendedSlug = "reset";
    }

    const progInfo = window.HELEVATE_DATA?.programs?.find(p => p.slug === recommendedSlug) || {
      name: "Helevate RESET",
      subtitle: "Lose belly fat, keep muscle, bring health markers to safe.",
      slug: "reset"
    };

    const scheduleFormat = this.answers.schedule || "4-Day Coached (Recommended)";

    this.container.innerHTML = `
      <div style="background: #FFFFFF; border-radius: 20px; border: 2px solid var(--color-primary-navy); box-shadow: var(--shadow-card); padding: 36px 30px; max-width: 680px; margin: 0 auto; text-align: center;">
        <span class="badge badge-teal" style="margin-bottom: 12px;">Your Recommended Starting Point</span>
        
        <h3 style="font-size: 1.6rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">
          Your starting point looks like ${progInfo.name}. Your coach confirms it after your Body Report.
        </h3>

        <p style="color: var(--color-text-muted); font-size: 1rem; line-height: 1.6; max-width: 540px; margin: 0 auto 20px auto;">
          ${progInfo.subtitle} Format preference: <strong>${scheduleFormat}</strong>.
        </p>

        <div style="background: var(--color-bg-subtle); border-radius: 12px; padding: 14px 20px; margin-bottom: 26px; font-size: 0.88rem; color: var(--color-text-dim);">
          ℹ️ Every journey starts with a DEXA baseline Body Report so your coach can verify your muscle, visceral fat, and bone density before starting.
        </div>

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <a href="#homepage-final-cta" class="btn btn-gold btn-lead-scroll">
            Book My Body Report →
          </a>
          <a href="#/programs/${progInfo.slug}" class="btn btn-secondary">
            Explore ${progInfo.name}
          </a>
        </div>

        <button type="button" id="quiz-restart-btn" style="background: none; border: none; font-size: 0.82rem; color: var(--color-text-dim); text-decoration: underline; cursor: pointer;">
          Retake 3 Questions
        </button>
      </div>
    `;

    const restartBtn = this.container.querySelector("#quiz-restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        this.currentStep = 0;
        this.answers = { goal: null, condition: null, schedule: null };
        this.render();
      });
    }

    // Scroll smoothly to form when clicking Book My Body Report
    const leadScrollBtn = this.container.querySelector(".btn-lead-scroll");
    if (leadScrollBtn) {
      leadScrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById("homepage-final-cta");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          // Pre-select program goal if possible
          const goalSelect = document.getElementById("lead-matters-most");
          if (goalSelect) {
            if (recommendedSlug === "reset") goalSelect.value = "Belly fat & health markers";
            if (recommendedSlug === "restore") goalSelect.value = "Pain-free movement";
            if (recommendedSlug === "build") goalSelect.value = "Muscle & strength";
            if (recommendedSlug === "thrive") goalSelect.value = "Stay fit for life";
          }
        }
      });
    }
  }
}

if (typeof window !== "undefined") {
  window.ProgramRecommendationQuiz = ProgramRecommendationQuiz;
}
