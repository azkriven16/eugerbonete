"use client";

import { Button } from "@/components/ui/button";
import {
    containerVariants,
    itemVariants,
    projectVariants,
} from "@/lib/animations";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heading } from "./heading";

export const Projects = ({ number }: { number: string }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
            id="projects"
        >
            <Heading number={number} text="Case Studies" />
            <motion.div
                variants={projectVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {projects.map((project, index) => (
                    <Link href={project.link}>
                        <motion.div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden bg-secondary/5 border border-secondary/10 transition-colors hover:bg-secondary/50 hover:border-secondary"
                            variants={projectVariants}
                            whileHover="hover"
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            style={{
                                filter:
                                    hovered !== null && hovered !== index
                                        ? "blur(10px)"
                                        : "none",
                                transition: "filter 0.3s ease-in-out",
                            }}
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={cn(
                                        "object-contain group-hover:scale-105 transition-transform duration-300",
                                        project.title === "Nisuboard" &&
                                            "translate-y-10"
                                    )}
                                />
                            </div>
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {project.category}
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full group-hover:bg-secondary"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    );
};
