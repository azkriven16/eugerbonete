"use client";

import { FacebookIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-10 text-center">
                    <div className="space-y-10">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Get in Touch 💌
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I'm always excited to connect with new people. Feel
                            free to reach out through any of the channels below.
                            🌟
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Link href="#" className="group" prefetch={false}>
                            <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                <FacebookIcon className="w-6 h-6" />
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                Facebook
                            </div>
                        </Link>
                        <Link href="#" className="group" prefetch={false}>
                            <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                <LinkedinIcon className="w-6 h-6" />
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                LinkedIn
                            </div>
                        </Link>
                        <Link href="#" className="group" prefetch={false}>
                            <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                <GithubIcon className="w-6 h-6" />
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                GitHub
                            </div>
                        </Link>
                        <Link href="#" className="group" prefetch={false}>
                            <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                <MailIcon className="w-6 h-6" />
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                Email
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
