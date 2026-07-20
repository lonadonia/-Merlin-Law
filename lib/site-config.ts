export const siteConfig = {
  name: "Merlin.law",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://merlin.law",
  description:
    "Professionally curated, closed-system medical record intelligence for defense counsel and claims professionals.",
  // VIDEO CONFIGURATION: set NEXT_PUBLIC_EXPLAINER_VIDEO_URL to a direct MP4/WebM URL.
  // When unset, VideoStage intentionally renders a polished, accessible storyboard preview.
  explainerVideoUrl: process.env.NEXT_PUBLIC_EXPLAINER_VIDEO_URL || null,
  nav: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/trust", label: "Trust & About" },
  ],
} as const;
