import type {
  Objective,
  Initiative,
  Kpi,
  BudgetLine,
  Deadline,
  PlanVersion,
} from "./types";

export const strategicPlan = {
  id: "plan-2025",
  name: "Horizon Health Network 2025 Strategic Plan",
  vision:
    "To be the most trusted and innovative health system in the region — delivering seamless, equitable, patient-centered care.",
  mission:
    "We connect clinical excellence, digital innovation and community partnership to improve health outcomes for everyone we serve.",
  fiscalYear: "FY 2025",
  status: "active",
  updatedAt: "2025-11-12T09:00:00Z",
  version: "v3.2",
};

export const planVersions: PlanVersion[] = [
  { id: "v1", version: "v1.0", author: "Ava Chen", date: "2025-01-15", note: "Initial plan ratified by board" },
  { id: "v2", version: "v2.1", author: "Ava Chen", date: "2025-05-02", note: "Q2 refresh — added digital health objectives" },
  { id: "v3", version: "v3.0", author: "Ava Chen", date: "2025-09-01", note: "Annual planning cycle update" },
  { id: "v4", version: "v3.2", author: "Isa Garcia", date: "2025-11-12", note: "Mid-year KPI recalibration" },
];

export const objectives: Objective[] = [
  {
    id: "obj-1",
    name: "Deliver exceptional, equitable patient outcomes",
    description:
      "Improve clinical quality and reduce disparities across all service lines and communities.",
    ownerId: "u-sofia-patel",
    department: "Clinical Operations",
    progress: 78,
    status: "on-track",
    priority: "critical",
    category: "Quality & Safety",
    goals: [
      {
        id: "goal-1-1",
        name: "Reduce hospital-acquired conditions by 25%",
        objectiveId: "obj-1",
        progress: 72,
        ownerId: "u-sofia-patel",
        keyResults: [
          { id: "kr-1-1-1", name: "Reduce falls with injury rate to 2.1 per 1,000 bed days", goalId: "goal-1-1", target: 2.1, current: 2.4, unit: "per 1k", progress: 65, ownerId: "u-sofia-patel" },
          { id: "kr-1-1-2", name: "Reduce central line infections to 0.8 per 1,000 line days", goalId: "goal-1-1", target: 0.8, current: 1.1, unit: "per 1k", progress: 70, ownerId: "u-ethan-morgan" },
          { id: "kr-1-1-3", name: "Achieve 95% compliance on medication reconciliation", goalId: "goal-1-1", target: 95, current: 88, unit: "%", progress: 55, ownerId: "u-ethan-morgan" },
        ],
      },
      {
        id: "goal-1-2",
        name: "Close the equity gap in chronic disease outcomes",
        objectiveId: "obj-1",
        progress: 64,
        ownerId: "u-noah-bennett",
        keyResults: [
          { id: "kr-1-2-1", name: "Reduce HbA1c >9% prevalence gap by 40%", goalId: "goal-1-2", target: 40, current: 22, unit: "%", progress: 55, ownerId: "u-noah-bennett" },
          { id: "kr-1-2-2", name: "Launch 6 community health navigator programs", goalId: "goal-1-2", target: 6, current: 4, unit: "programs", progress: 67, ownerId: "u-noah-bennett" },
        ],
      },
    ],
  },
  {
    id: "obj-2",
    name: "Accelerate digital transformation of care",
    description:
      "Expand virtual care, patient portals and clinical decision support across the network.",
    ownerId: "u-liam-okafor",
    department: "Digital Health",
    progress: 68,
    status: "on-track",
    priority: "high",
    category: "Digital & Innovation",
    goals: [
      {
        id: "goal-2-1",
        name: "Grow virtual care to 30% of ambulatory visits",
        objectiveId: "obj-2",
        progress: 74,
        ownerId: "u-liam-okafor",
        keyResults: [
          { id: "kr-2-1-1", name: "Reach 90,000 virtual visits per quarter", goalId: "goal-2-1", target: 90000, current: 66500, unit: "visits", progress: 74, ownerId: "u-liam-okafor" },
          { id: "kr-2-1-2", name: "90% patient satisfaction on virtual encounters", goalId: "goal-2-1", target: 90, current: 84, unit: "%", progress: 60, ownerId: "u-liam-okafor" },
        ],
      },
      {
        id: "goal-2-2",
        name: "Deploy AI-assisted clinical documentation",
        objectiveId: "obj-2",
        progress: 55,
        ownerId: "u-lucas-fischer",
        keyResults: [
          { id: "kr-2-2-1", name: "Ambient documentation live in 3 departments", goalId: "goal-2-2", target: 3, current: 1, unit: "departments", progress: 33, ownerId: "u-lucas-fischer" },
          { id: "kr-2-2-2", name: "Reduce clinician documentation time by 40%", goalId: "goal-2-2", target: 40, current: 12, unit: "%", progress: 30, ownerId: "u-lucas-fischer" },
        ],
      },
    ],
  },
  {
    id: "obj-3",
    name: "Strengthen financial sustainability",
    description:
      "Improve operating margin, optimize cost structure and grow non-acute revenue streams.",
    ownerId: "u-marcus-reyes",
    department: "Finance",
    progress: 71,
    status: "at-risk",
    priority: "critical",
    category: "Financial Health",
    goals: [
      {
        id: "goal-3-1",
        name: "Achieve 3.5% operating margin",
        objectiveId: "obj-3",
        progress: 62,
        ownerId: "u-marcus-reyes",
        keyResults: [
          { id: "kr-3-1-1", name: "Operating margin to 3.5%", goalId: "goal-3-1", target: 3.5, current: 2.1, unit: "%", progress: 60, ownerId: "u-marcus-reyes" },
          { id: "kr-3-1-2", name: "Reduce supply chain cost per case by 8%", goalId: "goal-3-1", target: 8, current: 4.5, unit: "%", progress: 56, ownerId: "u-marcus-reyes" },
        ],
      },
      {
        id: "goal-3-2",
        name: "Grow ambulatory and community revenue 15%",
        objectiveId: "obj-3",
        progress: 80,
        ownerId: "u-marcus-reyes",
        keyResults: [
          { id: "kr-3-2-1", name: "Ambulatory revenue to $48M", goalId: "goal-3-2", target: 48, current: 43.5, unit: "$M", progress: 82, ownerId: "u-marcus-reyes" },
          { id: "kr-3-2-2", name: "Launch 4 new outpatient service lines", goalId: "goal-3-2", target: 4, current: 3, unit: "lines", progress: 75, ownerId: "u-marcus-reyes" },
        ],
      },
    ],
  },
  {
    id: "obj-4",
    name: "Build a thriving, resilient workforce",
    description:
      "Attract, develop and retain top clinical and non-clinical talent across the network.",
    ownerId: "u-emma-kowalski",
    department: "People & Culture",
    progress: 82,
    status: "on-track",
    priority: "high",
    category: "Workforce",
    goals: [
      {
        id: "goal-4-1",
        name: "Reduce voluntary turnover to 12%",
        objectiveId: "obj-4",
        progress: 85,
        ownerId: "u-emma-kowalski",
        keyResults: [
          { id: "kr-4-1-1", name: "Voluntary turnover to 12%", goalId: "goal-4-1", target: 12, current: 13.8, unit: "%", progress: 78, ownerId: "u-emma-kowalski" },
          { id: "kr-4-1-2", name: "88% employee engagement score", goalId: "goal-4-1", target: 88, current: 84, unit: "score", progress: 72, ownerId: "u-emma-kowalski" },
        ],
      },
      {
        id: "goal-4-2",
        name: "Develop 150 internal leaders by 2026",
        objectiveId: "obj-4",
        progress: 70,
        ownerId: "u-emma-kowalski",
        keyResults: [
          { id: "kr-4-2-1", name: "120 leaders completed development program", goalId: "goal-4-2", target: 150, current: 105, unit: "leaders", progress: 70, ownerId: "u-emma-kowalski" },
          { id: "kr-4-2-2", name: "85% internal fill rate for leadership roles", goalId: "goal-4-2", target: 85, current: 72, unit: "%", progress: 65, ownerId: "u-emma-kowalski" },
        ],
      },
    ],
  },
  {
    id: "obj-5",
    name: "Elevate patient experience across all touchpoints",
    description:
      "Deliver consistently excellent, personalized experiences from scheduling to follow-up.",
    ownerId: "u-noah-bennett",
    department: "Patient Experience",
    progress: 75,
    status: "on-track",
    priority: "medium",
    category: "Patient Experience",
    goals: [
      {
        id: "goal-5-1",
        name: "Reach 90th percentile HCAHPS patient experience",
        objectiveId: "obj-5",
        progress: 68,
        ownerId: "u-noah-bennett",
        keyResults: [
          { id: "kr-5-1-1", name: "Overall HCAHPS rating to 4.6 / 5", goalId: "goal-5-1", target: 4.6, current: 4.3, unit: "score", progress: 66, ownerId: "u-noah-bennett" },
          { id: "kr-5-1-2", name: "Reduce average wait time to 18 minutes", goalId: "goal-5-1", target: 18, current: 24, unit: "min", progress: 60, ownerId: "u-noah-bennett" },
        ],
      },
      {
        id: "goal-5-2",
        name: "Digitize the patient journey end-to-end",
        objectiveId: "obj-5",
        progress: 82,
        ownerId: "u-liam-okafor",
        keyResults: [
          { id: "kr-5-2-1", name: "75% of patients using self-scheduling", goalId: "goal-5-2", target: 75, current: 61, unit: "%", progress: 76, ownerId: "u-liam-okafor" },
          { id: "kr-5-2-2", name: "Digital check-in adoption at 70%", goalId: "goal-5-2", target: 70, current: 58, unit: "%", progress: 74, ownerId: "u-liam-okafor" },
        ],
      },
    ],
  },
  {
    id: "obj-6",
    name: "Deepen community and stakeholder partnership",
    description:
      "Embed community voice in planning and expand impact through trusted partnerships.",
    ownerId: "u-ava-chen",
    department: "Executive",
    progress: 66,
    status: "on-track",
    priority: "medium",
    category: "Community & Partnership",
    goals: [
      {
        id: "goal-6-1",
        name: "Launch community health needs assessment",
        objectiveId: "obj-6",
        progress: 90,
        ownerId: "u-ava-chen",
        keyResults: [
          { id: "kr-6-1-1", name: "Survey 5,000 residents", goalId: "goal-6-1", target: 5000, current: 4380, unit: "residents", progress: 88, ownerId: "u-ava-chen" },
          { id: "kr-6-1-2", name: "Host 12 town halls across the region", goalId: "goal-6-1", target: 12, current: 11, unit: "town halls", progress: 92, ownerId: "u-ava-chen" },
        ],
      },
      {
        id: "goal-6-2",
        name: "Sign 8 formal community partnership agreements",
        objectiveId: "obj-6",
        progress: 58,
        ownerId: "u-ava-chen",
        keyResults: [
          { id: "kr-6-2-1", name: "8 active MOUs with community orgs", goalId: "goal-6-2", target: 8, current: 5, unit: "MOUs", progress: 62, ownerId: "u-ava-chen" },
          { id: "kr-6-2-2", name: "4 joint funding proposals submitted", goalId: "goal-6-2", target: 4, current: 2, unit: "proposals", progress: 50, ownerId: "u-ava-chen" },
        ],
      },
    ],
  },
  {
    id: "obj-7",
    name: "Advance enterprise risk and resilience",
    description:
      "Proactively identify, monitor and mitigate strategic and operational risks.",
    ownerId: "u-olivia-turner",
    department: "Enterprise Risk",
    progress: 69,
    status: "at-risk",
    priority: "high",
    category: "Risk & Compliance",
    goals: [
      {
        id: "goal-7-1",
        name: "Close 80% of high-severity risks by Q4",
        objectiveId: "obj-7",
        progress: 61,
        ownerId: "u-olivia-turner",
        keyResults: [
          { id: "kr-7-1-1", name: "12 high risks with active mitigation plans", goalId: "goal-7-1", target: 12, current: 9, unit: "plans", progress: 75, ownerId: "u-olivia-turner" },
          { id: "kr-7-1-2", name: "Reduce critical risk count from 6 to 2", goalId: "goal-7-1", target: 2, current: 4, unit: "risks", progress: 50, ownerId: "u-olivia-turner" },
        ],
      },
      {
        id: "goal-7-2",
        name: "Maintain zero major compliance findings",
        objectiveId: "obj-7",
        progress: 100,
        ownerId: "u-olivia-turner",
        keyResults: [
          { id: "kr-7-2-1", name: "Zero major findings in external audit", goalId: "goal-7-2", target: 0, current: 0, unit: "findings", progress: 100, ownerId: "u-olivia-turner" },
        ],
      },
    ],
  },
  {
    id: "obj-8",
    name: "Expand service lines in high-growth markets",
    description:
      "Open new ambulatory, specialty and community-based service locations.",
    ownerId: "u-sofia-patel",
    department: "Clinical Operations",
    progress: 47,
    status: "behind",
    priority: "medium",
    category: "Growth",
    goals: [
      {
        id: "goal-8-1",
        name: "Open 2 new ambulatory care centers",
        objectiveId: "obj-8",
        progress: 40,
        ownerId: "u-sofia-patel",
        keyResults: [
          { id: "kr-8-1-1", name: "Center A opened by Q3", goalId: "goal-8-1", target: 1, current: 1, unit: "centers", progress: 100, ownerId: "u-sofia-patel" },
          { id: "kr-8-1-2", name: "Center B construction on schedule", goalId: "goal-8-1", target: 100, current: 35, unit: "%", progress: 35, ownerId: "u-ethan-morgan" },
        ],
      },
      {
        id: "goal-8-2",
        name: "Launch pediatric specialty network",
        objectiveId: "obj-8",
        progress: 52,
        ownerId: "u-sofia-patel",
        keyResults: [
          { id: "kr-8-2-1", name: "6 pediatric specialties onboarded", goalId: "goal-8-2", target: 6, current: 3, unit: "specialties", progress: 50, ownerId: "u-sofia-patel" },
          { id: "kr-8-2-2", name: "Pediatric referral agreements signed", goalId: "goal-8-2", target: 10, current: 6, unit: "agreements", progress: 60, ownerId: "u-sofia-patel" },
        ],
      },
    ],
  },
];

export const initiatives: Initiative[] = [
  // Objective 1 — Clinical quality
  { id: "ini-101", name: "Fall prevention bundle rollout", description: "Standardize evidence-based fall prevention across all inpatient units.", objectiveId: "obj-1", ownerId: "u-sofia-patel", department: "Clinical Operations", budget: 480000, spent: 355000, status: "on-track", priority: "high", deadline: "2026-02-28", startDate: "2025-03-01", kpis: ["Falls with injury rate", "Staff compliance"], progress: 76, milestones: [{ id: "m-101-1", name: "Pilot in 2 units", date: "2025-06-30", status: "done" }, { id: "m-101-2", name: "Network-wide rollout", date: "2025-12-31", status: "in-progress" }, { id: "m-101-3", name: "Outcome evaluation", date: "2026-02-28", status: "upcoming" }], comments: [{ id: "c-101-1", authorId: "u-ethan-morgan", text: "Pilot units showing 18% reduction in fall rates already.", createdAt: "2025-11-04T10:00:00Z" }] },
  { id: "ini-102", name: "Sepsis early warning system", description: "Deploy AI-driven sepsis detection integrated with the EHR.", objectiveId: "obj-1", ownerId: "u-lucas-fischer", department: "Digital Health", budget: 1200000, spent: 980000, status: "at-risk", priority: "critical", deadline: "2026-01-31", startDate: "2025-05-15", kpis: ["Sepsis mortality", "Alert precision"], progress: 58, milestones: [{ id: "m-102-1", name: "Model validation", date: "2025-09-30", status: "done" }, { id: "m-102-2", name: "Pilot in ICU", date: "2025-12-15", status: "in-progress" }, { id: "m-102-3", name: "Scale to 4 hospitals", date: "2026-01-31", status: "upcoming" }], comments: [{ id: "c-102-1", authorId: "u-liam-okafor", text: "Alert precision at 82% — need 85% before ICU go-live.", createdAt: "2025-11-10T14:30:00Z" }] },
  { id: "ini-103", name: "Health equity data dashboard", description: "Build a real-time equity dashboard by race, geography and income.", objectiveId: "obj-1", ownerId: "u-noah-bennett", department: "Patient Experience", budget: 320000, spent: 210000, status: "on-track", priority: "medium", deadline: "2026-03-15", startDate: "2025-07-01", kpis: ["Data coverage", "Executive usage"], progress: 64, milestones: [{ id: "m-103-1", name: "Data model defined", date: "2025-10-31", status: "done" }, { id: "m-103-2", name: "Beta dashboard", date: "2026-01-15", status: "in-progress" }], comments: [] },
  { id: "ini-104", name: "Care navigator community program", description: "Embed 6 community health navigators in underserved neighborhoods.", objectiveId: "obj-1", ownerId: "u-noah-bennett", department: "Patient Experience", budget: 540000, spent: 402000, status: "on-track", priority: "high", deadline: "2026-04-30", startDate: "2025-04-01", kpis: ["Navigator consults", "HbA1c improvement"], progress: 70, milestones: [{ id: "m-104-1", name: "Hire 4 navigators", date: "2025-09-30", status: "done" }, { id: "m-104-2", name: "Hire 2 more navigators", date: "2026-01-31", status: "upcoming" }], comments: [{ id: "c-104-1", authorId: "u-noah-bennett", text: "1,200 consults completed in first 6 months.", createdAt: "2025-10-28T09:00:00Z" }] },
  // Objective 2 — Digital
  { id: "ini-201", name: "Virtual care platform expansion", description: "Extend virtual visits to all 12 ambulatory clinics.", objectiveId: "obj-2", ownerId: "u-liam-okafor", department: "Digital Health", budget: 2400000, spent: 1760000, status: "on-track", priority: "high", deadline: "2026-03-31", startDate: "2025-02-01", kpis: ["Virtual visits", "Patient satisfaction"], progress: 74, milestones: [{ id: "m-201-1", name: "4 clinics live", date: "2025-07-31", status: "done" }, { id: "m-201-2", name: "8 clinics live", date: "2025-12-31", status: "in-progress" }, { id: "m-201-3", name: "12 clinics live", date: "2026-03-31", status: "upcoming" }], comments: [] },
  { id: "ini-202", name: "Patient portal 2.0", description: "Redesign portal with self-scheduling, billing and results messaging.", objectiveId: "obj-2", ownerId: "u-liam-okafor", department: "Digital Health", budget: 890000, spent: 720000, status: "on-track", priority: "medium", deadline: "2026-02-15", startDate: "2025-05-01", kpis: ["Portal adoption", "Self-scheduling rate"], progress: 68, milestones: [{ id: "m-202-1", name: "UX research", date: "2025-08-31", status: "done" }, { id: "m-202-2", name: "Beta release", date: "2026-01-15", status: "in-progress" }], comments: [] },
  { id: "ini-203", name: "AI ambient documentation", description: "Deploy ambient scribing for clinicians in primary care and ED.", objectiveId: "obj-2", ownerId: "u-lucas-fischer", department: "Information Technology", budget: 1500000, spent: 690000, status: "behind", priority: "high", deadline: "2026-06-30", startDate: "2025-06-01", kpis: ["Documentation time", "Clinician adoption"], progress: 35, milestones: [{ id: "m-203-1", name: "Vendor selection", date: "2025-10-31", status: "done" }, { id: "m-203-2", name: "Pilot in 1 department", date: "2026-02-28", status: "in-progress" }], comments: [{ id: "c-203-1", authorId: "u-lucas-fischer", text: "Integration with EHR delayed by vendor API.", createdAt: "2025-11-12T11:00:00Z" }] },
  { id: "ini-204", name: "Clinical decision support rollout", description: "Standardize order sets and CDS alerts across the network.", objectiveId: "obj-2", ownerId: "u-sofia-patel", department: "Clinical Operations", budget: 460000, spent: 388000, status: "completed", priority: "medium", deadline: "2025-11-30", startDate: "2025-03-01", kpis: ["Order set adherence"], progress: 100, milestones: [{ id: "m-204-1", name: "Rollout complete", date: "2025-11-30", status: "done" }], comments: [] },
  // Objective 3 — Finance
  { id: "ini-301", name: "Supply chain cost optimization", description: "Renegotiate vendor contracts and standardize formularies.", objectiveId: "obj-3", ownerId: "u-marcus-reyes", department: "Finance", budget: 300000, spent: 140000, status: "on-track", priority: "critical", deadline: "2026-03-31", startDate: "2025-06-01", kpis: ["Cost per case", "Vendor savings"], progress: 62, milestones: [{ id: "m-301-1", name: "Vendor analysis", date: "2025-10-31", status: "done" }, { id: "m-301-2", name: "Contract renegotiation", date: "2026-01-31", status: "in-progress" }], comments: [] },
  { id: "ini-302", name: "Ambulatory revenue growth program", description: "Expand same-day access and add 4 outpatient service lines.", objectiveId: "obj-3", ownerId: "u-marcus-reyes", department: "Finance", budget: 2100000, spent: 1650000, status: "on-track", priority: "high", deadline: "2026-05-31", startDate: "2025-04-01", kpis: ["Ambulatory revenue", "New patients"], progress: 76, milestones: [{ id: "m-302-1", name: "3 lines launched", date: "2025-12-31", status: "done" }, { id: "m-302-2", name: "4th line launch", date: "2026-05-31", status: "upcoming" }], comments: [] },
  { id: "ini-303", name: "Revenue cycle automation", description: "Automate claims follow-up and prior authorization workflows.", objectiveId: "obj-3", ownerId: "u-marcus-reyes", department: "Finance", budget: 760000, spent: 520000, status: "at-risk", priority: "high", deadline: "2026-04-30", startDate: "2025-07-01", kpis: ["Days in AR", "Denial rate"], progress: 45, milestones: [{ id: "m-303-1", name: "Workflow mapping", date: "2025-11-30", status: "done" }, { id: "m-303-2", name: "Automation go-live", date: "2026-02-28", status: "in-progress" }], comments: [{ id: "c-303-1", authorId: "u-marcus-reyes", text: "Denial rate still above target — escalating with payer.", createdAt: "2025-11-08T16:00:00Z" }] },
  // Objective 4 — Workforce
  { id: "ini-401", name: "Nurse residency expansion", description: "Double residency seats to improve new-grad retention.", objectiveId: "obj-4", ownerId: "u-emma-kowalski", department: "People & Culture", budget: 980000, spent: 640000, status: "on-track", priority: "high", deadline: "2026-05-31", startDate: "2025-02-15", kpis: ["Residency seats", "1-year retention"], progress: 66, milestones: [{ id: "m-401-1", name: "Curriculum update", date: "2025-09-30", status: "done" }, { id: "m-401-2", name: "Cohort 2 intake", date: "2026-01-15", status: "in-progress" }], comments: [] },
  { id: "ini-402", name: "Flexible scheduling pilot", description: "Pilot self-scheduling and gig-shift model in 3 departments.", objectiveId: "obj-4", ownerId: "u-emma-kowalski", department: "People & Culture", budget: 240000, spent: 158000, status: "on-track", priority: "medium", deadline: "2026-03-31", startDate: "2025-08-01", kpis: ["Staff satisfaction", "Overtime hours"], progress: 58, milestones: [{ id: "m-402-1", name: "Pilot design", date: "2025-11-30", status: "done" }, { id: "m-402-2", name: "Pilot go-live", date: "2026-01-31", status: "upcoming" }], comments: [] },
  { id: "ini-403", name: "Leadership development academy", description: "Run a 12-month internal leadership development cohort.", objectiveId: "obj-4", ownerId: "u-emma-kowalski", department: "People & Culture", budget: 420000, spent: 310000, status: "on-track", priority: "medium", deadline: "2026-06-30", startDate: "2025-03-01", kpis: ["Graduates", "Internal fill rate"], progress: 72, milestones: [{ id: "m-403-1", name: "Cohort 1 mid-point", date: "2025-12-31", status: "in-progress" }], comments: [] },
  { id: "ini-404", name: "Total rewards redesign", description: "Revamp compensation bands and wellbeing benefits.", objectiveId: "obj-4", ownerId: "u-emma-kowalski", department: "People & Culture", budget: 180000, spent: 96000, status: "on-track", priority: "low", deadline: "2026-02-28", startDate: "2025-09-01", kpis: ["Market competitiveness"], progress: 55, milestones: [{ id: "m-404-1", name: "Market study", date: "2025-12-31", status: "in-progress" }], comments: [] },
  // Objective 5 — Patient experience
  { id: "ini-501", name: "Wait time reduction program", description: "Implement real-time scheduling and flow optimization.", objectiveId: "obj-5", ownerId: "u-noah-bennett", department: "Patient Experience", budget: 350000, spent: 262000, status: "on-track", priority: "high", deadline: "2026-03-15", startDate: "2025-05-01", kpis: ["Avg wait time", "Left without being seen"], progress: 61, milestones: [{ id: "m-501-1", name: "Flow analysis", date: "2025-10-31", status: "done" }, { id: "m-501-2", name: "New scheduling model", date: "2026-01-31", status: "in-progress" }], comments: [] },
  { id: "ini-502", name: "Self-scheduling enablement", description: "Enable online self-scheduling for 90% of appointment types.", objectiveId: "obj-5", ownerId: "u-liam-okafor", department: "Digital Health", budget: 610000, spent: 430000, status: "on-track", priority: "medium", deadline: "2026-02-28", startDate: "2025-06-01", kpis: ["Self-scheduling rate"], progress: 70, milestones: [{ id: "m-502-1", name: "Core specialties live", date: "2025-12-31", status: "in-progress" }], comments: [] },
  { id: "ini-503", name: "Digital check-in rollout", description: "Deploy mobile check-in and queue notification across clinics.", objectiveId: "obj-5", ownerId: "u-liam-okafor", department: "Digital Health", budget: 280000, spent: 205000, status: "on-track", priority: "low", deadline: "2026-04-30", startDate: "2025-07-15", kpis: ["Digital check-in adoption"], progress: 74, milestones: [{ id: "m-503-1", name: "5 clinics live", date: "2025-12-31", status: "in-progress" }], comments: [] },
  // Objective 6 — Community
  { id: "ini-601", name: "Community health needs assessment", description: "Comprehensive resident survey and town hall series.", objectiveId: "obj-6", ownerId: "u-ava-chen", department: "Executive", budget: 220000, spent: 178000, status: "on-track", priority: "high", deadline: "2026-01-31", startDate: "2025-08-01", kpis: ["Survey responses", "Town halls held"], progress: 88, milestones: [{ id: "m-601-1", name: "Survey closed", date: "2025-12-15", status: "in-progress" }, { id: "m-601-2", name: "Findings report", date: "2026-01-31", status: "upcoming" }], comments: [] },
  { id: "ini-602", name: "Community partnership MOUs", description: "Formalize partnerships with schools, faith groups and NGOs.", objectiveId: "obj-6", ownerId: "u-ava-chen", department: "Executive", budget: 60000, spent: 42000, status: "on-track", priority: "medium", deadline: "2026-03-31", startDate: "2025-09-01", kpis: ["Active MOUs"], progress: 62, milestones: [{ id: "m-602-1", name: "5 MOUs signed", date: "2025-12-31", status: "done" }, { id: "m-602-2", name: "3 more MOUs", date: "2026-03-31", status: "upcoming" }], comments: [] },
  // Objective 7 — Risk
  { id: "ini-701", name: "Cyber resilience program", description: "Harden infrastructure and run continuous threat monitoring.", objectiveId: "obj-7", ownerId: "u-lucas-fischer", department: "Information Technology", budget: 1800000, spent: 1220000, status: "at-risk", priority: "critical", deadline: "2026-05-31", startDate: "2025-04-01", kpis: ["Patch compliance", "Phishing click rate"], progress: 52, milestones: [{ id: "m-701-1", name: "Zero-trust rollout", date: "2026-01-31", status: "in-progress" }], comments: [{ id: "c-701-1", authorId: "u-olivia-turner", text: "Ransomware risk elevated — board review requested.", createdAt: "2025-11-11T08:00:00Z" }] },
  { id: "ini-702", name: "Regulatory compliance automation", description: "Automate HIPAA and state reporting workflows.", objectiveId: "obj-7", ownerId: "u-olivia-turner", department: "Enterprise Risk", budget: 380000, spent: 296000, status: "on-track", priority: "high", deadline: "2026-02-28", startDate: "2025-06-01", kpis: ["Compliance findings"], progress: 78, milestones: [{ id: "m-702-1", name: "Reporting automation", date: "2025-12-31", status: "in-progress" }], comments: [] },
  { id: "ini-703", name: "Business continuity exercises", description: "Run network-wide disaster recovery and continuity drills.", objectiveId: "obj-7", ownerId: "u-lucas-fischer", department: "Information Technology", budget: 150000, spent: 92000, status: "on-track", priority: "medium", deadline: "2026-03-31", startDate: "2025-10-01", kpis: ["Drill completion", "RTO met"], progress: 40, milestones: [{ id: "m-703-1", name: "Tabletop exercise", date: "2025-12-31", status: "upcoming" }], comments: [] },
  // Objective 8 — Growth
  { id: "ini-801", name: "Ambulatory center B construction", description: "Build and equip second ambulatory care center.", objectiveId: "obj-8", ownerId: "u-sofia-patel", department: "Clinical Operations", budget: 8500000, spent: 3100000, status: "behind", priority: "high", deadline: "2026-09-30", startDate: "2025-05-01", kpis: ["Construction progress", "Budget adherence"], progress: 35, milestones: [{ id: "m-801-1", name: "Permits approved", date: "2025-10-31", status: "done" }, { id: "m-801-2", name: "Foundation complete", date: "2026-02-28", status: "in-progress" }], comments: [{ id: "c-801-1", authorId: "u-sofia-patel", text: "Supply delays pushing timeline 6 weeks.", createdAt: "2025-11-09T13:00:00Z" }] },
  { id: "ini-802", name: "Pediatric specialty network", description: "Onboard pediatric specialties and referral agreements.", objectiveId: "obj-8", ownerId: "u-sofia-patel", department: "Clinical Operations", budget: 940000, spent: 610000, status: "on-track", priority: "medium", deadline: "2026-06-30", startDate: "2025-07-01", kpis: ["Specialties onboarded", "Referral volume"], progress: 56, milestones: [{ id: "m-802-1", name: "3 specialties live", date: "2025-12-31", status: "in-progress" }], comments: [] },
];

// Filler initiatives so the "42 active" figure holds
const fillerNames = [
  ["Perioperative efficiency program", "obj-1", "u-sofia-patel", "Clinical Operations"],
  ["Discharge optimization initiative", "obj-1", "u-ethan-morgan", "Clinical Operations"],
  ["Behavioral health integration", "obj-1", "u-sofia-patel", "Clinical Operations"],
  ["Chronic care management expansion", "obj-1", "u-noah-bennett", "Patient Experience"],
  ["Tele-ICU monitoring service", "obj-2", "u-liam-okafor", "Digital Health"],
  ["AI scheduling assistant", "obj-2", "u-liam-okafor", "Digital Health"],
  ["Interoperability data exchange", "obj-2", "u-lucas-fischer", "Information Technology"],
  ["Patient-generated health data pilot", "obj-2", "u-lucas-fischer", "Digital Health"],
  ["Denial prevention analytics", "obj-3", "u-marcus-reyes", "Finance"],
  ["Cost-per-case benchmarking", "obj-3", "u-marcus-reyes", "Finance"],
  ["Payer contract optimization", "obj-3", "u-marcus-reyes", "Finance"],
  ["Volunteer workforce program", "obj-4", "u-emma-kowalski", "People & Culture"],
  ["Wellbeing benefits expansion", "obj-4", "u-emma-kowalski", "People & Culture"],
  ["Succession planning framework", "obj-4", "u-emma-kowalski", "People & Culture"],
  ["Post-discharge follow-up calls", "obj-5", "u-noah-bennett", "Patient Experience"],
  ["Interpretation services expansion", "obj-5", "u-noah-bennett", "Patient Experience"],
  ["Patient advisory council", "obj-5", "u-noah-bennett", "Patient Experience"],
  ["School-based health partnerships", "obj-6", "u-ava-chen", "Executive"],
  ["Faith community health workers", "obj-6", "u-ava-chen", "Executive"],
  ["Supplier diversity program", "obj-6", "u-marcus-reyes", "Finance"],
  ["Vendor risk management program", "obj-7", "u-olivia-turner", "Enterprise Risk"],
  ["Patient safety incident review", "obj-7", "u-sofia-patel", "Clinical Operations"],
  ["Data privacy audit program", "obj-7", "u-lucas-fischer", "Information Technology"],
  ["Workforce surge contingency", "obj-7", "u-emma-kowalski", "People & Culture"],
  ["Urgent care center expansion", "obj-8", "u-sofia-patel", "Clinical Operations"],
  ["Home health service launch", "obj-8", "u-sofia-patel", "Clinical Operations"],
  ["Oncology day center build-out", "obj-8", "u-ethan-morgan", "Clinical Operations"],
  ["Radiology capacity upgrade", "obj-8", "u-ethan-morgan", "Clinical Operations"],
] as const;

let fillerSeq = 900;
for (const [name, objId, ownerId, department] of fillerNames) {
  const statuses: Initiative["status"][] = ["on-track", "on-track", "at-risk", "on-track", "not-started"];
  initiatives.push({
    id: `ini-${fillerSeq++}`,
    name,
    description: "Initiative contributing to the 2025 strategic plan.",
    objectiveId: objId as string,
    ownerId: ownerId as string,
    department: department as string,
    budget: Math.round((200000 + Math.random() * 1200000) / 10000) * 10000,
    spent: 0,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: Math.random() > 0.5 ? "high" : "medium",
    deadline: `2026-0${1 + Math.floor(Math.random() * 6)}-${10 + Math.floor(Math.random() * 18)}`,
    startDate: "2025-09-01",
    kpis: [],
    progress: Math.floor(Math.random() * 70) + 10,
    milestones: [],
    comments: [],
  });
}

export const kpis: Kpi[] = [
  { id: "kpi-1", name: "Operating Margin", unit: "%", target: 3.5, current: 2.1, baseline: 1.4, trend: "up", history: [{ month: "Jun", value: 1.2 }, { month: "Jul", value: 1.4 }, { month: "Aug", value: 1.6 }, { month: "Sep", value: 1.8 }, { month: "Oct", value: 1.9 }, { month: "Nov", value: 2.1 }] },
  { id: "kpi-2", name: "Patient Satisfaction (HCAHPS)", unit: "/5", target: 4.6, current: 4.3, baseline: 3.9, trend: "up", history: [{ month: "Jun", value: 4.0 }, { month: "Jul", value: 4.1 }, { month: "Aug", value: 4.1 }, { month: "Sep", value: 4.2 }, { month: "Oct", value: 4.2 }, { month: "Nov", value: 4.3 }] },
  { id: "kpi-3", name: "Voluntary Turnover", unit: "%", target: 12, current: 13.8, baseline: 18.2, trend: "down", history: [{ month: "Jun", value: 17.4 }, { month: "Jul", value: 16.8 }, { month: "Aug", value: 15.9 }, { month: "Sep", value: 15.1 }, { month: "Oct", value: 14.4 }, { month: "Nov", value: 13.8 }] },
  { id: "kpi-4", name: "Virtual Visits", unit: "k", target: 90, current: 66.5, baseline: 31, trend: "up", history: [{ month: "Jun", value: 41 }, { month: "Jul", value: 46 }, { month: "Aug", value: 51 }, { month: "Sep", value: 56 }, { month: "Oct", value: 61 }, { month: "Nov", value: 66.5 }] },
  { id: "kpi-5", name: "Falls with Injury", unit: "per 1k", target: 2.1, current: 2.4, baseline: 3.1, trend: "down", history: [{ month: "Jun", value: 2.9 }, { month: "Jul", value: 2.8 }, { month: "Aug", value: 2.7 }, { month: "Sep", value: 2.6 }, { month: "Oct", value: 2.5 }, { month: "Nov", value: 2.4 }] },
  { id: "kpi-6", name: "Employee Engagement", unit: "score", target: 88, current: 84, baseline: 76, trend: "up", history: [{ month: "Jun", value: 78 }, { month: "Jul", value: 79 }, { month: "Aug", value: 80 }, { month: "Sep", value: 82 }, { month: "Oct", value: 83 }, { month: "Nov", value: 84 }] },
  { id: "kpi-7", name: "Days in AR", unit: "days", target: 38, current: 44, baseline: 52, trend: "down", history: [{ month: "Jun", value: 51 }, { month: "Jul", value: 50 }, { month: "Aug", value: 48 }, { month: "Sep", value: 47 }, { month: "Oct", value: 45 }, { month: "Nov", value: 44 }] },
  { id: "kpi-8", name: "Avg ED Wait Time", unit: "min", target: 18, current: 24, baseline: 32, trend: "down", history: [{ month: "Jun", value: 31 }, { month: "Jul", value: 30 }, { month: "Aug", value: 28 }, { month: "Sep", value: 27 }, { month: "Oct", value: 25 }, { month: "Nov", value: 24 }] },
];

export const budgetLines: BudgetLine[] = [
  { category: "Clinical Operations", allocated: 18500000, spent: 13200000 },
  { category: "Digital Health", allocated: 6400000, spent: 5100000 },
  { category: "Information Technology", allocated: 5200000, spent: 3950000 },
  { category: "Finance & Admin", allocated: 3900000, spent: 2800000 },
  { category: "People & Culture", allocated: 2100000, spent: 1440000 },
  { category: "Patient Experience", allocated: 1700000, spent: 1180000 },
  { category: "Enterprise Risk", allocated: 1200000, spent: 740000 },
];

export const deadlines: Deadline[] = [
  { id: "dl-1", title: "Board report — Q4 draft due", dueDate: "2025-12-05", ownerId: "u-ava-chen", importance: "critical", type: "report" },
  { id: "dl-2", title: "Sepsis early warning ICU pilot", dueDate: "2025-12-15", ownerId: "u-liam-okafor", importance: "high", type: "milestone" },
  { id: "dl-3", title: "Community survey closes", dueDate: "2025-12-15", ownerId: "u-ava-chen", importance: "medium", type: "survey" },
  { id: "dl-4", title: "Quarterly risk review", dueDate: "2025-12-19", ownerId: "u-olivia-turner", importance: "high", type: "review" },
  { id: "dl-5", title: "Fall prevention network rollout", dueDate: "2025-12-31", ownerId: "u-sofia-patel", importance: "high", type: "milestone" },
  { id: "dl-6", title: "Total rewards market study", dueDate: "2025-12-31", ownerId: "u-emma-kowalski", importance: "low", type: "milestone" },
  { id: "dl-7", title: "Compliance reporting automation", dueDate: "2025-12-31", ownerId: "u-olivia-turner", importance: "medium", type: "milestone" },
];

export function getObjective(id: string): Objective | undefined {
  return objectives.find((o) => o.id === id);
}

export function activeInitiatives(): Initiative[] {
  return initiatives.filter((i) => i.status !== "completed");
}
