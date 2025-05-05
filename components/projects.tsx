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

function ProjectCard({ project }: { project: (typeof mockProjects)[number] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="shadow-md p-5 flex flex-col md:flex-row gap-10 relative overflow-hidden max-w-2xl">
                <div className="space-y-5">
                    <img
                        src={project.logo}
                        alt={project.name}
                        className="w-10 h-10"
                    />
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
                    className="md:absolute md:-right-72 md:top-10 border-2 shadow-md rounded-lg"
                />
            </Card>
        </motion.div>
    );
}

const mockProjects = [
    {
        id: 1,
        name: "201 Manager",
        logo: "https://201m.vercel.app/icon.svg",
        description:
            "A comprehensive tool designed for managing 201 files of employees efficiently and effectively.",
        image: "/bh.png",
        url: "https://framer.com",
    },
    {
        id: 2,
        name: "Paste2Image",
        logo: "https://paste2image.vercel.app/icon.svg",
        description:
            "Paste your clipboard content and download it as a PNG. Built with Next.js, shadcn/ui, and Tailwind CSS.",
        image: "/paste2image.png",
        url: "https://paste2image.vercel.app/",
    },
    {
        id: 3,
        name: "Case Converter",
        logo: "https://casetransform.vercel.app/icon.svg",
        description:
            "Uppercase/Lowercase Tool Convert text to ALL CAPS, lowercase, Title Case, etc.",
        image: "/case.png",
        url: "https://casetransform.vercel.app/",
    },
];
