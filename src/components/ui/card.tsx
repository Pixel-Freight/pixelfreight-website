"use client"
import React, { ReactNode } from 'react';

type CardVariant = 'default' | 'gradient' | 'elevated' | 'noborder';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
}

export function Card({
    children,
    className = '',
    variant = 'default'
}: CardProps) {
    const baseStyles = 'p-6 md:p-8 transition-all duration-300';

    const variants = {
        default: 'bg-background border border-foreground/10',
        noborder: 'bg-background',
        gradient: 'bg-gradient-to-br from-background to-foreground/5 border border-foreground/5 hover:shadow-lg hover:shadow-primary/20',
        elevated: 'bg-background border border-foreground/10 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
    };

    return (
        <div className={`overflow-hidden ${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={className}>{children}</div>;
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
    return <h3 className={`text-xl font-semibold mb-3 ${className}`}>{children}</h3>;
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
    return <p className={`text-foreground/80 ${className}`}>{children}</p>;
}

// New animated card specifically for statistics
export function StatCard({
    value,
    label,
    delay = 0
}: {
    value: string;
    label: string;
    delay?: number;
}) {
    return (
        <div
            className="relative overflow-hidden group h-full"
            style={{
                animation: `fadeInUp 0.6s ease-out ${delay}ms both`,
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card
                className="h-full bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group-hover:scale-[1.02]"
                variant="noborder"
            >
                <CardContent className="relative z-10">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {value}
                    </div>
                    <CardDescription className="text-foreground/90">{label}</CardDescription>
                </CardContent>
            </Card>
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
