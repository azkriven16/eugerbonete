"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, GripVertical } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Projects() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10">
            <Button
                variant="ghost"
                effect="expandIcon"
                icon={ArrowRight}
                iconPlacement="right"
                className="text-lg border-l rounded-none hover:rounded-lg"
            >
                Latest Work
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}

function ProjectCard() {
    return (
        <Card className="border-none space-y-2">
            <LazyLoadImage
                alt="img"
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                }}
                src="/quiz.png"
                className="rounded-sm"
            />
            <div className="flex justify-between">
                <CardTitle className="flex gap-2">Skyline</CardTitle>
                <CardDescription className="flex items-center gap-2">
                    Fullstack{" "}
                    <GripVertical className="text-muted-foreground size-4" />
                </CardDescription>
            </div>
        </Card>
    );
}
