import { Cta } from "@/components/cta";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Cta />
        </main>
    );
}
