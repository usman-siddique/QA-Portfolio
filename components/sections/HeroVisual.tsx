"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Loader2 } from "lucide-react";

const testLines = [
  { label: "should complete checkout flow end-to-end", state: "pass" as const },
  { label: "validates API response schema · Postman", state: "pass" as const },
  { label: "handles concurrent auction bid conflicts", state: "pass" as const },
  { label: "cross-browser regression · Chromium, Firefox", state: "pass" as const },
  { label: "running full suite · pytest-xdist", state: "running" as const },
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <motion.div
        animate={
          shouldReduceMotion ? undefined : { y: [0, -10, 0] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="surface-sheen relative overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface-2 shadow-elevated-lg"
      >
        <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-danger/60" />
          <span className="size-2.5 rounded-full bg-accent/60" />
          <span className="size-2.5 rounded-full bg-success/60" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            regression-suite.spec.ts
          </span>
        </div>

        <div className="flex flex-col gap-3.5 px-5 py-6 sm:px-7 sm:py-8">
          {testLines.map((line, index) => (
            <motion.div
              key={line.label}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.9 + index * 0.28,
                ease: "easeOut",
              }}
              className="flex items-center gap-3 font-mono text-[13px] leading-relaxed"
            >
              {line.state === "pass" ? (
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
              ) : (
                <span className="flex size-4 shrink-0 items-center justify-center text-accent">
                  <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                </span>
              )}
              <span
                className={
                  line.state === "pass"
                    ? "text-foreground/85"
                    : "text-muted-foreground"
                }
              >
                {line.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-3.5 font-mono text-xs text-muted-foreground">
          <span>
            <span className="text-success">42 passed</span> · 0 failed
          </span>
          <span>3.2s</span>
        </div>
      </motion.div>

      {/* Decorative depth layers behind the panel */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[var(--radius-xl)] border border-border/60"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -right-6 -z-20 size-32 rounded-full bg-accent/10 blur-3xl"
      />
    </motion.div>
  );
}
