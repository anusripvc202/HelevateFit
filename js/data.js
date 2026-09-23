/**
 * HELEVATE.FIT — STRUCTURED DATA & CONTENT REPOSITORY
 * Source of truth based on Client Handoff Document & Core Objective:
 * Assess -> Understand -> Report -> Personalised Guidance -> Better Health
 */

const HELEVATE_DATA = {
  brand: {
    name: "Helevate.fit",
    legalName: "Helevate Fit Pvt Ltd",
    tagline: "Elevating Human Performance & Lifestyle",
    brandLine: "Not Ordinary",
    positioning: "Precision Health & Human Performance for Gated Communities",
    mission: "Helevate Fit helps users understand and measure their current health through precision assessments, generate a customized Helevate Report, and provide ongoing treatment support, nutrition, and lifestyle guidance delivered directly inside gated communities in Hyderabad.",
    founder: "Harish P",
    founderRole: "Founder & Head Coach",
    founderCert: "Certified Human Performance Coach",
    email: "helevatefit@gmail.com",
    phone: "+91 99639 60259",
    phoneAlt: "+91 94403 09596",
    address: "4th Floor, JK Business Centre, Road No. 36, Jubilee Hills, Hyderabad – 500033, Telangana",
    city: "Hyderabad",
    website: "https://helevate.fit"
  },

  // 1. Core Value Proposition (4 Simple Points)
  coreValuePoints: [
    {
      step: "01",
      name: "Assess",
      title: "Assess",
      desc: "Understand your current health through precision biological diagnostics."
    },
    {
      step: "02",
      name: "Analyse",
      title: "Analyse",
      desc: "Identify your specific health requirements and underlying metabolic patterns."
    },
    {
      step: "03",
      name: "Personalise",
      title: "Personalise",
      desc: "Receive clear, structured guidance tailored to your biological results."
    },
    {
      step: "04",
      name: "Improve",
      title: "Improve",
      desc: "Build better health habits with dedicated coaching in your community."
    }
  ],

  // 2. 4-Step Homepage Journey Flow
  homepageFlow: [
    {
      num: "01",
      title: "Assess",
      desc: "Complete your health assessment to establish an accurate, objective baseline of where you are today."
    },
    {
      num: "02",
      title: "Understand",
      desc: "Your health information and biomarkers are analysed to understand your current physiological condition."
    },
    {
      num: "03",
      title: "Receive Your Report",
      desc: "Get a clear, personalised health report highlighting key observations, scores, and areas needing attention."
    },
    {
      num: "04",
      title: "Get Personalised Guidance",
      desc: "Receive relevant treatment support, lifestyle, nutrition, and strength guidance based on your results."
    }
  ],

  // 3. 4 Diagnostic Health Assessments (From PDF)
  assessments: [
    {
      id: "metabolic-panel",
      name: "Metabolic Health Panel",
      tagline: "Beyond routine bloodwork.",
      shortDesc: "Uncover inflammation, insulin resistance, and cardiovascular risk patterns before they become diagnoses.",
      fullDesc: "Routine labs can look 'normal' while risk builds underneath. Our precision panel adds markers most routine check-ups skip — ApoB, Lp(a), fasting insulin/HOMA-IR, hs-CRP, and more — to reveal particle burden, insulin resistance, and inflammatory patterns early, while there's still time to change direction.",
      bestFor: "Anyone 35+, anyone with a family history of heart disease/diabetes, anyone whose weight isn't responding to normal effort.",
      markers: ["Apolipoprotein B (ApoB)", "Fasting Insulin & HOMA-IR", "hs-CRP Vascular Inflammation", "Lipoprotein(a) [Lp(a)]", "HbA1c Glycemic Dynamic"],
      icon: "🔬"
    },
    {
      id: "dexa-scan",
      name: "DEXA Body Composition Scan",
      tagline: "The real number behind the scale.",
      shortDesc: "Precise fat mass, lean muscle mass, and visceral fat data — the real metrics behind your health.",
      fullDesc: "A single scan measures your actual fat mass, lean muscle mass, bone density, and visceral fat — the fat around your organs linked to metabolic risk. It is the gold standard way to track real body transformation, not just weight on a scale.",
      bestFor: "Anyone starting a fat-loss or strength program, anyone who wants to track progress accurately.",
      markers: ["Visceral Adipose Tissue (VAT)", "Regional Lean Muscle Mass", "Total Body Fat %", "Bone Mineral Density", "Symmetry Baseline"],
      icon: "📊"
    },
    {
      id: "gut-microbiome",
      name: "Gut Microbiome Testing",
      tagline: "Nutrition built around your biology.",
      shortDesc: "Understand your gut bacteria to build a nutrition plan that works with your unique biology.",
      fullDesc: "Your gut bacteria influence digestion, inflammation, weight, and even mood. This test maps your gut microbiome so your nutrition plan works with your biology instead of against it.",
      bestFor: "Anyone with digestive issues, unexplained fatigue, or stalled progress despite a 'clean' diet.",
      markers: ["Microbiome Diversity Index", "Inflammatory Flora Ratios", "Short-Chain Fatty Acid Yield", "Digestive Efficiency"],
      icon: "🥗"
    },
    {
      id: "dna-testing",
      name: "DNA / Gene Testing",
      tagline: "Genetic insights into metabolism.",
      shortDesc: "Reveals how your body responds to exercise, macronutrients, and recovery demands.",
      fullDesc: "Genetic testing reveals how your body responds to different types of exercise, carbohydrates, fats, and recovery demands — turning your training and nutrition plan into something built specifically for you.",
      bestFor: "Anyone who wants a long-term, precision-built lifestyle plan.",
      markers: ["Carb & Fat Sensitivity", "Recovery Latency Profile", "Micronutrient Utilization", "Cardiovascular Tendencies"],
      icon: "🧬"
    }
  ],

  // 4. Sample Helevate Report Interactive Showcase
  sampleReport: {
    userName: "Sample Member Profile (Executive, Age 42)",
    status: "Baseline Assessment • Q1 Report",
    overallScore: 78,
    summary: "Your assessment results are organised into a personalised report designed to help you understand your health and identify areas that may need attention.",
    categories: {
      health: {
        title: "Metabolic & Biomarker Health",
        badge: "Attention Needed",
        summary: "Fasting insulin (14.2 µIU/mL) and hs-CRP (2.4 mg/L) indicate subclinical insulin resistance despite standard blood sugar appearing normal.",
        items: [
          { name: "Fasting Insulin & HOMA-IR", val: "14.2 µIU/mL", status: "Attention Needed", target: "< 6.0 µIU/mL" },
          { name: "Apolipoprotein B (ApoB)", val: "108 mg/dL", status: "Moderate", target: "< 80 mg/dL" },
          { name: "hs-CRP Vascular Inflammation", val: "2.4 mg/L", status: "Attention Needed", target: "< 1.0 mg/L" }
        ],
        action: "Prioritize glycemic meal sequencing and progressive strength training to restore insulin sensitivity."
      },
      lifestyle: {
        title: "Lifestyle & Sleep Architecture",
        badge: "Score: 68/100",
        summary: "Restricted deep sleep duration (48 mins/night) and long sedentary desk stretches are contributing to afternoon fatigue.",
        items: [
          { name: "Deep Sleep Duration", val: "48 mins/night", status: "Needs Improvement", target: "80+ mins/night" },
          { name: "Daily Step Baseline", val: "4,200 steps", status: "Low Baseline", target: "8,500+ steps" },
          { name: "Circadian Wind-down Latency", val: "12 mins pre-sleep", status: "Restricted", target: "45 mins buffer" }
        ],
        action: "Establish a 20-minute digital wind-down buffer and scheduled midday posture mobility breaks."
      },
      nutrition: {
        title: "Nutrition & Diet Pacing",
        badge: "Protein Deficit",
        summary: "Current dietary structure causes glucose spikes. Increasing bio-individual protein distribution stabilizes energy.",
        items: [
          { name: "Protein Distribution", val: "0.85 g/kg", status: "Target: 1.4–1.8 g/kg", target: "115g daily total" },
          { name: "Prebiotic Fiber Intake", val: "14 g/day", status: "Low Intake", target: "30+ g/day" },
          { name: "Glycemic Stability", val: "Frequent Swings", status: "Needs Optimization", target: "Stable Curve" }
        ],
        action: "Structure whole-food meals with protein prioritization and complex prebiotic fibers."
      },
      fitness: {
        title: "Strength & Biomechanics",
        badge: "Mobility Focus",
        summary: "Desk hours have restricted thoracic spine rotation, while posterior chain muscular endurance remains ready for progressive load.",
        items: [
          { name: "Thoracic Spine Mobility", val: "32° Rotation", status: "Restricted", target: "45°+ Full Range" },
          { name: "Visceral Fat Index (DEXA)", val: "112 cm²", status: "Moderate", target: "< 100 cm²" },
          { name: "Posterior Chain Strength", val: "Baseline Preserved", status: "Ready to Train", target: "Progressive Load" }
        ],
        action: "3x weekly coach-led clubhouse strength sessions targeting thoracic mobilization and posterior chain activation."
      }
    }
  },

  // 5. 4 Core Services / Personalised Guidance Disciplines (From PDF)
  services: [
    {
      id: "strength-coaching",
      name: "Strength Coaching",
      tagline: "Personalised strength training with certified coaches.",
      desc: "One-on-one and small-group strength training led by certified Human Performance Coaches, delivered inside your community. Programs are built around your assessment data and adjusted as you progress.",
      icon: "🏋️",
      link: "#/services"
    },
    {
      id: "fat-loss-h75",
      name: "Fat-Loss Transformation (e.g. H75)",
      tagline: "Structured, multi-phase transformation journey.",
      desc: "A structured, multi-phase program designed for adults who want to reclaim their health and functional fitness — combining assessments (metabolic panel, DEXA), personalised training, and nutrition coaching into one clear 12-week (or longer) journey with measurable checkpoints.",
      icon: "🔥",
      link: "#/services"
    },
    {
      id: "group-fitness",
      name: "Group Fitness Classes",
      tagline: "Community-based training that builds consistency.",
      desc: "Community-based group sessions that build consistency, accountability, and connection — without needing to leave your community or commute to a gym.",
      icon: "👥",
      link: "#/services"
    },
    {
      id: "nutrition-guides",
      name: "Personalised Nutrition Guides",
      tagline: "Nutrition built from your actual biology.",
      desc: "Nutrition plans built from your actual biomarkers, body composition, and (optionally) gut and genetic data — not a generic calorie sheet copy-pasted across clients.",
      icon: "🥗",
      link: "#/services"
    }
  ],

  // 6. 5-Step Detailed How It Works Roadmap (From PDF)
  detailedHowItWorks: [
    {
      step: "01",
      name: "Assess",
      title: "Baseline Your Biology",
      desc: "Complete comprehensive baseline diagnostics: metabolic health panel, DEXA body composition, and optionally gut/DNA testing."
    },
    {
      step: "02",
      name: "Personalise",
      title: "Build Around Your Data",
      desc: "Your certified coach interprets your Helevate Report and formulates a training and nutrition plan around what your data actually shows."
    },
    {
      step: "03",
      name: "Train & Act",
      title: "Execute In Your Community",
      desc: "Strength coaching, group fitness, and nutrition guidance delivered consistently inside your society clubhouse."
    },
    {
      step: "04",
      name: "Reassess",
      title: "90-Day Objective Checkpoints",
      desc: "Repeat key markers and scans to objectively measure what has changed — not just how you feel."
    },
    {
      step: "05",
      name: "Evolve",
      title: "Continuous Adaptation",
      desc: "Your plan adjusts as your body changes. Escalate to medical referral or higher performance protocols as needed."
    }
  ],

  // 7. Why Helevate Fit (Trust & Model Pillars)
  whyHelevatePoints: [
    {
      title: "Assessment-Led, Not Guesswork-Led",
      desc: "Every program starts with clinical blood panels and DEXA scans, so your plan is built for your biology, not a generic template.",
      icon: "🔬"
    },
    {
      title: "Community-Based Delivery",
      desc: "Delivered inside your gated community clubhouse in Hyderabad — zero commute friction, no traffic, and seamless consistency.",
      icon: "🏡"
    },
    {
      title: "Certified Human Performance Coaches",
      desc: "Work with certified coaches who understand biomechanics, metabolic health, and real human longevity.",
      icon: "🏅"
    },
    {
      title: "90-Day Measurable Proof",
      desc: "We track transformation with objective quarterly re-tests and DEXA scans to validate real internal progress.",
      icon: "📈"
    }
  ],

  // 8. Authentic Member Testimonials (From PDF)
  testimonials: [
    {
      name: "Siddharth Rao",
      role: "VP of Engineering",
      community: "My Home Bhooja, Hyderabad",
      quote: "The blood panel and DEXA scan caught insulin resistance that routine executive checkups completely missed. Having coaches right in our clubhouse made consistency effortless."
    },
    {
      name: "Priyanka Reddy",
      role: "Corporate Lawyer",
      community: "Aparna Sarovar, Hyderabad",
      quote: "Years of desk work caused severe upper spine stiffness. The biomechanical screening and tailored mobility plan restored my posture within 8 weeks without any commute friction."
    },
    {
      name: "Anand Verma",
      role: "Managing Director",
      community: "Jubilee Hills, Hyderabad",
      quote: "The Helevate Report gave me a clear scientific dietary framework without crash diets. My 90-day reassessment showed a 28% drop in hs-CRP inflammation and tangible fat loss."
    }
  ],

  // 9. Membership / Tier Structure (From PDF)
  pricingTiers: [
    {
      id: "foundation",
      name: "Foundation Tier",
      badge: "Community Entry",
      desc: "Group fitness and community coaching for consistent habit building.",
      features: [
        "Community group fitness sessions",
        "Basic movement screening",
        "Clubhouse coach support",
        "Lifestyle habit guidance"
      ]
    },
    {
      id: "transformation",
      name: "Transformation Tier",
      badge: "Most Popular",
      desc: "Personal strength coaching, nutrition planning, and DEXA body scans (e.g. H75).",
      features: [
        "1-on-1 Personal Strength Coaching",
        "DEXA Body Composition Scan",
        "Personalised Nutrition Blueprint",
        "Continuous coach accountability",
        "Quarterly 90-day re-testing"
      ]
    },
    {
      id: "precision",
      name: "Precision Tier",
      badge: "Complete Diagnostic",
      desc: "Comprehensive diagnostics + Metabolic Panel + Gut Microbiome + DNA testing.",
      features: [
        "Full Metabolic Health Panel (ApoB, Insulin, hs-CRP)",
        "DEXA Scan + Gut Microbiome & DNA Testing",
        "The Comprehensive Helevate Report",
        "Dedicated Human Performance Coach",
        "Full medical-grade reassessment loop"
      ]
    }
  ],

  // 10. Hyderabad Gated Communities List
  communities: [
    "My Home Bhooja",
    "Aparna Sarovar",
    "Jubilee Hills",
    "Gachibowli",
    "Financial District",
    "Hitec City",
    "Kokapet",
    "Narsingi",
    "Kondapur",
    "Madhapur"
  ]
};

if (typeof window !== 'undefined') {
  window.HELEVATE_DATA = HELEVATE_DATA;
}
