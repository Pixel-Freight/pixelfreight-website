"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all duration-300 ease-out overflow-hidden relative group",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-accent",
        bordered: "bg-transparent border border-primary text-primary relative hover:text-white before:absolute before:inset-0 before:bg-accent before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        linkblock: "bg-primary text-white relative before:absolute before:inset-0 before:bg-accent before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        accent: "bg-accent text-white relative before:absolute before:inset-0 before:bg-white/10 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        secondary: "bg-secondary text-white relative before:absolute before:inset-0 before:bg-white/10 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        ghost: "text-foreground hover:text-white relative before:absolute before:inset-0 before:bg-accent before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    as: "link";
  };

type ButtonAsExternal = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  if (asChild) {
    return (
      <Slot
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLElement>}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Slot>
    );
  }

  if ("as" in props && props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, ...linkProps } = props;
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(linkProps as LinkProps)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  if ("as" in props && props.as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, ...anchorProps } = props;
    return (
      <a
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...anchorProps}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type || "button"}
      {...buttonProps}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
