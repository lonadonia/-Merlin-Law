import Link from "next/link";
import { ArrowRight } from "@/components/icons";

type ClosingCtaProps = {
  eyebrow?: string;
  title: string;
  copy: string;
};

export function ClosingCta({ eyebrow = "Private demonstration", title, copy }: ClosingCtaProps) {
  return (
    <section className="closing-cta section-ink">
      <div className="shell closing-cta-grid">
        <div>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="closing-cta-action">
          <p>{copy}</p>
          <Link className="button button-copper" href="/trust#demonstration">
            Request a private demonstration
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
