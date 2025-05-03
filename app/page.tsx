import { Commands } from "@/components/commands";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import AnimatedTabs from "@/components/tabs";

export default function Page() {
    return (
        <main className="mx-auto max-w-2xl flex min-h-screen flex-col items-start justify-center p-4 my-20">
            {/* <Header /> */}
            <Hero />
            <Commands/>
            <AnimatedTabs />
        </main>
    );
}
