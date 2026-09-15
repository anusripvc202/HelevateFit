/**
 * HELEVATE.FIT — STRUCTURED DATA & CONTENT REPOSITORY
 * Source of truth for brand info, 4 assessments, 4 ecosystem programs,
 * 5-step process, gated communities, careers, pricing tiers, and clinical insights.
 * 
 * Strict Brand Guidelines:
 * - Approved Palette: #0E3A5D, #153255, #DDF1EF
 * - Typography: Quicksand
 * - No fake pricing, no invented medical/customer claims.
 */

const HELEVATE_DATA = {
  brand: {
    name: "Helevate.fit",
    legalName: "Helevate Fit Pvt Ltd",
    founder: "Harish P",
    founderRole: "Founder & Head Coach",
    founderCert: "Certified Human Performance Coach",
    mission: "Bring precision health — normally reserved for elite athletes and expensive clinics — to everyday people, delivered where they live.",
    tagline: "Elevating Human Performance & Lifestyle",
    positioning: "Trusted fitness services for gated communities",
    brandLine: "Not Ordinary",
    email: "helevatefit@gmail.com",
    phone: "+91 99639 60259",
    phoneAlt: "+91 94403 09596",
    address: "4th Floor, JK Business Centre, Road No. 36, Jubilee Hills, Hyderabad – 500033, Telangana",
    city: "Hyderabad",
    website: "https://helevate.fit",
    operatingHours: "Monday – Saturday: 6:00 AM – 9:00 PM"
  },

  // 3 Trust Points (Section 7)
  trustPoints: [
    {
      icon: "✓",
      title: "Certified Human Performance Coaches",
      desc: "Experienced, certified coaches dedicated to scientific, progressive movement."
    },
    {
      icon: "🏡",
      title: "Community-based delivery — no commute, no crowded gyms",
      desc: "Delivered in your familiar, comfortable clubhouse or private space."
    },
    {
      icon: "🔬",
      title: "Assessment-led, not guesswork-led",
      desc: "Every protocol begins with objective biological data, not generic templates."
    }
  ],

  // 4 Core Helevate Solution Disciplines (Section 9)
  solutionCards: [
    {
      id: "strength",
      title: "Strength Coaching",
      icon: "🏋️",
      shortDesc: "Personalised strength training with certified coaches.",
      longDesc: "One-on-one and small-group progressive resistance training built around your individual biomechanics, bone density, and posture."
    },
    {
      id: "nutrition",
      title: "Nutrition",
      icon: "🥗",
      shortDesc: "Personalised nutrition guidance.",
      longDesc: "Biomarker-informed nutrition plans based on fasting blood chemistry, body composition, and sustainable real-world habits."
    },
    {
      id: "group",
      title: "Group Fitness",
      icon: "👥",
      shortDesc: "Community-based group training.",
      longDesc: "High-energy, coach-led community cohorts (capped at 5–10 residents) fostering consistency, accountability, and connection."
    },
    {
      id: "recovery",
      title: "Recovery",
      icon: "🧘",
      shortDesc: "Recovery-focused support.",
      longDesc: "Assisted mobility, yoga, autonomic stress balancing, and joint decompression to sustain long-term physical resilience."
    }
  ],

  // 4 Key Assessments (Section 10)
  assessments: [
    {
      id: "metabolic",
      title: "Metabolic Health Panel",
      tag: "Biomarker Diagnostics",
      badge: "Clinical Blood Panel",
      shortDesc: "Beyond routine bloodwork. Uncover inflammation, insulin resistance and cardiovascular risk patterns before they become diagnoses.",
      longDesc: "Routine annual checkups often label bloodwork as 'normal' while insulin resistance and vascular inflammation build quietly. Our precision panel investigates deeper particle concentrations and glycemic biomarkers to identify risks years before symptoms arise.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=80",
      evaluated: [
        "Apolipoprotein B (ApoB) — atherogenic particle concentration",
        "Fasting Insulin & HOMA-IR — cellular insulin sensitivity",
        "High-Sensitivity CRP (hs-CRP) — systemic vascular inflammation",
        "HbA1c & Fasting Glycemic Dynamics — glucose regulation",
        "Advanced Lipid Subfractions & Liver Metabolic Markers"
      ],
      process: [
        "Doorstep morning fasting blood sample collection",
        "Certified clinical laboratory analysis",
        "Dedicated interpretation consultation with your lead coach",
        "Direct integration into your training and nutritional plan"
      ],
      benefits: [
        "Detect metabolic risks 5–10 years before standard clinical markers",
        "Replace dietary guesswork with objective blood chemistry",
        "Re-evaluate progress every 90 days to verify internal biological improvements"
      ],
      timeframe: "Results in 48–72 hours"
    },
    {
      id: "dexa",
      title: "DEXA Body Composition Scan",
      tag: "Gold-Standard Imaging",
      badge: "Segmental Body Scan",
      shortDesc: "Precise fat mass, lean mass, bone density and visceral fat data.",
      longDesc: "The bathroom scale tells only a small, misleading part of the story. Dual-Energy X-ray Absorptiometry (DEXA) provides medical-grade mapping of your fat mass, segmental lean muscle symmetry, visceral adipose tissue, and skeletal bone mineral density.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
      evaluated: [
        "Visceral Adipose Tissue (VAT) — pathogenic deep organ fat",
        "Segmental Lean Muscle Mass — left vs. right limb symmetry",
        "Bone Mineral Density (T-Score & Z-Score) — skeletal strength",
        "Total Fat Mass vs. Lean Mass Distribution",
        "Android / Gynoid Fat Ratio"
      ],
      process: [
        "10-minute non-invasive medical-grade scan",
        "Immediate high-resolution digital visual report",
        "Coach walkthrough analyzing muscle balance and visceral fat targets",
        "Establishment of baseline targets for your customized transformation"
      ],
      benefits: [
        "Distinguish between pathogenic visceral fat and subcutaneous fat",
        "Ensure weight loss preserves crucial metabolic muscle",
        "Prevent joint injuries by detecting muscle imbalances early"
      ],
      timeframe: "Immediate same-day visual report"
    },
    {
      id: "gut",
      title: "Gut Microbiome Testing",
      tag: "Microbiome Sequencing",
      badge: "Digestive Genomics",
      shortDesc: "Understand your gut health and build nutrition around your unique biology.",
      longDesc: "Your microbiome influences nutrient absorption, metabolic rate, immune function, and systemic inflammation. By sequencing the bacterial strains inhabiting your digestive tract, we tailor nutrition specifically to your biological profile.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
      evaluated: [
        "Microbial Diversity & Richness Score",
        "Short-Chain Fatty Acid (SCFA) Producing Bacteria",
        "Akkermansia Muciniphila & Mucosal Barrier Integrity",
        "Dysbiosis Index & Opportunistic Bacterial Balance",
        "Inflammatory Microbial Markers"
      ],
      process: [
        "Non-invasive at-home sample collection kit",
        "High-throughput DNA sequencing of microbial species",
        "Comprehensive bacterial profile consultation",
        "Targeted whole-food and prebiotic nutritional roadmap"
      ],
      benefits: [
        "Address chronic digestive discomfort, bloating, and sluggish energy",
        "Calibrate dietary fiber and fermented foods to your unique flora",
        "Strengthen gut barrier resilience and nutrient assimilation"
      ],
      timeframe: "Results in 10–14 days"
    },
    {
      id: "dna",
      title: "DNA / Gene Testing",
      tag: "Genomic Profiling",
      badge: "80+ Genetic Markers",
      shortDesc: "Genetic insights into metabolism, nutrient needs, exercise response and recovery demands.",
      longDesc: "Your DNA provides a permanent blueprint of how your body responds to endurance vs. power loads, carbohydrate clearance, caffeine metabolism, tendon collagen resilience, and circadian recovery demands.",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
      evaluated: [
        "Power vs. Endurance Fiber Trainability (ACTN3)",
        "Collagen & Tendon Injury Resilience Markers (COL5A1)",
        "Carbohydrate vs. Lipid Oxidation Tendencies",
        "Caffeine & Micronutrient Clearance Rates",
        "Circadian Chronotype & Optimal Training Windows"
      ],
      process: [
        "Simple, painless cheek swab sample collection",
        "Sequencing of 80+ performance and metabolic SNPs",
        "Detailed Lifelong Genetic Blueprint document",
        "Integration of genetic insights into lifelong training periodization"
      ],
      benefits: [
        "Eliminate trial-and-error with workouts misaligned to your genetics",
        "Protect joints by adjusting training volume to your collagen profile",
        "One-time test providing actionable insights for life"
      ],
      timeframe: "Results in 14–18 days"
    }
  ],

  // 4 Core Programs (Section 12)
  programs: [
    {
      id: "strength-coaching",
      title: "Strength Coaching",
      badge: "1-on-1 & Small Group",
      shortDesc: "One-on-one and small-group strength training led by certified Human Performance Coaches.",
      longDesc: "Progressive resistance training delivered inside your society clubhouse or home gym. Designed to build functional lean muscle, reinforce posture, enhance bone mineral density, and develop sustainable lifelong physical capacity.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
      bullets: [
        "Biomechanical screening to identify and eliminate injury risks",
        "Periodized resistance training calibrated to your bone density and posture",
        "Undivided 1-on-1 coach attention during every repetition",
        "Delivered inside your gated community clubhouse or private gym"
      ],
      ctaText: "Find Your Program"
    },
    {
      id: "fatloss-h75",
      title: "Fat-Loss Transformation Programs",
      badge: "Flagship H75 Protocol",
      shortDesc: "Structured multi-phase programs such as H75, built around assessments, training and nutrition.",
      longDesc: "Scientifically structured fat loss, not just weight loss. We focus on mobilizing pathogenic visceral fat while protecting lean muscle tissue, guided by regular DEXA checkpoints and biomarker monitoring.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      bullets: [
        "Visceral adipose tissue reduction measured via DEXA scans",
        "Insulin-sensitizing resistance splits and cardiovascular base building",
        "Multi-phase checkpoints (Reset → Mobilization → Consolidation)",
        "Daily structured guidance and habit accountability"
      ],
      ctaText: "Find Your Program"
    },
    {
      id: "group-fitness",
      title: "Group Fitness Classes",
      badge: "Community Cohorts (5–10)",
      shortDesc: "Community-based group sessions that build consistency, accountability and connection.",
      longDesc: "High-energy functional conditioning batches capped at 5–10 residents. Perfect for building neighborhood connection, friendly accountability, and cardiovascular stamina without losing coaching quality.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
      bullets: [
        "Strictly capped at 5–10 residents for personal posture supervision",
        "Athletic conditioning, agility, mobility, and core strength",
        "Fosters community consistency and lasting neighbor camaraderie",
        "Convenient morning and evening clubhouse schedules"
      ],
      ctaText: "Find Your Program"
    },
    {
      id: "personalised-nutrition",
      title: "Personalised Nutrition Guides",
      badge: "Biomarker-Informed",
      shortDesc: "Nutrition plans based on biomarkers, body composition and optional gut/genetic data.",
      longDesc: "We reject starvation diets and rigid meal plans. Our clinical nutrition guidance translates your blood markers, digestive tolerance, and daily family schedule into a sustainable, nourishing eating framework.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
      bullets: [
        "Meal architecture calibrated to your fasting insulin and lipid profile",
        "Practical integration with family dining and regional cuisine preferences",
        "Micronutrient balance based on laboratory baselines",
        "Continuous guidance with realistic habit formation"
      ],
      ctaText: "Find Your Program"
    }
  ],

  // 5-Step Process Timeline (Section 14)
  howItWorksSteps: [
    {
      step: "01",
      name: "ASSESS",
      title: "Baseline your biology.",
      desc: "We begin with objective diagnostics: fasting metabolic bloodwork (ApoB, Insulin, hs-CRP), gold-standard medical DEXA scan, and optional gut/genetic sequencing.",
      icon: "🔬",
      details: "No guessing. We establish accurate baseline metrics before writing a single workout."
    },
    {
      step: "02",
      name: "PERSONALISE",
      title: "Build training and nutrition around the data.",
      desc: "Your dedicated coach and nutritionist translate your assessment findings into a customized strength, conditioning, and nutritional blueprint tailored to your daily schedule.",
      icon: "📋",
      details: "Your plan is engineered specifically for your body chemistry and goals."
    },
    {
      step: "03",
      name: "TRAIN & ACT",
      title: "Strength coaching, group fitness and nutrition guidance.",
      desc: "Your coach meets you directly in your community clubhouse or private gym. Zero commute friction, complete privacy, and undivided expert attention.",
      icon: "🏋️",
      details: "Doorstep delivery ensures consistency is effortless throughout the year."
    },
    {
      step: "04",
      name: "REASSESS",
      title: "Measure what actually changed.",
      desc: "Every 90 days, we repeat key biomarker panels and DEXA scans to objectively measure what has shifted in your biology (visceral fat lost, muscle gained, insulin normalized).",
      icon: "📊",
      details: "Measurable, verifiable outcomes instead of subjective feelings."
    },
    {
      step: "05",
      name: "EVOLVE",
      title: "Adjust the plan as the body changes.",
      desc: "As your physiological markers improve, your program evolves with progressive strength targets, refreshed nutritional phases, and ongoing performance optimization.",
      icon: "⚡",
      details: "The central loop continues: Measure → Interpret → Intervene → Re-measure."
    }
  ],

  // 3-Tier Membership Architecture (Section 22 - Strictly No Fake Pricing)
  memberships: [
    {
      id: "foundation",
      name: "FOUNDATION",
      badge: "Community Group Focus",
      tagline: "Group Fitness + Community Coaching",
      description: "Ideal entry point for residents seeking high-energy, consistent group coaching and neighbor camaraderie.",
      features: [
        "Community-based group fitness batches (capped at 5–10 residents)",
        "Movement screen & cardiovascular stamina baselines",
        "Clubhouse morning & evening schedule flexibility",
        "Continuous coach posture guidance & injury prevention",
        "Community accountability & support"
      ],
      pricingDisplay: "Talk to us",
      cta: "Book a Consultation"
    },
    {
      id: "transformation",
      name: "TRANSFORMATION",
      badge: "Flagship Protocol",
      tagline: "Personal Strength Coaching + Nutrition + DEXA",
      description: "Outcome-driven protocol (such as H75) combining 1-on-1 progressive resistance training with medical DEXA body mapping.",
      features: [
        "Undivided 1-on-1 coaching delivered inside your society clubhouse gym",
        "Baseline & 90-day comparative medical DEXA body composition scans",
        "Personalised biomarker-guided nutrition architecture",
        "Targeted visceral fat reduction and lean muscle preservation",
        "Weekly habit tracking & progressive strength logging"
      ],
      pricingDisplay: "Talk to us",
      cta: "Book a Consultation"
    },
    {
      id: "precision",
      name: "PRECISION",
      badge: "Comprehensive Longevity Suite",
      tagline: "Everything above + Metabolic Panel + Gut Microbiome + DNA Testing + Periodic Reassessment",
      description: "The ultimate precision health experience: comprehensive blood biomarkers, DEXA scans, gut microbiome, DNA genetics, and quarterly reassessments.",
      features: [
        "All Transformation Tier benefits with dedicated coach priority",
        "Advanced Metabolic Blood Panel (ApoB, Fasting Insulin, hs-CRP)",
        "DEXA Body Composition Scan with visceral fat mapping",
        "Gut Microbiome Testing & Digestive Roadmap",
        "DNA / Gene Testing with 80+ performance markers",
        "Quarterly diagnostic reassessments (Measure → Interpret → Intervene → Re-measure)"
      ],
      pricingDisplay: "Talk to us",
      cta: "Book a Consultation"
    }
  ],

  // Founder & Team (Section 17)
  team: [
    {
      id: "harish-p",
      name: "Harish P",
      role: "Founder & Head Coach",
      certification: "Certified Human Performance Coach",
      specialty: "Biomechanical Assessment & Longevity Coaching",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      bio: "Founder of Helevate Fit Pvt Ltd and Certified Human Performance Coach with over a decade of experience guiding individuals toward sustainable athletic longevity. Dedicated to bringing precision health — normally reserved for elite athletes — directly into residential communities.",
      avatarText: "HP"
    },
    {
      id: "nutrition-specialist",
      name: "Clinical Nutritionist",
      role: "Lead Nutrition Specialist",
      certification: "Master's in Clinical Nutrition & Dietetics",
      specialty: "Biomarker Nutrition & Metabolic Health",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      bio: "Specializes in translating clinical blood panels, fasting insulin dynamics, and gut microbiome data into sustainable, nourishing meal architectures.",
      avatarText: "CN"
    },
    {
      id: "movement-specialist",
      name: "Strength & Movement Coach",
      role: "Senior Performance Coach",
      certification: "NSCA / CSCS Certified Strength Specialist",
      specialty: "Orthopedic Safety & Progressive Overload",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
      bio: "Focuses on joint-safe strength development, postural realignment, and progressive resistance programming delivered inside society clubhouses.",
      avatarText: "SC"
    },
    {
      id: "recovery-specialist",
      name: "Recovery Specialist",
      role: "Autonomic Health & Mobility Coach",
      certification: "Certified Yoga & Mobility Practitioner",
      specialty: "Assisted Stretching & Parasympathetic Recovery",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
      bio: "Designs autonomic recovery protocols, assisted stretching, and sleep hygiene strategies to prevent burnout and enhance cellular adaptation.",
      avatarText: "RC"
    }
  ],

  // Careers / Join Our Team (Section 18)
  careers: {
    headline: "Build the Future of Precision Fitness With Us",
    subheading: "We’re looking for coaches and specialists who want to practice real, data-led health — not just run generic sessions.",
    benefits: [
      "Work with real medical diagnostic data (DEXA, metabolic panels, genetics) — no guesswork coaching",
      "Structured career path: Coach → Senior Coach → Lead Coach → Community Director",
      "Training support and continuing education sponsorship",
      "First-of-its-kind wellness model in premier gated societies",
      "Community-based work inside luxury clubhouses — no noisy commercial gyms"
    ],
    roles: [
      {
        id: "role-strength",
        title: "Strength & Performance Coach",
        type: "Full-Time",
        location: "Hyderabad Gated Communities (Clubhouse Delivery)",
        requirements: "Recognized certification (CSCS / ACE / NSCA / ACSM), 3+ years experience, passion for biomechanics and 1-on-1 coaching.",
        responsibilities: "Deliver 1-on-1 and small group strength sessions in assigned residential societies; execute movement screenings; monitor progressive overload."
      },
      {
        id: "role-nutrition",
        title: "Nutrition Coach",
        type: "Full-Time / Hybrid",
        location: "Jubilee Hills & Residential Societies",
        requirements: "Degree / Certification in Clinical Nutrition or Dietetics, experience interpreting blood biomarkers and creating sustainable nutrition plans.",
        responsibilities: "Translate clinical blood panels into practical meal guidance; conduct periodic reviews; collaborate with strength coaches."
      },
      {
        id: "role-growth",
        title: "Community Growth / Sales Associate",
        type: "Full-Time",
        location: "Hyderabad (Gated Communities & HQ)",
        requirements: "2+ years in community outreach, luxury hospitality, or wellness sales. Strong interpersonal and RWA coordination skills.",
        responsibilities: "Manage RWA relationships and clubhouse permissions; organize community health awareness events; onboard new residents."
      }
    ]
  },

  // Hyderabad Gated Communities (Section 20 & 21)
  communities: [
    {
      slug: "my-home-bhooja",
      name: "My Home Bhooja",
      location: "HITEC City / Knowledge City",
      status: "Active Community",
      availability: "Morning & Evening Batches Available",
      description: "Premier high-rise gated community in HITEC City with dedicated clubhouse strength coaching and on-site diagnostic clinics.",
      activeCoaches: ["Harish P (Head Coach)", "Senior Strength Coach"],
      schedule: "6:00 AM – 10:00 AM & 5:00 PM – 8:30 PM",
      facilities: "Luxury Clubhouse Gym & Multi-purpose Hall"
    },
    {
      slug: "jayabheri-silicon-county",
      name: "Jayabheri Silicon County",
      location: "HITEC City",
      status: "Active Community",
      availability: "1-on-1 & Small Group Coaching",
      description: "Exclusive residential enclave in HITEC City featuring personalised strength and fat loss transformation programs.",
      activeCoaches: ["Certified Performance Coach"],
      schedule: "6:30 AM – 10:30 AM & 5:30 PM – 8:00 PM",
      facilities: "Resident Fitness Center"
    },
    {
      slug: "boulder-hills",
      name: "Boulder Hills",
      location: "Gachibowli",
      status: "Active Community",
      availability: "Active Cohorts & 1-on-1 Sessions",
      description: "Scenic gated community in Gachibowli with dedicated morning athletic conditioning and metabolic health panels.",
      activeCoaches: ["Harish P", "Performance Specialist"],
      schedule: "6:00 AM – 11:00 AM & 4:30 PM – 8:30 PM",
      facilities: "Clubhouse Gymnasium"
    },
    {
      slug: "aparna-sarovar-grande",
      name: "Aparna Sarovar Grande",
      location: "Nallagandla",
      status: "Active Community",
      availability: "Morning Batches & Weekend Assessments",
      description: "Vibrant gated society with active group fitness classes and structured DEXA body composition checkpoints.",
      activeCoaches: ["Lead Group Coach", "Nutrition Specialist"],
      schedule: "6:00 AM – 9:30 AM & 6:00 PM – 8:30 PM",
      facilities: "Clubhouse Fitness Facility"
    },
    {
      slug: "rajapushpa-atria",
      name: "Rajapushpa Atria",
      location: "Kokapet / Financial District",
      status: "Active Community",
      availability: "1-on-1 Strength Protocols",
      description: "Modern gated community in Kokapet where residents access doorstep precision coaching and personalized nutrition.",
      activeCoaches: ["Certified Strength Coach"],
      schedule: "6:30 AM – 10:00 AM & 5:00 PM – 8:00 PM",
      facilities: "Resident Clubhouse"
    },
    {
      slug: "golf-view-apartments",
      name: "Golf View Apartments",
      location: "Nanakramguda / Gachibowli",
      status: "Active Community",
      availability: "Private 1-on-1 Coaching",
      description: "Serene residential development with individualized strength programming and recovery sessions.",
      activeCoaches: ["Head Performance Coach"],
      schedule: "7:00 AM – 10:00 AM & 5:30 PM – 7:30 PM",
      facilities: "Clubhouse Gym"
    },
    {
      slug: "prestige-high-fields",
      name: "Prestige High Fields",
      location: "Financial District",
      status: "Upcoming Community",
      availability: "Waitlist Open / Launching Soon",
      description: "Upcoming launch bringing Helevate's precision health and clubhouse coaching to residents in Financial District.",
      activeCoaches: ["Coaching Team Onboarding"],
      schedule: "Launching Q4 2026",
      facilities: "Grand Clubhouse Gym"
    }
  ],

  // Clinical Insights / Blog Starter Articles (Section 23)
  insights: [
    {
      id: "bloodwork-normal-risk",
      title: "Why Your Bloodwork Can Look Normal While Your Risk Is Rising",
      category: "Metabolic Biomarkers",
      readTime: "5 min read",
      author: "Helevate Clinical Team",
      date: "2026",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
      excerpt: "Routine annual checkups look for disease that has already arrived. Our precision metabolic panel looks for atherogenic particle burden and insulin resistance that develop quietly 5 to 10 years earlier.",
      keyTakeaways: [
        "Standard lipid panels measure total LDL cholesterol concentration rather than atherogenic particle count (ApoB).",
        "Fasting blood glucose can remain 'normal' for years while the pancreas overproduces insulin to compensate for resistance.",
        "Tracking fasting insulin alongside HOMA-IR uncovers metabolic decline years before diagnosis."
      ],
      fullContent: `
        <h3>The Hidden Lag in Standard Health Checks</h3>
        <p>Most routine executive health check-ups are designed to detect late-stage dysfunction — such as established type-2 diabetes or severe arterial plaque. As a result, blood panels frequently return with all markers in the green "normal" reference range, even when underlying metabolic resistance has been quietly compounding for half a decade.</p>
        
        <h3>ApoB vs. Traditional LDL-C</h3>
        <p>Apolipoprotein B (ApoB) represents the exact particle count of atherogenic lipoproteins capable of entering and getting trapped in arterial walls. Traditional LDL-C merely calculates the estimated weight of cholesterol inside those particles. When particle size is small, you can have a "normal" LDL-C reading while carrying a dangerously elevated ApoB count.</p>
        
        <h3>The Compensatory Insulin Phase</h3>
        <p>Before fasting glucose climbs out of the normal range, the pancreas often works in overdrive, producing 3x to 5x higher fasting insulin to clear glucose from resistant muscle cells. Measuring fasting insulin and calculating HOMA-IR allows for early lifestyle intervention long before standard tests raise an alarm.</p>
      `
    },
    {
      id: "dexa-vs-weighing-scale",
      title: "DEXA vs. the Weighing Scale: What Actually Changed in Your Body",
      category: "Body Composition",
      readTime: "4 min read",
      author: "Harish P",
      date: "2026",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
      excerpt: "Bathroom scales provide only a single misleading number. A DEXA scan reveals the true shift between pathogenic visceral fat, skeletal muscle retention, and bone mineral density.",
      keyTakeaways: [
        "Rapid weight loss on generic starvation diets frequently results in 30–40% lean muscle loss, depressing resting metabolic rate.",
        "Visceral Adipose Tissue (VAT) is the primary metabolic driver of arterial inflammation and hepatic insulin resistance.",
        "Segmental limb scans detect unilateral strength and muscle imbalances before orthopedic pain occurs."
      ],
      fullContent: `
        <h3>The Problem With Single Aggregate Numbers</h3>
        <p>Stepping on a standard bathroom scale gives you a single aggregate weight in kilograms. It cannot tell you whether a 2 kg loss was fluid, valuable metabolically active muscle, or toxic visceral fat surrounding your vital organs.</p>

        <h3>Why Visceral Fat Matters</h3>
        <p>Unlike subcutaneous fat under the skin, Visceral Adipose Tissue (VAT) is biologically active in a harmful way: it constantly secretes inflammatory cytokines directly into the portal vein. DEXA mapping quantifies VAT down to the exact gram, giving us a precise target to mobilize through progressive strength training and personalized nutrition.</p>

        <h3>Preserving Your Metabolic Engine</h3>
        <p>Skeletal muscle tissue is your body's primary reservoir for glucose disposal. By using DEXA before and after a transformation phase, we ensure that every kilogram lost is pathogenic fat, while your lean muscle mass and bone mineral density remain fully protected.</p>
      `
    },
    {
      id: "apob-cardiology-marker",
      title: "What Is ApoB and Why Cardiologists Are Starting to Care",
      category: "Cardiovascular Health",
      readTime: "6 min read",
      author: "Helevate Clinical Team",
      date: "2026",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
      excerpt: "Every atherogenic particle carrying cholesterol into arterial walls has exactly one molecule of Apolipoprotein B. Here is why ApoB is becoming the gold standard in precision cardiovascular risk assessment.",
      keyTakeaways: [
        "ApoB counts the actual concentration of plaque-forming particles in your bloodstream.",
        "Discordance is common: many adults have 'normal' LDL-C but high ApoB, placing them in elevated risk tiers.",
        "ApoB can be effectively managed through structured resistance training and personalized dietary fiber architecture."
      ],
      fullContent: `
        <h3>Counting the Vehicles, Not Just the Passengers</h3>
        <p>Think of cholesterol molecules as passengers and lipoproteins as the vehicles transporting them. Traditional tests measure the total weight of the passengers (LDL-C). But it is the number of vehicles (ApoB) hitting arterial walls that determines plaque accumulation rate.</p>

        <h3>Why Precision Matters</h3>
        <p>When you know your ApoB number, you have an actionable, objective metric. Through our metabolic panels, we track ApoB alongside systemic inflammatory markers like hs-CRP to guide your training intensity, cardiovascular conditioning, and nutritional fiber intake.</p>
      `
    },
    {
      id: "insulin-resistance-stubborn-weight",
      title: "Insulin Resistance: The Silent Driver Behind Stubborn Weight",
      category: "Metabolic Health",
      readTime: "5 min read",
      author: "Harish P & Clinical Team",
      date: "2026",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      excerpt: "When cellular insulin receptors become desensitized, your body locks away adipose tissue and drives energy crashes. Learn how targeted resistance training restores glucose disposal.",
      keyTakeaways: [
        "Skeletal muscle accounts for up to 80% of whole-body post-meal glucose disposal.",
        "Zone 2 cardiovascular base building expands mitochondrial volume and fat oxidation capacity.",
        "Aggressive caloric restriction without biomarker monitoring elevates cortisol and worsens metabolic resistance."
      ],
      fullContent: `
        <h3>The Cellular Traffic Jam</h3>
        <p>Insulin is the hormone that signals cells to open and accept glucose. When cells become resistant due to physical inactivity, poor sleep, or chronic stress, insulin levels stay chronically elevated — essentially locking body fat in storage mode.</p>

        <h3>Muscle as a Metabolic Sponge</h3>
        <p>Resistance training activates non-insulin-dependent glucose uptake (via GLUT4 translocation). Every time you contract muscles under load in a structured strength session, you clear glucose directly from your bloodstream without requiring excess insulin. This is why progressive strength training is the foundation of every Helevate program.</p>
      `
    }
  ],

  // Sample Dashboard Prototype Data
  sampleReport: {
    clientName: "Resident Client",
    assessmentDate: "2026",
    overallScore: 88,
    status: "Optimal Progression",
    summary: "Significant improvements in metabolic flexibility and lean mass retention over the 90-day protocol. Visceral fat mobilized safely into the normal range with zero loss of skeletal bone density.",
    pillars: {
      fitness: {
        score: "86 / 100",
        label: "Lean Mass & Capacity",
        stat: "+3.2 kg Lean Muscle",
        progress: 86,
        detail: "Symmetrical muscle gain across upper and lower limbs. Postural endurance improved significantly."
      },
      nutrition: {
        score: "90 / 100",
        label: "Insulin & Metabolic",
        stat: "HOMA-IR: 1.1 (Optimal)",
        progress: 90,
        detail: "Fasting insulin normalized from 9.4 to 4.2 µIU/mL. ApoB reduced by 24% through dietary fiber optimization."
      },
      recovery: {
        score: "88 / 100",
        label: "Autonomic Balance",
        stat: "Avg HRV: 68 ms",
        progress: 88,
        detail: "Deep sleep cycles increased by 35 minutes per night. Resting heart rate stabilized."
      }
    },
    observations: [
      "Visceral Adipose Tissue (VAT) decreased from 1.88 kg to 0.48 kg (optimal longevity threshold).",
      "Total body fat reduced by 8.6% with preserved bone mineral density.",
      "Vascular inflammatory marker (hs-CRP) normalized to 0.6 mg/L."
    ],
    recommendations: [
      "Transition from Phase 2 strength foundation to Phase 3 progressive overload (3x / week).",
      "Maintain personalized protein target with whole-food sources.",
      "Continue 20-minute cardiovascular sessions for mitochondrial density.",
      "Next scheduled DEXA checkpoint in 90 days."
    ]
  },

  // Premium Page Video Assets & Metadata (Unique Distinct Video per Page)
  pageVideos: {
    homeHero: {
      videoSrc: "assets/video1.mp4",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80",
      title: "Elevating Human Performance & Lifestyle",
      badge: "Hyderabad Gated Communities"
    },
    assessments: {
      videoSrc: "assets/video-lab.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&auto=format&fit=crop&q=80",
      badge: "Precision Biological Diagnostics",
      title: "Person → Assessment → Data → Understanding",
      subtitle: "Objective medical-grade insights eliminating workout and dietary guesswork."
    },
    programs: {
      videoSrc: "assets/video-performance.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&auto=format&fit=crop&q=80",
      badge: "Certified Human Performance Coaching",
      title: "Built Around Your Biology. Delivered in Your Clubhouse.",
      subtitle: "Progressive resistance training, habit nutrition, and community consistency."
    },
    about: {
      videoSrc: "assets/video-about.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=80",
      badge: "Leadership & Philosophy",
      title: "Not Ordinary — Science-First, Calm & Sustainable Health",
      subtitle: "Rejecting burnout culture with structured, diagnostic longevity protocols."
    },
    careers: {
      videoSrc: "assets/video-performance.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&auto=format&fit=crop&q=80",
      badge: "Helevate Coaching Culture",
      title: "Practice Real, Diagnostic-Led Health Coaching",
      subtitle: "Join Hyderabad's premier human performance team."
    },
    booking: {
      videoSrc: "assets/video-booking.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80",
      badge: "Discovery Consultation",
      title: "Your First Step Starts With a Conversation",
      subtitle: "Meet with Head Coach Harish to determine the ideal assessment and program for you."
    },
    communities: {
      videoSrc: "assets/video-communities.webm",
      fallbackSrc: "assets/video1.mp4",
      poster: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&auto=format&fit=crop&q=80",
      badge: "Gated Community Wellness",
      title: "Precision Health. Right Where You Live.",
      subtitle: "Elevating resident clubhouses across Hyderabad with zero commute friction."
    }
  },

  // Member Testimonials & Clinical Case Studies
  testimonials: [
    {
      id: "test-1",
      name: "Dr. Vikram Reddy",
      role: "Consultant Cardiologist",
      community: "My Home Bhooja, HITEC City",
      program: "Longevity & Executive Health Tier",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
      quote: "As a cardiologist, I was tired of generic gym workouts that ignore metabolic biomarkers. Helevate's protocol started with an in-depth lipid panel and DEXA scan. Having certified coaches right in our Bhooja clubhouse made clinical compliance effortless.",
      metrics: [
        { label: "Visceral Fat", change: "-42% VAT" },
        { label: "HbA1c", change: "6.1% → 5.3%" },
        { label: "VO2 Max", change: "+18% Increase" }
      ],
      rating: 5,
      verified: true
    },
    {
      id: "test-2",
      name: "Ananya Singhal",
      role: "VP of Engineering & Tech Founder",
      community: "Jayabheri Silicon County, Gachibowli",
      program: "1-on-1 Transformation Tier",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      quote: "Balancing 60-hour workweeks left me with chronic lower back pain and declining energy. The biomechanical assessment pinpointed my anterior pelvic tilt. Six months in, my posture is completely restored and I've gained pure functional lean muscle.",
      metrics: [
        { label: "Lean Muscle", change: "+3.8 kg Mass" },
        { label: "Back Pain", change: "100% Pain Free" },
        { label: "Resting HR", change: "72 → 58 bpm" }
      ],
      rating: 5,
      verified: true
    },
    {
      id: "test-3",
      name: "Rajeshwar Rao",
      role: "Managing Director, Infrastructure",
      community: "Aparna Serene Park, Kondapur",
      program: "DEXA-Guided Transformation Tier",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      quote: "The DEXA checkpoints every 90 days eliminate all guesswork. You literally see your visceral fat melt on the scan report while bone mineral density increases. No unsustainable fad diets — just structured progressive strength and biomarker nutrition.",
      metrics: [
        { label: "Total Fat Loss", change: "-11.4 kg" },
        { label: "Visceral Fat", change: "-36% Mobilized" },
        { label: "Energy Score", change: "10 / 10" }
      ],
      rating: 5,
      verified: true
    },
    {
      id: "test-4",
      name: "Pooja Hegde",
      role: "Senior Architect & Designer",
      community: "Lodha Bellezza, KPHB",
      program: "Functional Strength & Mobility Tier",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      quote: "I wanted to focus on bone density, core strength, and mobility without risking injury. The coach's scientific attention to joint angles and progressive overload in our private clubhouse gym is unmatched by any external trainer I've had in Hyderabad.",
      metrics: [
        { label: "Bone Density", change: "+8.5% Score" },
        { label: "Hip Mobility", change: "Full Range" },
        { label: "Strength", change: "+45% 1RM" }
      ],
      rating: 5,
      verified: true
    },
    {
      id: "test-5",
      name: "Siddharth Varma",
      role: "Enterprise Strategy Leader",
      community: "Golf View Apartments, Nanakramguda",
      program: "Executive Peak Performance Tier",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      quote: "Eliminating the 45-minute Hyderabad traffic commute by having elite coaches waiting at our apartment gym was the single best decision for my lifestyle. My sleep quality and daily focus are at an all-time peak.",
      metrics: [
        { label: "Commute Saved", change: "45 min / day" },
        { label: "Sleep Quality", change: "+48% Deep REM" },
        { label: "Lipid Profile", change: "Fully Normalized" }
      ],
      rating: 5,
      verified: true
    },
    {
      id: "test-6",
      name: "Meera Krishnan",
      role: "Biotechnology Researcher",
      community: "Rainbow Vistas Rockgarden, Moosapet",
      program: "Metabolic Diagnostics Tier",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      quote: "Helevate treats human biology with real diagnostic accuracy. The coaches understand insulin sensitivity and mitochondrial health as deeply as they understand barbell technique. Truly transformative.",
      metrics: [
        { label: "Fasting Insulin", change: "14.2 → 5.8 µIU" },
        { label: "Lean Mass", change: "+2.6 kg" },
        { label: "Cardio VO2", change: "+22% Capacity" }
      ],
      rating: 5,
      verified: true
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HELEVATE_DATA;
}

