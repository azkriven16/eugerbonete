import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { TechStack } from "@/components/techstack";

export default function AboutPage() {
    return (
        <div className="space-y-32">
            <About />
            <TechStack />
            <Certifications />
            <Education />
            <Contact />
        </div>
    );
}
