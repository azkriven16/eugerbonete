"use client";
import {
    itemVariants,
    techItemVariants,
    techStackVariants,
} from "@/lib/animations";
import { techStack } from "@/lib/constants";
import { motion } from "framer-motion";

export const TechStack = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={techStackVariants}
            id="techstack"
            className=""
        >
            <motion.h2
                className="text-2xl font-semibold text-muted-foreground flex items-center gap-2 mb-10"
                variants={itemVariants}
            >
                <span className="text-sm">04</span>
                Tools
            </motion.h2>
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
