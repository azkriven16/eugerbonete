import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React, { PropsWithChildren } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <AnimatedCursor
                innerSize={16}
                outerSize={8}
                color="128, 128, 128"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
        </>
    );
}
