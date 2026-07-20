"use client";

import { useState } from "react";

const roles = {
  counsel: {
    label: "Defense counsel",
    title: "Know the record better than the witness.",
    copy: "Build case strategy from complete chronologies, prior-condition analysis, expert auditing, and source-grounded deposition preparation.",
    markers: ["Causation", "Expert audit", "Deposition prep"],
  },
  claims: {
    label: "Claims professionals",
    title: "See the medical posture before the demand defines it.",
    copy: "Bring prior conditions, treatment patterns, gaps, billing questions, and a shared factual foundation into earlier claim evaluation.",
    markers: ["Reserve context", "Billing review", "Portfolio consistency"],
  },
} as const;

type Role = keyof typeof roles;

export function AudienceBrief() {
  const [role, setRole] = useState<Role>("counsel");
  const item = roles[role];

  return (
    <section className="audience-brief" aria-labelledby="audience-title">
      <div className="audience-tabs" role="tablist" aria-label="Professional audience">
        {(Object.keys(roles) as Role[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={role === key}
            aria-controls="audience-panel"
            id={`audience-tab-${key}`}
            onClick={() => setRole(key)}
          >
            {roles[key].label}
          </button>
        ))}
      </div>
      <div id="audience-panel" role="tabpanel" aria-labelledby={`audience-tab-${role}`} tabIndex={0}>
        <p className="eyebrow">Role brief / {item.label}</p>
        <h2 id="audience-title">{item.title}</h2>
        <p>{item.copy}</p>
        <ul>
          {item.markers.map((marker) => <li key={marker}>{marker}</li>)}
        </ul>
      </div>
      <p className="audience-note">The complete capability index remains available below for every role.</p>
    </section>
  );
}
