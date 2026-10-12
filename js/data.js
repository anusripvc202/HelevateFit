/**
 * HELEVATE.FIT — COMPLETE STRUCTURED CONTENT REPOSITORY
 * Based on Client's Website Content & Performance Marketing Blueprint — October 2026
 * Official Brand Line: Elevating Human Performance & Lifestyle
 */

const HELEVATE_DATA = {
  brand: {
    name: "Helevate.fit",
    legalName: "Helevate Fit Pvt Ltd",
    brandLine: "Elevating Human Performance & Lifestyle",
    headline: "Better Health. Right in Your Community.",
    supportingCopy: "Measured, coach-led wellness programs inside Hyderabad’s gated communities.",
    corePositioning: "Helevate is the premium wellness partner for gated communities in Hyderabad. We bring measured, coach-led health and performance programs into your clubhouse — so you get real results without the commute, the crowd or the guesswork.",
    taglineSupporting: "Your Community. Your Coach. Your Numbers.",
    phone: "+91 99639 60259",
    phoneDisplay: "+91 99639 60259",
    email: "helevatefit@gmail.com",
    address: "4th Floor, JK Business Centre, Road No. 36, Jubilee Hills, Hyderabad – 500033, Telangana",
    city: "Hyderabad",
    website: "https://helevate.fit",
    disclaimer: "Helevate provides fitness and performance coaching. It is not a substitute for medical advice, diagnosis or treatment. Consult your doctor before starting; some programs need medical clearance.",
    resultsDisclaimer: "Individual results vary."
  },

  founder: {
    name: "Harish P",
    role: "Founder & Human Performance Coach",
    credentials: [
      "7 years in fitness coaching & lifestyle transformation",
      "Human Performance Coach Certification",
      "ACE-Certified Health Coach",
      "Rehab-focused strength training specialist"
    ],
    bio: "Harish founded Helevate to solve the real everyday health challenge for gated community residents in Hyderabad: crowded gyms, traffic stress, lack of accurate tracking, and one-size-fits-all workouts. By bringing structured, 2-clients-per-slot coaching directly into community clubhouses, Helevate ensures every movement is safe, coached, and objectively measured."
  },

  pillars: [
    {
      id: "community",
      number: "01",
      title: "Inside Your Community",
      shortDesc: "Residents access coaching in their own clubhouse gym.",
      desc: "No commute, no traffic, no crowded commercial gyms. Step right from your elevator into your community clubhouse where your dedicated coach is ready.",
      bulletPoints: [
        "Zero travel time — right inside your society",
        "Consistent morning & evening clubhouse slots",
        "Train alongside fellow community residents"
      ]
    },
    {
      id: "measured",
      number: "02",
      title: "Measured, Not Guessed",
      shortDesc: "Body Report and DEXA-measured metrics at week 1 & week 12.",
      desc: "The bathroom scale only shows weight. Your Helevate Body Report reveals visceral fat, muscle mass, and bone density. We retest at week 12 to prove real progress.",
      bulletPoints: [
        "Accurate DEXA scan at week 1 baseline",
        "30-minute coach report consultation",
        "Objective retest at week 12 to verify changes"
      ]
    },
    {
      id: "coached",
      number: "03",
      title: "Coached, Not Left Alone",
      shortDesc: "Small groups of two per slot with dedicated coach eyes on every rep.",
      desc: "Never wander the gym alone. With just two clients per coaching slot, your coach adjusts your form, manages your load, and supports you throughout the week on WhatsApp.",
      bulletPoints: [
        "Small groups of two for focused attention",
        "Weekly progress check-in with your coach",
        "Guided sessions shared on WhatsApp a day before"
      ]
    }
  ],

  trustPoints: [
    { title: "Coaching in your clubhouse", desc: "Zero commute — right where you live" },
    { title: "DEXA-measured results", desc: "Track real fat, muscle & bone changes" },
    { title: "Small groups of two", desc: "Your coach sees and guides every rep" },
    { title: "Built for adults 35+", desc: "Joint-safe, sustainable & doctor-friendly" }
  ],

  theProblemPoints: [
    {
      title: "Weight Doesn't Tell the Whole Story",
      desc: "A conventional scale cannot distinguish between 2 kg of lost muscle and 2 kg of lost fat. Losing muscle slows your metabolism, yet the scale calls it 'progress'."
    },
    {
      title: "Visceral Fat Remains Hidden",
      desc: "The most dangerous fat sits deep around internal organs, elevating cardiovascular and blood sugar markers while remaining invisible to standard mirrors or scales."
    },
    {
      title: "Generic Gyms Leave You Guessing",
      desc: "Crowded workouts and unverified routines lead to stalled results or joint flare-ups. True health improvements require objective baselines and dedicated coach supervision."
    }
  ],

  bodyReportMetrics: [
    { name: "Body Fat", desc: "Exact fat mass and percentage, mapping true fat loss rather than water or muscle fluctuation." },
    { name: "Visceral Fat", desc: "Crucial hidden fat surrounding internal organs that impacts cardiovascular and metabolic health." },
    { name: "Lean Muscle", desc: "Skeletal muscle mass distribution across arms, legs, and trunk to protect metabolic health and posture." },
    { name: "Bone Density", desc: "Regional bone mineral density measurements vital for adults 35+ to guard against osteopenia." }
  ],

  programs: [
    {
      id: "reset",
      slug: "reset",
      name: "Helevate RESET",
      descriptor: "Metabolic reset",
      subtitle: "Lose belly fat, keep muscle, bring your health markers to safe.",
      bestFor: "Extra weight, high belly fat, sugar / BP worries",
      buttonText: "Start My Reset",
      tagClass: "tag-reset",
      heroHeadline: "Lose the belly fat. Keep the muscle. Coached inside your community.",
      trustPoints: ["Clubhouse coaching", "DEXA baseline & week-12 retest", "2 clients per slot"],
      clientQuote: "Normal weight, but belly fat won't go.",
      problemCopy: "Standard weight loss programs often burn away valuable muscle tissue while leaving stubborn visceral belly fat untouched. For adults 35+, this slows metabolic rate and leads to weight rebound. RESET is engineered to target visceral fat, protect lean muscle, and support healthy metabolic markers with coach guidance.",
      whoItsFor: [
        "Adults 35+ carrying stubborn waistline or belly fat",
        "Residents concerned about fasting glucose, HbA1c, or blood pressure trends",
        "Professionals seeking structured habit pacing without extreme crash diets"
      ],
      whoItsNotFor: [
        "Anyone looking for rapid overnight 'guaranteed 10 kg' crash programs",
        "Individuals with acute unmanaged medical emergencies needing immediate hospital care",
        "Those unwilling to complete a baseline Body Report to guide training"
      ],
      whatYouGet: [
        "Small-group clubhouse coaching (2 clients per slot)",
        "DEXA baseline Body Report & week-12 retest",
        "Metabolic nutrition & meal pacing framework",
        "Weekly coach review & progress check-in",
        "Guided homework sessions delivered via WhatsApp",
        "Continuous coach WhatsApp support"
      ],
      yourWeek: {
        format: "4-Day Coached (recommended) or 3-Day Coached",
        simple5Day: [
          { day: "Day 1", type: "Coach-Led", title: "Metabolic Resistance (Upper & Core)", location: "Clubhouse Gym" },
          { day: "Day 2", type: "Coach-Led", title: "Lower Body Stability & Tempo", location: "Clubhouse Gym" },
          { day: "Day 3", type: "Coach-Led", title: "Full Body Glycemic Circuit", location: "Clubhouse Gym" },
          { day: "Day 4", type: "Coach-Led", title: "Posterior Chain & Core Integration", location: "Clubhouse Gym" },
          { day: "Day 5", type: "Guided", title: "Guided Movement & Conditioning Session", location: "Shared on WhatsApp" }
        ],
        commonNote: "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."
      },
      your12Weeks: [
        { phase: "Phase 1: Weeks 1–4", title: "Metabolic Baseline & Glycemic Reset", desc: "Establish DEXA baseline, master movement form, and stabilize blood sugar swings." },
        { phase: "Phase 2: Weeks 5–8", title: "Visceral Fat Mobilization", desc: "Increase training density while dialing in protein intake to preserve lean muscle." },
        { phase: "Phase 3: Weeks 9–12", title: "Retest & Lifestyle Consolidation", desc: "Complete week-12 DEXA retest, measure biomarker progress, and lock in long-term habits." }
      ],
      measureSummary: "Baseline Body Report at week 1 establishes exact visceral fat and muscle mass. Week-12 retest verifies true metabolic progress.",
      faqs: [
        { q: "How long does each coaching session take?", a: "Each clubhouse session lasts 45 to 50 minutes of structured, focused training with zero wasted time." },
        { q: "Can I join RESET if I have elevated BP or sugar levels?", a: "Yes. RESET is specifically designed for adults managing health markers. We request medical clearance where appropriate and adapt intensity to your capacity." },
        { q: "What happens when I travel for work?", a: "Your coach provides travel-friendly bodyweight and band routines via WhatsApp so your momentum stays intact." },
        { q: "Is strict starvation dieting required?", a: "No. Starvation causes muscle loss. RESET focuses on sustainable whole-food meal timing and sufficient protein." },
        { q: "How is safety ensured with small groups?", a: "There are strictly two clients per slot. Your coach watches every repetition and adjusts weights individually." },
        { q: "What if I miss a scheduled clubhouse session?", a: "You can coordinate with your coach to reschedule within the same week's available community slots or complete a guided session." }
      ]
    },

    {
      id: "restore",
      slug: "restore",
      name: "Helevate RESTORE",
      descriptor: "Pain-free movement",
      subtitle: "Move, lift and walk without knee, back or shoulder pain.",
      bestFor: "Pain, past injury, post-surgery (with doctor's OK)",
      buttonText: "Book a Movement Check",
      tagClass: "tag-restore",
      heroHeadline: "Move without pain again. Coached inside your community.",
      trustPoints: ["Rehab-focused strength", "Doctor-cleared protocols", "2 clients per slot"],
      clientQuote: "Joint stiffness and knee/back pain make workouts feel risky.",
      problemCopy: "Joint pain in the lower back, knees, or shoulders often leads people to avoid movement altogether — causing surrounding muscles to weaken and stiffness to worsen. RESTORE uses deliberate, joint-friendly strengthening protocols to rebuild joint stability, correct muscular imbalances, and restore confidence in everyday movement.",
      whoItsFor: [
        "Residents dealing with nagging knee, lumbar spine, or shoulder stiffness",
        "Adults returning to activity post-injury or post-surgery with doctor's approval",
        "Individuals wanting joint-friendly strength training without aggressive impact"
      ],
      whoItsNotFor: [
        "Acute unmanaged fractures or traumatic injuries requiring surgical intervention",
        "Individuals lacking doctor clearance for light-to-moderate physical activity",
        "Those seeking high-impact plyometric bootcamps"
      ],
      whatYouGet: [
        "Comprehensive movement pattern & mobility assessment",
        "Joint-safe progressive resistance training",
        "DEXA baseline bone & muscle composition review",
        "Thoracic, pelvic, and ankle mobility corrections",
        "Weekly coach review and movement modifications",
        "Continuous coach WhatsApp support"
      ],
      yourWeek: {
        format: "4-Day Coached (recommended) or 3-Day Coached",
        simple5Day: [
          { day: "Day 1", type: "Coach-Led", title: "Hip Hinge & Lumbar Spine Stabilization", location: "Clubhouse Gym" },
          { day: "Day 2", type: "Coach-Led", title: "Scapular Mechanics & Shoulder Freedom", location: "Clubhouse Gym" },
          { day: "Day 3", type: "Coach-Led", title: "Knee-Friendly Squat & Ankle Mechanics", location: "Clubhouse Gym" },
          { day: "Day 4", type: "Coach-Led", title: "Rotational Core & Postural Integration", location: "Clubhouse Gym" },
          { day: "Day 5", type: "Guided", title: "Guided Joint Flossing & Decompression Routine", location: "Shared on WhatsApp" }
        ],
        commonNote: "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."
      },
      your12Weeks: [
        { phase: "Phase 1: Weeks 1–4", title: "Decompression & Positional Control", desc: "Identify pain triggers, decompress tight joints, and activate dormant stabilizers." },
        { phase: "Phase 2: Weeks 5–8", title: "Load Tolerance & Strength Rebuilding", desc: "Safely introduce progressive resistance to strengthen tendons and connective tissues." },
        { phase: "Phase 3: Weeks 9–12", title: "Functional Freedom & Week-12 Check", desc: "Re-test movement capacity and baseline markers, establishing durable pain-free movement." }
      ],
      measureSummary: "Baseline mobility screen and DEXA scan at week 1; week-12 retest evaluates functional range of motion and joint stability.",
      faqs: [
        { q: "How long does each coaching session take?", a: "Sessions are 45 to 50 minutes including dedicated movement preparation and cool-down." },
        { q: "Can I participate if I have past injuries or surgeries?", a: "Yes, provided you have doctor's clearance for exercise. Our Head Coach Harish specializes in rehab-focused strength training." },
        { q: "What happens when I travel for work?", a: "Your coach provides travel mobility and pain-relief band routines via WhatsApp to prevent joint stiffness on flights." },
        { q: "What food or nutrition guidance is included?", a: "We provide anti-inflammatory food frameworks, hydration guidelines, and collagen/protein pacing to support connective tissue recovery." },
        { q: "How is safety managed to avoid aggravating pain?", a: "With only two clients per slot, the coach monitors joint angles, regulates loading, and regressions are used so there are zero painful reps." },
        { q: "What happens if I miss a scheduled clubhouse session?", a: "You can reschedule in open community slots during the week or complete your guided mobility workout." }
      ]
    },

    {
      id: "build",
      slug: "build",
      name: "Helevate BUILD",
      descriptor: "Strength builder",
      subtitle: "Build real muscle after 35, proven on your scan.",
      bestFor: "Low muscle, strength goals",
      buttonText: "Start Building",
      tagClass: "tag-build",
      heroHeadline: "Build muscle after 35 — and prove it on your scan.",
      trustPoints: ["Clubhouse gym coaching", "DEXA-verified muscle gain", "2 clients per slot"],
      clientQuote: "Losing muscle and strength after 35, despite going to the gym.",
      problemCopy: "After age 35, adults lose 3% to 5% of their muscle mass every decade without deliberate resistance training. This loss slows metabolism, weakens posture, and increases vulnerability to insulin resistance. BUILD provides structured, progressive resistance training to stimulate muscle protein synthesis and prove gains objectively on your DEXA scan.",
      whoItsFor: [
        "Adults 35+ looking to increase lean muscle mass and bone mineral density",
        "Residents wanting to feel capable, athletic, and strong in everyday life",
        "Individuals whose gym workouts have plateaued and want structured progressive overload"
      ],
      whoItsNotFor: [
        "Individuals looking for dangerous maximum 1-rep lift competitions",
        "Those seeking steroid or extreme bodybuilding transformations",
        "Anyone with uncontrolled cardiac conditions without cardiologist approval"
      ],
      whatYouGet: [
        "Structured progressive overload strength program",
        "Small group clubhouse coaching (2 clients per slot)",
        "DEXA baseline muscle mass scan & week-12 verification",
        "Protein pacing and recovery nutrition guidance",
        "Weekly strength journal and coach review",
        "Continuous coach WhatsApp support"
      ],
      yourWeek: {
        format: "4-Day Coached (recommended) or 3-Day Coached",
        simple5Day: [
          { day: "Day 1", type: "Coach-Led", title: "Upper Body Horizontal Push & Pull", location: "Clubhouse Gym" },
          { day: "Day 2", type: "Coach-Led", title: "Lower Body Knee & Hip Dominance", location: "Clubhouse Gym" },
          { day: "Day 3", type: "Coach-Led", title: "Upper Body Vertical Push & Pull", location: "Clubhouse Gym" },
          { day: "Day 4", type: "Coach-Led", title: "Posterior Chain, Glute & Core Power", location: "Clubhouse Gym" },
          { day: "Day 5", type: "Guided", title: "Conditioning, Grip & Loaded Carry Routine", location: "Shared on WhatsApp" }
        ],
        commonNote: "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."
      },
      your12Weeks: [
        { phase: "Phase 1: Weeks 1–4", title: "Neuromuscular Activation & Technique", desc: "Baseline DEXA scan, master lifting tempo, and establish joint-safe baseline loads." },
        { phase: "Phase 2: Weeks 5–8", title: "Progressive Hypertrophy & Volume", desc: "Gradually increase training volume and time-under-tension to stimulate lean muscle growth." },
        { phase: "Phase 3: Weeks 9–12", title: "Peak Strength & DEXA Verification", desc: "Consolidate strength gains, perform week-12 DEXA retest, and verify lean tissue increase." }
      ],
      measureSummary: "Baseline Body Report at week 1 establishes segmental muscle mass; week-12 retest verifies exact lean tissue gain across limbs and torso.",
      faqs: [
        { q: "How long does each coaching session take?", a: "Each session is 45 to 50 minutes of efficient, focused progressive overload." },
        { q: "Can I do BUILD if I have minor knee or shoulder concerns?", a: "Yes. Your coach chooses joint-safe exercise variations and strictly regulates loading to protect your joints while stimulating muscle." },
        { q: "What happens when I travel for business?", a: "Your coach sends bodyweight progressive strength circuits via WhatsApp to preserve muscle protein synthesis." },
        { q: "What nutrition support is included in BUILD?", a: "We provide protein pacing frameworks, hydration targets, and Indian food macro guidance to fuel recovery without excess fat gain." },
        { q: "How is safety managed during heavy lifts?", a: "Strictly two clients per slot. Your coach is beside you to spot every set, correct technique, and manage bar path." },
        { q: "What happens if I miss a session?", a: "You can reschedule in open community coaching slots or complete the guided conditioning routine." }
      ]
    },

    {
      id: "thrive",
      slug: "thrive",
      name: "Helevate THRIVE",
      descriptor: "Longevity membership",
      subtitle: "Stay strong, fit and sharp for the next 30 years.",
      bestFor: "Healthy adults, program graduates",
      buttonText: "Join THRIVE",
      tagClass: "tag-thrive",
      heroHeadline: "Stay strong and sharp for the next 30 years.",
      trustPoints: ["Clubhouse longevity coaching", "Quarterly DEXA checkups", "2 clients per slot"],
      clientQuote: "Want to stay vital, strong and sharp for the decades ahead.",
      problemCopy: "Peak health is not a 12-week sprint — it is a lifelong habit. Once baseline fat loss or strength goals are achieved, maintaining metabolic flexibility, bone density, cardiovascular stamina, and cognitive sharpness requires ongoing consistency. THRIVE is our flagship membership designed to keep community residents vibrant for decades to come.",
      whoItsFor: [
        "Graduates of RESET, RESTORE, or BUILD wanting seamless continuity",
        "Active, healthy adults 35+ committed to long-term healthspan and vitality",
        "Residents wanting ongoing clubhouse accountability and quarterly scans"
      ],
      whoItsNotFor: [
        "Individuals wanting short-term transactional training without long-term commitment",
        "Those who prefer unguided commercial gym environments"
      ],
      whatYouGet: [
        "Ongoing clubhouse coaching (2 clients per slot)",
        "Quarterly DEXA Body Report & consultations",
        "Seasonal metabolic & stamina training blocks",
        "Continuous nutrition & recovery adjustments",
        "Priority scheduling in your community clubhouse",
        "Dedicated coach WhatsApp access"
      ],
      yourWeek: {
        format: "4-Day Coached (recommended) or 3-Day Coached",
        simple5Day: [
          { day: "Day 1", type: "Coach-Led", title: "Functional Strength & Joint Mobility", location: "Clubhouse Gym" },
          { day: "Day 2", type: "Coach-Led", title: "Zone 2 Aerobic Base & Core Durability", location: "Clubhouse Gym" },
          { day: "Day 3", type: "Coach-Led", title: "Power, Posture & Balance Integration", location: "Clubhouse Gym" },
          { day: "Day 4", type: "Coach-Led", title: "Full Body Durability & Conditioning Circuit", location: "Clubhouse Gym" },
          { day: "Day 5", type: "Guided", title: "Weekend Vitality & Stamina Session", location: "Shared on WhatsApp" }
        ],
        commonNote: "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."
      },
      your12Weeks: [
        { phase: "Quarter 1: Weeks 1–12", title: "Structural Durability & Foundation", desc: "Reinforce tendon strength, maintain ideal body composition, and fine-tune recovery." },
        { phase: "Quarter 2: Weeks 13–24", title: "Cardiometabolic & Mitochondrial Health", desc: "Target aerobic capacity and metabolic efficiency alongside resistance training." },
        { phase: "Quarter 3: Weeks 25–36", title: "Balance, Agility & Bone Preservation", desc: "Integrate vestibular balance and bone loading for long-term healthspan." }
      ],
      measureSummary: "Baseline Body Report at inception with quarterly retests every 12 weeks to monitor long-term health markers.",
      faqs: [
        { q: "How long does each coaching session take?", a: "Each session is 45 to 50 minutes, fitting smoothly into a morning or evening routine." },
        { q: "Can I join THRIVE if I have past injuries?", a: "Yes. All THRIVE sessions are coached with joint-friendly exercise selection and customized intensity." },
        { q: "What happens when I travel for holidays or work?", a: "You can pause your active membership or switch to guided travel workouts shared on WhatsApp." },
        { q: "What nutrition guidance is included in THRIVE?", a: "Continuous longevity nutrition advice: glycemic stability, anti-inflammatory meal pacing, and protein targets." },
        { q: "How is safety maintained in the community gym?", a: "Strictly two clients per slot with full coach supervision and zero crowding." },
        { q: "What if I miss a scheduled session?", a: "You can reschedule in available slots with your coach within your community's weekly schedule." }
      ]
    }
  ],

  trainingFormats: {
    recommended: {
      name: "4-Day Coached (recommended)",
      badge: "Recommended",
      summary: "Four coach-led sessions plus one guided session a week. Small group of two per slot, so your coach sees every rep. Our most complete format and the fastest route to measurable change."
    },
    standard: {
      name: "3-Day Coached",
      badge: "Flexible Schedule",
      summary: "Three coach-led sessions plus one guided session a week, for a lighter schedule. Same coach, same measurement, same standards."
    },
    commonNote: "Sessions are held in your community clubhouse. Your coach plans the week and shares the next guided session on WhatsApp a day before."
  },

  homepageFaqs: [
    {
      q: "How long does a session take?",
      a: "Each clubhouse coaching session is 45 to 50 minutes. Because your coach is ready the moment you walk into the clubhouse, workouts are concise, structured, and respect your busy schedule."
    },
    {
      q: "Can people with injuries or past surgeries participate?",
      a: "Yes, provided you have doctor's clearance for exercise. Our Head Coach Harish specializes in rehab-focused strength training, and with only two clients per slot, exercises are customized to protect your joints."
    },
    {
      q: "What happens when someone travels for work or vacation?",
      a: "We maintain coaching momentum through guided travel routines shared on WhatsApp. Your membership schedule can also be paused with prior notice for planned travel."
    },
    {
      q: "What food or nutrition guidance is included?",
      a: "You receive practical, Indian family-friendly whole-food frameworks, protein pacing guidance, and meal timing suggestions tailored to your Body Report metrics. We never promote crash starvation diets."
    },
    {
      q: "How is safety managed inside the clubhouse gym?",
      a: "Safety is built into our core model: strictly two clients per coaching slot. Your coach watches every repetition, manages weight loads, ensures clean movement patterns, and avoids dangerous maximal lifts."
    },
    {
      q: "What happens if a session is missed?",
      a: "If you miss a scheduled session, you can coordinate with your coach to attend a makeup slot within the same week or complete an alternate guided session via WhatsApp."
    },
    {
      q: "What is included in the Helevate Body Report?",
      a: "The Body Report includes a clinical DEXA scan measuring your exact body fat percentage, visceral fat level, lean muscle distribution, and bone density, followed by a 30-minute private consultation with your coach."
    },
    {
      q: "How do the 3-Day and 4-Day formats differ?",
      a: "Both formats feature the exact same coaching standards, Body Report measurements, and 2-clients-per-slot attention. The 4-Day format offers four coach-led sessions for faster adaptation, while the 3-Day format accommodates lighter weekly schedules."
    }
  ],

  quizData: {
    title: "Not sure where to start? Answer 3 questions.",
    subtitle: "Find your recommended starting program in under 60 seconds.",
    questions: [
      {
        id: "goal",
        question: "1. What is your primary health & body priority?",
        options: [
          { label: "Lose belly fat, reduce waistline & support health markers (BP / Sugar)", value: "reset" },
          { label: "Overcome knee, back, or shoulder pain and move freely", value: "restore" },
          { label: "Build real muscle, bone density and strength after 35", value: "build" },
          { label: "Stay strong, fit, energetic and sharp for the long term", value: "thrive" }
        ]
      },
      {
        id: "condition",
        question: "2. What describes your current movement & physical condition?",
        options: [
          { label: "I have joint pain, past injury, or stiffness that holds me back", value: "restore" },
          { label: "I have extra belly fat, low energy, or sedentary desk habits", value: "reset" },
          { label: "I work out occasionally but haven't gained visible muscle or strength", value: "build" },
          { label: "I am generally healthy and want structured long-term coaching", value: "thrive" }
        ]
      },
      {
        id: "schedule",
        question: "3. What is your preferred weekly clubhouse schedule?",
        options: [
          { label: "4 Coach-Led sessions + 1 Guided session a week (Recommended)", value: "4day" },
          { label: "3 Coach-Led sessions + 1 Guided session a week (Lighter Schedule)", value: "3day" }
        ]
      }
    ]
  },

  communities: [
    {
      slug: "tellapur",
      name: "Tellapur",
      headline: "Health coaching for Tellapur residents — inside your community.",
      tagline: "Tellapur's Premier Gated Communities",
      landmarks: "My Home Sayuk, Vision Arsha, Aliens Space Station, Muppa's Indraprastha & neighboring Tellapur societies.",
      commuteText: "Tellapur residents often spend 45+ minutes commuting across ORR to commercial gyms in Gachibowli or Financial District. Helevate brings measured, coach-led sessions directly into your Tellapur society clubhouse with zero commute.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    },
    {
      slug: "gachibowli",
      name: "Gachibowli",
      headline: "Health coaching for Gachibowli residents — inside your community.",
      tagline: "Gachibowli & Financial District Communities",
      landmarks: "My Home Bhooja, Jayabheri Silicon County, Golf View, Western Marina & Financial District residences.",
      commuteText: "Avoid the rush-hour traffic of Gachibowli and crowded fitness centers. Train right downstairs in your residential clubhouse with our 2-clients-per-slot coaching model.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    },
    {
      slug: "kondapur",
      name: "Kondapur",
      headline: "Health coaching for Kondapur residents — inside your community.",
      tagline: "Kondapur & Botanical Garden Hubs",
      landmarks: "My Home Mangala, Aparna Sarovar Zenith, Lansum Etania & Botanical Garden communities.",
      commuteText: "Skip the congested Kondapur main roads. Enjoy structured, DEXA-measured strength and fat loss programs delivered right inside your community gates.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    },
    {
      slug: "kokapet",
      name: "Kokapet",
      headline: "Health coaching for Kokapet residents — inside your community.",
      tagline: "Kokapet Luxury High-Rise Living",
      landmarks: "My Home Tarkshya, SAS Crown, Poulomi Aristos, Rajapushpa Regalia & Golden Mile residences.",
      commuteText: "Kokapet's expansive clubhouse gyms are underutilized. We bring dedicated Human Performance Coaches into your society facilities so you get real results steps from home.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    },
    {
      slug: "narsingi",
      name: "Narsingi",
      headline: "Health coaching for Narsingi residents — inside your community.",
      tagline: "Narsingi & Puppalguda Corridor",
      landmarks: "NCC Urban One, Jayabheri The Peak, DSR The Courtyard & Puppalguda gated enclaves.",
      commuteText: "Zero travel along the ORR service road. Access certified coaching and objective Body Report tracking right in your society clubhouse gym.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    },
    {
      slug: "osman-nagar",
      name: "Osman Nagar",
      headline: "Health coaching for Osman Nagar residents — inside your community.",
      tagline: "Osman Nagar & Kollur Emerging Hubs",
      landmarks: "Aparna Cyber4, Muppa Melody, IRA Aerocity & Osman Nagar residential towers.",
      commuteText: "With few high-end gyms nearby, Osman Nagar residents face long commutes to work out. Helevate activates your community clubhouse with top-tier coaching and body composition measurement.",
      slots: "Morning 6:00 AM – 9:00 AM & Evening 5:30 PM – 8:30 PM"
    }
  ],

  dropdownCommunities: [
    "My Home Bhooja, Gachibowli",
    "Aparna Sarovar / Zenith, Nallagandla",
    "My Home Sayuk, Tellapur",
    "Rajapushpa Atria / Regalia, Kokapet",
    "Jayabheri Silicon County, Hitec City",
    "NCC Urban One, Narsingi",
    "Lansum Etania, Gachibowli",
    "Golf View, Financial District",
    "Other Gated Community (Hyderabad)"
  ]
};

if (typeof window !== "undefined") {
  window.HELEVATE_DATA = HELEVATE_DATA;
}
