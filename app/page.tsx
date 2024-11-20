import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techstack";

export default function Page() {
    return (
        <div className="space-y-24">
            <Hero />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
        </div>
    );
}
