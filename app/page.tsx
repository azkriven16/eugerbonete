"use client";
import { BlurFade } from "@/components/animations/blur-fade";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <BlurFade>
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-8">
                                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                                    The creative portfolio
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                                    Design. Develop. Deploy. With a focus on
                                    user experience.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        size="lg"
                                        className="rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                                    >
                                        Download Resume
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-md"
                                    >
                                        Request a meeting
                                    </Button>
                                </div>

                                <div className="mt-12">
                                    <p className="text-sm text-gray-500 mb-3">
                                        Experienced with tools from
                                    </p>
                                    <div className="flex flex-wrap gap-6 items-center">
                                        <div className="text-sm font-medium">
                                            React
                                        </div>
                                        <div className="text-sm font-medium">
                                            Next.js
                                        </div>
                                        <div className="text-sm font-medium">
                                            Figma
                                        </div>
                                        <div className="text-sm font-medium">
                                            Vercel
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 mt-12 md:mt-0">
                                <Image
                                    src="/images/team-illustration.png"
                                    alt="Illustration of people working together"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </BlurFade>
        </div>
    );
}
