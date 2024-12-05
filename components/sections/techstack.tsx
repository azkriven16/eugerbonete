"use client";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiCss3,
    SiHtml5,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPrisma,
    SiFigma,
    SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiFramer } from "react-icons/fi";
import { IconType } from "react-icons";

const techStack = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma ORM",
    "Framer Motion",
    "Figma",
    "Git",
    "VS Code",
];

const techIcons: { [key: string]: IconType } = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    Typescript: SiTypescript,
    Javascript: SiJavascript,
    "Tailwind CSS": SiTailwindcss,
    CSS: SiCss3,
    HTML: SiHtml5,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    MongoDB: SiMongodb,
    "Prisma ORM": SiPrisma,
    "Framer Motion": FiFramer,
    Figma: SiFigma,
    Git: SiGit,
    "VS Code": VscVscode,
};

export const TechStack = () => {
    // Duplicate the tech stack to create a seamless infinite scroll
    const repeatedTechStack = [...techStack, ...techStack];

    return (
        <section className="py-16 bg-background overflow-hidden">
            <h2 className="text-md font-semibold text-center mb-5 uppercase">
                Tech and tools i use to build stuff
            </h2>
            <div className="container mx-auto px-4">
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: ["-50%", "0%"],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 15,
                                    ease: "linear",
                                },
                            },
                        }}
                    >
                        {repeatedTechStack.map((tech, index) => {
                            const TechIcon = techIcons[tech];
                            return (
                                <motion.div
                                    key={`${tech}-${index}`}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-card text-card-foreground rounded-lg shadow-md"
                                >
                                    <TechIcon
                                        className="w-12 h-12 mb-2 text-foreground"
                                        size={48}
                                    />
                                    <p className="text-sm text-center">
                                        {tech}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Overlay to create fade effect on edges */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};
