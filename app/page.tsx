import { Hero } from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import AnimatedTabs from "@/components/tabs";

export default function Page() {
    return (
        <main className="mx-auto max-w-3xl flex min-h-screen flex-col items-end justify-center p-4 my-20">
            <Hero />
            <AnimatedTabs />
        </main>
    );
}
