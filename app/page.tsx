import ContactForm from "@/components/contact-form";
import About from "@/components/home/about";
import Drops from "@/components/home/drops";
import Home from "@/components/home/home";
import Projects from "@/components/home/projects";
import TechStack from "@/components/home/stack";
import Music from "@/components/home/music";

export default function Page() {
    return (
        <>
            <Home />
            <Drops />
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
