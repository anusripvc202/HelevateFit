/**
 * HELEVATE.FIT — INTERACTIVE ASSESSMENT RECOMMENDER QUIZ
 * Provides an intelligent self-diagnostic tool that matches residents
 * to the exact biomarker panels & coaching programs they need.
 */

const ASSESSMENT_QUIZ_QUESTIONS = [
  {
    id: "age",
    question: "What is your current age and life stage?",
    subtitle: "Precision health protocols vary significantly based on hormonal and metabolic milestones.",
    options: [
      { text: "Under 35 — Building athletic baseline & metabolic resilience", value: "young", points: { metabolic: 1, dexa: 2, gut: 1, dna: 2 } },
      { text: "35 to 49 — Reclaiming metabolic rate, body composition & energy", value: "prime", points: { metabolic: 3, dexa: 3, gut: 2, dna: 2 } },
      { text: "50+ — Prioritizing longevity, joint protection, bone density & cardiovascular health", value: "senior", points: { metabolic: 3, dexa: 3, gut: 1, dna: 1 } }
    ]
  },
  {
    id: "primary_goal",
    question: "What is your primary health & body transformation goal?",
    subtitle: "Select the outcome you want to measure and achieve over the next 90 days.",
    options: [
      { text: "Visceral Fat Loss & Reclaiming Waistline (H75 Protocol)", value: "fatloss", points: { dexa: 3, metabolic: 3, gut: 1 } },
      { text: "Joint-Safe Strength, Lean Muscle & Posture Rebuilding", value: "strength", points: { dexa: 3, dna: 2, metabolic: 1 } },
      { text: "Cardiometabolic Protection (Reversing silent cholesterol/insulin risks)", value: "longevity", points: { metabolic: 4, dexa: 2, dna: 2 } },
      { text: "Resolving Gut Issues, Bloating & Unexplained Fatigue", value: "gut", points: { gut: 4, metabolic: 2, dexa: 1 } }
    ]
  },
  {
    id: "risk_factors",
    question: "Do you have any family history or underlying health indicators?",
    subtitle: "Our precision panels intercept risks years before routine check-ups flag them.",
    options: [
      { text: "Family history of early heart disease, high cholesterol, or ApoB issues", value: "cardio", points: { metabolic: 4, dna: 2 } },
      { text: "Family history of Diabetes, PCOS, or stubborn insulin resistance", value: "metabolic_risk", points: { metabolic: 4, dexa: 2 } },
      { text: "Chronic digestive flare-ups, food sensitivities, or sluggish recovery", value: "digestive", points: { gut: 4, metabolic: 1 } },
      { text: "No known family risk factors — looking for peak human performance", value: "performance", points: { dna: 3, dexa: 2, metabolic: 2 } }
    ]
  },
  {
    id: "routine",
    question: "What is your current fitness routine inside your gated community?",
    subtitle: "We deliver coaching directly in your clubhouse gym with zero commute.",
    options: [
      { text: "Currently inactive / busy executive needing high-efficiency guidance", value: "inactive", points: { dexa: 2, metabolic: 2 } },
      { text: "Work out regularly, but results have stalled despite consistent effort", value: "stalled", points: { metabolic: 3, dexa: 3, gut: 2 } },
      { text: "Prefer small group community sessions and social accountability", value: "group", points: { dexa: 2, metabolic: 1 } }
    ]
  }
];

class AssessmentQuiz {
  constructor() {
    this.currentStep = 0;
    this.scores = { metabolic: 0, dexa: 0, gut: 0, dna: 0 };
    this.answers = {};
    this.container = document.getElementById("quiz-modal-body");
  }

  init() {
    if (!this.container) return;
    this.renderQuestion();
  }

  renderQuestion() {
    const q = ASSESSMENT_QUIZ_QUESTIONS[this.currentStep];
    const totalSteps = ASSESSMENT_QUIZ_QUESTIONS.length;
    const progressPercent = Math.round(((this.currentStep + 1) / totalSteps) * 100);

    let html = `
      <div class="quiz-step-container">
        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-text">
            <span>Question ${this.currentStep + 1} of ${totalSteps}</span>
            <span>${progressPercent}% Complete</span>
          </div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <h3 class="quiz-question-title">${q.question}</h3>
        <p class="quiz-question-subtitle">${q.subtitle}</p>

        <div class="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-value="${opt.value}" data-index="${idx}">
              <div class="option-check-circle"></div>
              <span class="option-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-nav-row">
          ${this.currentStep > 0 ? `
            <button class="btn btn-secondary btn-sm" id="quiz-prev-btn">
              ← Back
            </button>
          ` : `<div></div>`}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.bindEvents(q);
  }

  bindEvents(question) {
    const optionBtns = this.container.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        const selectedOpt = question.options[idx];
        
        // Add points
        Object.entries(selectedOpt.points).forEach(([key, val]) => {
          this.scores[key] = (this.scores[key] || 0) + val;
        });
        
        this.answers[question.id] = selectedOpt.value;

        if (this.currentStep < ASSESSMENT_QUIZ_QUESTIONS.length - 1) {
          this.currentStep++;
          this.renderQuestion();
        } else {
          this.renderResults();
        }
      });
    });

    const prevBtn = this.container.querySelector("#quiz-prev-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.renderQuestion();
        }
      });
    }
  }

  renderResults() {
    // Determine top 2 recommended assessments
    const sorted = Object.entries(this.scores).sort((a, b) => b[1] - a[1]);
    const topKey = sorted[0][0];
    const secondKey = sorted[1][0];

    const topAssessment = HELEVATE_DATA.assessments.find(a => a.id === topKey) || HELEVATE_DATA.assessments[0];
    const secondAssessment = HELEVATE_DATA.assessments.find(a => a.id === secondKey) || HELEVATE_DATA.assessments[1];

    let html = `
      <div class="quiz-results-container">
        <div class="quiz-badge-result">✨ Precision Diagnostics Match</div>
        <h3 class="quiz-result-title">Your Tailored Assessment Protocol</h3>
        <p class="quiz-result-desc">Based on your age profile, goals, and health history, here is the scientific starting point recommended by our Human Performance Team:</p>

        <div class="quiz-result-card primary-match">
          <div class="match-icon">${topAssessment.icon}</div>
          <div class="match-content">
            <span class="match-badge">Primary Recommended Baseline</span>
            <h4>${topAssessment.title}</h4>
            <p>${topAssessment.shortDesc}</p>
            <div class="match-biomarkers">
              ${topAssessment.biomarkers.slice(0, 3).map(b => `<span class="biomarker-chip">${b}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="quiz-result-card secondary-match">
          <div class="match-icon">${secondAssessment.icon}</div>
          <div class="match-content">
            <span class="match-badge">Secondary Complementary Scan</span>
            <h4>${secondAssessment.title}</h4>
            <p>${secondAssessment.shortDesc}</p>
          </div>
        </div>

        <div class="quiz-result-actions">
          <button class="btn btn-primary btn-lg" id="quiz-book-recommendation-btn">
            Book Free Consultation for This Protocol →
          </button>
          <button class="btn btn-secondary btn-sm" id="quiz-restart-btn">
            Retake Assessment Quiz
          </button>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    const bookBtn = this.container.querySelector("#quiz-book-recommendation-btn");
    if (bookBtn) {
      bookBtn.addEventListener("click", () => {
        // Close quiz modal and open booking modal prefilled
        document.getElementById("quiz-modal").classList.remove("active");
        window.openBookingModalWithGoal(topAssessment.title);
      });
    }

    const restartBtn = this.container.querySelector("#quiz-restart-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        this.currentStep = 0;
        this.scores = { metabolic: 0, dexa: 0, gut: 0, dna: 0 };
        this.renderQuestion();
      });
    }
  }
}

// Global hook
window.initAssessmentQuiz = () => {
  const quiz = new AssessmentQuiz();
  quiz.init();
};
