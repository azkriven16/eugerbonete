"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

export const Contact = () => {
    const collaborateRef = useRef(null);

    const collaborateInView = useInView(collaborateRef, {
        once: true,
        amount: 0.5,
    });

    return (
        <motion.section
            ref={collaborateRef}
            initial="hidden"
            animate={collaborateInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="pt-24 space-y-8"
        >
            <div className="space-y-5">
                <motion.h2
                    className="text-4xl md:text-7xl font-semibold"
                    variants={itemVariants}
                >
                    Let's
                    <br />
                    Collaborate
                </motion.h2>
                <motion.p
                    className="text-base md:text-xl leading-loose text-muted-foreground md:w-2/3"
                    variants={itemVariants}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia ratione molestias unde consectetur nobis fuga
                    possimus impedit quas totam, dignissimos voluptatibus natus
                    non officiis repellat consequatur aut? Nemo, eaque sed.
                </motion.p>
            </div>

            <motion.div
                className="flex flex-col space-y-8"
                variants={itemVariants}
            >
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                    <motion.a
                        href="#"
                        className="hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Behance
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Linkedin
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Email
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        X
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Dribbble
                    </motion.a>
                </div>
            </motion.div>
        </motion.section>
    );
};
