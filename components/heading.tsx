"use client";
import { itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";

export const Heading = ({ number, text }: { number: string; text: string }) => {
    return (
        <motion.h2
            className="text-2xl font-semibold text-muted-foreground flex items-center gap-2"
            variants={itemVariants}
        >
            <span className="text-sm">{number}</span>
            {text}
        </motion.h2>
    );
};
