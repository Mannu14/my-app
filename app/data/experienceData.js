const experience = [
  {
    role: "Junior Backend Developer",
    company: "Tcipher Technologies",
    location: "Remote",
    duration: "Nov 2025 - Present",
    current: true,
    bullets: [
      "Built a geo-grid based rider dispatch and allocation system, dividing the city into 500m cells and matching nearby riders using distance and rating logic; used Redis atomic locks (SETNX) to prevent race conditions under high concurrency.",
      "Designed a dynamic pricing engine driven by real-time demand-supply, traffic, time and event signals with configurable zone-based pricing, including cross-zone fare calculation by splitting routes into segments.",
      "Built a real-time tracking system with Socket.IO for live rider location updates and Redis TTL for automatic offline detection; Redis used extensively for caching locations, pricing data and allocation state.",
      "Implemented a double-entry accounting and settlement system covering ledger posting, vendor payouts, cash collections and reconciliation, plus a country-generic tax and invoicing engine used across food, grocery, pharmacy, parcel, ride and rental verticals.",
      "Implemented multi-vendor grocery order splitting, letting a single customer order span multiple vendors with independent vendor-specific fulfillment and status workflows.",
      "Built hierarchical RBAC/ABAC access control (CEO to Manager to Vendor) with SELF/TEAM/ALL scope resolution; fixed critical production authorization issues around permission precedence, data exposure and role sync.",
      "Built the car-rental backend module (booking, KYC, payment pre-authorization, OTP trip start/end, fleet management, payment webhooks), finding and fixing 6 pre-launch P0 bugs including an inventory lock leak and a payment charge-split bypass.",
      "Built support ticket workflows with SLA tracking and escalation, integrated Google Maps, JWT authentication, Firebase FCM and AWS S3, and validated grocery, pharmacy and parcel flows through live QA.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "AWS S3"],
  },
  {
    role: "MERN Stack Developer",
    company: "Softique Innovations Pvt. Ltd.",
    location: "Remote",
    duration: "Jun 2025 - Nov 2025",
    bullets: [
      "Developed a physiotherapy booking web platform for discovering and booking physiotherapists by ratings, availability and profile details.",
      "Implemented an appointment scheduling system with hourly pricing, slot management and complete booking workflows.",
      "Designed monthly and yearly subscription plans with pricing logic and access control for premium features.",
      "Built and integrated REST APIs using Node.js, Express and MongoDB for user, booking and subscription management.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Freelance MERN Stack Developer",
    company: "Fiverr",
    location: "Remote · Part-time",
    duration: "Jun 2025 - Dec 2025",
    bullets: [
      "Delivered MERN stack web applications for independent clients alongside full-time work, including a food-ordering platform with real-time order tracking and a quiz platform for a college-student client with JWT authentication and score tracking.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Full-Stack Development Intern",
    company: "Sublimity Software Pvt Ltd",
    location: "Jaipur",
    duration: "May 2024 - Jun 2024",
    bullets: [
      "Developed responsive full-stack web applications using React, Node.js and MongoDB as part of the core development team.",
      "Collaborated on backend API optimization, performed code reviews to improve code quality, and used Git for version control.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Git"],
  },
];

export default experience;
