import type { AiConversation, AiInsight } from "./types";

export const aiInsights: AiInsight[] = [
  {
    id: "ai-insight-1",
    title: "Margin trajectory at risk",
    body: "Operating margin is tracking 1.4pts below the 3.5% target. Revenue cycle automation is the largest lever — denial rate improvement is 2 weeks behind plan.",
    severity: "warning",
    category: "Financial",
  },
  {
    id: "ai-insight-2",
    title: "Nursing vacancy correlated with overtime spend",
    body: "Units with vacancy above 12% show 18% higher overtime. The flexible scheduling pilot could reduce exposure by ~$420k/quarter if adopted network-wide.",
    severity: "info",
    category: "Workforce",
  },
  {
    id: "ai-insight-3",
    title: "Virtual visits on track to beat target",
    body: "At current growth, virtual visits will reach 92k/quarter by March — 2% above target. Consider raising the goal at the mid-year refresh.",
    severity: "success",
    category: "Digital",
  },
  {
    id: "ai-insight-4",
    title: "Two risks require board attention",
    body: "Ransomware (20/25) and staffing shortage (20/25) both exceed the high-risk threshold. Mitigation completion for both is under 60%.",
    severity: "danger",
    category: "Risk",
  },
];

export const aiConversations: AiConversation[] = [
  {
    id: "ai-conv-1",
    title: "Review our strategic risks",
    updatedAt: "2025-11-12T09:30:00Z",
    messages: [
      {
        id: "m-1-1",
        role: "user",
        content: "Review our strategic risks and tell me which need board attention.",
        createdAt: "2025-11-12T09:28:00Z",
      },
      {
        id: "m-1-2",
        role: "assistant",
        content:
          "I reviewed your risk register against the board risk appetite (max score 15/25). Two risks exceed the threshold:\n\n1. **Ransomware attack on clinical systems** (20/25) — likelihood 4, impact 5. Mitigation is 58% complete; the zero-trust rollout is the critical path.\n2. **Clinical staffing shortage** (20/25) — likelihood 5, impact 4. Agency spend pressure is rising; residency and flexible scheduling mitigations are on track.\n\n**Recommended actions:**\n- Approve the $1.8M zero-trust acceleration for board review this month\n- Move staffing to weekly monitoring with HR\n- Reassess post-mitigation scores in 60 days\n\nTwo additional risks (margin, compliance) are trending up and warrant watchlist placement.",
        createdAt: "2025-11-12T09:29:00Z",
        citations: [
          { title: "Risk register — Q4 2025", source: "Enterprise Risk" },
          { title: "Board risk appetite statement", source: "Governance" },
          { title: "Mitigation tracker — November", source: "Enterprise Risk" },
        ],
      },
    ],
  },
  {
    id: "ai-conv-2",
    title: "Suggest SMART objectives",
    updatedAt: "2025-11-10T14:00:00Z",
    messages: [
      {
        id: "m-2-1",
        role: "user",
        content: "Suggest SMART objectives for the next fiscal year focusing on outpatient growth.",
        createdAt: "2025-11-10T13:58:00Z",
      },
      {
        id: "m-2-2",
        role: "assistant",
        content:
          "Based on your FY25 performance and market data, here are five SMART objectives for outpatient growth:\n\n1. **Increase ambulatory revenue 18%** to $56.7M by Dec 2026, driven by the 4 new service lines already funded.\n2. **Raise self-scheduling adoption** from 61% to 78% of eligible patients by Q3 2026, reducing call center volume 22%.\n3. **Open 2 new suburban clinics** (Lakewood, Fairview) fully operational by Sep 2026, with ramp to 80% capacity within 6 months.\n4. **Cut specialist referral wait time** from 6.4 to 4 weeks by Jun 2026 via centralized triage and virtual-first follow-ups.\n5. **Grow virtual chronic care management** to 8,000 enrolled patients by Dec 2026, leveraging the new Medicare billing pathway.\n\nEach ties to an existing KPI line so impact is measurable. Want me to draft them as objectives in the plan with owners and budgets?",
        createdAt: "2025-11-10T14:00:00Z",
        citations: [
          { title: "FY25 ambulatory revenue report", source: "Finance" },
          { title: "Market analysis — suburban growth", source: "Planning" },
          { title: "Referral wait time study", source: "Clinical Operations" },
        ],
      },
    ],
  },
  {
    id: "ai-conv-3",
    title: "Generate a board summary",
    updatedAt: "2025-11-08T11:00:00Z",
    messages: [
      {
        id: "m-3-1",
        role: "user",
        content: "Generate a board summary for Q4 with the key numbers.",
        createdAt: "2025-11-08T10:55:00Z",
      },
      {
        id: "m-3-2",
        role: "assistant",
        content:
          "Here is a draft board summary for Q4 2025:\n\n**Progress:** Overall strategic progress is 74% (up 6pts from Q3). 8 of 12 goals are on track.\n\n**Financials:** Operating margin improved to 2.1% (target 3.5%); supply savings $3.1M; days in AR down to 44.\n\n**Growth:** Ambulatory revenue +$2.4M annualized from 3 new service lines; virtual visits 66.5k/quarter (+26% vs plan).\n\n**Risk:** Ransomware (20/25) and staffing (20/25) exceed appetite — two decisions requested.\n\n**People:** Engagement 84; vacancy 10.4%; residency cohort 2 enrolled.\n\nI can format this as a one-page board pack with charts. Note the draft board report already exists if you want me to align tone.",
        createdAt: "2025-11-08T11:00:00Z",
        citations: [
          { title: "Board report draft — Q4 2025", source: "Reports" },
          { title: "KPI trends — November", source: "Strategy" },
          { title: "Risk register", source: "Enterprise Risk" },
        ],
      },
    ],
  },
  {
    id: "ai-conv-4",
    title: "Recommend KPIs",
    updatedAt: "2025-11-05T16:30:00Z",
    messages: [
      {
        id: "m-4-1",
        role: "user",
        content: "Recommend KPIs to measure the success of our digital health transformation.",
        createdAt: "2025-11-05T16:28:00Z",
      },
      {
        id: "m-4-2",
        role: "assistant",
        content:
          "For digital health transformation, I recommend a balanced KPI set across four lenses:\n\n**Adoption** — % of patients with portal accounts; self-scheduling rate; digital check-in adoption.\n\n**Clinical impact** — virtual visit completion rate; readmission impact of tele-ICU; documentation time per encounter.\n\n**Operational efficiency** — call center volume per 1,000 appointments; no-show rate; portal-related IT tickets.\n\n**Financial** — digital revenue contribution; cost per virtual visit vs in-person.\n\nTwo leading indicators worth adding: **time-to-value for AI alerts** and **clinician trust score** (survey-based). These usually predict downstream outcomes before lagging metrics move.",
        createdAt: "2025-11-05T16:30:00Z",
        citations: [
          { title: "Digital health maturity model", source: "Best practice" },
          { title: "Virtual care program data", source: "Digital Health" },
        ],
      },
    ],
  },
];

export const suggestedPrompts = [
  "Suggest SMART objectives.",
  "Review our strategic risks.",
  "Generate a board summary.",
  "Recommend KPIs.",
  "Summarize this quarter's performance.",
  "Draft a stakeholder update.",
];
