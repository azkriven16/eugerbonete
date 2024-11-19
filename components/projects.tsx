"use client";

import {
    containerVariants,
    itemVariants,
    projectVariants,
} from "@/lib/animations";
import { projects } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Projects = () => {
    const caseStudiesRef = useRef(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const caseStudiesInView = useInView(caseStudiesRef, {
        once: true,
        amount: 0.3,
    });

    return (
        <motion.section
            ref={caseStudiesRef}
            initial="hidden"
            animate={caseStudiesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
        >
            <motion.h2
                className="text-2xl font-semibold text-muted-foreground flex items-center gap-2"
                variants={itemVariants}
            >
                <span className="text-sm">01</span>
                Case Studies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative rounded-3xl overflow-hidden bg-secondary/5 border border-secondary/10 transition-colors hover:bg-secondary/50 hover:border-secondary"
                        variants={projectVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredProject(index)}
                        onHoverEnd={() => setHoveredProject(null)}
                        style={{
                            filter:
                                hoveredProject !== null &&
                                hoveredProject !== index
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
                                className="object-cover"
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
                ))}
            </div>
        </motion.section>
    );
};
