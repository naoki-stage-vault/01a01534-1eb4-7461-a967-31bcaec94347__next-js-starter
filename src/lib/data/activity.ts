import type { ActivityItem, Notification, Integration } from "./types";

export const activityItems: ActivityItem[] = [
  { id: "act-1", actorId: "u-sofia-patel", action: "updated progress on", target: "Fall prevention bundle rollout", targetType: "initiative", createdAt: "2025-11-14T09:42:00Z", icon: "progress" },
  { id: "act-2", actorId: "u-ava-chen", action: "commented on", target: "Ambulatory Center B construction", targetType: "initiative", createdAt: "2025-11-14T08:15:00Z", icon: "comment" },
  { id: "act-3", actorId: "u-olivia-turner", action: "updated risk score for", target: "Ransomware attack on clinical systems", targetType: "risk", createdAt: "2025-11-13T17:30:00Z", icon: "risk" },
  { id: "act-4", actorId: "u-liam-okafor", action: "added a milestone to", target: "Sepsis early warning system", targetType: "initiative", createdAt: "2025-11-13T15:10:00Z", icon: "milestone" },
  { id: "act-5", actorId: "u-emma-kowalski", action: "published", target: "Employee Engagement Pulse", targetType: "survey", createdAt: "2025-11-13T11:45:00Z", icon: "survey" },
  { id: "act-6", actorId: "u-marcus-reyes", action: "approved budget for", target: "Supply chain cost optimization", targetType: "initiative", createdAt: "2025-11-12T16:20:00Z", icon: "budget" },
  { id: "act-7", actorId: "u-noah-bennett", action: "closed", target: "Patient Experience — Digital Check-in", targetType: "survey", createdAt: "2025-11-12T10:05:00Z", icon: "survey" },
  { id: "act-8", actorId: "u-ava-chen", action: "updated the strategic plan", target: "Horizon Health Network 2025 Strategic Plan", targetType: "plan", createdAt: "2025-11-12T09:00:00Z", icon: "plan" },
];

export const notifications: Notification[] = [
  {
    id: "ntf-1",
    title: "Risk threshold exceeded",
    body: "Ransomware risk score is 20/25 — above board appetite. Mitigation plan is 58% complete.",
    createdAt: "2025-11-14T07:30:00Z",
    read: false,
    type: "alert",
  },
  {
    id: "ntf-2",
    title: "Mentioned by Sofia Patel",
    body: "Sofia mentioned you on 'Sepsis early warning system': please review the ICU pilot gating criteria.",
    createdAt: "2025-11-13T16:45:00Z",
    read: false,
    type: "mention",
  },
  {
    id: "ntf-3",
    title: "Milestone approaching",
    body: "Board report — Q4 draft is due Dec 5. Owner: Ava Chen.",
    createdAt: "2025-11-13T09:00:00Z",
    read: false,
    type: "deadline",
  },
  {
    id: "ntf-4",
    title: "Survey reached 88% target",
    body: "Community Health Needs Assessment has 4,380 of 5,000 responses.",
    createdAt: "2025-11-12T14:20:00Z",
    read: true,
    type: "update",
  },
  {
    id: "ntf-5",
    title: "New AI insight available",
    body: "AI identified a margin trajectory risk — review in AI Advisor.",
    createdAt: "2025-11-12T08:00:00Z",
    read: true,
    type: "system",
  },
  {
    id: "ntf-6",
    title: "Plan version published",
    body: "v3.2 published by Isa Garcia with mid-year KPI recalibration.",
    createdAt: "2025-11-11T17:10:00Z",
    read: true,
    type: "update",
  },
];

export const integrations: Integration[] = [
  { id: "int-1", name: "Microsoft Teams", description: "Post initiative updates and reports to channels.", category: "Collaboration", status: "connected", color: "bg-blue-600" },
  { id: "int-2", name: "Slack", description: "Send milestone reminders and risk alerts.", category: "Collaboration", status: "connected", color: "bg-fuchsia-600" },
  { id: "int-3", name: "Power BI", description: "Sync KPI data for advanced analytics.", category: "Analytics", status: "connected", color: "bg-amber-500" },
  { id: "int-4", name: "ServiceNow", description: "Two-way risk and issue sync.", category: "ITSM", status: "available", color: "bg-emerald-600" },
  { id: "int-5", name: "Workday", description: "Import headcount and workforce KPIs.", category: "HR", status: "available", color: "bg-orange-600" },
  { id: "int-6", name: "Salesforce Health Cloud", description: "Patient access and CRM integration.", category: "CRM", status: "coming-soon", color: "bg-cyan-600" },
  { id: "int-7", name: "SAP Concur", description: "Travel and expense visibility for initiatives.", category: "Finance", status: "available", color: "bg-violet-600" },
  { id: "int-8", name: "Outlook Calendar", description: "Sync milestones and deadlines to calendars.", category: "Collaboration", status: "connected", color: "bg-sky-600" },
];

export const billingPlan = {
  plan: "Enterprise",
  seats: 180,
  pricePerSeat: 42,
  billingCycle: "annual",
  renewalDate: "2026-04-30",
  invoices: [
    { id: "INV-2025-04", date: "2025-04-30", amount: 90720, status: "paid" },
    { id: "INV-2025-07", date: "2025-07-30", amount: 90720, status: "paid" },
    { id: "INV-2025-10", date: "2025-10-30", amount: 90720, status: "paid" },
  ],
  paymentMethod: { brand: "Visa", last4: "4242", exp: "08/28" },
};
