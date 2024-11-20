import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { TechStack } from "@/components/techstack";

export default function TechStackPage() {
    return (
        <div className="space-y-32">
            <About />
            <TechStack />
            <Contact/>
        </div>
    );
}
