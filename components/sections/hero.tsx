"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RainbowButton } from "../ui/rainbow-button";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section>
            <Card className="mt-10 md:mt-32">
                <CardHeader>
                    <h1 className="text-5xl md:text-8xl font-bold font-sans">
                        Hi. I'm Euger Bonete A{" "}
                        <span className="relative inline-block pb-2">
                            web developer
                            <motion.svg
                                viewBox="0 0 300 13"
                                className="absolute -bottom-3 left-0 w-full h-16 text-primary"
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.path
                                    d="M0,15 L300,15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    variants={{
                                        hidden: { pathLength: 0, opacity: 0 },
                                        visible: {
                                            pathLength: 1,
                                            opacity: 1,
                                            transition: {
                                                pathLength: {
                                                    duration: 2,
                                                    ease: "easeInOut",
                                                    delay: 0.5,
                                                },
                                                opacity: { duration: 0.5 },
                                            },
                                        },
                                    }}
                                />
                            </motion.svg>
                        </span>
                    </h1>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-5 items-center">
                    <p className="text-xl text-muted-foreground leading-loose">
                        Designing and{" "}
                        <span
                            className={cn(
                                badgeVariants({ variant: "secondary" })
                            )}
                        >
                            developing
                        </span>{" "}
                        interactive, visually captivating{" "}
                        <span
                            className={cn(
                                badgeVariants({ variant: "secondary" })
                            )}
                        >
                            websites
                        </span>{" "}
                        that focus on usability, performance, and overall user
                        satisfaction.
                    </p>
                    <Avatar className="h-24 w-24">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardContent>
                <CardFooter className="justify-center gap-2 mt-10">
                    <RainbowButton className="font-semibold">
                        Let's Work Together
                    </RainbowButton>
                    <Button
                        className="font-semibold"
                        size="lg"
                        variant="secondary"
                    >
                        My CV
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
};
