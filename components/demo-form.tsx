"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";

type Fields = "name" | "email" | "organization" | "role" | "matter" | "message";
type Errors = Partial<Record<Fields, string>>;

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const organization = String(form.get("organization") || "").trim();
    const role = String(form.get("role") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid work email.";
    if (!organization) nextErrors.organization = "Please enter your organization.";
    if (!role) nextErrors.role = "Please select your professional role.";
    if (!message) nextErrors.message = "Tell us briefly what you would like to review.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span><CheckIcon /></span>
        <p className="eyebrow">Request prepared</p>
        <h3>Thank you. Your consultation request is ready for secure routing.</h3>
        <p>
          This demonstration build does not transmit form data. Connect the approved submission endpoint before launch.
        </p>
        <button type="button" className="text-button" onClick={() => setSubmitted(false)}>
          Prepare another request
        </button>
      </div>
    );
  }

  const errorProps = (field: Fields) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form className="demo-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" {...errorProps("name")} />
          {errors.name && <small id="name-error">{errors.name}</small>}
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" {...errorProps("email")} />
          {errors.email && <small id="email-error">{errors.email}</small>}
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Organization</span>
          <input name="organization" type="text" autoComplete="organization" {...errorProps("organization")} />
          {errors.organization && <small id="organization-error">{errors.organization}</small>}
        </label>
        <label>
          <span>Professional role</span>
          <select name="role" defaultValue="" {...errorProps("role")}>
            <option value="" disabled>Select a role</option>
            <option>Defense attorney</option>
            <option>Paralegal / legal operations</option>
            <option>Claims adjuster</option>
            <option>Third-party administrator</option>
            <option>Insurance / risk professional</option>
            <option>Other professional</option>
          </select>
          {errors.role && <small id="role-error">{errors.role}</small>}
        </label>
      </div>
      <label>
        <span>Record type or approximate size <i>Optional</i></span>
        <input name="matter" type="text" placeholder="e.g. multi-provider injury matter, approximately 4,000 pages" {...errorProps("matter")} />
      </label>
      <label>
        <span>What would you like to see Merlin address?</span>
        <textarea name="message" rows={5} {...errorProps("message")} />
        {errors.message && <small id="message-error">{errors.message}</small>}
      </label>
      <div className="form-submit">
        <p>Your information remains local in this demonstration build.</p>
        <button className="button button-copper" type="submit">
          Prepare request
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
