import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Link from "next/link";
export default function Home() {
    return (
        <div className="flex flex-col max-w-3xl mx-auto p-4 my-10 gap-10 justify-between">
            <div>
                <h1 className="text-3xl md:text-4xl font-light leading-tight tracking-tight">
                    <span className="font-medium">
                        Crafting beautiful web apps 🌹
                    </span>{" "}
                    with care
                    <br />
                    <span className="font-semibold bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">
                        modern code. timeless design.
                    </span>
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-gray-400">
                    I specialize in frontend development with React, Next.js,
                    and Tailwind. Focused on performance, accessibility, and
                    clean design systems.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <HomeCard
                    href="/works"
                    title="Available"
                    desc="Schedule a Call"
                />
                <HomeCard href="/works" title="Works" desc="See my works" />
                <HomeCard href="/works" title="Works" desc="See my works" />
            </div>
        </div>
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
