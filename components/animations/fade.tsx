import type React from "react";
import type { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type FadeDirection = "up" | "down" | "left" | "right" | "none";

interface FadeProps {
    children: ReactNode;
    direction?: FadeDirection;
    duration?: number;
    delay?: number;
    className?: string;
    threshold?: number;
    once?: boolean; // Controls if animation happens once or every time element enters viewport
}

/**
 * Fade component that animates children when they enter the viewport
 *
 * @param children - The content to be animated
 * @param direction - The direction of the fade animation ('up', 'down', 'left', 'right', 'none')
 * @param duration - The duration of the animation in seconds
 * @param delay - The delay before the animation starts in seconds
 * @param className - Additional CSS classes to apply
 * @param threshold - The percentage of the element that needs to be visible to trigger animation (0-1)
 * @param once - If false (default), the animation will occur every time the element enters the viewport
 *               If true, the animation will only occur the first time the element enters the viewport
 */
export function Fade({
    children,
    direction = "up",
    duration = 0.8,
    delay = 0.2,
    className = "",
    threshold = 0.1,
    once = false,
}: FadeProps) {
    const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
        threshold,
    });

    const shouldAnimate = once ? hasIntersected : isIntersecting;

    // Define the initial and animated states based on direction
    const getInitialStyles = (dir: FadeDirection) => {
        switch (dir) {
            case "up":
                return "translate-y-10 opacity-0";
            case "down":
                return "translate-y-[-10px] opacity-0";
            case "left":
                return "translate-x-10 opacity-0";
            case "right":
                return "translate-x-[-10px] opacity-0";
            case "none":
                return "opacity-0";
            default:
                return "translate-y-10 opacity-0";
        }
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={cn(
                "transition-all",
                getInitialStyles(direction),
                shouldAnimate && "translate-y-0 translate-x-0 opacity-100",
                className
            )}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
