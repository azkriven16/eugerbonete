import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
    return (
        <div className="relative overflow-hidden py-32">
            <div className="relative z-10 container">
                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <img
                            src="https://shadcnblocks.com/images/block/block-1.svg"
                            alt="logo"
                            className="h-16"
                        />

                        <div>
                            <h1 className="mb-6 text-2xl font-bold text-pretty lg:text-5xl">
                                The React Framework for the Web
                            </h1>
                            <p className="text-muted-foreground lg:text-xl">
                                Used by some of the world's largest companies,
                                Next.js enables you to create high-quality web
                                applications with the power of React components.
                            </p>
                        </div>
                        <div className="mt-4 flex justify-center gap-2">
                            <Button>Get Started</Button>
                            <Button variant="outline">Learn Next.js</Button>
                        </div>
                        <div className="mt-2 text-muted-foreground text-xs">
                            <span>~</span> npx create-next-app@latest
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Hero12 };
