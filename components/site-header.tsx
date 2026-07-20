"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="parent-rail">
        <div className="shell parent-rail-inner">
          <span>A subsidiary of The Guardian Group</span>
          <span className="parent-rail-rule" aria-hidden="true" />
          <span>A division of Guardian Group Civil Services</span>
        </div>
      </div>
      <div className="nav-shell shell">
        <Link className="brand-link" href="/" aria-label="Merlin.law home">
          <Image
            src="/assets/brand/merlin-lockup-dark.png"
            width={968}
            height={332}
            priority
            alt="Merlin — your Medical Record Wizard"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button button-copper header-cta" href="/trust#demonstration">
          <span>Request a private demonstration</span>
          <ArrowUpRight />
        </Link>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {siteConfig.nav.map((item, index) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
          <Link className="button button-copper" href="/trust#demonstration" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Request a private demonstration
            <ArrowUpRight />
          </Link>
        </nav>
        <p>Confidential medical record intelligence for litigation and claims work.</p>
      </div>
    </header>
  );
}
