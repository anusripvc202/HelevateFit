/**
 * HELEVATE.FIT — STRUCTURED DATA & CONTENT REPOSITORY
 * Core Source of Truth for:
 * - Brand positioning as a Personalized Health & Wellness Service Company
 * - 4-Step Process Flow: Assess -> Analyze -> Helevate Report -> Personalized Support
 * - 4 Unified Service Pillars: Health, Lifestyle, Nutrition, Fitness
 * - Interactive Helevate Report Sample Data & Categories
 * - Assessment Diagnostics and Clinical Philosophy
 */

const HELEVATE_DATA = {
  brand: {
    name: "Helevate.fit",
    legalName: "Helevate Fit Pvt Ltd",
    tagline: "Understand Your Health. Get a Personalized Path Forward.",
    positioning: "Personalized Health & Wellness Services for Gated Communities",
    mission: "Helevate begins by understanding your current health through assessments, creates a personalized Helevate Report, and uses those insights to guide your health, lifestyle, diet and fitness journey.",
    definition: "Helevate is a personalized health and wellness service designed to understand where you are today and help you move toward better health.",
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

  // 4-Step Core Workflow Flow
  workflowSteps: [
    {
      step: "01",
      name: "ASSESS",
      title: "Assess Current Health",
      desc: "Understand your present health condition through comprehensive clinical and physical assessments.",
      keyDetail: "Objective baseline diagnostics including metabolic markers, body composition, and movement analysis.",
      icon: "🔬",
      badge: "Baseline Diagnostics"
    },
    {
      step: "02",
      name: "ANALYZE",
      title: "Identify Requirements",
      desc: "Understand your health requirements and identify specific areas that need personalized attention.",
      keyDetail: "Clinical interpretation to connect biomarkers with daily energy, recovery, and long-term health goals.",
      icon: "📊",
      badge: "In-Depth Analysis"
    },
    {
      step: "03",
      name: "HELEVATE REPORT",
      title: "Generate Personalized Report",
      desc: "Create a personalized Helevate Report translating assessment insights into a clear, actionable direction.",
      keyDetail: "Your central roadmap unifying health, lifestyle, nutrition, and fitness requirements in one place.",
      icon: "📋",
      badge: "Central Outcome"
    },
    {
      step: "04",
      name: "SUPPORT",
      title: "Personalized Support",
      desc: "Provide ongoing guidance across health, lifestyle, diet, and fitness tailored to your report.",
      keyDetail: "Dedicated coaches and specialists delivering care right inside your gated community.",
      icon: "🌿",
      badge: "Ongoing Guidance"
    }
  ],

  // 4 Integrated Pillars of Personalized Support
  supportPillars: [
    {
      id: "health",
      title: "HEALTH",
      name: "Health Support",
      icon: "🩺",
      shortDesc: "Personalized health-focused support based on identified requirements.",
      fullDesc: "Targeted support addressing metabolic balance, cardiovascular health, biomarkers, and preventive longevity metrics identified during your assessment.",
      focusAreas: [
        "Metabolic health tracking & biomarker management",
        "Cardiovascular stamina & recovery protocols",
        "Joint protection & bone density support",
        "Periodic re-assessments to measure real progress"
      ]
    },
    {
      id: "lifestyle",
      title: "LIFESTYLE",
      name: "Lifestyle Support",
      icon: "🌙",
      shortDesc: "Guidance to build healthier everyday habits.",
      fullDesc: "Actionable habit coaching designed to optimize your sleep quality, daily stress resilience, circadian rhythms, and sustained daytime energy levels.",
      focusAreas: [
        "Sleep quality & restorative sleep routines",
        "Stress management and autonomic balance",
        "Daily movement & posture correction for desk work",
        "Sustainable habit stacking for busy professionals"
      ]
    },
    {
      id: "nutrition",
      title: "NUTRITION",
      name: "Diet & Nutrition Support",
      icon: "🥗",
      shortDesc: "Diet and nutrition guidance based on individual requirements.",
      fullDesc: "Real-world, bio-individual nutrition strategies built around your glycemic response, body composition targets, and cultural food preferences.",
      focusAreas: [
        "Metabolic fueling & balanced macronutrient ratios",
        "Blood sugar stability without extreme dietary restrictions",
        "Gut-friendly whole food nourishment",
        "Practical meal structuring for home and dining out"
      ]
    },
    {
      id: "fitness",
      title: "FITNESS",
      name: "Fitness Support",
      icon: "🏋️",
      shortDesc: "Fitness and physical activity support aligned with the user's needs.",
      fullDesc: "Personalized physical training focused on functional strength, joint mobility, posture, and muscular endurance delivered inside your community.",
      focusAreas: [
        "Progressive strength training calibrated to your biomechanics",
        "Functional mobility & core stability for spine health",
        "Joint-safe cardiovascular conditioning",
        "Community clubhouse sessions with dedicated certified coaches"
      ]
    }
  ],

  // Sample Helevate Report Interactive Data
  sampleReport: {
    userName: "Sample Client (Executive, Age 42)",
    status: "Baseline Established",
    overview: "Your Helevate Report brings your assessment insights together to help identify what your body and lifestyle need. Here is how your biological data translates into personalized direction:",
    categories: {
      health: {
        title: "Health & Metabolic Insights",
        icon: "🩺",
        scoreLabel: "Metabolic Status: Mild Insulin Resistance & Subclinical Inflammation",
        summary: "Blood panels indicated elevated fasting insulin and borderline hs-CRP despite normal fasting blood sugar. Prioritizing glycemic control and vascular recovery.",
        keyFindings: [
          { marker: "Insulin Sensitivity", status: "Attention Needed", detail: "Fasting insulin elevated; cellular glucose uptake needs lifestyle support" },
          { marker: "Lipid Profile (ApoB)", status: "Moderate", detail: "ApoB particle count slightly elevated; responsive to dietary fiber & activity" },
          { marker: "Inflammation (hs-CRP)", status: "Elevated", detail: "Low-grade systemic inflammation linked to sleep debt and recovery stress" }
        ],
        action: "Target metabolic stability through resistance training and low-glycemic dietary pacing."
      },
      lifestyle: {
        title: "Lifestyle & Habit Analysis",
        icon: "🌙",
        scoreLabel: "Sleep & Recovery Efficiency: 68%",
        summary: "Assessment identified chronic evening screen exposure, fragmented deep sleep (average 48 mins), and elevated evening cortisol.",
        keyFindings: [
          { marker: "Sleep Duration & Depth", status: "Needs Improvement", detail: "Averaging 5.8 hours; insufficient REM and deep restoration" },
          { marker: "Daily Step Baseline", status: "Low (< 4,500 steps)", detail: "High sedentary desk hours during working days" },
          { marker: "Stress Recovery Rhythm", status: "Sub-optimal", detail: "Delayed parasympathetic cooldown post-work" }
        ],
        action: "Introduce 20-minute wind-down routine, sunlight exposure before 9 AM, and hourly micro-movement breaks."
      },
      nutrition: {
        title: "Diet & Nutrition Guidance",
        icon: "🥗",
        scoreLabel: "Protein Distribution: Insufficient (0.8g/kg) | High Refined Carb Swings",
        summary: "Nutritional intake currently causes post-lunch energy crashes. Adjusting protein distribution and fiber intake to stabilize all-day energy.",
        keyFindings: [
          { marker: "Protein Adequacy", status: "Target: 1.4g/kg", detail: "Increase quality protein across breakfast and lunch" },
          { marker: "Fiber & Micronutrients", status: "Low (< 16g/day)", detail: "Target 30g+ prebiotic fiber for gut microbiome and lipid balance" },
          { marker: "Hydration & Electrolytes", status: "Inconsistent", detail: "Under-hydrated during morning hours" }
        ],
        action: "Personalized meal framework focusing on whole foods, protein prioritization, and steady glucose release."
      },
      fitness: {
        title: "Fitness & Movement Blueprint",
        icon: "🏋️",
        scoreLabel: "Mobility & Posture Score: 72/100 | Lean Muscle Mass: Baseline",
        summary: "Movement screen revealed thoracic spine stiffness, tight hip flexors from desk sitting, and preserved upper body strength.",
        keyFindings: [
          { marker: "Postural Alignment", status: "Forward Head / Tight Hips", detail: "Targeted thoracic mobilization and glute activation needed" },
          { marker: "Strength Capacity", status: "Good Baseline", detail: "Ready for progressive resistance training 3x/week" },
          { marker: "Cardiovascular Stamina", status: "Zone 2 Deficit", detail: "Building aerobic base through steady low-impact sessions" }
        ],
        action: "3 weekly coach-led community sessions emphasizing posterior chain strength, posture correction, and Zone 2 cardio."
      }
    },
    recommendations: [
      "1. Begin 3x weekly coach-led strength sessions at your society clubhouse.",
      "2. Follow the personalized glycemic-stabilizing nutritional structure.",
      "3. Establish the 20-minute evening sleep hygiene protocol.",
      "4. Schedule a 90-day progress reassessment to track biomarker and body composition improvements."
    ]
  },

  // Assessment Diagnostic Areas (Starting Point)
  assessmentTypes: [
    {
      id: "metabolic",
      name: "Metabolic & Biomarker Assessment",
      icon: "🩸",
      tagline: "Clinical blood chemistry beyond routine checks",
      points: ["Insulin sensitivity & glycemic trends", "Cardiovascular ApoB & lipid subfractions", "Inflammation & liver metabolic markers"]
    },
    {
      id: "body-comp",
      name: "DEXA Body Composition Scan",
      icon: "📊",
      tagline: "Objective fat, lean mass, and bone density mapping",
      points: ["Visceral fat quantification", "Segmental muscle balance", "Bone mineral density baseline"]
    },
    {
      id: "movement",
      name: "Biomechanical & Mobility Screen",
      icon: "🧘",
      tagline: "Joint safety, posture, and movement mechanics",
      points: ["Spine and thoracic mobility", "Functional movement patterns", "Injury risk identification"]
    },
    {
      id: "lifestyle-eval",
      name: "Lifestyle & Habit Assessment",
      icon: "⏱️",
      tagline: "Sleep, stress, and daily energy evaluation",
      points: ["Sleep depth and recovery habits", "Daily activity and sedentary patterns", "Stress resilience and nutrition rhythm"]
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What makes Helevate different from a gym or fitness app?",
      a: "Helevate is a personalized health service company. Rather than selling generic workout classes, we start with comprehensive assessments to understand your current biological health, create a personalized Helevate Report, and provide ongoing guidance across health, lifestyle, diet, and fitness delivered right inside your gated community."
    },
    {
      q: "What is the Helevate Report?",
      a: "The Helevate Report is the central outcome of your initial assessments. It brings your metabolic data, body composition, lifestyle habits, and movement mechanics together into one clear, easy-to-understand roadmap that outlines exactly what your body needs."
    },
    {
      q: "Where do sessions and assessments take place?",
      a: "All coaching and support take place inside your gated community clubhouse or designated private space in Hyderabad, eliminating commute time and crowded gyms."
    },
    {
      q: "Do I need to be already fit to get started?",
      a: "Not at all. Helevate is designed for individuals at any stage of their health journey. The initial assessment ensures your plan is calibrated safely to your starting point."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.HELEVATE_DATA = HELEVATE_DATA;
}
