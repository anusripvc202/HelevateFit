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
  ],

  // 11. SEO & Editorial Insights (Blog starter topics)
  insights: [
    {
      id: "bloodwork-risk-patterns",
      title: "Why Your Bloodwork Can Look Normal While Your Risk Is Rising",
      tagline: "The gap between standard check-ups and precision preventive diagnostics.",
      category: "Metabolic Health",
      readTime: "5 min read",
      author: "Helevate Science Team",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
      excerpt: "Standard annual health checks focus on late-stage disease thresholds like fasting glucose. Learn how early subclinical markers like fasting insulin and ApoB reveal true cardiovascular risk years in advance.",
      content: `
        <p>Most executive health check-ups follow a reactive diagnostic model designed to flag active pathology rather than early physiological decline. A fasting blood glucose level of 96 mg/dL is marked 'normal' on lab reference ranges, even when the pancreas is producing 3x the normal amount of insulin to keep it there.</p>
        <h4>The Hyperinsulinemic Compensation Phase</h4>
        <p>Before fasting glucose climbs into pre-diabetic or diabetic territory, fasting insulin often rises silently for 5 to 10 years. This hyperinsulinemic state promotes visceral fat accumulation, elevates blood pressure, and accelerates arterial plaque buildup — all while standard annual bloodwork reports 'all clear.'</p>
        <h4>The Role of ApoB vs. Total Cholesterol</h4>
        <p>Standard lipid panels measure total cholesterol and LDL-C, which quantify the mass of cholesterol inside particles. However, modern preventive cardiology looks at Apolipoprotein B (ApoB) — which counts the actual number of atherogenic particles circulating in your bloodstream. Particle count is the true driver of vascular plaque penetration.</p>
        <div class="insight-highlight-box">
          <strong>Key Takeaway:</strong> Baseline testing should look beyond standard reference ranges. Assessing fasting insulin, HOMA-IR, ApoB, and hs-CRP allows proactive lifestyle intervention before metabolic strain turns into a clinical diagnosis.
        </div>
      `
    },
    {
      id: "dexa-vs-weighing-scale",
      title: "DEXA vs. the Weighing Scale: What Actually Changed",
      tagline: "Understanding visceral fat, regional lean mass, and true body recomposition.",
      category: "Body Composition",
      readTime: "4 min read",
      author: "Harish P, Head Coach",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      excerpt: "A standard bathroom scale measures total body weight, but fails to distinguish between lean muscle, subcutaneous fat, and dangerous visceral adipose tissue surrounding vital organs.",
      content: `
        <p>When you start a structured strength and nutrition protocol, the bathroom scale can often be misleading. It is common to drop 2 kg of body fat while gaining 1.5 kg of lean contractile muscle, resulting in a net scale shift of only 0.5 kg. Without objective scanning, many become discouraged despite making monumental health progress.</p>
        <h4>The Danger of Visceral Fat (VAT)</h4>
        <p>Unlike subcutaneous fat (the soft fat beneath the skin), visceral fat accumulates inside the abdominal cavity around the liver, pancreas, and intestines. Visceral fat is metabolically active, secreting inflammatory cytokines and free fatty acids directly into the portal vein. DEXA imaging quantifies visceral adipose tissue in exact grams and square centimeters.</p>
        <h4>Skeletal Muscle Index and Metabolic Longevity</h4>
        <p>Muscle mass is our primary metabolic sink for glucose disposal. DEXA tracks regional lean mass across your arms, legs, and trunk — ensuring you preserve or build muscle while losing fat, protecting your basal metabolic rate and long-term joint health.</p>
        <div class="insight-highlight-box">
          <strong>Key Takeaway:</strong> Track your transformation with gold-standard DEXA body composition scans rather than bathroom scales to verify real visceral fat reduction and muscle retention.
        </div>
      `
    },
    {
      id: "apob-and-cardiology",
      title: "What Is ApoB and Why Cardiologists Are Starting to Care",
      tagline: "The single best biomarker for atherogenic particle burden.",
      category: "Cardiovascular Longevity",
      readTime: "6 min read",
      author: "Clinical Advisory Board",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80",
      excerpt: "Why the global cardiology consensus is shifting towards ApoB testing as the most accurate predictor of cardiovascular risk and plaque progression.",
      content: `
        <p>For decades, standard medical practice has relied on LDL-C (LDL cholesterol) to assess cardiovascular risk. While useful, LDL-C only estimates the total mass of cholesterol within your LDL particles — not how many particles exist.</p>
        <h4>Why Particle Count Matters</h4>
        <p>Imagine cargo ships carrying containers into a harbor. LDL-C is the amount of cargo; ApoB is the number of ships. Each particle of LDL, VLDL, and IDL carries exactly one ApoB protein molecule. If you have many small, dense LDL particles, your total cholesterol might appear moderate, but your ApoB particle count is dangerously high — exponentially increasing the probability that particles will penetrate the arterial endothelial wall.</p>
        <h4>Optimizing ApoB Through Lifestyle & Training</h4>
        <p>Zone-2 cardiovascular training, reduction of refined seed oils and sugars, optimization of saturated vs. polyunsaturated fat ratios, and resistance training work together to enhance LDL receptor clearance and reduce hepatic ApoB secretion.</p>
        <div class="insight-highlight-box">
          <strong>Key Takeaway:</strong> Knowing your ApoB baseline gives you an objective metric to track heart health progression alongside your coach and clinical team.
        </div>
      `
    },
    {
      id: "insulin-resistance-stubborn-weight",
      title: "Insulin Resistance: The Silent Driver Behind Stubborn Weight",
      tagline: "Why caloric restriction alone fails when hormones block fat oxidation.",
      category: "Metabolic Nutrition",
      readTime: "5 min read",
      author: "Dr. S. Ananya, Clinical Nutrition Lead",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
      excerpt: "Understand how chronic hyperinsulinemia locks fat stores, why afternoon energy crashes occur, and how glycemic pacing unlocks sustainable metabolic flexibility.",
      content: `
        <p>If you have ever felt like you're eating less and working out more without seeing fat loss, elevated insulin is frequently the physiological roadblock. Insulin is a storage hormone. When circulating levels remain chronically elevated throughout the day, the enzyme hormone-sensitive lipase (HSL) is inhibited, preventing fat cells from releasing stored triglycerides for energy.</p>
        <h4>The Afternoon Fatigue Cycle</h4>
        <p>High-glycemic meals trigger rapid glucose spikes followed by excessive insulin surges. As insulin pulls glucose into cells, blood sugar drops sharply, triggering brain fog, carbohydrate cravings, and afternoon lethargy. You're not lazy — your metabolism is stuck on a glucose rollercoaster.</p>
        <h4>The Helevate Approach: Glycemic Pacing & Strength</h4>
        <p>Instead of starvation diets, we implement bio-individual protein pacing (1.4–1.8g/kg lean mass), fiber prioritization, post-meal walking, and progressive resistance training. Muscle contraction stimulates GLUT4 glucose transporters independent of insulin, directly reversing insulin resistance.</p>
        <div class="insight-highlight-box">
          <strong>Key Takeaway:</strong> Restore metabolic flexibility first through data-led nutrition and progressive strength training, and fat loss becomes the natural outcome.
        </div>
      `
    }
  ],

  // 12. Careers & Open Positions
  careers: {
    headline: "Build the Future of Precision Fitness With Us",
    subheadline: "We’re looking for coaches and specialists who want to practice real, data-led health — not just run generic sessions.",
    benefits: [
      {
        icon: "🔬",
        title: "Work with Real Assessment Data",
        desc: "Formulate training and nutrition plans based on metabolic panels, DEXA body scans, and biometric telemetry."
      },
      {
        icon: "📈",
        title: "Structured Career Path",
        desc: "Clear growth trajectory from on-site coach to Master Performance Lead with ongoing clinical education."
      },
      {
        icon: "🎓",
        title: "Training & Certification Support",
        desc: "Access proprietary Helevate diagnostic interpretation protocols and continuing human performance education."
      },
      {
        icon: "🏡",
        title: "Community-Based Work",
        desc: "Deliver high-touch coaching inside premium gated communities in Hyderabad with dedicated clubhouse facilities."
      },
      {
        icon: "✨",
        title: "A New Wellness Model",
        desc: "Be part of an anti-hustle, science-first health movement transforming preventive longevity."
      }
    ],
    roles: [
      {
        id: "strength-performance-coach",
        title: "Strength & Performance Coach",
        type: "Full-Time • On-Site",
        location: "Hyderabad (Gated Communities)",
        desc: "Lead 1-on-1 and small group strength protocols in society clubhouses. Interpret DEXA and movement baselines to guide residents with precision.",
        requirements: [
          "CSCS, ACE, NSCA, or equivalent recognized certification",
          "Deep understanding of biomechanics, progressive resistance, and posture screening",
          "Strong communication skills and passion for working with adult professionals"
        ]
      },
      {
        id: "nutrition-coach",
        title: "Clinical & Sports Nutrition Coach",
        type: "Full-Time / Hybrid",
        location: "Hyderabad (Jubilee Hills / On-Site)",
        desc: "Translate metabolic blood panels, lipid markers, and gut microbiome data into bio-individual nutrition frameworks tailored to real Indian family meal structures.",
        requirements: [
          "Degree in Clinical Nutrition / Dietetics (RD preferred) or certified Precision Nutrition coach",
          "Experience with metabolic markers (fasting insulin, ApoB, lipid subfractions)",
          "Empathetic, habit-first coaching approach without fad diet dogmatism"
        ]
      },
      {
        id: "community-growth-associate",
        title: "Community Growth & Partnership Associate",
        type: "Full-Time",
        location: "Hyderabad",
        desc: "Engage with RWA committees, resident associations, and clubhouse leadership to expand Helevate's on-site wellness ecosystem across Hyderabad societies.",
        requirements: [
          "2+ years experience in community engagement, premium wellness partnerships, or hospitality",
          "Outstanding presentation, interpersonal, and organizational abilities",
          "Familiarity with Hyderabad premium residential societies"
        ]
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.HELEVATE_DATA = HELEVATE_DATA;
}
