import { LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
        >
            {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>
    );
};

function ProjectCard({ project }: { project: typeof mockProjects[number] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="shadow-md p-5 flex flex-col md:flex-row gap-10 relative overflow-hidden max-w-2xl">
                <div className="space-y-5">
                    <Button variant="secondary">{project.logo}</Button>
                    <h3 className="primary-font">{project.name}</h3>
                    <p className="sansation-regular max-w-60 text-sm text-muted-foreground">
                        {project.description}
                    </p>
                    <Button
                        effect="expandIcon"
                        icon={LuArrowRight}
                        iconPlacement="right"
                        className="rounded-full hover:bg-primary hover:text-primary-foreground"
                        variant="outline"
                    >
                        visit site
                    </Button>
                </div>
                <motion.img
                    src={project.image}
                    alt={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:absolute md:-right-60 md:top-10"
                />
            </Card>
        </motion.div>
    );
}

const mockProjects = [
    {
        id: 1,
        name: "Framer",
        logo: "F",
        description:
            "A true design canvas, not just a visual HTML editor. Framer is the website builder loved by designers worldwide.",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://framer.com",
    },
    {
        id: 2,
        name: "Figma",
        logo: "Fi",
        description:
            "The collaborative interface design tool that enables teams to work together on digital products.",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://figma.com",
    },
    {
        id: 3,
        name: "Webflow",
        logo: "W",
        description:
            "Design, build, and launch responsive websites visually while writing clean, semantic code for developers.",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://webflow.com",
    },
    {
        id: 4,
        name: "Sketch",
        logo: "S",
        description:
            "The digital design toolkit that helps you craft beautiful interfaces with powerful collaborative features.",
        image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
        url: "https://sketch.com",
    },
];

