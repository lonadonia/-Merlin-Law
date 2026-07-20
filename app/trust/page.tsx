import type { Metadata } from "next";
import Image from "next/image";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Trust, Security & About",
  description:
    "Learn how Merlin separates matters, protects confidentiality, and brings med-legal expertise to record intelligence.",
  alternates: { canonical: "/trust" },
};

const principles = [
  {
    number: "01",
    title: "Closed by design",
    copy: "Case materials are processed within a sealed environment. They are not used to train public models, not shared across matters, and not accessible outside the engagement.",
  },
  {
    number: "02",
    title: "Isolated by matter",
    copy: "Each case operates as its own environment. Records, queries, and work product are not commingled between matters—even matters for the same client.",
  },
  {
    number: "03",
    title: "Governed by professionals",
    copy: "Merlin is operated by The Guardian Group, a med-legal management firm experienced in handling sensitive medical information within professional engagements.",
  },
] as const;

export default function TrustPage() {
  return (
    <main id="main-content">
      <section className="trust-hero section-ink">
        <div className="shell trust-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">Trust & confidentiality / Matter 01</p>
            <h1 className="headline-reveal">
              <span>A sealed room</span>
              <span><em>for your case.</em></span>
            </h1>
            <Reveal>
              <p className="hero-lede">
                Legal practice imposes confidentiality obligations that most AI tools were never designed to meet. Merlin was designed around them from the first line of code.
              </p>
            </Reveal>
          </div>
          <Reveal className="sealed-visual" delay={0.08}>
            <div className="sealed-room" aria-hidden="true">
              <span className="room-label">MATTER ENVIRONMENT / 01</span>
              <div className="room-inner">
                <span>CASE RECORD</span>
                <b>ISOLATED</b>
                <i /><i /><i />
              </div>
              <span className="room-edge edge-a">NO COMMINGLING</span>
              <span className="room-edge edge-b">MATTER-SPECIFIC</span>
              <span className="room-edge edge-c">PROFESSIONALLY GOVERNED</span>
            </div>
            <p>Conceptual security architecture—not a certification diagram.</p>
          </Reveal>
        </div>
      </section>

      <section className="security-principles section-paper">
        <div className="shell">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Security principles</p><h2>Separation is the structure.</h2></div>
            <p>
              Each engagement is treated as a distinct body of records, questions, and work product. Specific certifications and technical standards will be published only after client confirmation.
            </p>
          </div>
          <ol className="principles-ledger">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.number} delay={index * 0.06}>
                <span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section section-paper" id="about">
        <div className="shell about-grid">
          <Reveal className="about-copy">
            <p className="eyebrow">About Merlin</p>
            <h2>Born in med-legal practice.<br /><em>Built for the defense bar.</em></h2>
            <p className="large-copy">
              Merlin.law is a service of The Guardian Group, a medical-legal management firm that has spent years inside the machinery of civil litigation—the records, the reviews, the experts, the economics.
            </p>
            <p>
              We watched talented attorneys make consequential decisions on incomplete pictures of the medical record because complete pictures were too expensive or too slow. Merlin was built to end that compromise.
            </p>
            <p>
              It is not artificial intelligence bolted onto legal work. It is medical-legal expertise, amplified.
            </p>
          </Reveal>
          <Reveal className="about-seal" delay={0.08}>
            <div>
              <span>ORGANIZATIONAL LINEAGE</span>
              <Image
                src="/assets/brand/guardian-group-copper.png"
                width={2650}
                height={776}
                alt="The Guardian Group"
              />
              <i />
              <Image
                src="/assets/brand/guardian-civil-services-metallic.png"
                width={1435}
                height={235}
                alt="Guardian Group Civil Services"
              />
            </div>
            <p>A subsidiary of The Guardian Group.<br />A division of Guardian Group Civil Services.</p>
          </Reveal>
        </div>
      </section>

      <section className="faq-section section-ink">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <p className="eyebrow eyebrow-light">Questions / Answered plainly</p>
            <h2>Before you entrust Merlin with a matter.</h2>
            <p>Clear boundaries are part of a high-trust service. These answers describe the current positioning without inventing certifications or guarantees.</p>
          </div>
          <Faq />
        </div>
      </section>

      <section className="demonstration-section section-paper" id="demonstration">
        <div className="shell demonstration-grid">
          <div className="demonstration-intro">
            <p className="eyebrow">Private demonstration</p>
            <h2>Bring us a record like the ones on your desk.</h2>
            <p>
              Tell us what your team handles and where record complexity consumes the most time. We’ll prepare the conversation around your real workflow.
            </p>
            <div className="consultation-note">
              <span>CONFIDENTIAL CONSULTATION</span>
              <p>No case documents should be submitted through this website form.</p>
            </div>
          </div>
          <DemoForm />
        </div>
      </section>
    </main>
  );
}
