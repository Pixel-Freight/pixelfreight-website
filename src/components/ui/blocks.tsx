"use client";

import { useEffect, useRef, useState } from 'react';

interface BlocksProps {
    activeDivsClass: string;
    divClass: string;
    classname?: string;
    containerRef: React.RefObject<HTMLElement | null>;
    activeDivs: Record<number, Set<number>>;
}

export default function Blocks({
    activeDivsClass,
    divClass,
    classname = '',
    containerRef,
    activeDivs,
}: BlocksProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeBlocks, setActiveBlocks] = useState<Record<number, Set<number>>>({});
    const observer = useRef<IntersectionObserver>(null);

    useEffect(() => {
        if (containerRef.current) {
            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.current?.disconnect();
                    }
                },
                {
                    threshold: 0.1,
                }
            );

            observer.current.observe(containerRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [containerRef]);

    useEffect(() => {
        if (isVisible) {
            // Convert activeDivs to array of [row, col] pairs
            const entries = Object.entries(activeDivs).flatMap(([row, cols]) =>
                Array.from(cols).map((col) => [parseInt(row), col])
            );

            // Animate blocks in sequence
            entries.forEach(([row, col], index) => {
                setTimeout(() => {
                    setActiveBlocks((prev) => ({
                        ...prev,
                        [row]: new Set(prev[row] || []).add(col),
                    }));
                }, index * 50); // 50ms delay between each block
            });
        }
    }, [isVisible, activeDivs]);

    return (
        <div className={`grid grid-cols-10 grid-rows-6 gap-0 h-full w-full ${classname}`}>
            {Array.from({ length: 6 }).map((_, rowIndex) =>
                Array.from({ length: 10 }).map((_, colIndex) => {
                    const isActive = activeBlocks[rowIndex]?.has(colIndex) || false;
                    return (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`border transition-all duration-300 ${isActive ? activeDivsClass : ''
                                } ${divClass}`}
                        />
                    );
                })
            )}
        </div>
    );
}
