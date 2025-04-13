import { Testimonial } from "@/components/testimonial";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Certifications } from "@/components/certifications";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Certifications />
            <Testimonial />
        </main>
    );
}
