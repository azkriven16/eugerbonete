import { Hero } from "@/components/hero";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <TechStack />
            <SpinningText className="text-lg">
                scroll down • scroll down • scroll down •
            </SpinningText>
            <TextReveal>Magic UI will change the way you design.</TextReveal>
        </main>
    );
}
