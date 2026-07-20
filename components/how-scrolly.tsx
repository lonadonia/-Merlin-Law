"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "The Record Is Curated",
    copy: "Every record set entering Merlin undergoes professional medical-legal curation. Pertinent information is identified, verified, and structured before analysis begins. Illegible entries, duplicates, and disorganized productions are resolved—not ignored.",
  },
  {
    number: "02",
    title: "The Record Becomes Intelligent",
    copy: "The curated record becomes a secure, searchable, case-specific knowledge base within Merlin’s closed system. It knows your record—and only your record.",
  },
  {
    number: "03",
    title: "You Take Command",
    copy: "Ask questions in plain language. Request chronologies, provider summaries, medication histories, or gap analyses. Test theories. Prepare for depositions. Merlin responds from the record itself.",
  },
] as const;

export function HowScrolly() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers = refs.current.map((element, index) => {
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { threshold: 0.55, rootMargin: "-10% 0px -10% 0px" },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="method-grid">
      <div className="method-visual-wrap">
        <div className="method-visual" data-stage={active + 1} aria-hidden="true">
          <div className="method-folio">0{active + 1} / 03</div>
          <div className="source-stack">
            <div className="source-sheet sheet-one"><span>UNSORTED PRODUCTION</span><i /><i /><i /><i /></div>
            <div className="source-sheet sheet-two"><span>PROVIDER / DATE</span><i /><i /><i /></div>
            <div className="source-sheet sheet-three">
              <span>RECORD QUERY</span>
              <b>{active === 0 ? "CURATION" : active === 1 ? "CASE INDEX" : "GROUNDED ANSWER"}</b>
              <p>{active === 0 ? "Duplicates resolved" : active === 1 ? "Matter-specific knowledge" : "Source references ready"}</p>
            </div>
          </div>
          <div className="method-index">
            <span className={active >= 0 ? "active" : ""}>Curate</span>
            <span className={active >= 1 ? "active" : ""}>Structure</span>
            <span className={active >= 2 ? "active" : ""}>Question</span>
          </div>
        </div>
        <p className="visual-disclaimer">Conceptual workflow visualization—not a product interface.</p>
      </div>
      <div className="method-chapters">
        {steps.map((step, index) => (
          <article
            key={step.number}
            ref={(element) => { refs.current[index] = element; }}
            className={active === index ? "is-active" : ""}
          >
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
