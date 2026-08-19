import type { Organization, User, Team, Department, Role } from "./types";

export const organizations: Organization[] = [
  {
    id: "org-horizon-health",
    name: "Horizon Health Network",
    industry: "Healthcare",
    employees: 4200,
    plan: "Enterprise",
    status: "active",
    color: "bg-blue-600",
    initials: "HH",
  },
  {
    id: "org-greenfuture",
    name: "GreenFuture Foundation",
    industry: "Nonprofit",
    employees: 340,
    plan: "Business",
    status: "active",
    color: "bg-emerald-600",
    initials: "GF",
  },
  {
    id: "org-brightpath",
    name: "BrightPath Education",
    industry: "Education",
    employees: 890,
    plan: "Business",
    status: "active",
    color: "bg-amber-500",
    initials: "BP",
  },
  {
    id: "org-northstar",
    name: "NorthStar Manufacturing",
    industry: "Manufacturing",
    employees: 2500,
    plan: "Enterprise",
    status: "active",
    color: "bg-slate-700",
    initials: "NS",
  },
  {
    id: "org-community-impact",
    name: "Community Impact Alliance",
    industry: "Nonprofit",
    employees: 120,
    plan: "Starter",
    status: "trial",
    color: "bg-violet-600",
    initials: "CI",
  },
];

export const users: User[] = [
  {
    id: "u-ava-chen",
    name: "Ava Chen",
    email: "ava.chen@horizonhealth.org",
    role: "Chief Strategy Officer",
    department: "Executive",
    avatarColor: "bg-blue-600",
    title: "CSO",
  },
  {
    id: "u-marcus-reyes",
    name: "Marcus Reyes",
    email: "marcus.reyes@horizonhealth.org",
    role: "Chief Financial Officer",
    department: "Finance",
    avatarColor: "bg-emerald-600",
    title: "CFO",
  },
  {
    id: "u-sofia-patel",
    name: "Sofia Patel",
    email: "sofia.patel@horizonhealth.org",
    role: "Director of Clinical Operations",
    department: "Clinical Operations",
    avatarColor: "bg-violet-600",
    title: "Director",
  },
  {
    id: "u-liam-okafor",
    name: "Liam Okafor",
    email: "liam.okafor@horizonhealth.org",
    role: "Head of Digital Health",
    department: "Digital Health",
    avatarColor: "bg-amber-600",
    title: "Head",
  },
  {
    id: "u-emma-kowalski",
    name: "Emma Kowalski",
    email: "emma.kowalski@horizonhealth.org",
    role: "Head of People & Culture",
    department: "People & Culture",
    avatarColor: "bg-rose-600",
    title: "Head",
  },
  {
    id: "u-noah-bennett",
    name: "Noah Bennett",
    email: "noah.bennett@horizonhealth.org",
    role: "Director of Patient Experience",
    department: "Patient Experience",
    avatarColor: "bg-cyan-600",
    title: "Director",
  },
  {
    id: "u-isa-garcia",
    name: "Isa Garcia",
    email: "isa.garcia@horizonhealth.org",
    role: "Strategy Analyst",
    department: "Strategy Office",
    avatarColor: "bg-indigo-600",
    title: "Analyst",
  },
  {
    id: "u-ethan-morgan",
    name: "Ethan Morgan",
    email: "ethan.morgan@horizonhealth.org",
    role: "Program Manager, Care Transformation",
    department: "Clinical Operations",
    avatarColor: "bg-teal-600",
    title: "Program Manager",
  },
  {
    id: "u-olivia-turner",
    name: "Olivia Turner",
    email: "olivia.turner@horizonhealth.org",
    role: "Risk & Compliance Officer",
    department: "Enterprise Risk",
    avatarColor: "bg-orange-600",
    title: "Officer",
  },
  {
    id: "u-lucas-fischer",
    name: "Lucas Fischer",
    email: "lucas.fischer@horizonhealth.org",
    role: "IT Director",
    department: "Information Technology",
    avatarColor: "bg-slate-600",
    title: "Director",
  },
];

export const teams: Team[] = [
  {
    id: "team-exec",
    name: "Executive Leadership",
    description: "C-suite and executive sponsors for the strategic plan.",
    memberCount: 8,
    leadId: "u-ava-chen",
  },
  {
    id: "team-strategy",
    name: "Strategy Office",
    description: "Owns planning cadence, reporting and initiative governance.",
    memberCount: 5,
    leadId: "u-ava-chen",
  },
  {
    id: "team-clinical",
    name: "Clinical Transformation",
    description: "Cross-functional group driving care delivery initiatives.",
    memberCount: 14,
    leadId: "u-sofia-patel",
  },
  {
    id: "team-digital",
    name: "Digital Health",
    description: "Product and engineering for patient-facing digital services.",
    memberCount: 11,
    leadId: "u-liam-okafor",
  },
  {
    id: "team-people",
    name: "People & Culture",
    description: "Workforce, engagement and leadership development.",
    memberCount: 6,
    leadId: "u-emma-kowalski",
  },
  {
    id: "team-risk",
    name: "Enterprise Risk",
    description: "Risk identification, scoring and mitigation governance.",
    memberCount: 4,
    leadId: "u-olivia-turner",
  },
];

export const departments: Department[] = [
  { id: "dep-exec", name: "Executive", headId: "u-ava-chen", budget: 2500000, headcount: 12 },
  { id: "dep-clinical", name: "Clinical Operations", headId: "u-sofia-patel", budget: 18500000, headcount: 1800 },
  { id: "dep-digital", name: "Digital Health", headId: "u-liam-okafor", budget: 6400000, headcount: 85 },
  { id: "dep-people", name: "People & Culture", headId: "u-emma-kowalski", budget: 2100000, headcount: 24 },
  { id: "dep-patient", name: "Patient Experience", headId: "u-noah-bennett", budget: 1700000, headcount: 60 },
  { id: "dep-finance", name: "Finance", headId: "u-marcus-reyes", budget: 3900000, headcount: 42 },
  { id: "dep-risk", name: "Enterprise Risk", headId: "u-olivia-turner", budget: 1200000, headcount: 18 },
  { id: "dep-it", name: "Information Technology", headId: "u-lucas-fischer", budget: 5200000, headcount: 96 },
];

export const roles: Role[] = [
  {
    id: "role-admin",
    name: "Administrator",
    description: "Full access to settings, billing and all workspaces.",
    permissions: ["manage_org", "manage_users", "manage_billing", "edit_plan", "manage_risk", "publish_reports"],
    memberCount: 3,
  },
  {
    id: "role-strategist",
    name: "Strategist",
    description: "Create and edit objectives, initiatives and surveys.",
    permissions: ["edit_plan", "manage_initiatives", "create_surveys", "manage_risk"],
    memberCount: 12,
  },
  {
    id: "role-leader",
    name: "Team Leader",
    description: "Manage initiatives and review progress in their department.",
    permissions: ["manage_initiatives", "view_reports", "update_progress"],
    memberCount: 28,
  },
  {
    id: "role-contributor",
    name: "Contributor",
    description: "View strategy, update tasks and respond to surveys.",
    permissions: ["view_plan", "update_progress", "respond_surveys"],
    memberCount: 214,
  },
  {
    id: "role-viewer",
    name: "Board Viewer",
    description: "Read-only access to reports and dashboards.",
    permissions: ["view_dashboards", "view_reports"],
    memberCount: 11,
  },
];

export const currentUser = users[0];

export function getUser(id: string): User {
  return users.find((u) => u.id === id) ?? users[0];
}

export function getOrg(id: string): Organization {
  return organizations.find((o) => o.id === id) ?? organizations[0];
}
