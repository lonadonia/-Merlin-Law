import Image from "next/image";
import Link from "next/link";
import { legalDisclaimer } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <Link className="footer-brand" href="/" aria-label="Merlin.law home">
          <Image
            src="/assets/brand/merlin-lockup-dark.png"
            width={968}
            height={332}
            alt="Merlin — your Medical Record Wizard"
          />
        </Link>
        <nav aria-label="Footer navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-parent">
          <span>A service of</span>
          <Image
            src="/assets/brand/guardian-civil-services-white.jpg"
            width={1435}
            height={235}
            alt="Guardian Group Civil Services"
          />
        </div>
      </div>
      <div className="shell footer-legal">
        <p>{legalDisclaimer}</p>
        <div>
          <span>© {new Date().getFullYear()} Merlin.law</span>
          <span>Confidential by design</span>
        </div>
      </div>
    </footer>
  );
}
