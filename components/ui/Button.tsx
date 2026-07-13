import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background shadow-elevated-sm hover:-translate-y-0.5 hover:bg-accent hover:text-background hover:shadow-glow",
        secondary:
          "border border-border-strong bg-surface text-foreground shadow-xs hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-elevated-sm",
        ghost: "text-foreground hover:text-accent",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(buttonStyles({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
