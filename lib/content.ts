export const capabilities = [
  {
    id: "conversational",
    number: "01",
    title: "Conversational Record Review",
    summary:
      "Ask the record direct questions and receive grounded answers in seconds, not billable weeks.",
    detail:
      "Ask questions such as “When was the first complaint of lumbar pain?” or “Which providers treated the claimant before the date of loss?” Answers remain anchored to the matter record.",
  },
  {
    id: "chronologies",
    number: "02",
    title: "Comprehensive Medical Chronologies",
    summary:
      "Complete treatment timelines across providers and facilities—the backbone of defense evaluation.",
    detail:
      "Every visit, procedure, and prescription can be placed in sequence across the full production.",
  },
  {
    id: "pre-existing",
    number: "03",
    title: "Prior & Pre-Existing Condition Identification",
    summary:
      "Surface the medical history before the date of loss and strengthen causation analysis.",
    detail:
      "Review prior injuries to the same body parts, degenerative findings, and previous similar complaints.",
  },
  {
    id: "treatment-gap",
    number: "04",
    title: "Treatment Gap & Compliance Analysis",
    summary:
      "Identify treatment gaps, missed appointments, and inconsistencies across the clinical narrative.",
    detail:
      "Bring non-compliance with medical advice and tensions between subjective complaints and objective findings into view.",
  },
  {
    id: "provider-map",
    number: "05",
    title: "Provider & Facility Mapping",
    summary:
      "See every treating provider, referral pattern, and facility relationship across the record.",
    detail:
      "A unified provider index makes patterns worth closer examination easier to recognize.",
  },
  {
    id: "expert-audit",
    number: "06",
    title: "Expert Opinion Auditing",
    summary:
      "Test any expert opinion—yours or theirs—against the complete medical record.",
    detail:
      "Confirm your expert saw everything that matters. Identify what an opposing expert overlooked, assumed, or never received.",
  },
  {
    id: "deposition",
    number: "07",
    title: "Deposition & IME Preparation",
    summary:
      "Prepare outlines grounded in the actual history and verify testimony against the documents.",
    detail:
      "Query specific encounters before depositions and independent medical examinations, then trace answers back to the record.",
  },
  {
    id: "billing",
    number: "08",
    title: "Billing Review & Overbilling Detection",
    summary:
      "Surface duplicate charges, undocumented treatment, and billing patterns that warrant a closer look.",
    detail:
      "Test claimed medical specials against the documented treatment record without substituting software output for professional judgment.",
  },
  {
    id: "medications",
    number: "09",
    title: "Medication & Procedure Histories",
    summary:
      "Organize medication timelines and procedure summaries by date, prescriber, and indication.",
    detail:
      "Follow medication and intervention history across the life of a matter without losing the source sequence.",
  },
  {
    id: "closed-system",
    number: "10",
    title: "Closed-System Confidentiality",
    summary:
      "Each matter lives in its own sealed environment, without public-model training or data commingling.",
    detail:
      "The service is designed around the professional responsibility expectations of legal practice.",
  },
] as const;

export const benefits = [
  {
    title: "More comprehensive than delegation",
    copy: "Merlin begins from a professionally curated medical foundation, so pertinent details are recognized across the production rather than left to the limits of attention alone.",
  },
  {
    title: "A fraction of physician review cost",
    copy: "Make rigorous review economical across more files, while identifying where physician expert time is genuinely warranted.",
    verification: "Confirm comparative cost wording with client before publication.",
  },
  {
    title: "Claimed medical specials accounted for",
    copy: "Cross-reference billed charges with documented treatment and bring discrepancies or unsupported patterns forward for closer review.",
  },
  {
    title: "Faster evaluation. Earlier leverage.",
    copy: "Understand the medical posture earlier, enter mediation informed, and respond to demands with record-specific facts.",
  },
  {
    title: "Defensible billing for clients",
    copy: "Deliver deeper record analysis at a cost structure that supports clearer conversations about legal spend.",
  },
  {
    title: "Consistency across every file",
    copy: "Apply the same disciplined review standard across matters, regardless of record-set size or reviewer availability.",
  },
] as const;

export const faqs = [
  {
    question: "Is Merlin just another AI chatbot pointed at documents?",
    answer:
      "No. General-purpose tools analyze raw, disorganized records and inherit their flaws. Merlin’s analysis is built on a professionally curated medical foundation, so pertinent information is properly recognized before a question is asked.",
  },
  {
    question: "How do I know the answers are reliable?",
    answer:
      "Merlin’s responses are grounded in the curated record itself, and the underlying source material remains available for verification. Merlin informs professional judgment; it does not replace it.",
  },
  {
    question: "Is my case data secure?",
    answer:
      "Merlin operates as a closed system. Your materials are not used to train public AI models and are not commingled with other matters.",
  },
  {
    question: "How does the cost compare to a physician record review?",
    answer:
      "Merlin is designed to deliver comprehensive record analysis at a significant fraction of typical physician review rates—and to help identify where a physician expert’s time is best invested.",
    verification: "Confirm comparative cost wording with client before publication.",
  },
  {
    question: "How large a record set can Merlin handle?",
    answer:
      "Merlin is built for litigation-scale record sets, from a few hundred pages to the multi-thousand-page productions common in serious injury matters.",
    verification: "Confirm supported production scale with client before publication.",
  },
  {
    question: "What types of cases is Merlin suited for?",
    answer:
      "Civil liability matters where the medical record is central, including personal injury, premises liability, trucking and transportation, product liability, medical malpractice defense, and workers’ compensation.",
  },
  {
    question: "How quickly can we begin?",
    answer:
      "Contact the team for a confidential consultation. The Merlin team guides each new engagement through the onboarding process.",
  },
] as const;

export const legalDisclaimer =
  "Merlin.law is a service of The Guardian Group, a med-legal management firm. Merlin provides record organization and analysis tools for legal professionals; it does not provide legal or medical advice, and its output is intended to support—not replace—the professional judgment of counsel and qualified medical experts.";

// CLIENT FACT VERIFICATION REQUIRED: the supplied copy states that Merlin was
// developed by physicians. Retain for prototype fidelity; verify literally before launch.
export const credibilityClaim = "Developed by physicians. Built for attorneys.";
