"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { profile } from "@/content/profile";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-elevated-sm"
          : "border-border/60 bg-background/75",
      )}
    >
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <Container className="flex h-20 items-center justify-between">
        <Logo name={profile.name} />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href={profile.resumeUrl} variant="secondary" size="sm">
            Resume
          </Button>
          <Button href="/#contact" size="sm">
            Contact
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-9 items-center justify-center text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background p-6 shadow-elevated-lg">
                <Dialog.Title className="sr-only">
                  Navigation menu
                </Dialog.Title>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-foreground">
                    Menu
                  </span>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="inline-flex size-9 items-center justify-center text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav
                  aria-label="Mobile"
                  className="mt-8 flex flex-col gap-6"
                >
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-xl font-medium text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href={profile.resumeUrl}
                    variant="secondary"
                    onClick={() => setOpen(false)}
                  >
                    Download Resume
                  </Button>
                  <Button href="/#contact" onClick={() => setOpen(false)}>
                    Contact Me
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
