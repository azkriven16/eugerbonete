"use client";

import { cn } from "@/lib/utils";
import { TextEffect } from "./ui/text-effect";
import { useInView } from "react-intersection-observer";

export interface HeadingProps {
    title: string;
    subtitle: string;
    className?: string;
}

export default function Heading({ title, subtitle, className }: HeadingProps) {
    const { ref, inView } = useInView({
        delay: 500,
    });

    return (
        <div
            ref={ref}
            className={cn(
                "relative z-10 mx-auto max-w-4xl text-center",
                className,
                inView ? "animate-in" : "animate-out"
            )}
        >
            <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-4xl font-bold sm:text-5xl md:text-6xl leading-snug"
            >
                {title}
            </TextEffect>
            <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-12 max-w-2xl text-pretty text-lg"
            >
                {subtitle}
            </TextEffect>
        </div>
    );
}
