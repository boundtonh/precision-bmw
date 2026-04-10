export interface ServicePageContent {
  slug: string;
  category: "routine-maintenance" | "bmw-repair" | "performance";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  included: string[];
  whyParagraph: string;
}

export const allServiceContent: ServicePageContent[] = [
  // ── ROUTINE MAINTENANCE ──────────────────────────────────────
  {
    slug: "oil-change",
    category: "routine-maintenance",
    h1: "BMW Oil Change Service in Southern NH",
    metaTitle:
      "BMW Oil Change Service in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW-spec synthetic oil change with genuine OEM filter, CBS reset, and multi-point inspection. Serving Brentwood, Exeter, Portsmouth, and all of Southern NH.",
    heroDescription:
      "The right oil, the right filter, the right interval — done correctly by a dealer-trained technician who works on BMWs exclusively.",
    included: [
      "BMW-specified full synthetic oil — correct grade selected for your specific model and engine",
      "Genuine BMW oil filter and drain plug washer replacement",
      "Condition-Based Service (BMW CBS) oil indicator reset using factory diagnostic software",
      "Multi-point vehicle inspection — fluid levels, brakes, tires, lighting",
      "Filter housing O-ring inspection and replacement as needed",
      "Fluid level top-off (washer fluid, coolant visual check)",
    ],
    whyParagraph:
      "Derek has been servicing BMWs exclusively since 1992, trained directly by BMW of North America. Every oil change at Precision BMW uses the BMW-specification oil grade for your exact model and engine. We never use aftermarket filters or incorrect viscosity grades — mistakes that can void BMW warranty coverage and accelerate engine wear. Backed by our warranty on all parts and labor.",
  },
  {
    slug: "tire-balancing",
    category: "routine-maintenance",
    h1: "BMW Tire Balancing in Southern NH",
    metaTitle:
      "BMW Tire Balancing in Southern NH | Precision BMW Repair",
    metaDescription:
      "Precision wheel balancing to BMW tolerances. Eliminates vibration and ensures even tread wear. Serving BMW owners across Southern NH.",
    heroDescription:
      "Vibration at highway speed is a symptom, not a feature. We balance to BMW tolerances using calibrated equipment — not approximations.",
    included: [
      "Static and dynamic balance correction on a calibrated computerized balancer",
      "Road force variation measurement to detect stiff spots in tires",
      "Wheel weight placement to BMW factory tolerances",
      "Lateral and radial runout check for bent or out-of-round wheels",
      "Tire condition and tread depth inspection (all four)",
      "TPMS sensor function verification",
    ],
    whyParagraph:
      "Run-flat tires on most modern BMWs are stiffer and more sensitive to imbalance than conventional tires. Derek understands the nuances of BMW's run-flat-specific balancing requirements and the interaction with BMW's DSC and steering systems. Genuine OEM wheel weights only — no adhesive substitutes on alloys not designed for them. Warranty on all work.",
  },
  {
    slug: "tune-up",
    category: "routine-maintenance",
    h1: "BMW Tune-Up Service in Southern NH",
    metaTitle:
      "BMW Tune-Up Service in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW tune-up with OEM spark plugs, air and cabin filter service, and ignition coil inspection. Restores factory power and fuel economy. Southern NH.",
    heroDescription:
      "Restore factory power and fuel economy with a proper BMW tune-up — OEM parts, correct specifications, and a technician who has been doing this since 1992.",
    included: [
      "BMW-spec spark plug replacement (iridium or copper per model specification)",
      "Engine air filter replacement with genuine BMW filter",
      "Cabin microfilter (HEPA or standard) replacement",
      "Ignition coil resistance test and visual inspection for oil contamination",
      "MAF sensor inspection and cleaning if carbon-fouled",
      "Fuel system condition check and throttle body inspection",
    ],
    whyParagraph:
      "BMW specifies different spark plug types and torque values across its inline-4, inline-6, V8, and V10 engines. Using the wrong plug or over-torquing in an aluminum head causes damage that is expensive to fix. Derek has 30+ years working exclusively on BMW powertrains — every plug, every coil, every filter is installed to factory specification with the correct torque and gap.",
  },
  {
    slug: "safety-inspection",
    category: "routine-maintenance",
    h1: "BMW Safety Inspection in Southern NH",
    metaTitle:
      "BMW Safety Inspection in Southern NH | Precision BMW Repair",
    metaDescription:
      "Comprehensive BMW safety inspection covering brakes, suspension, lighting, and fluids. NH and ME state inspections available. Brentwood NH.",
    heroDescription:
      "A thorough safety inspection by a BMW-trained technician who knows exactly what to look for — and what the factory considers acceptable versus overdue.",
    included: [
      "Brake pad thickness measurement and rotor condition assessment",
      "Suspension inspection: control arms, thrust arms, ball joints, wheel bearings",
      "Steering system inspection — play, rack condition, tie rod ends",
      "Exterior lighting verification (all bulbs, LEDs, adaptive headlights)",
      "Brake, coolant, power steering, and washer fluid level check",
      "New Hampshire and Maine state inspection sticker (on qualifying vehicles)",
    ],
    whyParagraph:
      "BMW suspension geometry uses eccentric bolts, offset bearings, and specific bushing designs that behave differently from other makes. A technician unfamiliar with BMW will often overlook wear that is specific to each BMW model and generation. Derek knows the common failure points on every BMW model line and inspects accordingly — not generically.",
  },

  // ── BMW REPAIR ────────────────────────────────────────────────
  {
    slug: "diagnostics",
    category: "bmw-repair",
    h1: "BMW Diagnostics in Southern NH",
    metaTitle:
      "BMW Diagnostics in Southern NH | Precision BMW Repair",
    metaDescription:
      "Factory-level BMW diagnostic scanning. Full system fault extraction, live data, and root cause analysis. Brentwood NH — serving all of Southern NH.",
    heroDescription:
      "Generic OBD-II readers miss 90% of what BMW-specific diagnostic software can see. We scan every module, extract every fault, and find the root cause — not just the code.",
    included: [
      "Full BMW factory-level vehicle scan across all electronic control modules",
      "Fault code extraction, documentation, and root cause analysis",
      "Live data stream monitoring: engine control module, transmission control module, stability control, chassis, body",
      "Component activation and output tests to isolate failed hardware",
      "Software version check and available update identification",
      "Detailed written diagnostic report with recommended repair path",
    ],
    whyParagraph:
      "BMW vehicles use proprietary communication networks that only BMW-specific diagnostic software can fully communicate with. Derek uses the same factory-level diagnostic software as BMW dealerships — no aftermarket alternatives. This is the difference between guessing and knowing. Accurate diagnosis means you only pay for repairs you actually need.",
  },
  {
    slug: "brake-service",
    category: "bmw-repair",
    h1: "BMW Brake Service & Repair in Southern NH",
    metaTitle:
      "BMW Brake Service & Repair in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW brake pad and rotor replacement with electronic reset, caliper service, and fluid flush. OEM parts only. Serving Southern NH and Northern MA.",
    heroDescription:
      "BMW's integrated braking electronics require more than a pad swap. We do the job completely — pads, rotors, fluid, and the electronic CBS reset.",
    included: [
      "BMW-spec front and/or rear brake pad replacement (OEM only)",
      "Brake rotor inspection, measurement, and replacement as required",
      "Electronic brake pad wear sensor replacement where applicable",
      "Brake pad wear BMW Condition-Based Service (CBS) indicator reset using factory diagnostic software",
      "Caliper slide pin service, cleaning, and lubrication",
      "Brake fluid moisture content test and full fluid flush as needed",
    ],
    whyParagraph:
      "BMW DSC, ABS, and brake assist systems are calibrated for specific pad compounds and rotor thicknesses. Aftermarket pads alter brake bias in ways that affect DSC intervention — a safety concern, not just a performance one. At Precision BMW, every brake job uses genuine OEM pads and rotors. The electronic reset is done properly, not just cancelled with an inexpensive Bluetooth dongle.",
  },
  {
    slug: "transmission-repair",
    category: "bmw-repair",
    h1: "BMW Transmission Repair in Southern NH",
    metaTitle:
      "BMW Transmission Repair in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW automatic and manual transmission diagnosis and repair — fluid service, internal component service, and factory software programming. Southern NH.",
    heroDescription:
      "BMW's automatic and double-clutch transmissions are precision units. Diagnosis and repair require factory software and a technician who understands them.",
    included: [
      "BMW factory diagnostic scan of the transmission control module with full fault extraction",
      "Transmission fluid drain and refill with BMW-specified fluid and filter",
      "Internal transmission component and valve body inspection — replacement if required",
      "Torque converter shudder diagnosis and flush procedure",
      "Transmission control module software update and adaptations reset via factory diagnostic software",
      "Shift selector mechanism and input shaft inspection",
    ],
    whyParagraph:
      "BMW's 8-speed automatic transmission requires BMW-specified fluid (not generic transmission fluid) and factory software programming after any internal service. Incorrect fluid or a missed adaptation reset causes premature failure of internal transmission components — a $3,000+ repair. Derek has been diagnosing BMW transmissions since the earliest generations. The diagnosis is accurate before any parts are ordered.",
  },
  {
    slug: "electrical-repair",
    category: "bmw-repair",
    h1: "BMW Electrical Repair in Southern NH",
    metaTitle:
      "BMW Electrical Repair in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW electrical fault diagnosis and repair using factory-level diagnostic software and OEM wiring diagrams. Body electronics, modules, coding. Southern NH.",
    heroDescription:
      "BMW's electrical architecture is complex by design. Diagnosing it requires factory tools, BMW wiring diagrams, and a technician trained by BMW of North America.",
    included: [
      "BMW factory-level full electrical system scan — all networked control modules",
      "BMW control module network communication fault isolation",
      "Ground point testing and voltage drop measurement with BMW diagrams",
      "Component activation and output tests via factory diagnostic software",
      "Relay, fuse, and junction box diagnosis",
      "Module coding, programming, and VIN alignment via factory diagnostic software",
    ],
    whyParagraph:
      "Modern BMWs communicate over multiple proprietary bus networks that share data between 40+ control modules. A fault in one module can cascade into faults across the entire vehicle. Derek trained directly with BMW of North America on these systems and has the BMW wiring diagram database to trace every wire correctly. No guessing. No unnecessary parts.",
  },
  {
    slug: "tires-alignment",
    category: "bmw-repair",
    h1: "BMW Tires & Alignment in Southern NH",
    metaTitle:
      "BMW Tires & Alignment in Southern NH | Precision BMW Repair",
    metaDescription:
      "Four-wheel BMW alignment to factory geometry specs. Run-flat tire mounting, TPMS service, and balancing. Serving BMW owners across Southern NH.",
    heroDescription:
      "BMW alignment specs are model-specific and tight. A few tenths of a degree out of spec causes premature tire wear and alters steering response. We align to BMW factory tolerances.",
    included: [
      "Four-wheel laser alignment to BMW factory camber, caster, and toe specs",
      "Electronic steering angle sensor reset post-alignment",
      "Run-flat and conventional tire mounting with calibrated torque sticks",
      "Wheel balancing on all four corners after tire installation",
      "TPMS sensor replacement and programming as needed",
      "Post-alignment test drive to verify straight tracking and steering return",
    ],
    whyParagraph:
      "BMW's rear toe and camber settings vary significantly by model and suspension variant. Applying a generic alignment spec to a BMW M3 or 3 Series produces incorrect results. Derek uses BMW-specific alignment specifications for every job, and understands how suspension wear affects alignment — so the root cause is addressed before the alignment is set.",
  },
  {
    slug: "ac-heating",
    category: "bmw-repair",
    h1: "BMW A/C & Heating Service in Southern NH",
    metaTitle:
      "BMW A/C & Heating Service in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW climate control diagnosis and repair — refrigerant service, compressor, climate control module, heater core. Southern NH.",
    heroDescription:
      "BMW's integrated automatic heating and air conditioning system is sophisticated by design. Diagnosis requires factory-level tools and a technician who understands it.",
    included: [
      "Current-spec refrigerant recovery, vacuum, and recharge to BMW specification",
      "Compressor clutch engagement and pressure test",
      "Cabin evaporator and condenser visual inspection",
      "Climate control module fault scan and actuator output tests via factory diagnostic software",
      "Cabin microfilter replacement",
      "Heater core, coolant valve, and blend door function verification",
    ],
    whyParagraph:
      "BMW's dual-zone and four-zone climate control systems use blend doors, coolant-control valves, and refrigerant pressure sensors that communicate across BMW's control module network. Diagnosing a failure as 'compressor' without checking actuator output tests is a guess. At Precision BMW, every A/C diagnosis starts with factory-level diagnostic software — not assumptions. OEM parts only, warranty on all work.",
  },
  {
    slug: "steering-suspension",
    category: "bmw-repair",
    h1: "BMW Steering & Suspension Repair in Southern NH",
    metaTitle:
      "BMW Steering & Suspension in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW suspension repair — control arms, thrust arms, wheel bearings, dampers. Four-wheel alignment included. OEM parts. Southern NH.",
    heroDescription:
      "BMW's suspension geometry is what separates a 3 Series from everything else. Restore it with OEM parts and a four-wheel alignment from a dealer-trained technician.",
    included: [
      "Front and rear control arm and thrust arm inspection and replacement",
      "Wheel bearing assessment — play, noise, and load test",
      "Ball joint condition check and replacement as required",
      "Damper/strut condition inspection — oil seepage, rebound test",
      "Stabilizer (anti-roll) bar link and bushing inspection",
      "Four-wheel alignment to BMW factory specs after all suspension work",
    ],
    whyParagraph:
      "BMW's suspension uses eccentric adjustment bolts, offset bushings, and specific torque sequences that differ from generic procedures. Installing a control arm without the correct torque sequence (tightened at ride height, not hanging) pre-loads bushings incorrectly and shortens their lifespan. Derek does every suspension job to BMW workshop manual specification — not approximations.",
  },

  // ── PERFORMANCE ────────────────────────────────────────────────
  {
    slug: "bmw-diagnostics",
    category: "performance",
    h1: "Advanced BMW Diagnostics in Southern NH",
    metaTitle:
      "BMW Diagnostics & Scanning in Southern NH | Precision BMW Repair",
    metaDescription:
      "Pre-modification baseline diagnostics, data logging, and ECU compatibility review for BMW performance builds. Brentwood NH.",
    heroDescription:
      "Before you modify anything, know exactly where your BMW stands. Baseline diagnostics protect your investment and expose hidden faults before they become expensive problems.",
    included: [
      "BMW factory-level full system baseline scan with complete fault history review",
      "Oxygen sensor and fuel trim analysis — long-term and short-term",
      "Boost pressure, mass airflow sensor output, and fuel system performance data log",
      "Pre/post-modification readiness check for ECU tuning compatibility",
      "Cooling system efficiency and thermostat function baseline",
      "Tune version and ECU calibration documentation",
    ],
    whyParagraph:
      "Modification on a BMW with existing faults — a failing high-pressure fuel pump, a weak ignition coil, or a marginal charge pipe — produces poor results at best and engine damage at worst. Derek's background in aviation mechanics (A&P certified, FAA pilot's license) means he approaches diagnostics with the same methodical precision applied to aircraft — nothing is assumed, everything is measured.",
  },
  {
    slug: "performance-upgrades",
    category: "performance",
    h1: "BMW Performance Upgrades in Southern NH",
    metaTitle:
      "BMW Performance Upgrades in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW ECU tuning, intake, exhaust, intercooler, and drivetrain upgrades. Expert installation and calibration by a dealer-trained technician in Southern NH.",
    heroDescription:
      "BMW's turbocharged inline-six and N/S/B-series engines respond exceptionally well to carefully selected upgrades. We install and calibrate everything correctly — no shortcuts.",
    included: [
      "ECU calibration via industry-leading professional tuning software",
      "Transmission tuning for optimized shift points and torque increase compatibility",
      "Cold air intake and high-flow air filter installation",
      "Upgraded intercooler and charge pipe kit fitting",
      "Cat-back exhaust and downpipe installation",
      "Post-installation data log and calibration verification drive",
    ],
    whyParagraph:
      "Performance upgrades on a BMW demand the same precision as stock repairs. Derek's 30+ years of exclusive BMW experience means he knows which upgrades work with BMW's engine management and which create long-term reliability problems. Every performance job at Precision BMW starts with a diagnostic baseline and ends with a verified calibration log — not a test drive and a hope.",
  },
];

export function getServiceContent(
  category: string,
  slug: string
): ServicePageContent | undefined {
  return allServiceContent.find(
    (s) => s.category === category && s.slug === slug
  );
}

export function getServicesByCategory(
  category: ServicePageContent["category"]
): ServicePageContent[] {
  return allServiceContent.filter((s) => s.category === category);
}
