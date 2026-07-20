import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { ClosingCta } from "@/components/closing-cta";
import { RecordStage } from "@/components/record-stage";
import { Reveal } from "@/components/reveal";
import { VideoStage } from "@/components/video-stage";
import { credibilityClaim } from "@/lib/content";

export const metadata: Metadata = {
  title: "Medical Record Intelligence for Defense Counsel",
  description:
    "Command every page, entry, provider, and treatment event with professionally curated medical record intelligence built for defense work.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    number: "01",
    title: "A Verified Foundation",
    copy: "Before analysis begins, the complete record set is professionally curated so medically pertinent diagnoses, providers, medications, procedures, and dates of service are properly recognized and structured. Clean data in. Reliable answers out.",
    margin: "FOUNDATION / CURATED",
  },
  {
    number: "02",
    title: "A Closed System",
    copy: "Case materials remain within a sealed, matter-specific environment. Nothing is used to train public AI models. Nothing is commingled with other matters.",
    margin: "MATTER / ISOLATED",
  },
  {
    number: "03",
    title: "Answers at the Speed of Litigation",
    copy: "Chat directly with the record. Build chronologies. Surface prior conditions, treatment gaps, and inconsistencies before mediation—not after.",
    margin: "QUERY / GROUNDED",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero section-ink">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow eyebrow-light">Closed-system medical record intelligence</p>
            </Reveal>
            <h1 className="headline-reveal">
              <span>Command the medical record.</span>
              <span>Every page. Every entry.</span>
              <span><em>Every time.</em></span>
            </h1>
            {/* CLIENT VERIFICATION: comparative cost and physician-level language supplied in approved draft. */}
            <Reveal delay={0.1}>
              <p className="hero-lede">
                Merlin.law gives defense counsel physician-level command of the complete medical record—at a fraction of physician cost, with a rigor no junior associate can match.
              </p>
              <div className="hero-actions">
                <Link className="button button-copper" href="/trust#demonstration">
                  Request a private demonstration
                  <ArrowRight />
                </Link>
                <Link className="text-link text-link-light" href="/trust#demonstration">
                  Speak with a case consultant
                  <ArrowUpRight />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.18}>
            <RecordStage />
          </Reveal>
        </div>
        <div className="hero-foot shell">
          <span>MEDICAL RECORD WIZARD / DEFENSE-FIRST</span>
          <span>{credibilityClaim}</span>
          <span>EST. IN MED-LEGAL PRACTICE</span>
        </div>
      </section>

      <section className="section-paper video-section">
        <div className="shell section-heading section-heading-split">
          <Reveal>
            <p className="eyebrow">The record, illuminated / Film 01</p>
            <h2>From production<br />to command.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              See how professionally curated source records become a matter-specific intelligence layer—without turning legal judgment over to a generic document chatbot.
            </p>
          </Reveal>
        </div>
        <div className="shell">
          <Reveal><VideoStage /></Reveal>
        </div>
      </section>

      <section className="opening-statement section-paper">
        <div className="shell opening-grid">
          <div className="opening-index" aria-hidden="true">
            <span>CASE NOTE</span>
            <b>0001</b>
            <i />
          </div>
          <Reveal className="opening-copy">
            <p className="eyebrow">Where civil liability turns</p>
            <h2>
              The pre-existing condition on page 3,412. The treatment gap no one mentioned at deposition. The inconsistency between the intake note and the demand letter.
            </h2>
            <div className="opening-body">
              <p>
                In civil liability defense, the medical record is where cases are won and lost.
              </p>
              <p>
                Merlin.law is the Medical Record Wizard—a closed-system record intelligence service built for litigation. Ask the record anything. Receive answers grounded in the actual documents: organized, medically pertinent, and ready for defense work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pillars-section section-paper">
        <div className="shell pillars-grid">
          <div className="pillars-intro">
            <p className="eyebrow">Three governing principles</p>
            <h2>Intelligence begins before the first question.</h2>
            <p>Professional curation, matter isolation, and source-grounded answers form one continuous standard.</p>
          </div>
          <ol className="pillar-ledger">
            {pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.number} delay={index * 0.06}>
                <span className="pillar-number">{pillar.number}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </div>
                <small>{pillar.margin}</small>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="provocation section-ink">
        <div className="shell provocation-grid">
          <p className="eyebrow eyebrow-light">The expert audit / An essential second look</p>
          <div className="provocation-lines">
            <Reveal><p>Your expert reviewed the records.</p></Reveal>
            <Reveal delay={0.06}><p>Their expert reviewed the records.</p></Reveal>
            <Reveal delay={0.12}><h2>Who reviewed<br /><em>the reviewers?</em></h2></Reveal>
          </div>
          <Reveal className="provocation-answer" delay={0.16}>
            <span>Merlin did.</span>
            <p>
              Verify—line by line, page by page—that an opinion rests on the complete medical picture, and test whether the other side’s survives contact with it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="guardian-credibility section-paper">
        <div className="shell guardian-grid">
          <Reveal className="guardian-logos">
            <span>A subsidiary of</span>
            <Image
              src="/assets/brand/guardian-group-copper.png"
              width={2650}
              height={776}
              alt="The Guardian Group"
            />
            <i aria-hidden="true" />
            <span>A division of</span>
            <Image
              src="/assets/brand/guardian-civil-services-metallic.png"
              width={1435}
              height={235}
              alt="Guardian Group Civil Services — Seamless Medical Expert Integration"
            />
          </Reveal>
          <Reveal className="guardian-copy" delay={0.08}>
            <p className="eyebrow">Authority behind the intelligence</p>
            <h2>{credibilityClaim}</h2>
            <p>
              Merlin.law is a service of The Guardian Group, a med-legal management firm with deep experience at the intersection of medicine and litigation. This is a medical-legal practice that built the technology it always wished existed.
            </p>
            <Link className="text-link" href="/trust#about">
              The organization behind Merlin
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        title="The record has answers. Ask."
        copy="Schedule a confidential demonstration and see Merlin work through a record set like the ones on your desk right now."
      />
    </main>
  );
}
