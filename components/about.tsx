"use client";
import { itemVariants, techStackVariants } from "@/lib/animations";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={techStackVariants}
            id="techstack"
            className="space-y-4"
        >
            <motion.h2
                className="text-2xl font-semibold text-muted-foreground flex items-center gap-2 mb-10"
                variants={itemVariants}
            >
                <span className="text-sm">03</span>
                About Me
            </motion.h2>
            <motion.h2
                className="text-4xl md:text-7xl font-semibold"
                variants={itemVariants}
            >
                Hi,
                <br />
                I'm Euger Bonete
            </motion.h2>
            <motion.p
                className="text-base md:text-lg leading-loose text-muted-foreground"
                variants={itemVariants}
            >
                I'm Euger, a software engineer focused on building intuitive web
                apps with clean code and innovative solutions. Since starting in
                2020, I've gained 1+ year of experience working with React,
                Next.js, and TypeScript. I'm currently a student, graduating in
                2025, while working a part-time dev job and expanding my skills
                with new technologies.
            </motion.p>
        </motion.section>
    );
};
