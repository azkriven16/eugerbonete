"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    itemVariants,
    workExperienceVariants,
    workItemVariants,
} from "@/lib/animations";
import { experiences } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const Experience = () => {
    const [hoveredExperience, setHoveredExperience] = useState<number | null>(
        null
    );

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={workExperienceVariants}
            className="space-y-8"
            id="experience"
        >
            <Tooltip>
                <TooltipTrigger>
                    <motion.h2
                        className="text-2xl font-semibold text-muted-foreground flex items-center gap-2"
                        variants={itemVariants}
                    >
                        <span className="text-sm">01</span>
                        Work Experience
                    </motion.h2>
                </TooltipTrigger>
                <TooltipContent
                    side="right"
                    className="bg-secondary text-secondary-foreground"
                >
                    Companies I worked for.
                </TooltipContent>
            </Tooltip>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="space-y-4 relative hover:bg-secondary/50 transition-all p-4 border rounded-lg"
                        variants={workItemVariants}
                        onHoverStart={() => setHoveredExperience(index)}
                        onHoverEnd={() => setHoveredExperience(null)}
                        style={{
                            filter:
                                hoveredExperience !== null &&
                                hoveredExperience !== index
                                    ? "blur(10px)"
                                    : "none",
                            transition: "filter 0.3s ease-in-out",
                        }}
                    >
                        <motion.p
                            className="text-sm text-muted-foreground"
                            variants={itemVariants}
                        >
                            {experience.date}
                        </motion.p>
                        {experience.logo && (
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                width={200}
                                height={200}
                            />
                        )}
                        <motion.div
                            className="space-y-2"
                            variants={itemVariants}
                        >
                            <h3 className="text-lg md:text-xl font-semibold">
                                {experience.role}, {experience.company}
                            </h3>
                            <p className="text-muted-foreground md:text-balance leading-relaxed">
                                {experience.description}
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Button
                                variant="outline"
                                className="rounded-full"
                                asChild
                            >
                                <a
                                    href={experience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Visit Link</span>
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        </motion.div>
                        {index !== experiences.length - 1 && (
                            <motion.div
                                className="mt-12 border-t border-secondary/20"
                                variants={itemVariants}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
