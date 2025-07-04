import About from "@/components/home/about";
import Drops from "@/components/home/drops";
import Home from "@/components/home/home";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/stack";
import Videos from "@/components/home/videos";
import React from "react";

export default function Page() {
    return (
        <>
            <Home />
            <Drops />
            <Projects />
            <About />
            <Videos />
            <TechStack />
        </>
    );
}
