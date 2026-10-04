"use client";

import { useId, useState, type FormEvent } from "react";

import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * This is a static site with no backend, so submitting opens the visitor's
 * email client with the message prefilled to `site.email`. If you add a
 * server later (a Route Handler + email provider, or a service like
 * Formspree), replace the `onSubmit` body with a `fetch` call — the form UI
 * and validation can stay as-is.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "That email doesn't look right.";
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div>
        <label htmlFor={nameId} className="text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className="mt-3 w-full border-b border-line-strong bg-transparent pb-3 text-lg text-paper outline-none transition-colors duration-300 focus:border-accent"
        />
        {errors.name && (
          <p id={`${nameId}-error`} className="mt-2 text-sm text-accent">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={emailId} className="text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className="mt-3 w-full border-b border-line-strong bg-transparent pb-3 text-lg text-paper outline-none transition-colors duration-300 focus:border-accent"
        />
        {errors.email && (
          <p id={`${emailId}-error`} className="mt-2 text-sm text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={messageId} className="text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className="mt-3 w-full resize-none border-b border-line-strong bg-transparent pb-3 text-lg text-paper outline-none transition-colors duration-300 focus:border-accent"
        />
        {errors.message && (
          <p id={`${messageId}-error`} className="mt-2 text-sm text-accent">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-5">
        <Button type="submit" showArrow={false}>
          Send Message
        </Button>
        {sent && (
          <p role="status" className="text-sm text-paper-dim">
            Opening your email client&hellip;
          </p>
        )}
      </div>
    </form>
  );
}
