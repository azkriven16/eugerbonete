import { Contact } from "@/components/contact";
import { ProjectInfo } from "@/components/project-info";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsInfoPage({
    params,
}: {
    params: { id: string };
}) {
    const project = projects.filter(
        (project) => project.link && project.link.includes(params.id)
    )[0];

    return (
        <div>
            <Button asChild variant="outline" className="mb-10">
                <Link href="/">
                    <ArrowLeft />
                </Link>
            </Button>
            <ProjectInfo project={project} />
            <div className="mt-20 md:mt-52">
                <Contact number="02" />
            </div>
        </div>
    );
}
