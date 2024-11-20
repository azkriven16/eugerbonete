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
            className="mt-24 space-y-8"
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
                    I’m here to bring your ideas to life. Let’s collaborate to
                    create something that drives results, engages your audience,
                    and helps your business grow. Get in touch, and let's turn
                    your vision into a reality!
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t-2 pt-10">
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
                        <li>Facebook</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Email</li>
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
                        <li>Home</li>
                        <li>Case Studies</li>
                        <li>Experience</li>
                        <li>About Me</li>
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
                        <li>Certifications</li>
                        <li>Education</li>
                        <li>Hobbies</li>
                    </ul>
                </div>
            </div>
            <div className="pt-20">
                <p>Built and DESIGNED BY ME</p>
            </div>
        </motion.section>
    );
};
