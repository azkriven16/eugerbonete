import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Project } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";
export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/works/${project.id}`}>
            <Card className="border-none space-y-2">
                <Image
                    src={project.image_url}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="aspect-video object-cover rounded-lg"
                />
                <div className="flex justify-between">
                    <CardTitle className="flex gap-2 truncate text-sm">
                        {project.name}
                    </CardTitle>
                    <Badge variant="secondary">
                        {project.type.charAt(0).toUpperCase() +
                            project.type.slice(1)}
                    </Badge>
                </div>
            </Card>
        </Link>
    );
}
