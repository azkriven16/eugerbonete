import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techstack";

export default function Page() {
    return (
        <div className="space-y-24">
            <Hero />
            <Experience number="01" />
            <Projects number="02" />
            <About number="03" />
            <TechStack number="04" />
            <Education number="05" />
            <Certifications number="06" />
            <Contact number="07" />
        </div>
    );
}
