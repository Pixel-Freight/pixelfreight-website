import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center text-sm font-medium transition-all duration-300 ease-out overflow-hidden relative group',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-accent',
                bordered: [
                    'bg-transparent border border-primary text-primary',
                    'before:absolute before:inset-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out',
                    'before:origin-left before:scale-x-0 hover:before:scale-x-100',
                    'relative hover:text-white',
                ].join(' '),
                linkblock: [
                    'bg-primary text-white',
                    'before:absolute before:inset-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out',
                    'before:origin-left before:scale-x-0 hover:before:scale-x-100',
                    'relative',
                ].join(' '),
                accent: [
                    'bg-accent text-white',
                    'before:absolute before:inset-0 before:bg-white/10 before:transition-transform before:duration-300 before:ease-out',
                    'before:origin-left before:scale-x-0 hover:before:scale-x-100',
                    'relative',
                ].join(' '),
                secondary: [
                    'bg-secondary text-white',
                    'before:absolute before:inset-0 before:bg-white/10 before:transition-transform before:duration-300 before:ease-out',
                    'before:origin-left before:scale-x-0 hover:before:scale-x-100',
                    'relative',
                ].join(' '),
                ghost: [
                    'text-foreground hover:text-white',
                    'before:absolute before:inset-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out',
                    'before:origin-left before:scale-x-0 hover:before:scale-x-100',
                    'relative',
                ].join(' '),
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    className?: string;
    children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
};

type ButtonAsLink = ButtonBaseProps & Omit<LinkProps, keyof ButtonBaseProps> & {
    as: 'link';
};

type ButtonAsExternal = ButtonBaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a';
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        if (asChild) {
            const Comp = Slot;
            return (
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref as any}
                    {...props}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                    </span>
                </Comp>
            );
        }

        if ('as' in props && props.as === 'link') {
            const { as, ...linkProps } = props;
            return (
                <Link
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...linkProps as LinkProps}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                    </span>
                </Link>
            );
        }

        if ('as' in props && props.as === 'a') {
            const { as, ...anchorProps } = props;
            return (
                <a
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...anchorProps}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                    </span>
                </a>
            );
        }

        // Default to button
        const { as, ...buttonProps } = props as any;
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref as React.Ref<HTMLButtonElement>}
                type={buttonProps.type || 'button'}
                {...buttonProps}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
