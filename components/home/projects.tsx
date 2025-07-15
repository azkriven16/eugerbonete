import { getAllProjects } from "@/db/queries";
import { ProjectCard } from "../project-card";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function Projects() {
    const projects = await getAllProjects();

    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10">
            <div className="flex justify-between">
                <h3 className="text-sm text-muted-foreground mb-2 font-medium">
                    Latest Works
                </h3>
                <Link
                    href="/works"
                    className="text-sm text-muted-foreground mb-2 font-medium hover:text-foreground block"
                >
                    <Button variant={"outline"} size={"sm"} className="text-xs">
                        More
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
