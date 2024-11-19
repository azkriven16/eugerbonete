"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [hoveredExperience, setHoveredExperience] = useState<number | null>(
        null
    );
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const techStackVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const techItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        hover: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    const workExperienceVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const workItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const experiences = [
        {
            date: "SEP, 2023 - CURRENT",
            role: "Product Designer",
            company: "Oendo Studio",
            description:
                "Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction",
            link: "#",
        },
        {
            date: "JAN, 2022 - SEP, 2023",
            role: "UX Designer",
            company: "Genesis",
            description:
                "Thrived in a fast-paced environment at Genesis, designing intuitive and user-centric products. Successfully streamlined complex functionalities and implemented innovative features, contributing to a 46% increase in user engagement. I thrived on working across diverse teams, successfully integrating user feedback and diverse perspectives into innovative design solutions.",
            link: "#",
        },
        {
            date: "SEP, 2023 - CURRENT",
            role: "Product Designer",
            company: "Oendo Studio",
            description:
                "Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction",
            link: "#",
        },
        {
            date: "JAN, 2022 - SEP, 2023",
            role: "UX Designer",
            company: "Genesis",
            description:
                "Thrived in a fast-paced environment at Genesis, designing intuitive and user-centric products. Successfully streamlined complex functionalities and implemented innovative features, contributing to a 46% increase in user engagement. I thrived on working across diverse teams, successfully integrating user feedback and diverse perspectives into innovative design solutions.",
            link: "#",
        },
    ];

    const techStack = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Prisma ORM",
        "Framer Motion",
        "Figma",
        "Git",
        "VS Code",
    ];

    const projects = [
        {
            title: "Huzl DeFi",
            category: "Mobile App",
            image: "https://framerusercontent.com/images/VGLBKngFsJ7zGKlgkMDWm5kcMk8.jpg?scale-down-to=1024",
        },
        {
            title: "Badejo Template",
            category: "Portfolio Template",
            image: "https://framerusercontent.com/images/z1aDRot4Dnyoz1yPVQIRR10Co.jpg?scale-down-to=1024",
        },
        {
            title: "Huzl DeFi",
            category: "Mobile App",
            image: "https://framerusercontent.com/images/VGLBKngFsJ7zGKlgkMDWm5kcMk8.jpg?scale-down-to=1024",
        },
        {
            title: "Badejo Template",
            category: "Portfolio Template",
            image: "https://framerusercontent.com/images/z1aDRot4Dnyoz1yPVQIRR10Co.jpg?scale-down-to=1024",
        },
    ];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
        >
            <div className="space-y-10">
                <motion.p
                    className="text-base md:text-xl leading-loose text-muted-foreground"
                    variants={itemVariants}
                >
                    Hello! I'm Euger
                </motion.p>
                <motion.h1
                    className="text-3xl md:text-7xl font-semibold font-sans"
                    variants={itemVariants}
                >
                    A Web Developer and Designer currently working as a software
                    developer @ Somewhere. Studio
                </motion.h1>

                <motion.div variants={itemVariants}>
                    <Button className="font-semibold text-base p-6">
                        <Sparkles fill="" />
                        Let's build something
                    </Button>
                </motion.div>

                <motion.div variants={techStackVariants}>
                    <motion.div
                        className="flex flex-wrap gap-2 md:gap-4"
                        variants={techStackVariants}
                    >
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm md:text-base"
                                variants={techItemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.section className="space-y-8" variants={itemVariants}>
                <motion.h2
                    className="text-2xl font-semibold text-muted-foreground flex items-center gap-2"
                    variants={itemVariants}
                >
                    <span className="text-sm">01</span>
                    Case Studies
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden bg-secondary/5 border border-secondary/10 transition-colors hover:bg-secondary/50 hover:border-secondary"
                            variants={projectVariants}
                            whileHover="hover"
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => setHoveredProject(null)}
                            style={{
                                filter:
                                    hoveredProject !== null &&
                                    hoveredProject !== index
                                        ? "blur(10px)"
                                        : "none",
                                transition: "filter 0.3s ease-in-out",
                            }}
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {project.category}
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full group-hover:bg-secondary"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            <motion.section
                className="space-y-8"
                variants={workExperienceVariants}
            >
                <motion.h2
                    className="text-2xl font-semibold text-muted-foreground flex items-center gap-2"
                    variants={itemVariants}
                >
                    <span className="text-sm">02</span>
                    Work Experience
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="space-y-4 relative"
                            variants={workItemVariants}
                            onHoverStart={() => setHoveredExperience(index)}
                            onHoverEnd={() => setHoveredExperience(null)}
                            style={{
                                filter:
                                    hoveredExperience !== null &&
                                    hoveredExperience !== index
                                        ? "blur(10px)"
                                        : "none",
                                transition: "filter 0.3s ease-in-out",
                            }}
                        >
                            <motion.p
                                className="text-sm text-muted-foreground"
                                variants={itemVariants}
                            >
                                {experience.date}
                            </motion.p>
                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <h3 className="text-xl md:text-3xl font-semibold">
                                    {experience.role}, {experience.company}
                                </h3>
                                <p className="text-lg leading-relaxed">
                                    {experience.description}
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                    asChild
                                >
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Visit Link</span>
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                </Button>
                            </motion.div>
                            {index !== experiences.length - 1 && (
                                <motion.div
                                    className="mt-12 border-t border-secondary/20"
                                    variants={itemVariants}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            <motion.section
                className="pt-24 space-y-8"
                variants={workExperienceVariants}
            >
                <div className="space-y-5">
                    <motion.h2
                        className="text-4xl md:text-7xl font-semibold"
                        variants={itemVariants}
                    >
                        Let's
                        <br />
                        Collaborate
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-xl leading-loose text-muted-foreground md:w-2/3"
                        variants={itemVariants}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Officia ratione molestias unde consectetur nobis
                        fuga possimus impedit quas totam, dignissimos
                        voluptatibus natus non officiis repellat consequatur
                        aut? Nemo, eaque sed.
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col space-y-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                        <motion.a
                            href="#"
                            className="hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Behance
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Linkedin
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Email
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            X
                        </motion.a>
                        <motion.a
                            href="#"
                            className="hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Dribbble
                        </motion.a>
                    </div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}
