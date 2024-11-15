"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Layout({ children }: PropsWithChildren) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
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
        </>
    );
}
