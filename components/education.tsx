"use client";
import { containerVariants, itemVariants } from "@/lib/animations";
import { education } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Heading } from "./heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const Education = ({ number }: { number: string }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-24 space-y-4"
            id="contact"
        >
            <div className="space-y-5 mb-32">
                <Tooltip>
                    <TooltipTrigger>
                        <Heading number={number} text="Education" />
                    </TooltipTrigger>
                    <TooltipContent
                        side="right"
                        className="bg-secondary text-secondary-foreground"
                    >
                        My educational background
                    </TooltipContent>
                </Tooltip>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
                    {education.map((education, index) => (
                        <motion.div
                            key={index}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            className="space-y-4 relative border hover:bg-secondary transition-all p-4 rounded-lg"
                            style={{
                                filter:
                                    hovered !== null && hovered !== index
                                        ? "blur(10px)"
                                        : "none",
                                transition: "filter 0.3s ease-in-out",
                            }}
                        >
                            <motion.p
                                className="text-sm text-muted-foreground"
                                variants={itemVariants}
                            >
                                {education.date}
                            </motion.p>
                            {education.logo && (
                                <Image
                                    src={education.logo}
                                    alt={education.school}
                                    width={100}
                                    height={100}
                                />
                            )}
                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <p className="text-muted-foreground md:text-balance leading-relaxed">
                                    {education.school}
                                </p>
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {education.award}
                                </h3>
                                <p className="text-muted-foreground md:text-balance leading-relaxed">
                                    {education.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
