"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    size?: "small" | "medium" | "large";
    featured?: boolean;
}

export const Projects = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    // Debounced mouse move handler for better performance
    useEffect(() => {
        let frameId: number;
        let lastUpdate = 0;
        const THROTTLE_MS = 16; // ~60fps

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastUpdate < THROTTLE_MS) return;

            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                lastUpdate = now;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, []);

    const projects: Project[] = [
        {
            id: "1",
            title: "AtomAI",
            description: "Social Media Growth Made Easy",
            imageUrl:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21rdWsxaHJrOHhodzRld3Z3NTZvYnNhZ2l5amI3MjZ0bXZtYm55YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif",
            link: "/projects/atomai",
            size: "large",
            featured: true,
        },
        {
            id: "2",
            title: "Better Designer",
            description: "Designer portfolio and resources",
            imageUrl:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJ2eHVidTl1dGRqaTZqd3Q1Z2VzOGptbnJ6a2ExM2VxeXY3dmJydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378fCuNu3j4epLEI/giphy.gif",
            link: "/projects/designer",
            size: "medium",
        },
        {
            id: "3",
            title: "Lio",
            description: "Unleash Your Full Potential with Reality",
            imageUrl:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVlbWcxcnNwanJtbzM3dXRnYnNua2tvdGRzbWN1aHBlYXJxMDdkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif",
            link: "/projects/lio",
            size: "large",
        },
        {
            id: "4",
            title: "Adrian Carter",
            description: "Personal portfolio site for creative work",
            imageUrl:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG5ja3I3emJsNHFtbHhxbDFlNWJwcGxnN3Q3M3R3emVrdnNxMTFpcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCTfyhYawdOXcFW/giphy.gif",
            link: "/projects/portfolio",
            size: "medium",
        },
    ];

    return (
        <div className="w-full py-12 bg-background relative mx-auto max-w-5xl">
            {/* Custom cursor element that follows behind the real cursor */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: activeProjectId ? 1 : 0,
                    width: "32px",
                    height: "32px",
                }}
            >
                <div className="w-full h-full rounded-full bg-white/90"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    {projects.map((project) => (
                        <BentoCard
                            key={project.id}
                            project={project}
                            isActive={activeProjectId === project.id}
                            setActiveProjectId={setActiveProjectId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface BentoCardProps {
    project: Project;
    isActive: boolean;
    setActiveProjectId: (id: string | null) => void;
}

const BentoCard = ({
    project,
    isActive,
    setActiveProjectId,
}: BentoCardProps) => {
    // Memoized event handlers to avoid unnecessary re-renders
    const handleMouseEnter = useCallback(() => {
        setActiveProjectId(project.id);
    }, [project.id, setActiveProjectId]);

    const handleMouseLeave = useCallback(() => {
        setActiveProjectId(null);
    }, [setActiveProjectId]);

    // Determine grid span based on size
    const sizeClasses = {
        small: "col-span-1 row-span-1",
        medium: "col-span-1 md:col-span-2 row-span-1",
        large: "col-span-1 md:col-span-2 row-span-2",
    }[project.size || "small"];

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg ${sizeClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isActive ? "pointer" : "default" }}
        >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

            <div className="relative h-full w-full">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover will-change-transform ${
                        isActive
                            ? "transition-transform duration-700 ease-out transform scale-105"
                            : "transition-transform duration-500 ease-out transform scale-100"
                    }`}
                    priority={project.featured}
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transition-opacity duration-300">
                    <h3
                        className={`text-xl md:text-2xl font-bold text-white mb-2 transition-transform duration-300 ease-out will-change-transform ${
                            isActive ? "-translate-y-1" : "translate-y-0"
                        }`}
                    >
                        {project.title}
                    </h3>
                    <p
                        className={`text-sm text-white/80 max-w-xs transition-all duration-300 ease-out will-change-transform ${
                            isActive ? "opacity-100" : "opacity-80"
                        }`}
                    >
                        {project.description}
                    </p>

                    <div
                        className={`mt-4 transition-all duration-300 ease-out will-change-transform ${
                            isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        <a
                            href={project.link}
                            className="inline-flex items-center text-white hover:text-primary-foreground"
                            aria-label={`View ${project.title} project`}
                        >
                            <span className="mr-1 text-sm font-medium">
                                Explore
                            </span>
                            <span className="rounded-full p-1 bg-white/20 backdrop-blur-sm">
                                <ArrowUpRight
                                    size={14}
                                    className="text-white"
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Interactive corner indicator */}
            <div
                className={`absolute top-4 right-4 z-30 transition-all duration-300 ease-out will-change-transform ${
                    isActive
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-50 rotate-90"
                }`}
            >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Plus size={14} className="text-primary-foreground" />
                </div>
            </div>
        </div>
    );
};

// Export the Projects component as the default export
export default Projects;

// Also export named constant with project data
export const projects = [
    {
        id: "1",
        title: "AtomAI",
        description: "Social Media Growth Made Easy",
        imageUrl:
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21rdWsxaHJrOHhodzRld3Z3NTZvYnNhZ2l5amI3MjZ0bXZtYm55YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif",
        link: "/projects/atomai",
        size: "large",
        featured: true,
    },
    {
        id: "2",
        title: "Better Designer",
        description: "Designer portfolio and resources",
        imageUrl:
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJ2eHVidTl1dGRqaTZqd3Q1Z2VzOGptbnJ6a2ExM2VxeXY3dmJydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378fCuNu3j4epLEI/giphy.gif",
        link: "/projects/designer",
        size: "medium",
    },
    {
        id: "3",
        title: "Lio",
        description: "Unleash Your Full Potential with Reality",
        imageUrl:
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVlbWcxcnNwanJtbzM3dXRnYnNua2tvdGRzbWN1aHBlYXJxMDdkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif",
        link: "/projects/lio",
        size: "large",
    },
    {
        id: "4",
        title: "Adrian Carter",
        description: "Personal portfolio site for creative work",
        imageUrl:
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG5ja3I3emJsNHFtbHhxbDFlNWJwcGxnN3Q3M3R3emVrdnNxMTFpcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCTfyhYawdOXcFW/giphy.gif",
        link: "/projects/portfolio",
        size: "medium",
    },
];
