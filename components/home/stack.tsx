"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiGithub,
    SiVercel,
    SiFigma,
} from "react-icons/si";

const techStackItems = [
    {
        name: "Next.js",
        category: "Full-stack Framework",
        icon: <SiNextdotjs className="w-8 h-8 text-foreground" />,
    },
    {
        name: "React",
        category: "Frontend Library",
        icon: <SiReact className="w-8 h-8 text-blue-500" />,
    },
    {
        name: "TypeScript",
        category: "Language",
        icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
    },
    {
        name: "Tailwind CSS",
        category: "CSS Framework",
        icon: <SiTailwindcss className="w-8 h-8 text-teal-400" />,
    },
    {
        name: "Node.js",
        category: "Backend Runtime",
        icon: <SiNodedotjs className="w-8 h-8 text-green-600" />,
    },
    {
        name: "MongoDB",
        category: "NoSQL Database",
        icon: <SiMongodb className="w-8 h-8 text-green-700" />,
    },
    {
        name: "PostgreSQL",
        category: "Relational Database",
        icon: <SiPostgresql className="w-8 h-8 text-blue-700" />,
    },
    {
        name: "Prisma",
        category: "ORM",
        icon: <SiPrisma className="w-8 h-8 text-teal-600" />,
    },
    {
        name: "Git",
        category: "Version Control",
        icon: <SiGit className="w-8 h-8 text-orange-600" />,
    },
    {
        name: "GitHub",
        category: "Code Hosting",
        icon: <SiGithub className="w-8 h-8 text-foreground" />,
    },
    {
        name: "Vercel",
        category: "Deployment",
        icon: <SiVercel className="w-8 h-8 text-foreground" />,
    },
    {
        name: "Figma",
        category: "Design Tool",
        icon: <SiFigma className="w-8 h-8 text-purple-600" />,
    },
];

export default function TechStack() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            // Define your small screen breakpoint, e.g., 640px for 'sm' in Tailwind CSS
            setIsSmallScreen(window.innerWidth < 640);
        };

        // Check on initial render
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Determine which items to display
    const displayedTechItems = isSmallScreen
        ? techStackItems.slice(0, Math.ceil(techStackItems.length / 2)) // Display half on small screens
        : techStackItems; // Display all on larger screens

    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10">
            <h3 className="text-sm text-muted-foreground mb-2 font-medium">
                Software Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-4 bg-secondary p-4 rounded-lg">
                {displayedTechItems.map((item, index) => (
                    <TechStackCard
                        key={index}
                        name={item.name}
                        category={item.category}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}

interface TechStackCardProps {
    name: string;
    category: string;
    icon?: React.ReactNode;
}

function TechStackCard({ name, category, icon }: TechStackCardProps) {
    return (
        <div className="border-none flex bg-none gap-4 items-center p-2">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div className="flex flex-col">
                <CardTitle className="flex gap-2 text-lg font-semibold text-foreground">
                    {name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                    {category}
                </CardDescription>
            </div>
        </div>
    );
}
