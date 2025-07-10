import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectById } from "@/db/queries";
import { ArrowLeft, ArrowRight, Github, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function WorkDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = await getProjectById(parseInt(id));

    const projects = await getAllProjects();

    if (!project) {
        return (
            <div className="w-full max-w-3xl mx-auto p-4 my-10 min-h-[50vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold  mb-4">
                        Project not found
                    </h1>
                    <p className=" mb-6">
                        The project you're looking for doesn't exist.
                    </p>
                    <Link href="/works">
                        <Button>
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 min-h-screen">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/works"
                    className="inline-flex items-center gap-2  hover: transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-xs text-muted-foreground">
                        Back to Projects
                    </span>
                </Link>
            </div>

            {/* Project Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-2xl font-semibold ">
                    {project.name}
                </h1>
                <p className="text-sm text-muted-foreground mb-4">
                    {project.summary}
                </p>
                <div className="space-x-5">
                    <Link href={project.live_url} target="_blank">
                        <Button size="sm" variant="outline" className="text-xs">
                            <Globe2 />
                            <span className="text-muted-foreground">
                                Live Preview
                            </span>
                        </Button>
                    </Link>

                    <Link href={project.live_url} target="_blank">
                        <Button size="sm" variant="outline" className="text-xs">
                            <Github />
                            <span className="text-muted-foreground">
                                Source Code
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main Project Image */}
            <div className="mb-8">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={project.image_url}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 font-semibold">
                    {/* <Calendar className="w-4 h-4" /> */}
                    <span>{formatDate(project.created_at!)}</span>
                </div>
                <div className="flex items-center gap-1">
                    {/* <Code className="w-4 h-4" /> */}
                    <span>
                        {project.type === "frontend" ? "Frontend" : "Backend"}
                    </span>
                </div>
            </div>

            {/* Project Description */}
            <div className="mb-8">
                <div className="prose prose-lg max-w-none text-sm mt-5 text-muted-foreground">
                    <p className="leading-relaxed">{project.description}</p>
                </div>
            </div>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 1 && (
                <div className="mb-8">
                    <div className="flex flex-col gap-4">
                        {project.gallery.slice(1).map((imageUrl, index) => (
                            <div
                                key={index}
                                className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <Image
                                    src={imageUrl}
                                    alt={`${project.name} screenshot ${index + 2}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Link
                href="/works"
                className="inline-flex items-center gap-2  hover: transition-colors"
            >
                <span className="text-xs text-muted-foreground">More Work</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-6">
                {projects
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </section>
    );
}
