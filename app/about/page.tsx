import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import SmoothScroll from "@/components/smooth-scroll";
import { Hero } from "./_components/hero";
import { Experience } from "../../components/sections/experience";
import { TechStack } from "../../components/sections/techstack";
import { Preloader } from "@/components/preloader";
import Education from "@/components/sections/education";
import Certificates from "@/components/sections/certificates";

export default function About() {
    return (
        <Preloader>
            <SmoothScroll>
                <main className="space-y-20 py-10">
                    <Hero />
                    <Experience />
                    <TechStack />
                    <Certificates />
                    <Education />
                    <Contact />
                </main>
            </SmoothScroll>
        </Preloader>
    );
}
