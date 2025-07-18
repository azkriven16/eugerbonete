"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { asciiArt1, asciiArt2 } from "@/lib/ascii";

const Hero: React.FC = () => {
    const [currentAscii, setCurrentAscii] = useState(asciiArt2);
    const lines = currentAscii.split("\n");

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const screenWidth = window.innerWidth;
            const mouseX = event.clientX;

            // Switch based on mouse position
            if (mouseX < screenWidth / 2) {
                setCurrentAscii(asciiArt2);
            } else {
                setCurrentAscii(asciiArt1);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="flex items-center justify-center h-1/3 sm:h-full">
            <pre className="text-[0.5rem] leading-[1.2] dark:text-emerald-400 text-emerald-600 sm:scale-75">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.05, delay: index * 0.05 }}
                    >
                        {line}
                    </motion.div>
                ))}
            </pre>
        </div>
    );
};

export default Hero;
