"use client";

import { transitionVariants } from "@/lib/transition";
import { AnimatedGroup } from "./ui/animated-group";
import { PropsWithChildren, CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export interface SectionProps extends PropsWithChildren {
    className?: string;
}

export default function Section({ children, className }: SectionProps) {
    const { ref, inView } = useInView({
        delay: 500,
    });

    return (
        <section
            ref={ref}
            className={`relative mx-auto max-w-6xl px-6 ${className} ${
                inView ? "animate-in" : "animate-out"
            }`}
        >
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.05,
                                delayChildren: 0.75,
                            },
                        },
                    },
                    ...transitionVariants,
                }}
                className="flex flex-col"
            >
                {children}
            </AnimatedGroup>
        </section>
    );
}
