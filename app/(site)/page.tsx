import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Works } from "@/components/sections/works";

export default function page() {
    return (
        <main className="min-h-screen my-10 space-y-10 mx-4">
            <Hero />
            <Works />
            <Contact />
        </main>
    );
}
