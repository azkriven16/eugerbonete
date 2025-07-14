import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import Hero from "../hero";
export default function Home() {
    return (
        <section className="flex flex-col max-w-3xl mx-auto p-4 my-10 gap-10 justify-between">
            <div className="flex flex-col md:flex-row gap-5">
                <Hero />
                <div>
                    <h1 className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-center sm:text-left">
                        <span className="font-medium">
                            Frontend Developer 🥀
                        </span>{" "}
                        with meticulous attention
                        <br />
                        <span className="font-semibold text-muted-foreground">
                            cutting-edge code. enduring design.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-gray-400">
                        I specialize in frontend development with React,
                        Next.js, and Tailwind. Focused on performance,
                        accessibility, and clean design systems.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <HomeCard href="/works" title="Projects" desc="See my works" />
                <HomeCard href="/contact" title="Contact" desc="Get in touch" />
                <HomeCard href="/cv" title="Resume" desc="If you're curious" />
            </div>
        </section>
    );
}

function HomeCard({
    title,
    desc,
    href,
}: {
    title: string;
    desc: string;
    href: string;
}) {
    return (
        <Link href={href}>
            <Card className="md:w-52">
                <CardHeader className="p-4">
                    <div className="flex justify-between">
                        <CardDescription>{title}</CardDescription>
                        <GripVertical className="text-muted-foreground size-4" />
                    </div>
                    <CardTitle>{desc}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    );
}
