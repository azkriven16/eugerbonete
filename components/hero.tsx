"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const Hero = () => {
    const introRef = useRef(null);
    const introInView = useInView(introRef, { once: true, amount: 0.5 });

    return (
        <motion.section
            ref={introRef}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-5 md:space-y-10"
        >
            <motion.p
                className="text-base md:text-xl leading-loose text-muted-foreground"
                variants={itemVariants}
            >
                Hello! I'm Euger
            </motion.p>
            <motion.h1
                className="text-3xl md:text-7xl font-semibold font-sans"
                variants={itemVariants}
            >
                A Web Developer and Designer currently working as a software
                developer @ Somewhere. Studio
            </motion.h1>

            <motion.div variants={itemVariants}>
                <Button className="font-semibold text-base p-6">
                    <Sparkles fill="" />
                    Let's build something
                </Button>
            </motion.div>
        </motion.section>
    );
};
