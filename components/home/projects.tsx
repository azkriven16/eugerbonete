"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, GripVertical } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const projects = [
    {
        title: "Skyline",
        description: "Fullstack",
        image: "/quiz.png",
    },
    {
        title: "Quiz App",
        description: "Frontend",
        image: "/quiz.png",
    },
    {
        title: "Blog",
        description: "Backend",
        image: "/quiz.png",
    },
];

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
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <Card className="border-none space-y-2">
            <LazyLoadImage
                alt={project.title}
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                }}
                src={project.image}
                className="rounded-sm"
            />
            <div className="flex justify-between">
                <CardTitle className="flex gap-2">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                    {project.description}{" "}
                    <GripVertical className="text-muted-foreground size-4" />
                </CardDescription>
            </div>
        </Card>
    );
}
