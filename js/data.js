/**
 * HELEVATE.FIT — STRUCTURED DATA & CONTENT REPOSITORY
 * Source of truth for:
 * - Brand positioning: Precision Health & Human Performance Platform
 * - 6-Step Overview Journey: Assess -> Measure -> Analyse -> Report -> Personalise -> Improve
 * - 5-Step Detailed How It Works Roadmap
 * - Multi-dimensional Health Measurement Parameters
 * - Interactive Helevate Report Data
 * - Personalised Care & Treatment Pathways
 * - Personalised Food & Diet (Nutrition) Guidance
 * - 6 Service Categories with Dedicated Page Links
 * - Authentic Member Testimonials & Trust Statistics
 */

const HELEVATE_DATA = {
  brand: {
    name: "Helevate.fit",
    legalName: "Helevate Fit Pvt Ltd",
    tagline: "Understand Your Present Health. Get Personalised Guidance. Improve Your Wellbeing.",
    positioning: "Precision Health & Human Performance Platform for Gated Communities",
    mission: "Helevate Fit helps users understand and measure their current health, receive detailed custom reports, identify areas needing attention, and get dedicated treatment, nutrition, and fitness guidance inside their community.",
    definition: "Helevate Fit is a personalized health and performance platform designed to measure where you are today and provide continuous, data-driven support to elevate your wellbeing.",
    founder: "Harish P",
    founderRole: "Founder & Head Coach",
    founderCert: "Certified Human Performance Specialist",
    email: "helevatefit@gmail.com",
    phone: "+91 99639 60259",
    phoneAlt: "+91 94403 09596",
    address: "4th Floor, JK Business Centre, Road No. 36, Jubilee Hills, Hyderabad – 500033",
    city: "Hyderabad",
    website: "https://helevate.fit",
    hours: "Monday – Saturday: 6:00 AM – 9:00 PM"
  },

  // 1. 6-Step Overview Journey (Assess -> Measure -> Analyse -> Report -> Personalise -> Improve)
  overviewSteps: [
    {
      step: "01",
      name: "ASSESS",
      title: "Comprehensive Intake",
      desc: "Complete your initial clinical lifestyle and medical history intake.",
      icon: "📋",
      link: "#/assessments"
    },
    {
      step: "02",
      name: "MEASURE",
      title: "Biological Diagnostics",
      desc: "Establish objective baselines with blood panels, DEXA scans & mobility checks.",
      icon: "🔬",
      link: "#/assessments"
    },
    {
      step: "03",
      name: "ANALYSE",
      title: "Clinical Interpretation",
      desc: "Identify underlying risks, insulin sensitivity, and recovery gaps.",
      icon: "📊",
      link: "#/reports"
    },
    {
      step: "04",
      name: "REPORT",
      title: "Helevate Report",
      desc: "Receive your custom roadmap translating data into clear daily priorities.",
      icon: "📑",
      link: "#/reports"
    },
    {
      step: "05",
      name: "PERSONALISE",
      title: "Custom Protocols",
      desc: "Get individualized care, nutrition fueling, and strength coaching.",
      icon: "🥗",
      link: "#/nutrition"
    },
    {
      step: "06",
      name: "IMPROVE",
      title: "Community Coaching",
      desc: "Follow your plan with clubhouse coaches and 90-day progress re-testing.",
      icon: "🌿",
      link: "#/care"
    }
  ],

  // 2. Present Health Measurement Dimensions
  healthDimensions: [
    {
      id: "overall-health",
      title: "Overall Health & Biomarkers",
      icon: "🩺",
      desc: "Clinical blood chemistry evaluating ApoB lipid subfractions, fasting insulin sensitivity, hs-CRP vascular inflammation, and liver/kidney vitality.",
      metrics: ["ApoB Particle Count", "HOMA-IR Insulin Score", "hs-CRP Inflammation", "HbA1c Glycemic Baseline"]
    },
    {
      id: "fitness-performance",
      title: "Fitness & Biomechanics",
      icon: "🏋️",
      desc: "DEXA body composition mapping (visceral fat vs lean mass), functional movement screening, and joint stability assessment.",
      metrics: ["Visceral Adipose Index", "Lean Muscle Distribution", "Thoracic Spine Mobility", "Functional Movement Screen"]
    },
    {
      id: "nutrition-metabolism",
      title: "Nutrition & Metabolic Fueling",
      icon: "🥗",
      desc: "Assessment of glycemic response patterns, daily protein distribution, prebiotic fiber adequacy, and digestive microbiome health.",
      metrics: ["Glycemic Stability Index", "Protein Adequacy (g/kg)", "Prebiotic Fiber Intake", "Hydration Rhythm"]
    },
    {
      id: "lifestyle-sleep",
      title: "Lifestyle & Circadian Health",
      icon: "🌙",
      desc: "Sleep architecture evaluation (deep & REM sleep depth), evening screen exposure impact, and daily sedentary desk duration.",
      metrics: ["Deep Sleep Restoration", "Daily Step Average", "Screen Wind-Down Latency", "Circadian Rhythm Score"]
    },
    {
      id: "recovery-stress",
      title: "Recovery & Autonomic Balance",
      icon: "⚡",
      desc: "Heart Rate Variability (HRV) baseline tracking, stress recovery latency post-work, and parasympathetic nervous system response.",
      metrics: ["HRV Recovery Baseline", "Resting Heart Rate", "Autonomic Balance", "Post-Workout Recovery Rate"]
    }
  ],

  // 3. Sample Helevate Report Interactive Data
  sampleReport: {
    userName: "Sample Member Profile (Executive, Age 42)",
    status: "Baseline Active • Quarter 1",
    score: 78,
    categories: {
      health: {
        title: "Health & Metabolic Status",
        badge: "Attention Needed",
        summary: "Fasting insulin and hs-CRP are elevated despite normal fasting blood sugar, indicating subclinical insulin resistance.",
        items: [
          { name: "Fasting Insulin & HOMA-IR", val: "14.2 µIU/mL", status: "Attention Needed", target: "< 6.0 µIU/mL" },
          { name: "Apolipoprotein B (ApoB)", val: "108 mg/dL", status: "Moderate", target: "< 80 mg/dL" },
          { name: "hs-CRP Vascular Inflammation", val: "2.4 mg/L", status: "Attention Needed", target: "< 1.0 mg/L" }
        ],
        recommendation: "Prioritize low-glycemic meal sequencing and progressive resistance training to enhance cellular insulin sensitivity."
      },
      lifestyle: {
        title: "Lifestyle & Recovery Architecture",
        badge: "Score: 68/100",
        summary: "Fragmented deep sleep (average 48 mins/night) and prolonged sedentary desk hours are driving evening fatigue.",
        items: [
          { name: "Deep Sleep Duration", val: "48 mins/night", status: "Needs Improvement", target: "80+ mins/night" },
          { name: "Daily Step Baseline", val: "4,200 steps", status: "Low Baseline", target: "8,500+ steps" },
          { name: "Evening Screen Latency", val: "12 mins pre-sleep", status: "Restricted", target: "45 mins dark buffer" }
        ],
        recommendation: "Implement 20-minute digital wind-down protocol and scheduled daytime posture mobility breaks."
      },
      nutrition: {
        title: "Diet & Nutrition Guidance",
        badge: "Protein Deficit",
        summary: "Dietary pattern causes afternoon glycemic crashes. Increasing protein distribution and prebiotic fiber stabilizes energy.",
        items: [
          { name: "Protein Distribution", val: "0.85 g/kg", status: "Target: 1.4 g/kg", target: "110g daily total" },
          { name: "Prebiotic Fiber Intake", val: "14 g/day", status: "Low Intake", target: "30+ g/day" },
          { name: "Glycemic Stability", val: "Frequent Swings", status: "Needs Optimization", target: "Stable Post-Meal" }
        ],
        recommendation: "Structure whole-food meals with protein prioritization and complex prebiotic fiber to eliminate glucose spikes."
      },
      fitness: {
        title: "Movement & Strength Blueprint",
        badge: "Mobility Focus",
        summary: "Desk sitting has restricted thoracic spine rotation, while posterior chain muscular endurance remains ready for training.",
        items: [
          { name: "Thoracic Spine Mobility", val: "32° Rotation", status: "Restricted", target: "45°+ Full Range" },
          { name: "Posterior Chain Strength", val: "Baseline Preserved", status: "Ready to Train", target: "Progressive Load" },
          { name: "Zone 2 Aerobic Base", val: "Deficit", status: "Build Base", target: "120 mins/week" }
        ],
        recommendation: "3x weekly coach-led clubhouse strength sessions targeting thoracic mobilization and posterior chain activation."
      }
    }
  },

  // 4. Personalised Treatment & Care Journey
  carePathway: [
    {
      step: "01",
      title: "Your Health Data",
      desc: "Clinical biomarkers, DEXA scans, and movement assessments form your objective biological baseline.",
      icon: "🩸"
    },
    {
      step: "02",
      title: "Diagnostic Insights",
      desc: "Our performance specialists translate data into clear priorities across metabolic, joint, and recovery health.",
      icon: "💡"
    },
    {
      step: "03",
      title: "Action Recommendations",
      desc: "Custom exercise prescriptions, dietary adjustments, and sleep protocols built for your body.",
      icon: "📋"
    },
    {
      step: "04",
      title: "Personalised Care & Coaching",
      desc: "Dedicated coaches deliver hands-on guidance in your clubhouse with physician-friendly progress tracking.",
      icon: "🩺"
    }
  ],

  // 5. Personalised Food & Diet (Nutrition) Elements
  nutritionModules: [
    {
      id: "glycemic",
      title: "Glycemic Pacing & Glucose Balance",
      desc: "Tailored food combinations designed to eliminate post-meal energy crashes and improve cellular insulin sensitivity.",
      icon: "📉",
      highlight: "Stable All-Day Energy"
    },
    {
      id: "protein",
      title: "Bio-Individual Protein Distribution",
      desc: "Calculated protein requirements (1.4–1.8g/kg) distributed across meals to support muscle retention and satiety.",
      icon: "🥩",
      highlight: "Muscle & Tissue Recovery"
    },
    {
      id: "gut",
      title: "Prebiotic Fiber & Gut Nourishment",
      desc: "Diverse plant-based prebiotic fibers supporting microbiome diversity, lipid clearance, and digestive ease.",
      icon: "🥗",
      highlight: "Microbiome & Lipid Health"
    },
    {
      id: "lifestyle-meals",
      title: "Real-World Meal Structuring",
      desc: "Practical frameworks for home cooking, family meals, and dining out in Hyderabad without restrictive crash diets.",
      icon: "🍲",
      highlight: "Sustainable Consistency"
    }
  ],

  // 6. 5-Step Detailed How It Works Roadmap
  howItWorksSteps: [
    {
      num: "01",
      title: "Start Your Assessment",
      desc: "Complete your health intake and understand what baseline information is needed for your profile.",
      badge: "Step 01"
    },
    {
      num: "02",
      title: "Measure Your Present Health",
      desc: "Assess metabolic chemistry, body composition, joint mobility, and recovery metrics inside your community.",
      badge: "Step 02"
    },
    {
      num: "03",
      title: "Receive Your Report",
      desc: "Get your comprehensive Helevate Report detailing key observations, scores, and areas requiring attention.",
      badge: "Step 03"
    },
    {
      num: "04",
      title: "Get Personalised Recommendations",
      desc: "Receive individualized treatment, nutrition, and exercise guidance built around your report.",
      badge: "Step 04"
    },
    {
      num: "05",
      title: "Follow Your Plan in Your Community",
      desc: "Work with dedicated certified coaches in your clubhouse with 90-day progress re-testing.",
      badge: "Step 05"
    }
  ],

  // 7. 6 Clickable Service Categories (Connected to Pages)
  services: [
    {
      id: "assessments",
      name: "Health Assessments",
      tagline: "Diagnostic blood panels, DEXA body scans & mobility screening.",
      desc: "Comprehensive baseline diagnostics establishing your metabolic, cardiovascular, and physical parameters before any program begins.",
      icon: "🔬",
      link: "#/assessments",
      badge: "Diagnostic Baseline"
    },
    {
      id: "reports",
      name: "Health Reports",
      tagline: "Actionable health intelligence unifying all diagnostic data.",
      desc: "Your custom Helevate Report translating complex clinical numbers into a plain-English, prioritized action plan for your daily routine.",
      icon: "📊",
      link: "#/reports",
      badge: "Central Outcome"
    },
    {
      id: "care",
      name: "Personalised Treatment / Care",
      tagline: "Structured guidance, coaching protocols & medical escalation.",
      desc: "Evidence-based health guidance addressing metabolic risk factors, joint rehabilitation, and preventive cardiovascular care.",
      icon: "🩺",
      link: "#/care",
      badge: "Targeted Health"
    },
    {
      id: "nutrition",
      name: "Nutrition & Diet",
      tagline: "Bio-individual food recommendations and glycemic pacing.",
      desc: "Personalised meal frameworks built around your blood chemistry, body composition targets, and sustainable everyday eating.",
      icon: "🥗",
      link: "#/nutrition",
      badge: "Metabolic Fueling"
    },
    {
      id: "fitness",
      name: "Fitness & Performance",
      tagline: "Coach-led strength training inside your society clubhouse.",
      desc: "Progressive resistance training, postural alignment, and cardiovascular conditioning delivered directly in your community.",
      icon: "🏋️",
      link: "#/care",
      badge: "In-Community"
    },
    {
      id: "lifestyle",
      name: "Lifestyle & Wellness",
      tagline: "Sleep optimization, stress recovery & sustainable habits.",
      desc: "Daily habit coaching designed to improve sleep depth, regulate circadian rhythm, and sustain high executive energy levels.",
      icon: "🌙",
      link: "#/care",
      badge: "Habit Stacking"
    }
  ],

  // 8. Authentic Member Testimonials (Hyderabad Gated Communities)
  testimonials: [
    {
      name: "Siddharth Rao",
      role: "VP of Engineering • My Home Bhooja",
      category: "Metabolic Health & Strength",
      rating: 5,
      review: "The blood panel and DEXA scan caught insulin resistance that regular executive checkups missed. Having Harish and the team coach me right in my society clubhouse made consistency effortless."
    },
    {
      name: "Priyanka Reddy",
      role: "Corporate Lawyer • Aparna Sarovar",
      category: "Posture & Joint Mobility",
      rating: 5,
      review: "Years of desk work caused severe upper spine stiffness. The biomechanical assessment and tailored mobility plan restored my posture within 8 weeks. No commute friction is a game changer."
    },
    {
      name: "Anand Verma",
      role: "Managing Director • Jubilee Hills",
      category: "Nutrition & Biomarker Transformation",
      rating: 5,
      review: "The Helevate Report gave me a clear, scientific dietary framework without crazy crash diets. My 90-day reassessment showed a 28% drop in hs-CRP inflammation and tangible fat loss."
    }
  ],

  // 9. Trust Indicators & Statistics
  trustMetrics: {
    rating: "4.9 / 5.0",
    reviewCount: "180+",
    membersServed: "Gated Community Members in Hyderabad",
    reassessmentRate: "94% 90-Day Retention",
    verifiedBadges: ["Certified Human Performance Specialists", "Clinical Diagnostic Standards", "In-Community Clubhouse Delivery"]
  }
};

if (typeof window !== 'undefined') {
  window.HELEVATE_DATA = HELEVATE_DATA;
}
