import React, { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type FadeDirection = "up" | "down" | "left" | "right" | "none";

interface BlurFadeProps {
    children: ReactNode;
    direction?: FadeDirection;
    duration?: number;
    delay?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
    blurAmount?: number;
}

/**
 * BlurFade component that animates children with blur and fade effects when they enter the viewport
 *
 * @param children - The content to be animated
 * @param direction - The direction of the fade animation ('up', 'down', 'left', 'right', 'none')
 * @param duration - The duration of the animation in seconds
 * @param delay - The delay before the animation starts in seconds
 * @param className - Additional CSS classes to apply
 * @param threshold - The percentage of the element that needs to be visible to trigger animation (0-1)
 * @param once - If false (default), the animation will occur every time the element enters the viewport
 *               If true, the animation will only occur the first time the element enters the viewport
 * @param blurAmount - The amount of blur to apply (in pixels) during the initial state
 */
export function BlurFade({
    children,
    direction = "up",
    duration = 0.5,
    delay = 0,
    className = "",
    threshold = 0.1,
    once = false,
    blurAmount = 5,
}: BlurFadeProps) {
    const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
        threshold,
    });

    const shouldAnimate = once ? hasIntersected : isIntersecting;

    // Define the initial and animated states based on direction
    const getInitialStyles = (dir: FadeDirection) => {
        switch (dir) {
            case "up":
                return "translate-y-10 opacity-0 blur";
            case "down":
                return "translate-y-[-10px] opacity-0 blur";
            case "left":
                return "translate-x-10 opacity-0 blur";
            case "right":
                return "translate-x-[-10px] opacity-0 blur";
            case "none":
                return "opacity-0 blur";
            default:
                return "translate-y-10 opacity-0 blur";
        }
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={cn(
                "transition-all",
                getInitialStyles(direction),
                shouldAnimate &&
                    "translate-y-0 translate-x-0 opacity-100 blur-none",
                className
            )}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
                "--tw-blur": shouldAnimate ? "0" : `blur(${blurAmount}px)`,
            }}
        >
            {children}
        </div>
    );
}
