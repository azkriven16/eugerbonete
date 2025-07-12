import ContactForm from "@/components/contact-form";
import About from "@/components/home/about";
import DevDropFeature from "@/components/home/drops";
import Home from "@/components/home/home";
import Music from "@/components/home/music";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/stack";

export default function Page() {
    return (
        <>
            <Home />
            <DevDropFeature />
            <Projects />
            <About />
            <Music />
            <TechStack />
            <div className="mx-auto max-w-3xl p-4">
                <ContactForm />
            </div>
        </>
    );
}
