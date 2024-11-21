"use client";
import { containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heading } from "./heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Sparkles } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

export const Contact = ({ number }: { number: string }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
            id="contact"
        >
            <div className="space-y-5 py-10">
                <Tooltip>
                    <TooltipTrigger>
                        <Heading number={number} text="Contact" />
                    </TooltipTrigger>
                    <TooltipContent
                        side="right"
                        className="bg-secondary text-secondary-foreground"
                    >
                        Pls hire me 🙏
                    </TooltipContent>
                </Tooltip>
                <motion.h2
                    className="text-4xl md:text-7xl font-semibold"
                    variants={itemVariants}
                >
                    Let's
                    <br />
                    Collaborate
                </motion.h2>
                <motion.p
                    className="text-base md:text-xl leading-loose text-muted-foreground"
                    variants={itemVariants}
                >
                    I’m here to bring your ideas to life. Let’s collaborate to
                    create something that drives results, engages your audience,
                    and helps your business grow. Get in touch, and let's turn
                    your vision into a reality!
                </motion.p>
            </div>

            <motion.div variants={itemVariants} className="pb-20">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="/contact">
                            <RainbowButton className="gap-3">
                                <Sparkles fill="" />
                                Let's build something
                            </RainbowButton>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className="bg-secondary text-secondary-foreground"
                        side="bottom"
                    >
                        Lets talk 😉
                    </TooltipContent>
                </Tooltip>
            </motion.div>
        </motion.section>
    );
};
