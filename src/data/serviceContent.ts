export interface DetailItem {
  title: string;
  desc: string;
}

export interface ServicePageContent {
  slug: string;
  category: "routine-maintenance" | "bmw-repair" | "performance";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero label override (defaults to the category name) */
  heroLabel?: string;
  heroDescription: string;
  /** Optional "Know the Warning Signs" section shown before Service Details */
  warningSigns?: {
    headline: string;
    intro: string;
    items: DetailItem[];
    outro: string;
  };
  /** Service Details section overrides */
  detailsLabel?: string;
  detailsHeadline?: string;
  detailsIntro?: string;
  included: string[] | DetailItem[];
  whyHeadline?: string;
  /** One string per paragraph */
  whyParagraph: string | string[];
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
    h1: "BMW Tire Balancing & Wheel Alignment in Southern NH",
    metaTitle:
      "BMW Tire Balancing in Southern NH | Precision BMW Repair",
    metaDescription:
      "Precision wheel balancing to BMW tolerances. Eliminates vibration and ensures even tread wear. Serving BMW owners across Southern NH.",
    heroDescription:
      "Our BMW tire balancing and wheel alignment services help eliminate vibrations, improve handling, and promote even tire wear. Using advanced equipment and BMW-specific specifications, we help deliver the smooth, confident ride your BMW was engineered for.",
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
    h1: "BMW Safety Inspections in Southern NH",
    metaTitle:
      "BMW Safety Inspection in Southern NH | Precision BMW Repair",
    metaDescription: "Comprehensive BMW safety inspection covering brakes, tires, suspension, CV boots, fuel lines, and other critical systems. Brentwood NH — serving Southern NH.",
    heroDescription: "NH-mandated inspections may be on hold, but your safety shouldn't be. Derek provides thorough BMW safety checks, examining brakes, tires, suspension components, CV boots, and other critical systems. No upselling or pressure—just honest findings and the information you need to make informed decisions about your BMW's safety.",
    included: [
      "Brake pad thickness measurement and rotor condition assessment",
      "Suspension inspection: control arms, thrust arms, ball joints, wheel bearings",
      "Steering system inspection — play, rack condition, tie rod ends",
      "Exterior lighting verification (all bulbs, LEDs, adaptive headlights)",
      "Brake, coolant, power steering, and washer fluid level check",
      "Fuel lines and fuel-related components",
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
    heroDescription: "Your BMW is a sophisticated machine that requires more than a basic code reader. Using advanced BMW-specific diagnostic equipment and decades of hands-on experience, Derek goes beyond fault codes to identify the root cause of problems—helping you avoid unnecessary repairs and get the job done right.",
    detailsIntro: "At Precision BMW Repair, diagnostics go beyond simply reading fault codes. Derek combines advanced BMW-specific diagnostic equipment with decades of hands-on experience to identify problems accurately and recommend the right solutions.",
    included: [
      {
        title: "BMW-Specific Computer Diagnostics",
        desc: "Advanced scanning of your BMW's electronic systems to identify stored fault codes, warning lights, and potential problems.",
      },
      {
        title: "Check Engine & Warning Light Diagnosis",
        desc: "Investigating the cause of check engine lights, drivetrain warnings, ABS alerts, and other dashboard messages.",
      },
      {
        title: "Engine & Performance Troubleshooting",
        desc: "Identifying the causes of rough idling, misfires, hesitation, reduced power, and poor engine performance.",
      },
      {
        title: "Electrical & Sensor Testing",
        desc: "Evaluating sensors, electrical connections, control modules, and related components to help pinpoint malfunctions.",
      },
      {
        title: "Live Data & System Analysis",
        desc: "Monitoring real-time vehicle information and testing system operation to better understand what's causing a problem.",
      },
      {
        title: "Clear Explanations & Honest Recommendations",
        desc: "Derek explains what he finds, what needs attention, and what can wait. No guesswork, no unnecessary repairs, and no upselling.",
      },
    ],
    whyHeadline: "BMW Expertise. Accurate Diagnostics. Honest Answers.",
    whyParagraph: "Diagnosing a BMW takes more than plugging in a scanner. With decades of hands-on BMW experience and advanced BMW-specific diagnostic equipment, Derek knows how to look beyond fault codes to identify the real problem. You'll get a clear explanation of what he finds and honest recommendations on what actually needs attention. No guesswork, no unnecessary repairs, and no upselling.",
  },
  {
    slug: "brake-service",
    category: "bmw-repair",
    h1: "BMW Brake Service & Repair in Southern NH",
    metaTitle:
      "BMW Brake Service & Repair in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW brake pad and rotor replacement with electronic reset, caliper service, and fluid flush. OEM parts only. Serving Southern NH and Northern MA.",
    heroDescription: "Your BMW's braking system deserves expert attention. With decades of BMW experience, Derek provides thorough brake inspections and professional repairs, including pads, rotors, brake fluid service, and wear sensors. You'll receive honest recommendations based on what your BMW actually needs—no unnecessary repairs or upselling.",
    detailsIntro: "From routine brake maintenance to more extensive repairs, Derek provides BMW-specific brake service tailored to your vehicle's condition and needs. Services include:",
    included: [
      {
        title: "Brake Pad Inspection & Replacement",
        desc: "Front and rear brake pads using genuine BMW parts.",
      },
      {
        title: "Brake Rotor Inspection & Replacement",
        desc: "Checking rotor condition, wear, and thickness, with replacement when needed.",
      },
      {
        title: "Brake Wear Sensors",
        desc: "Inspection and replacement of electronic brake pad wear sensors when required.",
      },
      {
        title: "BMW Brake Service Indicator Reset",
        desc: "Resetting BMW's Condition Based Service (CBS) system following applicable brake service.",
      },
      {
        title: "Brake Caliper Inspection & Service",
        desc: "Checking calipers, hardware, and moving components for proper operation, wear, and corrosion.",
      },
      {
        title: "Brake Fluid Service",
        desc: "Checking brake fluid condition and performing complete fluid changes according to BMW maintenance requirements.",
      },
    ],
    whyHeadline: "Genuine BMW Parts. Expert Brake Service.",
    whyParagraph: "Your BMW's braking system is engineered for precision, performance, and safety. With decades of BMW experience, Derek understands the importance of using genuine BMW brake components and following proper factory service procedures. From brake pads and rotors to electronic wear sensors, every repair is performed with attention to detail. No shortcuts, no unnecessary repairs, and no upselling—just expert service you can trust.",
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
    heroDescription: "From frustrating electrical glitches to complex system failures, Derek brings decades of BMW experience and specialized diagnostic equipment to finding the source of the problem. No guesswork or unnecessary parts replacement—just accurate troubleshooting, honest recommendations, and repairs done right.",
    detailsLabel: "Service Details — Electrical Diagnostics & Repair",
    detailsHeadline: "Common BMW Electrical Problems We Diagnose & Repair",
    detailsIntro: "BMW electrical problems can affect everything from everyday convenience features to critical vehicle systems. Derek uses his extensive BMW experience and specialized diagnostic equipment to identify the cause and determine the appropriate repair.",
    included: [
      {
        title: "Battery, Charging & Starting Problems",
        desc: "Diagnosing weak batteries, charging system faults, alternator issues, and intermittent starting problems.",
      },
      {
        title: "Dashboard Warning Lights & Electrical Faults",
        desc: "Investigating electrical warning messages, malfunction indicators, and unexplained system alerts.",
      },
      {
        title: "Power Windows, Locks & Interior Electronics",
        desc: "Troubleshooting malfunctioning windows, door locks, mirrors, interior lighting, and other electrical accessories.",
      },
      {
        title: "Wiring, Fuses & Electrical Connections",
        desc: "Locating damaged wiring, faulty connections, blown fuses, and electrical shorts or intermittent faults.",
      },
      {
        title: "Control Modules & Communication Problems",
        desc: "Diagnosing electronic control module faults and communication issues between vehicle systems.",
      },
      {
        title: "Intermittent & Hard-to-Find Electrical Problems",
        desc: "Tracking down unexplained battery drain, electrical components that work intermittently, and other difficult-to-diagnose issues.",
      },
    ],
    whyHeadline: "BMW Electrical Expertise You Can Trust",
    whyParagraph: "Electrical problems can be some of the most frustrating and difficult issues to diagnose. With decades of hands-on experience and training directly from BMW of North America, Derek understands the complexities of BMW electrical systems. He takes the time to identify the source of the problem, explain his findings, and recommend only the repairs you actually need. No unnecessary parts replacement, no upselling—just honest, experienced BMW service.",
  },
  {
    slug: "tires-alignment",
    category: "bmw-repair",
    h1: "BMW Tire Balancing & 4-Wheel Alignment in Southern NH",
    metaTitle:
      "BMW Tires & Alignment in Southern NH | Precision BMW Repair",
    metaDescription:
      "Four-wheel BMW alignment to factory geometry specs. Run-flat tire mounting, TPMS service, and balancing. Serving BMW owners across Southern NH.",
    heroLabel: "BMW Repair — Ride and Vibration Analysis",
    heroDescription: "Proper tire balancing and precise wheel alignment are essential to your BMW's handling, performance, and ride quality. Derek provides professional tire balancing and 4-wheel alignment using specialized equipment and BMW-specific specifications to help eliminate vibrations, improve steering response, and prevent uneven tire wear. Experience the smooth, confident ride your BMW was engineered to deliver.",
    detailsHeadline: "BMW Tire Balancing & Alignment Services",
    detailsIntro: "From highway-speed vibrations to uneven tire wear and steering concerns, Derek provides precision tire balancing and wheel alignment services tailored to your BMW. Services include:",
    included: [
      {
        title: "Precision 4-Wheel Alignment",
        desc: "Checking and adjusting wheel alignment to BMW factory specifications, including camber, caster, and toe where adjustable.",
      },
      {
        title: "Professional Tire Balancing",
        desc: "Precision wheel and tire balancing to help eliminate vibrations and deliver a smoother, more comfortable ride.",
      },
      {
        title: "Tire Mounting & Installation",
        desc: "Professional mounting of conventional and run-flat tires using proper equipment and installation procedures.",
      },
      {
        title: "Tire Wear & Suspension Inspection",
        desc: "Checking tire wear patterns and related steering and suspension components for issues that may affect alignment.",
      },
      {
        title: "Tire Pressure Monitoring System (TPMS)",
        desc: "Checking tire pressure monitoring systems and performing sensor replacement or resets when needed.",
      },
      {
        title: "Final Alignment & Road Test",
        desc: "Verifying alignment measurements and checking steering response, vehicle tracking, and ride quality as appropriate.",
      },
    ],
    whyHeadline: "Precision Alignment. Smoother Ride. Better Handling.",
    whyParagraph: "Your BMW was engineered for exceptional handling and ride quality. With decades of BMW experience, Derek understands how proper tire balancing, 4-wheel alignment, and suspension condition all work together. He takes the time to identify the cause of vibrations, uneven tire wear, or steering concerns and uses BMW-specific specifications to get things right. No unnecessary services or upselling—just expert care to keep your BMW driving the way it should.",
  },
  {
    slug: "ac-heating",
    category: "bmw-repair",
    h1: "BMW A/C & Heating Service in Southern NH",
    metaTitle:
      "BMW A/C & Heating Service in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW climate control diagnosis and repair — refrigerant service, compressor, climate control module, heater core. Southern NH.",
    heroDescription: "Whether your BMW's air conditioning isn't cooling properly, the heat isn't keeping you warm, or the climate control system isn't working as it should, Derek has the experience to diagnose and repair the problem. With decades of BMW expertise and specialized diagnostic equipment, he provides accurate troubleshooting, honest recommendations, and dependable repairs—without unnecessary services or upselling.",
    detailsHeadline: "BMW A/C & Heating Services",
    detailsIntro: "Whether your BMW isn't cooling properly, has weak heat, or struggles to maintain a comfortable cabin temperature, Derek has the experience and equipment to identify the problem and recommend the right repair.",
    included: [
      {
        title: "Air Conditioning Diagnosis & Repair",
        desc: "Diagnosing poor cooling, warm air from vents, refrigerant leaks, and malfunctioning A/C components.",
      },
      {
        title: "Heating System Diagnosis & Repair",
        desc: "Troubleshooting insufficient heat, heater core problems, coolant circulation issues, and faulty heating controls.",
      },
      {
        title: "Climate Control System Diagnostics",
        desc: "Identifying problems with automatic temperature controls, electronic sensors, and climate control components.",
      },
      {
        title: "A/C Refrigerant Service & Leak Detection",
        desc: "Checking refrigerant levels, locating leaks, and performing proper A/C system evacuation and recharging when needed.",
      },
      {
        title: "Blower Motors & Airflow Problems",
        desc: "Diagnosing weak airflow, malfunctioning blower motors, unusual fan noises, and air distribution problems.",
      },
      {
        title: "Cabin Air Filters & Ventilation",
        desc: "Inspecting and replacing cabin microfilters and addressing restricted airflow or ventilation concerns.",
      },
    ],
    whyHeadline: "Complex BMW Systems. Experienced Hands.",
    whyParagraph: "BMW heating and air conditioning systems are far more sophisticated than most people realize. From electronic climate controls and temperature sensors to compressors, blend doors, and coolant valves, multiple components must work together to keep your cabin comfortable. With decades of BMW experience and factory training, Derek understands how these systems operate and how to diagnose problems accurately. No guesswork, no unnecessary parts replacement—just expert repairs and honest recommendations.",
  },
  {
    slug: "steering-suspension",
    category: "bmw-repair",
    h1: "BMW Steering & Suspension Repair in Southern NH",
    metaTitle:
      "BMW Steering & Suspension in Southern NH | Precision BMW Repair",
    metaDescription:
      "BMW suspension repair — control arms, thrust arms, wheel bearings, dampers. Four-wheel alignment included. OEM parts. Southern NH.",
    heroDescription: "From classic 3 Series models to today's sophisticated BMW SUVs, steering and suspension systems vary considerably. With decades of BMW experience and factory training, Derek understands these differences and knows how to diagnose worn components, unusual noises, handling problems, and suspension faults. Whether your BMW has a conventional suspension or advanced electronic systems, you'll receive expert attention, accurate diagnostics, and honest repair recommendations.",
    detailsHeadline: "BMW Steering & Suspension Services",
    detailsIntro: "From worn suspension components to sophisticated electronic suspension systems, Derek provides expert diagnosis and repair tailored to your BMW's specific model, age, and suspension configuration. Services include:",
    included: [
      {
        title: "Control Arms, Bushings & Ball Joints",
        desc: "Inspection and replacement of worn suspension components that can cause clunking, vibrations, uneven tire wear, and poor handling.",
      },
      {
        title: "Shocks, Struts & Suspension Components",
        desc: "Diagnosing and repairing worn shocks, struts, mounts, and related components that affect ride comfort, stability, and handling.",
      },
      {
        title: "Steering System Diagnosis & Repair",
        desc: "Identifying and repairing problems with steering racks, tie rods, hydraulic power steering, and electronic steering systems.",
      },
      {
        title: "Air Suspension & Adaptive Suspension Repair",
        desc: "Expert diagnosis and repair of BMW air suspension, adaptive dampers, ride-height sensors, and electronic suspension controls, including uneven ride height and suspension warning messages.",
      },
      {
        title: "Wheel Bearings & Stabilizer Components",
        desc: "Inspecting and replacing worn wheel bearings, sway bar links, and bushings that can cause unusual noises, looseness, or unstable handling.",
      },
      {
        title: "4-Wheel Alignment & Suspension Geometry",
        desc: "Precision wheel alignment using BMW factory specifications to help restore proper handling, steering response, and even tire wear.",
      },
    ],
    whyHeadline: "BMW Suspension Expertise. From Classic to Complex.",
    whyParagraph: "BMW steering and suspension systems have evolved dramatically over the years. From traditional control arms, bushings, and struts to sophisticated air suspension and electronically controlled damping systems, each requires specialized knowledge and proper repair procedures. With decades of hands-on BMW experience and factory training, Derek understands these differences and knows how to diagnose and repair them correctly. No guesswork, no unnecessary parts replacement—just expert service that restores the ride and handling your BMW was engineered to deliver.",
  },
  {
    slug: "major-engine-repair",
    category: "bmw-repair",
    h1: "BMW Major Engine Repair in Southern NH",
    metaTitle: "BMW Major Engine Repair in Southern NH | Precision BMW Repair",
    metaDescription: "BMW VANOS, timing chain, camshaft, valvetrain, and internal engine repair by a BMW factory-trained technician. Brentwood NH — serving all of Southern NH.",
    heroDescription: "From VANOS problems and timing chain issues to worn camshafts, lifters, and complex internal engine repairs, Derek brings decades of BMW experience to some of the most demanding repairs your engine may need. With factory training dating back to 1992, specialized diagnostic equipment, and an in-depth understanding of BMW engines, he focuses on identifying the real problem and performing the repairs correctly—without unnecessary parts replacement or upselling.",
    warningSigns: {
      headline: "Is Your BMW Telling You Something Is Wrong?",
      intro: "Unusual engine noises, rough running, or reduced performance can sometimes indicate problems with internal engine components. Recognizing these symptoms early may help prevent more extensive damage.",
      items: [
        {
          title: "Rattling or ticking noises",
          desc: "Unusual sounds during startup, idle, or acceleration.",
        },
        {
          title: "Rough idle or engine misfires",
          desc: "Shaking, hesitation, or inconsistent engine operation.",
        },
        {
          title: "Check engine or drivetrain warnings",
          desc: "Dashboard alerts that may indicate engine timing or mechanical problems.",
        },
        {
          title: "Loss of power or poor acceleration",
          desc: "Reduced engine response or unexpected performance changes.",
        },
        {
          title: "Excessive oil consumption or visible leaks",
          desc: "Oil loss that may indicate worn seals, gaskets, or other mechanical concerns.",
        },
        {
          title: "Engine timing or VANOS faults",
          desc: "Diagnostic trouble codes that require further investigation to determine the underlying cause.",
        },
      ],
      outro: "These symptoms don't necessarily mean your BMW needs major engine work. Derek will evaluate the problem, explain his findings, and recommend the appropriate next steps.",
    },
    detailsHeadline: "BMW Major Engine Repair Services",
    detailsIntro: "BMW engines are known for their performance and sophisticated engineering, but complex internal components require specialized knowledge when problems arise. Derek provides experienced diagnosis and repair across a wide range of BMW engines, from older naturally aspirated models to modern turbocharged powerplants.",
    included: [
      {
        title: "VANOS System Diagnosis & Repair",
        desc: "Diagnosing and repairing BMW variable valve timing problems, including VANOS solenoids, actuators, seals, and related components that can affect engine performance and drivability.",
      },
      {
        title: "Timing Chain & Timing Component Repair",
        desc: "Inspection and replacement of worn timing chains, guides, tensioners, and related components to address timing faults, unusual engine noises, and potential internal engine damage.",
      },
      {
        title: "Camshaft & Valvetrain Repair",
        desc: "Diagnosing and repairing worn or damaged camshafts, camshaft bearings or bearing surfaces, and related valvetrain components that affect engine operation and performance.",
      },
      {
        title: "Hydraulic Lifters & Valve Train Problems",
        desc: "Identifying and repairing lifter noise, worn rocker arms or followers, and other valvetrain issues that can cause ticking, rough operation, or reduced engine performance.",
      },
      {
        title: "Cylinder Head & Internal Engine Repairs",
        desc: "Diagnosis and repair of cylinder head problems, valve-related issues, head gasket failures, and other internal engine concerns requiring specialized mechanical work.",
      },
      {
        title: "Engine Oil Leaks & Mechanical Failures",
        desc: "Locating and repairing oil leaks from valve covers, timing covers, oil filter housings, and other engine components, along with diagnosing underlying mechanical problems.",
      },
    ],
    whyHeadline: "Complex BMW Engine Repairs. Decades of Experience.",
    whyParagraph: [
      "BMW engines are precision-engineered machines, with sophisticated timing systems, variable valve technology, and intricate internal components. From the VANOS systems found in earlier BMW engines to today's advanced turbocharged powerplants, each engine presents its own unique challenges.",
      "With BMW factory training dating back to 1992 and 14 years of dealership experience, Derek understands the importance of proper diagnosis, specialized tools, and following BMW-specific repair procedures. Whether addressing a timing chain failure, valvetrain problem, or complex internal engine issue, he approaches every repair with the precision and attention to detail it deserves.",
      "No guesswork, no unnecessary repairs, and no upselling—just experienced BMW engine repair from a technician who knows these engines inside and out.",
    ],
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
