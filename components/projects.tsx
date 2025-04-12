import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    CloudIcon,
    CodeIcon,
    MessageCircleIcon,
    MoveDiagonal2Icon,
    WatchIcon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Balancer from "react-wrap-balancer";
import { TextAnimate } from "./magicui/text-animate";

export function Projects() {
    return (
        <section className="min-h-screen p-4 flex flex-col items-center justify-center font-poppins">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col gap-5 text-center">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="font-indie-flower self-start text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                    >
                        Kamusta' ka
                    </TextAnimate>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-3xl font-bold md:text-4xl lg:text-5xl text-center max-w-4xl font-poppins"
                        >
                            Some projects I've worked on.
                        </TextAnimate>
                    </Balancer>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-muted-foreground text-2xl max-w-4xl text-center"
                        >
                            Crafting seamless experiences and bold visuals. High
                            school student by day, creative thinker, and
                            aspiring innovator by night.
                        </TextAnimate>
                    </Balancer>
                </div>

                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <IntegrationCard
                        title="CNBlocks"
                        description="A collection of Next.js components and utilities for building fast and accessible websites."
                        link="https://github.com/meschacirung/cnblocks"
                    >
                        <CloudIcon />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Magic UI"
                        description="A collection of Next.js components and utilities for building fast and accessible websites."
                    >
                        <MessageCircleIcon />
                    </IntegrationCard>

                    <IntegrationCard
                        title="VSCodium"
                        description="A collection of Next.js components and utilities for building fast and accessible websites."
                    >
                        <WatchIcon />
                    </IntegrationCard>

                    <IntegrationCard
                        title="MediaWiki"
                        description="A collection of Next.js components and utilities for building fast and accessible websites."
                    >
                        <MoveDiagonal2Icon />
                    </IntegrationCard>

                    <IntegrationCard
                        title="Google PaLM"
                        description="A collection of Next.js components and utilities for building fast and accessible websites."
                    >
                        <CodeIcon />
                    </IntegrationCard>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    title,
    description,
    children,
    link = "https://github.com/meschacirung/cnblocks",
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    link?: string;
}) => {
    return (
        <Card className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                        {description}
                    </p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none"
                    >
                        <Link href={link}>Learn More</Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};
