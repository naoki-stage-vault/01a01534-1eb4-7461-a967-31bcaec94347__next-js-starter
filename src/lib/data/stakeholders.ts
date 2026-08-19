import type { Survey, SurveyResponse, Interview, SwotCard, SwotQuadrant } from "./types";

export const surveys: Survey[] = [
  {
    id: "survey-1",
    title: "Community Health Needs Assessment",
    description:
      "Annual survey capturing health priorities, access barriers and wellbeing signals from residents across the region.",
    status: "published",
    audience: "Community residents (12 counties)",
    responses: 4380,
    targetResponses: 5000,
    sentAt: "2025-10-01",
    dueDate: "2025-12-15",
    questions: [
      { id: "q-1-1", type: "single", title: "What is the biggest health challenge in your community?", options: ["Chronic disease", "Mental health", "Access to care", "Cost of care", "Healthy food access"], required: true },
      { id: "q-1-2", type: "scale", title: "How would you rate your ability to get a timely appointment?", required: true },
      { id: "q-1-3", type: "multiple", title: "Which services are hardest to access near you?", options: ["Primary care", "Specialty care", "Behavioral health", "Pharmacy", "Urgent care"], required: true },
      { id: "q-1-4", type: "text", title: "What would improve your health most over the next year?", required: false },
    ],
  },
  {
    id: "survey-2",
    title: "Employee Engagement Pulse",
    description:
      "Quarterly engagement pulse covering wellbeing, leadership and intent to stay.",
    status: "published",
    audience: "All 4,200 employees",
    responses: 2874,
    targetResponses: 3360,
    sentAt: "2025-11-03",
    dueDate: "2025-12-01",
    questions: [
      { id: "q-2-1", type: "scale", title: "I would recommend Horizon Health as a place to work.", required: true },
      { id: "q-2-2", type: "scale", title: "My manager supports my professional growth.", required: true },
      { id: "q-2-3", type: "single", title: "What is your primary reason for staying?", options: ["Mission", "Compensation", "Team culture", "Growth opportunities", "Flexibility"], required: true },
      { id: "q-2-4", type: "text", title: "What one change would most improve your experience?", required: false },
    ],
  },
  {
    id: "survey-3",
    title: "Patient Experience — Digital Check-in",
    description:
      "Friction survey for patients who used mobile check-in at outpatient clinics.",
    status: "closed",
    audience: "Patients at 5 pilot clinics",
    responses: 1240,
    targetResponses: 1500,
    sentAt: "2025-09-15",
    dueDate: "2025-10-31",
    questions: [
      { id: "q-3-1", type: "scale", title: "How easy was the check-in process?", required: true },
      { id: "q-3-2", type: "single", title: "How did you check in?", options: ["Mobile app", "In-person kiosk", "Front desk"], required: true },
      { id: "q-3-3", type: "text", title: "Anything that could be smoother?", required: false },
    ],
  },
  {
    id: "survey-4",
    title: "Physician Wellbeing Survey",
    description:
      "Confidential survey on burnout, documentation burden and support resources.",
    status: "draft",
    audience: "All medical staff (640 physicians)",
    responses: 0,
    targetResponses: 450,
    sentAt: "",
    dueDate: "2026-01-15",
    questions: [
      { id: "q-4-1", type: "scale", title: "How often do you feel burned out at work?", required: true },
      { id: "q-4-2", type: "multiple", title: "Which support resources would help most?", options: ["Scribe support", "Flexible scheduling", "Peer support groups", "Wellbeing coaching", "Reduced admin load"], required: true },
    ],
  },
];

export const surveyResponses: SurveyResponse[] = [
  { id: "sr-1", surveyId: "survey-1", respondent: "Resident — Riverside County", department: "Community", submittedAt: "2025-10-14", answers: { "q-1-1": "Access to care", "q-1-2": 3, "q-1-3": ["Specialty care", "Behavioral health"], "q-1-4": "More weekend clinic hours" }, sentiment: "negative" },
  { id: "sr-2", surveyId: "survey-1", respondent: "Resident — Lakewood", department: "Community", submittedAt: "2025-10-18", answers: { "q-1-1": "Mental health", "q-1-2": 4, "q-1-3": ["Behavioral health"], "q-1-4": "Easier to see a counselor" }, sentiment: "neutral" },
  { id: "sr-3", surveyId: "survey-1", respondent: "Resident — Fairview", department: "Community", submittedAt: "2025-10-22", answers: { "q-1-1": "Chronic disease", "q-1-2": 4, "q-1-3": ["Primary care"], "q-1-4": "" }, sentiment: "positive" },
  { id: "sr-4", surveyId: "survey-1", respondent: "Resident — Oakdale", department: "Community", submittedAt: "2025-10-29", answers: { "q-1-1": "Cost of care", "q-1-2": 2, "q-1-3": ["Specialty care", "Pharmacy"], "q-1-4": "Affordable medication options" }, sentiment: "negative" },
  { id: "sr-5", surveyId: "survey-1", respondent: "Resident — Millbrook", department: "Community", submittedAt: "2025-11-02", answers: { "q-1-1": "Healthy food access", "q-1-2": 3, "q-1-3": ["Primary care"], "q-1-4": "Community garden programs" }, sentiment: "neutral" },
  { id: "sr-6", surveyId: "survey-2", respondent: "Registered Nurse, Inpatient", department: "Clinical Operations", submittedAt: "2025-11-05", answers: { "q-2-1": 4, "q-2-2": 4, "q-2-3": "Mission", "q-2-4": "More support staff on weekends" }, sentiment: "positive" },
  { id: "sr-7", surveyId: "survey-2", respondent: "Lab Technician", department: "Clinical Operations", submittedAt: "2025-11-06", answers: { "q-2-1": 3, "q-2-2": 3, "q-2-3": "Team culture", "q-2-4": "Clearer growth paths" }, sentiment: "neutral" },
  { id: "sr-8", surveyId: "survey-2", respondent: "Digital Product Manager", department: "Digital Health", submittedAt: "2025-11-08", answers: { "q-2-1": 5, "q-2-2": 5, "q-2-3": "Growth opportunities", "q-2-4": "" }, sentiment: "positive" },
  { id: "sr-9", surveyId: "survey-2", respondent: "Patient Access Rep", department: "Finance", submittedAt: "2025-11-09", answers: { "q-2-1": 2, "q-2-2": 3, "q-2-3": "Flexibility", "q-2-4": "Better scheduling tools" }, sentiment: "negative" },
  { id: "sr-10", surveyId: "survey-3", respondent: "Patient — Fairview Clinic", department: "Outpatient", submittedAt: "2025-09-28", answers: { "q-3-1": 5, "q-3-2": "Mobile app", "q-3-3": "Loved it — no queue" }, sentiment: "positive" },
  { id: "sr-11", surveyId: "survey-3", respondent: "Patient — Lakewood Clinic", department: "Outpatient", submittedAt: "2025-10-03", answers: { "q-3-1": 2, "q-3-2": "In-person kiosk", "q-3-3": "Kiosk was slow to load" }, sentiment: "negative" },
];

export const interviews: Interview[] = [
  {
    id: "iv-1",
    title: "Executive interview — patient access",
    stakeholder: "Dr. Helena Marsh",
    role: "Chief Medical Officer",
    date: "2025-10-21",
    duration: "42 min",
    status: "summarized",
    transcript: [
      { id: "t-1", speaker: "interviewer", name: "Isa Garcia", text: "What is the single biggest barrier to patient access you see today?", time: "00:00" },
      { id: "t-2", speaker: "stakeholder", name: "Dr. Helena Marsh", text: "Specialty wait times. Patients wait six to nine weeks for cardiology or orthopedics. That drives them to urgent care and erodes trust.", time: "00:04" },
      { id: "t-3", speaker: "interviewer", name: "Isa Garcia", text: "What would change that most meaningfully?", time: "00:09" },
      { id: "t-4", speaker: "stakeholder", name: "Dr. Helena Marsh", text: "A centralized referral triage with nurse-led protocols, plus virtual-first slots for follow-ups. We proved it works in dermatology.", time: "00:12" },
      { id: "t-5", speaker: "interviewer", name: "Isa Garcia", text: "Any concerns about provider adoption?", time: "00:19" },
      { id: "t-6", speaker: "stakeholder", name: "Dr. Helena Marsh", text: "Adoption will follow if we cut documentation load first. Burnout is the real enemy of change right now.", time: "00:24" },
    ],
    summary:
      "Specialty wait times are the top access barrier. Dr. Marsh recommends a centralized referral triage model with nurse-led protocols and virtual-first follow-up slots, and stresses that clinician adoption depends on reducing documentation burden first. Dermatology is cited as a successful proof case.",
    themes: [
      { name: "Access & wait times", count: 4, sentiment: "negative" },
      { name: "Referral triage", count: 3, sentiment: "positive" },
      { name: "Virtual care", count: 2, sentiment: "positive" },
      { name: "Clinician burnout", count: 2, sentiment: "negative" },
    ],
    tags: ["access", "specialty care", "virtual-first", "burnout"],
  },
  {
    id: "iv-2",
    title: "Frontline nurse roundtable",
    stakeholder: "6 RNs — Inpatient units",
    role: "Registered Nurses",
    date: "2025-11-04",
    duration: "55 min",
    status: "transcribed",
    transcript: [
      { id: "t-7", speaker: "interviewer", name: "Emma Kowalski", text: "What makes a good shift feel good these days?", time: "00:00" },
      { id: "t-8", speaker: "stakeholder", name: "RN — Unit 4", text: "When we have charge support and the schedule holds. It's about predictability.", time: "00:03" },
      { id: "t-9", speaker: "stakeholder", name: "RN — Unit 2", text: "The new self-scheduling pilot is helping, but weekends are still short-staffed.", time: "00:08" },
      { id: "t-10", speaker: "interviewer", name: "Emma Kowalski", text: "What would keep you here for the next five years?", time: "00:15" },
      { id: "t-11", speaker: "stakeholder", name: "RN — ICU", text: "A clear ladder — clinical ladders that pay. And being consulted on changes before they land on us.", time: "00:20" },
    ],
    summary:
      "Nurses value schedule predictability and charge support. Self-scheduling is popular but weekend coverage remains a pain point. Retention drivers are clinical ladders, pay transparency and being consulted before operational changes.",
    themes: [
      { name: "Schedule predictability", count: 3, sentiment: "positive" },
      { name: "Weekend staffing", count: 2, sentiment: "negative" },
      { name: "Career ladders", count: 2, sentiment: "positive" },
      { name: "Change communication", count: 1, sentiment: "neutral" },
    ],
    tags: ["workforce", "retention", "scheduling", "clinical ladder"],
  },
  {
    id: "iv-3",
    title: "Board member check-in — digital strategy",
    stakeholder: "Dr. Peter Lindqvist",
    role: "Board Member, Finance Committee",
    date: "2025-11-11",
    duration: "30 min",
    status: "draft",
    transcript: [
      { id: "t-12", speaker: "interviewer", name: "Ava Chen", text: "How does the board view the digital investment pace?", time: "00:00" },
      { id: "t-13", speaker: "stakeholder", name: "Dr. Peter Lindqvist", text: "Supportive, but we need to see ROI evidence per program — especially on AI spend.", time: "00:02" },
      { id: "t-14", speaker: "interviewer", name: "Ava Chen", text: "What would strengthen the next board pack?", time: "00:08" },
      { id: "t-15", speaker: "stakeholder", name: "Dr. Peter Lindqvist", text: "A one-page scorecard: cost, adoption, clinical impact, and risks per initiative. Keep it to one page.", time: "00:12" },
    ],
    summary: "",
    themes: [],
    tags: ["board", "digital ROI", "reporting"],
  },
];

export const swotCards: SwotCard[] = [
  { id: "sw-1", quadrant: "strengths", text: "Strong regional brand and patient trust (top-quartile HCAHPS in 3 of 4 counties)", source: "Patient surveys", weight: 4 },
  { id: "sw-2", quadrant: "strengths", text: "Integrated EHR with mature data infrastructure", source: "IT assessment", weight: 3 },
  { id: "sw-3", quadrant: "strengths", text: "Deep specialist talent pool in cardiology and oncology", source: "Workforce data", weight: 3 },
  { id: "sw-4", quadrant: "strengths", text: "Successful virtual care pilot with 84% satisfaction", source: "Survey 3", weight: 2 },
  { id: "sw-5", quadrant: "weaknesses", text: "Specialty referral wait times of 6–9 weeks", source: "Executive interview", weight: 4 },
  { id: "sw-6", quadrant: "weaknesses", text: "Nursing vacancy rate of 11% with heavy agency reliance", source: "HR data", weight: 4 },
  { id: "sw-7", quadrant: "weaknesses", text: "Legacy infrastructure in 2 clinics reaching end-of-life", source: "IT roadmap", weight: 2 },
  { id: "sw-8", quadrant: "weaknesses", text: "Operating margin at 2.1% vs 3.5% target", source: "Finance", weight: 3 },
  { id: "sw-9", quadrant: "opportunities", text: "Medicare expansion for virtual chronic care management", source: "Policy scan", weight: 4 },
  { id: "sw-10", quadrant: "opportunities", text: "School-based health partnerships in underserved districts", source: "Community assessment", weight: 3 },
  { id: "sw-11", quadrant: "opportunities", text: "AI-assisted documentation freeing clinician time", source: "Digital Health", weight: 3 },
  { id: "sw-12", quadrant: "opportunities", text: "Ambulatory growth in high-growth suburbs", source: "Market analysis", weight: 3 },
  { id: "sw-13", quadrant: "threats", text: "Ransomware targeting health systems — regional uptick", source: "Risk register", weight: 4 },
  { id: "sw-14", quadrant: "threats", text: "Payer reimbursement policy changes for ambulatory care", source: "Policy scan", weight: 3 },
  { id: "sw-15", quadrant: "threats", text: "Competitor health system expanding urgent care footprint", source: "Market analysis", weight: 3 },
  { id: "sw-16", quadrant: "threats", text: "Workforce shortages across the region intensifying", source: "Workforce data", weight: 3 },
];

export const swotQuadrants: { id: SwotQuadrant; label: string; color: string; dot: string }[] = [
  { id: "strengths", label: "Strengths", color: "border-emerald-500/40 bg-emerald-500/[0.06]", dot: "bg-emerald-500" },
  { id: "weaknesses", label: "Weaknesses", color: "border-rose-500/40 bg-rose-500/[0.06]", dot: "bg-rose-500" },
  { id: "opportunities", label: "Opportunities", color: "border-blue-500/40 bg-blue-500/[0.06]", dot: "bg-blue-500" },
  { id: "threats", label: "Threats", color: "border-amber-500/40 bg-amber-500/[0.06]", dot: "bg-amber-500" },
];
