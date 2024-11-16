"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Loader } from "@/components/loader";

export default function Layout({ children }: PropsWithChildren) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isLoading && <Loader />}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                <Navbar />
                {children}
                <Footer />
                <div className="hidden md:block">
                    <AnimatedCursor
                        innerSize={16}
                        outerSize={8}
                        color="128, 128, 128"
                        outerAlpha={0.2}
                        innerScale={0.7}
                        outerScale={5}
                    />
                </div>
            </motion.div>
        </>
    );
}
