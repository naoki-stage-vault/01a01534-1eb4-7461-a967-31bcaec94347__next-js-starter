"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle = {
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--card-foreground)",
  fontSize: 12,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

export function KpiTrendChart({
  data,
  dataKey = "value",
  color = "var(--color-primary)",
  height = 240,
  unit,
}: {
  data: { month: string; value: number }[];
  dataKey?: string;
  color?: string;
  height?: number;
  unit?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -14, bottom: 0 }}>
        <defs>
          <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.25} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}${unit ?? ""}`} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} fill={`url(#grad-${dataKey})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function LineTrendChart({
  data,
  lines,
  height = 240,
}: {
  data: Record<string, string | number>[];
  lines: { key: string; color: string; name?: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -14, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {lines.map((l) => (
          <Line key={l.key} type="monotone" dataKey={l.key} name={l.name ?? l.key} stroke={l.color} strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ProgressBarChart({
  data,
  height = 260,
  color = "var(--color-primary)",
  labelKey = "name",
  valueKey = "value",
  unit = "%",
}: {
  data: Record<string, string | number>[];
  height?: number;
  color?: string;
  labelKey?: string;
  valueKey?: string;
  unit?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 24, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}${unit}`} />
        <YAxis type="category" dataKey={labelKey} width={150} tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}${unit}`, "Progress"]} />
        <Bar dataKey={valueKey} radius={[4, 4, 4, 4]} barSize={14}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color ? String(d.color) : color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({
  data,
  height = 220,
  centerLabel,
  centerValue,
}: {
  data: { name: string; value: number; color: string }[];
  height?: number;
  centerLabel?: string;
  centerValue?: string;
}) {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={88} paddingAngle={3} strokeWidth={0}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
      {centerLabel && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold">{centerValue}</span>
          <span className="text-xs text-muted-foreground">{centerLabel}</span>
        </div>
      )}
    </div>
  );
}

export function SimpleBarChart({
  data,
  height = 220,
  color = "var(--color-primary)",
}: {
  data: { name: string; value: number }[];
  height?: number;
  color?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--muted)", opacity: 0.4 }} />
        <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} barSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
