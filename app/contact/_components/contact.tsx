"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import WordRotate from "@/components/ui/word-rotate";
import { motion } from "framer-motion";
import { FacebookIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export const Contact = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden md:pt-20">
            <motion.div className="relative z-10 flex flex-col gap-2 justify-center items-center h-full text-center px-4">
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
                                    "Let's create something amazing together! 🌟",
                                    "Looking for a reliable developer? You've found one! 👨‍💻",
                                    "Passionate about solving problems 🚀 – let's connect!",
                                    "Need a project done? I'm here to help! 💼",
                                    "Let’s turn your ideas 💡 into reality with code 🛠️.",
                                    "Get in touch – your next great project starts here! 📞",
                                    "Excited to collaborate and build something awesome! 🤝",
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
                            You can reach me through any of the provided
                            platforms
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
                        ✨Interested? Download resume
                    </RainbowButton>
                </motion.div>

                <div className="flex gap-5 mt-10">
                    <Link href="#" className="group" prefetch={false}>
                        <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <FacebookIcon className="w-6 h-6" />
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                            Facebook
                        </div>
                    </Link>
                    <Link href="#" className="group" prefetch={false}>
                        <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <LinkedinIcon className="w-6 h-6" />
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                            LinkedIn
                        </div>
                    </Link>
                    <Link href="#" className="group" prefetch={false}>
                        <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <GithubIcon className="w-6 h-6" />
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                            GitHub
                        </div>
                    </Link>
                    <Link href="#" className="group" prefetch={false}>
                        <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <MailIcon className="w-6 h-6" />
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                            Email
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
