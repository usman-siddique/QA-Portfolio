"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email me directly.");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex items-start gap-3">

        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
        <div>
          <p className="font-medium text-foreground">Message sent.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Thanks for reaching out — I&apos;ll reply as soon as I can.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from sighted users, visible to bots that fill every field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="h-11 rounded-[var(--radius-sm)] border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-danger">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="h-11 rounded-[var(--radius-sm)] border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-danger">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="subject"
          type="text"
          className="h-11 rounded-[var(--radius-sm)] border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          {...register("subject")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="resize-none rounded-[var(--radius-sm)] border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-danger">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {status === "error" && errorMessage ? (
        <div role="alert" className="flex items-start gap-2 text-sm text-danger">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
