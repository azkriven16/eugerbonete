"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md w-full space-y-6"
            >
                <Image
                    src="/gojo.gif"
                    alt="Loading"
                    height={200}
                    width={200}
                    className="rounded-full aspect-square object-cover mx-auto"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-muted-foreground mb-6"
                >
                    🚀 Loading the content... Hang tight! 🎉
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-2 bg-secondary rounded-full overflow-hidden"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{
                            width: ["0%", "50%", "80%", "100%"],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            },
                        }}
                        className="h-full bg-primary rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Decorative background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </motion.div>
        </div>
    );
}
