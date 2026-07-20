import type { Metadata } from "next";
import { AudienceBrief } from "@/components/audience-brief";
import { ClosingCta } from "@/components/closing-cta";
import { RecordStage } from "@/components/record-stage";
import { Reveal } from "@/components/reveal";
import { benefits, capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities & Benefits",
  description:
    "Explore Merlin’s medical chronology, causation, treatment-gap, expert-audit, billing-review, and claims capabilities.",
  alternates: { canonical: "/capabilities" },
};

const insuranceBenefits = [
  "Early claim valuation grounded in the full record",
  "Pre-existing conditions and alternative causation identified before demands arrive",
  "Billing and treatment patterns surfaced before they become the settlement baseline",
  "A consistent evaluation methodology across the claims portfolio",
  "A shared factual foundation between claims professionals and defense counsel",
] as const;

export default function CapabilitiesPage() {
  const flagship = capabilities[0];
  const firstCluster = capabilities.slice(1, 5);
  const secondCluster = capabilities.slice(5);

  return (
    <main id="main-content">
      <section className="page-hero capabilities-hero section-ink">
        <div className="shell page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Capability index / Ten disciplines</p>
            <h1 className="headline-reveal">
              <span>Built for the way</span>
              <span>defense counsel</span>
              <span><em>actually works.</em></span>
            </h1>
          </div>
          <Reveal className="page-hero-aside page-hero-aside-dark">
            <span>THE ECONOMICS OF THOROUGHNESS</span>
            <p>
              Merlin replaces the compromise between an expensive physician review and a delegated non-medical reading with professionally curated, record-grounded intelligence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-paper audience-section">
        <div className="shell"><AudienceBrief /></div>
      </section>

      <section className="capability-feature section-paper">
        <div className="shell capability-feature-grid">
          <Reveal className="capability-feature-copy">
            <span className="capability-number">{flagship.number}</span>
            <p className="eyebrow">Flagship capability</p>
            <h2>{flagship.title}</h2>
            <p className="large-copy">{flagship.summary}</p>
            <p>{flagship.detail}</p>
            <div className="evidence-labels">
              <span>PLAIN LANGUAGE</span><span>SOURCE-GROUNDED</span><span>MATTER-SPECIFIC</span>
            </div>
          </Reveal>
          <Reveal className="capability-record" delay={0.08}><RecordStage compact /></Reveal>
        </div>
      </section>

      <section className="capability-index section-paper">
        <div className="shell capability-index-grid">
          <div className="capability-margin">
            <p className="eyebrow">Record command</p>
            <h2>Find the detail.<br />Understand the pattern.</h2>
          </div>
          <div className="capability-cluster">
            {firstCluster.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.04}>
                <article>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.summary}</p><small>{item.detail}</small></div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="capability-margin secondary">
            <p className="eyebrow">Strategy & scrutiny</p>
            <h2>Test the opinion.<br />Test the number.</h2>
          </div>
          <div className="capability-cluster capability-cluster-dark">
            {secondCluster.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.04}>
                <article>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.summary}</p><small>{item.detail}</small></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section section-ink">
        <div className="shell benefits-heading">
          <p className="eyebrow eyebrow-light">The benefit ledger</p>
          <h2>The economics of thoroughness,<br /><em>finally corrected.</em></h2>
          <p>
            Apply deeper record review more consistently—and direct the highest-cost expert time where it matters most.
          </p>
        </div>
        <div className="shell benefits-ledger">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={(index % 3) * 0.05}>
              <article>
                <span>0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="insurance-section section-paper">
        <div className="shell insurance-grid">
          <Reveal className="insurance-title">
            <p className="eyebrow">For insurance adjusters</p>
            <h2>Reserve with confidence.<br /><em>Resolve with clarity.</em></h2>
            <p>
              Claim valuation is only as good as the medical picture behind it. Merlin gives claims professionals an organized view of prior conditions, treatment patterns, gaps, inconsistencies, and billing questions from the earliest stages of a claim.
            </p>
          </Reveal>
          <ol className="insurance-ledger">
            {insuranceBenefits.map((benefit, index) => (
              <Reveal as="li" key={benefit} delay={index * 0.04}>
                <span>0{index + 1}</span><p>{benefit}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta
        title="See what the complete record changes."
        copy="Bring a representative matter to a private demonstration and explore the questions your team asks most often."
      />
    </main>
  );
}
