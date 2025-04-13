import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArchiveIcon,
    Bird,
    Bookmark,
    Cat,
    ChevronRight,
    Folder,
    PawPrint,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { TextAnimate } from "./magicui/text-animate";
import Balancer from "react-wrap-balancer";

export function Certifications() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col gap-5">
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="font-indie-flower text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                        >
                            My list of certifications
                        </TextAnimate>
                        <Balancer>
                            <TextAnimate
                                animation="blurInUp"
                                by="character"
                                once
                                className="text-2xl font-bold md:text-3xl lg:text-4xl font-poppins text-center"
                            >
                                “Every badge earned is proof of a battle fought
                                and won.”
                            </TextAnimate>
                        </Balancer>
                    </div>

                    <div className="mt-12 md:mt-18 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Google Gemini"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <Bookmark />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Replit"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <Cat />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Magic UI"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <Bird />
                        </IntegrationCard>

                        <IntegrationCard
                            title="VSCodium"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <PawPrint />
                        </IntegrationCard>

                        <IntegrationCard
                            title="MediaWiki"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <Folder />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Google PaLM"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
                        >
                            <ArchiveIcon />
                        </IntegrationCard>
                    </div>
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
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};
