import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Education() {
    return (
        <div className="space-y-8 px-4 md:px-6">
            <h2 className="text-md font-semibold text-center mb-5 uppercase">
                My educational journey
            </h2>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-8 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                {/* University */}
                <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background shadow-md shadow-muted-foreground/5 ring-1 ring-muted-foreground/20 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Image
                            src="/nisu.webp"
                            alt="NISU Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </div>
                    <Card className="w-[calc(100%-5rem)] md:w-[calc(50%-3.5rem)]">
                        <CardContent className="p-4">
                            <div className="mb-1 text-xs text-muted-foreground">
                                2021 - 2025
                            </div>
                            <div className="mb-2 font-semibold">
                                Northern Iloilo State University
                            </div>
                            <div className="mb-3 text-lg font-bold tracking-tight">
                                Bachelor of Science in Information Technology
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Pursuing a degree in Information Technology,
                                focusing on computer science, software
                                engineering, and database management.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* High School */}
                <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background shadow-md shadow-muted-foreground/5 ring-1 ring-muted-foreground/20 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Image
                            src="/ikgca.webp"
                            alt="IKGCA Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </div>
                    <Card className="w-[calc(100%-5rem)] md:w-[calc(50%-3.5rem)]">
                        <CardContent className="p-4">
                            <div className="mb-1 text-xs text-muted-foreground">
                                2017 - 2021
                            </div>
                            <div className="mb-2 font-semibold">
                                Iloilo King of Glory Christian Academy
                            </div>
                            <div className="mb-3 text-lg font-bold tracking-tight">
                                High School Diploma
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Graduated under the STEM strand, building a
                                strong foundation in science, technology,
                                engineering, and mathematics to prepare for a
                                career in IT.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Elementary */}
                <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background shadow-md shadow-muted-foreground/5 ring-1 ring-muted-foreground/20 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Image
                            src="/ccc.webp"
                            alt="CCS Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </div>
                    <Card className="w-[calc(100%-5rem)] md:w-[calc(50%-3.5rem)]">
                        <CardContent className="p-4">
                            <div className="mb-1 text-xs text-muted-foreground">
                                2011 - 2017
                            </div>
                            <div className="mb-2 font-semibold">
                                Carles Central School
                            </div>
                            <div className="mb-3 text-lg font-bold tracking-tight">
                                Elementary Certificate
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Completed elementary education with a focus on
                                foundational academic skills.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
