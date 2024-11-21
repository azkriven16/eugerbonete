"use client";
import {
    itemVariants,
    projectVariants,
    techItemVariants,
    techStackVariants,
} from "@/lib/animations";
import { certifications, projects, techStack } from "@/lib/constants";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Heading } from "./heading";
import Link from "next/link";

export const Certifications = ({ number }: { number: string }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={techStackVariants}
            id="techstack"
            className="space-y-4"
        >
            <Heading number={number} text="Certifications" />
            <motion.div
                variants={projectVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {certifications.map((cert, index) => (
                    <Link href={cert.link} target="_blank" key={index}>
                        <motion.div
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
                            <div className="h-20 w-20 relative mx-8">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {cert.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {cert.description}
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
