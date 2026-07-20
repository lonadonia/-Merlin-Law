import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { HowScrolly } from "@/components/how-scrolly";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "How Merlin Works",
  description:
    "See how professional medical-legal curation becomes a secure, searchable, matter-specific record intelligence layer.",
  alternates: { canonical: "/how-it-works" },
};

const questions = [
  ["PRIOR HISTORY", "Which providers treated the claimant before the date of loss?"],
  ["CHRONOLOGY", "When was the first documented complaint of lumbar pain?"],
  ["TREATMENT GAP", "Where does care stop—and when does it resume?"],
  ["EXPERT AUDIT", "Which material encounters are absent from the opinion?"],
] as const;

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-paper section-paper">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow">Method / 01—03</p>
            <h1 className="headline-reveal dark">
              <span>Precision first.</span>
              <span>Intelligence second.</span>
              <span><em>Answers always.</em></span>
            </h1>
          </div>
          <Reveal className="page-hero-aside">
            <span>THE METHOD</span>
            <p>
              Most AI tools pour raw, disorganized records into a model and pass the output onward—errors and all. Merlin takes a different path, because in litigation, “mostly accurate” is not accurate at all.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="method-section section-ink">
        <div className="shell method-heading">
          <p className="eyebrow eyebrow-light">One record / Three controlled stages</p>
          <h2>The same source.<br />Progressively more useful.</h2>
        </div>
        <div className="shell">
          <HowScrolly />
        </div>
      </section>

      <section className="question-section section-paper">
        <div className="shell question-grid">
          <div className="question-intro">
            <p className="eyebrow">Plain-language inquiry</p>
            <h2>Ask the questions the case demands.</h2>
            <p>
              Merlin can support chronology building, provider summaries, medication histories, treatment-gap analysis, deposition preparation, and theory testing—without presenting a conceptual interface as a finished product UI.
            </p>
          </div>
          <ol className="question-ledger">
            {questions.map(([label, question], index) => (
              <Reveal as="li" key={label} delay={index * 0.05}>
                <span>0{index + 1}</span>
                <div><small>{label}</small><p>“{question}”</p></div>
                <b aria-hidden="true">↳</b>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="result-statement section-paper">
        <div className="shell">
          <p className="eyebrow">The result</p>
          {/* CLIENT VERIFICATION: comparative physician-review language is from supplied copy. */}
          <Reveal>
            <blockquote>
              “The comprehensiveness of a physician review, the responsiveness of a conversation, and a cost structure that makes thorough review the rule rather than the exception.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title="Bring the record into focus."
        copy="See the full method applied to the scale and complexity of matters your team handles."
      />
    </main>
  );
}
