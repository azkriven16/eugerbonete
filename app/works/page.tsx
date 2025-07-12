import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/db/queries";
import "react-lazy-load-image-component/src/effects/blur.css";

export default async function Works() {
    const projects = await getAllProjects();
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Side Projects 🎨
            </h1>
            <p className="font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Selected side projects from the past years.
                </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
