import { Certifications } from "@/components/certifications";
import Chatbot from "@/components/chatbot";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
    return (
        <main>
            <Chatbot />
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Certifications />
            <Testimonial />
        </main>
    );
}
