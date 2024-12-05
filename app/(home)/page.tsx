import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import SmoothScroll from "@/components/smooth-scroll";
import { Hero } from "./_components/hero";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/techstack";
import { Preloader } from "@/components/preloader";

export default async function Home() {
    return (
        <Preloader>
            <SmoothScroll>
                <main className="space-y-20 py-10">
                    <Hero />
                    <Experience />
                    <TechStack />
                    <Projects />
                    <Contact />
                </main>
            </SmoothScroll>
        </Preloader>
    );
}
