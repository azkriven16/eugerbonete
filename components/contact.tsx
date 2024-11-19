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
            className="pt-24 space-y-8 scroll-mt-20"
            id="contact"
        >
            <div className="space-y-5 mb-32">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {/* Strategy Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            01.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            SOCIAL LINKS
                        </h3>
                    </div>
                    <ul className="space-y-4 text-lg">
                        <li>Business Analysis</li>
                        <li>User Research</li>
                        <li>Growth Strategy</li>
                        <li>Product Management</li>
                    </ul>
                </div>

                {/* Design Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            02.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            NAVIGATION
                        </h3>
                    </div>
                    <ul className="space-y-4 text-lg">
                        <li>User Experience Design</li>
                        <li>Design Systems</li>
                        <li>Brand Identity</li>
                        <li>Motion Design</li>
                    </ul>
                </div>

                {/* Development Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            03.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            OTHERS
                        </h3>
                    </div>
                    <ul className="space-y-4 text-lg">
                        <li>React</li>
                        <li>Swift</li>
                        <li>AWS</li>
                        <li>Python</li>
                    </ul>
                </div>
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
