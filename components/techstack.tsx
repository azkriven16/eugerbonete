"use client";
import {
    itemVariants,
    techItemVariants,
    techStackVariants,
} from "@/lib/animations";
import { techStack } from "@/lib/constants";
import { motion } from "framer-motion";
import { Heading } from "./heading";

export const TechStack = ({ number }: { number: string }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={techStackVariants}
            id="techstack"
            className="space-y-4"
        >
            <Heading number={number} text="Tools" />

            <motion.div
                className="flex flex-wrap gap-2 md:gap-4 mt-4"
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
