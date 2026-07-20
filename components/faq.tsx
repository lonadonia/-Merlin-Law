"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        return (
          <article key={faq.question} className={expanded ? "is-open" : ""}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span><small>0{index + 1}</small>{faq.question}</span>
                <PlusIcon />
              </button>
            </h3>
            <div
              className="faq-answer"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              aria-hidden={!expanded}
            >
              <div><p>{faq.answer}</p></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
