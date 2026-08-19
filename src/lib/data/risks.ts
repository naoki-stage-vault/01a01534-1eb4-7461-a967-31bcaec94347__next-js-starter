import type { Risk } from "./types";

export const riskCategories = [
  "Cybersecurity",
  "Clinical Safety",
  "Financial",
  "Regulatory",
  "Operational",
  "Workforce",
  "Reputational",
  "Supply Chain",
];

export const risks: Risk[] = [
  {
    id: "risk-1",
    title: "Ransomware attack on clinical systems",
    description:
      "A successful ransomware attack could disrupt EHR access and patient care delivery across the network.",
    ownerId: "u-lucas-fischer",
    category: "Cybersecurity",
    likelihood: 4,
    impact: 5,
    status: "mitigating",
    objectiveId: "obj-7",
    trend: "up",
    identifiedAt: "2025-02-14",
    mitigation: [
      "Zero-trust architecture rollout by Q2",
      "Air-gapped backups verified weekly",
      "Quarterly red-team exercises",
      "Cyber insurance coverage review",
    ],
  },
  {
    id: "risk-2",
    title: "Clinical staffing shortage",
    description:
      "Persistent nursing shortages could lead to care delays, safety events and increased agency spend.",
    ownerId: "u-emma-kowalski",
    category: "Workforce",
    likelihood: 5,
    impact: 4,
    status: "mitigating",
    objectiveId: "obj-4",
    trend: "down",
    identifiedAt: "2025-01-20",
    mitigation: [
      "Nurse residency expansion",
      "Market-adjusted pay bands",
      "Flexible scheduling pilot",
      "Agency spend cap review",
    ],
  },
  {
    id: "risk-3",
    title: "Operating margin below board target",
    description:
      "Margins remain below the 3.5% target, limiting capital for strategic investment.",
    ownerId: "u-marcus-reyes",
    category: "Financial",
    likelihood: 4,
    impact: 4,
    status: "mitigating",
    objectiveId: "obj-3",
    trend: "up",
    identifiedAt: "2025-03-05",
    mitigation: [
      "Supply chain cost optimization",
      "Revenue cycle automation",
      "Payer contract renegotiation",
      "Monthly margin review cadence",
    ],
  },
  {
    id: "risk-4",
    title: "AI documentation vendor integration delay",
    description:
      "EHR integration delays for ambient documentation could push go-live past budget cycle.",
    ownerId: "u-lucas-fischer",
    category: "Operational",
    likelihood: 3,
    impact: 3,
    status: "monitoring",
    objectiveId: "obj-2",
    trend: "flat",
    identifiedAt: "2025-08-11",
    mitigation: ["Weekly vendor escalation", "API contract verification", "Fallback documentation workflow"],
  },
  {
    id: "risk-5",
    title: "HIPAA compliance gap in new digital services",
    description:
      "Rapid digital rollout increases risk of privacy compliance findings in audit.",
    ownerId: "u-olivia-turner",
    category: "Regulatory",
    likelihood: 3,
    impact: 4,
    status: "open",
    objectiveId: "obj-7",
    trend: "flat",
    identifiedAt: "2025-06-18",
    mitigation: ["Compliance automation rollout", "Third-party privacy audit", "Staff training refresh"],
  },
  {
    id: "risk-6",
    title: "Construction delays — Ambulatory Center B",
    description:
      "Material supply delays threaten the Q3 2026 opening and committed revenue forecasts.",
    ownerId: "u-sofia-patel",
    category: "Operational",
    likelihood: 4,
    impact: 3,
    status: "mitigating",
    objectiveId: "obj-8",
    trend: "up",
    identifiedAt: "2025-09-02",
    mitigation: ["Alternate supplier agreements", "Phased opening plan", "Weekly construction steering"],
  },
  {
    id: "risk-7",
    title: "Community trust erosion after data incident",
    description:
      "Public perception risk from any privacy event could undermine community partnerships.",
    ownerId: "u-ava-chen",
    category: "Reputational",
    likelihood: 2,
    impact: 5,
    status: "monitoring",
    objectiveId: "obj-6",
    trend: "flat",
    identifiedAt: "2025-04-22",
    mitigation: ["Communications playbook", "Transparency reporting", "Stakeholder engagement cadence"],
  },
  {
    id: "risk-8",
    title: "Single-source medical supply dependency",
    description:
      "Concentration on few suppliers exposes the network to backorders and price spikes.",
    ownerId: "u-marcus-reyes",
    category: "Supply Chain",
    likelihood: 3,
    impact: 3,
    status: "open",
    objectiveId: "obj-3",
    trend: "up",
    identifiedAt: "2025-05-30",
    mitigation: ["Dual-sourcing strategy", "Safety stock policy", "Quarterly supplier scorecards"],
  },
  {
    id: "risk-9",
    title: "Physician burnout from documentation burden",
    description:
      "Documentation workload is a leading driver of clinician attrition and safety risk.",
    ownerId: "u-sofia-patel",
    category: "Clinical Safety",
    likelihood: 4,
    impact: 3,
    status: "mitigating",
    objectiveId: "obj-1",
    trend: "down",
    identifiedAt: "2025-02-27",
    mitigation: ["Ambient documentation pilot", "Scribe support program", "Survey-driven workload review"],
  },
  {
    id: "risk-10",
    title: "Payer reimbursement policy changes",
    description:
      "Medicaid rate changes could reduce reimbursement for key ambulatory services.",
    ownerId: "u-marcus-reyes",
    category: "Financial",
    likelihood: 3,
    impact: 4,
    status: "monitoring",
    objectiveId: "obj-3",
    trend: "flat",
    identifiedAt: "2025-07-14",
    mitigation: ["Payer advocacy engagement", "Revenue mix diversification", "Scenario modeling"],
  },
  {
    id: "risk-11",
    title: "Legacy EHR end-of-life",
    description:
      "End-of-life infrastructure in two clinics creates stability and security exposure.",
    ownerId: "u-lucas-fischer",
    category: "Operational",
    likelihood: 2,
    impact: 4,
    status: "open",
    objectiveId: "obj-2",
    trend: "down",
    identifiedAt: "2025-06-02",
    mitigation: ["Migration runbook", "Frozen-change policy", "Budget contingency"],
  },
  {
    id: "risk-12",
    title: "Severe weather continuity gap",
    description:
      "Regional storm risk could strand staff and interrupt critical services.",
    ownerId: "u-lucas-fischer",
    category: "Operational",
    likelihood: 3,
    impact: 3,
    status: "closed",
    objectiveId: "obj-7",
    trend: "down",
    identifiedAt: "2025-01-10",
    mitigation: ["Continuity drills completed", "Backup site agreements", "Staff comms system verified"],
  },
];

export function riskScore(likelihood: number, impact: number) {
  return likelihood * impact;
}

export function riskSeverity(score: number): "low" | "medium" | "high" | "critical" {
  if (score >= 20) return "critical";
  if (score >= 12) return "high";
  if (score >= 6) return "medium";
  return "low";
}
