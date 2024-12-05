"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import WordRotate from "@/components/ui/word-rotate";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden md:pt-20">
            <motion.div className="relative z-10 flex flex-col gap-5 justify-center items-center h-full text-center px-4">
                {/* Subtitle */}
                <div className="overflow-hidden flex flex-col-reverse items-center gap-2">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="text-sm md:text-lg md:tracking-widest mx-auto uppercase font-semibold"
                    >
                        <Balancer>
                            Hey! I'm Euger, a software developer.
                        </Balancer>
                    </motion.p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <motion.div
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="mr-7 md:mr-12"
                                ></motion.div>
                            </TooltipTrigger>
                            <TooltipContent>Hello there! 👋</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                {/* Name and Title */}
                <div className="max-w-5xl">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-[3.5rem] font-black leading-relaxed md:leading-tight"
                    >
                        <Balancer>
                            <WordRotate
                                words={[
                                    "Crafting 🔨 websites 🌐 with precision 📐, one <div> at a time ⌚.",
                                    "Designing 💻 elegant and functional user interfaces 🎨.",
                                    "Developing 🚀 scalable solutions to complex problems 🤔.",
                                    "Transforming ideas 💡 into reality 🛠️ with code.",
                                    "Building responsive and modern applications 📱 for all devices.",
                                    "Optimizing ⚙️ for performance and user experience 🌟.",
                                    "Engineering the future 🔮 of web technologies.",
                                ]}
                            />
                        </Balancer>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="text-base md:text-lg md:tracking-wide text-muted-foreground mx-auto"
                    >
                        <Balancer>
                            Worked with 2 companies, 1+ year of experience
                            working with React, Next.js, and TypeScript.
                            Currently a student, graduating in 2025, while
                            working a part-time dev.
                        </Balancer>
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    <RainbowButton className="rounded-full h-14 md:h-16 text-lg md:text-xl p-5 md:p-8 mt-10">
                        <Link href="/contact" className="flex items-center">
                            🤔 Have a project? Lets talk
                        </Link>
                    </RainbowButton>
                </motion.div>
            </motion.div>
        </div>
    );
};
