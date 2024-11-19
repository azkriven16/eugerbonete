"use client";
import { techItemVariants, techStackVariants } from "@/lib/animations";
import { techStack } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TechStack = () => {
    const techStackRef = useRef(null);
    const techStackInView = useInView(techStackRef, {
        once: true,
        amount: 0.5,
    });

    return (
        <motion.section
            ref={techStackRef}
            initial="hidden"
            animate={techStackInView ? "visible" : "hidden"}
            variants={techStackVariants}
        >
            <motion.div
                className="flex flex-wrap gap-2 md:gap-4"
                variants={techStackVariants}
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm md:text-base"
                        variants={techItemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tech}
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};
