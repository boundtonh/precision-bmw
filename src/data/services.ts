export type ServiceCategory = "routine-maintenance" | "bmw-repair" | "performance";

export interface Service {
  name: string;
  slug: string;
  category: ServiceCategory;
  shortDescription: string;
  url: string;
}

export const services: Service[] = [
  {
    name: "Oil Change",
    slug: "oil-change",
    category: "routine-maintenance",
    shortDescription:
      "BMW-specified engine oil and OEM filter replacement, including CBS reset and multi-point inspection.",
    url: "/services/routine-maintenance/oil-change",
  },
  {
    name: "Tire Balancing",
    slug: "tire-balancing",
    category: "routine-maintenance",
    shortDescription:
      "Precision wheel balancing to BMW tolerances, eliminating vibration and ensuring even tread wear across all four corners.",
    url: "/services/routine-maintenance/tire-balancing",
  },
  {
    name: "Tune-Up",
    slug: "tune-up",
    category: "routine-maintenance",
    shortDescription:
      "Spark plug replacement, air and cabin filter service, and fuel system inspection to restore factory power and efficiency.",
    url: "/services/routine-maintenance/tune-up",
  },
  {
    name: "Safety Inspection",
    slug: "safety-inspection",
    category: "routine-maintenance",
    shortDescription:
      "Comprehensive inspection of brakes, suspension, lighting, and fluid levels against BMW factory service standards.",
    url: "/services/routine-maintenance/safety-inspection",
  },
  {
    name: "Diagnostics",
    slug: "diagnostics",
    category: "bmw-repair",
    shortDescription:
      "Full-system ISTA diagnostic scan covering engine, transmission, DSC, and chassis modules to pinpoint faults with factory-level accuracy.",
    url: "/services/bmw-repair/diagnostics",
  },
  {
    name: "Brake Service",
    slug: "brake-service",
    category: "bmw-repair",
    shortDescription:
      "BMW-spec pad and rotor replacement with electronic brake pad reset, brake fluid flush, and caliper inspection.",
    url: "/services/bmw-repair/brake-service",
  },
  {
    name: "Transmission Repair",
    slug: "transmission-repair",
    category: "bmw-repair",
    shortDescription:
      "Diagnosis and repair of ZF and Getrag automatic and manual transmissions, including fluid service, mechatronic repair, and TCU programming.",
    url: "/services/bmw-repair/transmission-repair",
  },
  {
    name: "Electrical Repair",
    slug: "electrical-repair",
    category: "bmw-repair",
    shortDescription:
      "Fault tracing and repair across BMW's iDrive, KOMBI, and body electronics using OEM wiring diagrams and ISTA programming.",
    url: "/services/bmw-repair/electrical-repair",
  },
  {
    name: "Tires & Alignment",
    slug: "tires-alignment",
    category: "bmw-repair",
    shortDescription:
      "Four-wheel alignment to BMW factory geometry specs with run-flat-compatible mounting and TPMS service.",
    url: "/services/bmw-repair/tires-alignment",
  },
  {
    name: "A/C & Heating",
    slug: "ac-heating",
    category: "bmw-repair",
    shortDescription:
      "R-1234yf refrigerant service, compressor diagnosis, and IHKA system repair to restore climate control to factory performance.",
    url: "/services/bmw-repair/ac-heating",
  },
  {
    name: "Steering & Suspension",
    slug: "steering-suspension",
    category: "bmw-repair",
    shortDescription:
      "Control arm, thrust arm, and damper replacement with four-wheel alignment, restoring BMW's signature dynamic handling.",
    url: "/services/bmw-repair/steering-suspension",
  },
  {
    name: "BMW Diagnostics",
    slug: "bmw-diagnostics",
    category: "performance",
    shortDescription:
      "Advanced ISTA+ and Bootmod3 data logging to establish a precise baseline of engine, drivetrain, and chassis performance before modification.",
    url: "/services/performance/bmw-diagnostics",
  },
  {
    name: "Performance Upgrades",
    slug: "performance-upgrades",
    category: "performance",
    shortDescription:
      "ECU and TCU tuning, intake, exhaust, and cooling upgrades engineered for BMW's turbocharged and inline-six platforms.",
    url: "/services/performance/performance-upgrades",
  },
];
