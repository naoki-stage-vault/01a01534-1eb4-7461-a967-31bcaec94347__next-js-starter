import type { Report } from "./types";

export const reports: Report[] = [
  {
    id: "rep-board",
    title: "Board Report — Q4 2025",
    type: "board",
    period: "Q4 2025",
    status: "draft",
    updatedAt: "2025-11-12T15:00:00Z",
    preparedBy: "Ava Chen",
    sections: [
      {
        title: "Executive Summary",
        body: "Horizon Health Network enters Q4 with overall strategic progress at 74%. Two objectives require board attention: financial sustainability (71%, at-risk) and service line expansion (47%, behind schedule). Digital transformation remains the strongest performer at 68% with virtual visits tracking 26% above plan. Patient experience gains continue, with HCAHPS rising to 4.3/5 and wait times down to 24 minutes from a 32-minute baseline.",
      },
      {
        title: "Strategic Progress",
        body: "Eight of twelve goals are on track for year-end delivery. The health equity dashboard reached beta with data coverage at 91% of service lines. Community engagement exceeded targets with 4,380 survey responses and 11 town halls completed. The ambulatory revenue program launched three of four planned service lines, contributing an estimated $2.4M in new annualized revenue.",
      },
      {
        title: "Risk & Board Decisions Required",
        body: "The ransomware threat remains the network's highest exposure (score 20/25) despite mitigation progress; the board is asked to approve the zero-trust acceleration budget of $1.8M. Nursing vacancy at 11% continues to pressure agency spend. Construction on Ambulatory Center B is six weeks behind; a phasing option is presented for approval.",
      },
      {
        title: "Financial Highlights",
        body: "Operating margin improved to 2.1% (up from 1.4% at FY start) against a 3.5% year-end target. Supply chain savings reached $3.1M against an $8M goal. Days in accounts receivable fell to 44 from 52. Cash position remains above board covenant.",
      },
    ],
    highlights: [
      { label: "Overall progress", value: "74%", trend: "up" },
      { label: "Operating margin", value: "2.1%", trend: "up" },
      { label: "Virtual visits", value: "66.5k", trend: "up" },
      { label: "Nursing vacancy", value: "11%", trend: "down" },
    ],
  },
  {
    id: "rep-quarterly",
    title: "Quarterly Report — Q3 2025",
    type: "quarterly",
    period: "Q3 2025",
    status: "published",
    updatedAt: "2025-10-03T10:00:00Z",
    preparedBy: "Isa Garcia",
    sections: [
      {
        title: "Q3 Performance",
        body: "Q3 delivered the strongest quarter of the year. Operating margin reached 1.9%, virtual visits grew 12% quarter-over-quarter, and employee engagement rose to 83. The fall prevention bundle completed its two-unit pilot with an 18% reduction in fall rates, clearing the path for network rollout.",
      },
      {
        title: "Objective Deep-Dive",
        body: "Digital transformation led all objectives at 61% completion. The patient portal 2.0 entered beta with self-scheduling available in eight clinics. Workforce objectives advanced with the leadership academy reaching its mid-point. Financial sustainability remains the lagging objective, with revenue cycle automation behind by two weeks.",
      },
      {
        title: "Initiatives Launched",
        body: "Five new initiatives were launched in Q3: flexible scheduling pilot, digital check-in rollout, vendor risk program, data privacy audit, and patient advisory council. Combined committed budget is $1.9M across FY25-26.",
      },
    ],
    highlights: [
      { label: "Q3 margin", value: "1.9%", trend: "up" },
      { label: "Engagement", value: "83", trend: "up" },
      { label: "Fall rate reduction", value: "-18%", trend: "up" },
    ],
  },
  {
    id: "rep-exec",
    title: "Executive Summary — November 2025",
    type: "executive",
    period: "November 2025",
    status: "review",
    updatedAt: "2025-11-14T08:30:00Z",
    preparedBy: "Ava Chen",
    sections: [
      {
        title: "Executive Summary",
        body: "November performance was steady. Key events: the community health needs assessment crossed 4,300 responses (88% of target), sepsis early warning validation completed with 82% alert precision, and the board approved the digital investment scorecard framework requested by the Finance Committee.",
      },
      {
        title: "What Needs Attention",
        body: "Three items need executive attention this month: (1) ICU pilot readiness for the sepsis early warning system requires precision above 85%; (2) revenue cycle automation denial rates are not improving as forecast; (3) Ambulatory Center B construction schedule risk was elevated to 'high' after supplier delays.",
      },
      {
        title: "Decisions Requested",
        body: "Executives are asked to: approve the alternate supplier agreement for Center B; confirm the Q4 board pack narrative on nursing vacancy; and select the pilot department for ambient documentation.",
      },
    ],
    highlights: [
      { label: "Survey responses", value: "4,380", trend: "up" },
      { label: "Alert precision", value: "82%", trend: "up" },
      { label: "Center B schedule", value: "-6 wks", trend: "down" },
    ],
  },
  {
    id: "rep-department",
    title: "Department Report — Clinical Operations",
    type: "department",
    department: "Clinical Operations",
    period: "Q4 2025",
    status: "draft",
    updatedAt: "2025-11-11T13:00:00Z",
    preparedBy: "Sofia Patel",
    sections: [
      {
        title: "Department Progress",
        body: "Clinical Operations carries eight active initiatives across four objectives. Combined progress is 71%. The fall prevention bundle leads at 76% with network rollout underway. The sepsis early warning pilot is the department's top risk, gated on alert precision improvement. Ambulatory Center B construction is the largest budget item at $8.5M with 35% completion.",
      },
      {
        title: "Workforce",
        body: "Clinical vacancy improved to 10.4% from 11.2%. The nurse residency program enrolled 64 residents in cohort two. Overtime spend is 7% above budget, concentrated in medical-surgical units.",
      },
      {
        title: "Budget",
        body: "Department budget utilization is 71% of $18.5M allocation, in line with the spending plan. Two initiatives show unfavorable variance requiring review: sepsis early warning (vendor costs) and Center B (supply escalation).",
      },
    ],
    highlights: [
      { label: "Initiatives on track", value: "6/8", trend: "up" },
      { label: "Vacancy rate", value: "10.4%", trend: "down" },
      { label: "Budget used", value: "71%", trend: "flat" },
    ],
  },
];

export const reportTypes: { id: Report["type"]; label: string }[] = [
  { id: "board", label: "Board Report" },
  { id: "quarterly", label: "Quarterly Report" },
  { id: "executive", label: "Executive Summary" },
  { id: "department", label: "Department Report" },
];
