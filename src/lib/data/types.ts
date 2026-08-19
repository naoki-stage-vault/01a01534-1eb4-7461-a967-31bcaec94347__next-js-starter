export type Status = "on-track" | "at-risk" | "behind" | "completed" | "not-started" | "paused";
export type Priority = "critical" | "high" | "medium" | "low";
export type RiskLikelihood = 1 | 2 | 3 | 4 | 5;
export type RiskImpact = 1 | 2 | 3 | 4 | 5;
export type RiskStatus = "open" | "mitigating" | "monitoring" | "closed";
export type Trend = "up" | "down" | "flat";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatarColor: string;
  title: string;
}

export interface Organization {
  id: string;
  name: string;
  industry: string;
  employees: number;
  plan: string;
  status: "active" | "trial";
  color: string;
  initials: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  leadId: string;
}

export interface Department {
  id: string;
  name: string;
  headId: string;
  budget: number;
  headcount: number;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  memberCount: number;
}

export interface Kpi {
  id: string;
  name: string;
  unit: string;
  target: number;
  current: number;
  baseline: number;
  trend: Trend;
  history: { month: string; value: number }[];
}

export interface Objective {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  department: string;
  progress: number;
  status: Status;
  priority: Priority;
  category: string;
  goals: Goal[];
}

export interface Goal {
  id: string;
  name: string;
  objectiveId: string;
  progress: number;
  ownerId: string;
  keyResults: KeyResult[];
}

export interface KeyResult {
  id: string;
  name: string;
  goalId: string;
  target: number;
  current: number;
  unit: string;
  progress: number;
  ownerId: string;
}

export interface Initiative {
  id: string;
  name: string;
  description: string;
  objectiveId: string;
  ownerId: string;
  department: string;
  budget: number;
  spent: number;
  status: Status;
  priority: Priority;
  deadline: string;
  startDate: string;
  kpis: string[];
  progress: number;
  milestones: Milestone[];
  comments: Comment[];
}

export interface Milestone {
  id: string;
  name: string;
  date: string;
  status: "done" | "in-progress" | "upcoming" | "missed";
}

export interface Comment {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  category: string;
  likelihood: RiskLikelihood;
  impact: RiskImpact;
  status: RiskStatus;
  objectiveId: string;
  trend: Trend;
  mitigation: string[];
  identifiedAt: string;
}

export interface SurveyQuestion {
  id: string;
  type: "single" | "multiple" | "scale" | "text";
  title: string;
  options?: string[];
  required: boolean;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  status: "draft" | "published" | "closed";
  audience: string;
  responses: number;
  targetResponses: number;
  sentAt: string;
  dueDate: string;
  questions: SurveyQuestion[];
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  respondent: string;
  department: string;
  submittedAt: string;
  answers: Record<string, string | string[] | number>;
  sentiment: "positive" | "neutral" | "negative";
}

export interface InterviewMessage {
  id: string;
  speaker: "interviewer" | "stakeholder";
  name: string;
  text: string;
  time: string;
}

export interface Interview {
  id: string;
  title: string;
  stakeholder: string;
  role: string;
  date: string;
  duration: string;
  status: "transcribed" | "summarized" | "draft";
  transcript: InterviewMessage[];
  summary: string;
  themes: { name: string; count: number; sentiment: "positive" | "neutral" | "negative" }[];
  tags: string[];
}

export type SwotQuadrant = "strengths" | "weaknesses" | "opportunities" | "threats";

export interface SwotCard {
  id: string;
  quadrant: SwotQuadrant;
  text: string;
  source: string;
  weight: number;
}

export interface BudgetLine {
  category: string;
  allocated: number;
  spent: number;
}

export interface Deadline {
  id: string;
  title: string;
  dueDate: string;
  ownerId: string;
  importance: Priority;
  type: "milestone" | "report" | "survey" | "review";
}

export interface ActivityItem {
  id: string;
  actorId: string;
  action: string;
  target: string;
  targetType: string;
  createdAt: string;
  icon?: string;
}

export interface Notification {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  read: boolean;
  type: "alert" | "mention" | "update" | "deadline" | "system";
}

export interface AiInsight {
  id: string;
  title: string;
  body: string;
  severity: "info" | "warning" | "success" | "danger";
  category: string;
}

export interface AiMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  citations?: { title: string; source: string }[];
}

export interface AiConversation {
  id: string;
  title: string;
  messages: AiMessage[];
  updatedAt: string;
}

export interface KpiTrendPoint {
  month: string;
  value: number;
}

export interface ReportSection {
  title: string;
  body: string;
}

export interface Report {
  id: string;
  title: string;
  type: "board" | "quarterly" | "executive" | "department";
  department?: string;
  period: string;
  status: "draft" | "review" | "published";
  updatedAt: string;
  preparedBy: string;
  sections: ReportSection[];
  highlights: { label: string; value: string; trend: Trend }[];
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "connected" | "available" | "coming-soon";
  color: string;
}

export interface PlanVersion {
  id: string;
  version: string;
  author: string;
  date: string;
  note: string;
}
