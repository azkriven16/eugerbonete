"use client";

import { itemVariants, projectVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heading } from "./heading";

interface ProjectInfoProps {
    project: {
        title: string;
        description: string;
        image: string;
        category: string;
        link: string;
    };
}

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
            className="space-y-20"
        >
            <div className="flex flex-col md:flex-row items-start gap-10">
                <Heading number="01" text={project.title} />
                <motion.p
                    className="text-base md:text-xl leading-loose max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    {project.description}
                </motion.p>
            </div>
            <div className="flex items-center justify-center">
                <Image
                    src={project.image}
                    alt={project.title + " image"}
                    height={300}
                    width={300}
                    className="object-center"
                />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10">
                <motion.div
                    className="text-xl font-semibold text-muted-foreground flex md:flex-col gap-2"
                    variants={itemVariants}
                >
                    <Button
                        asChild
                        variant="outline"
                        className="text-lg font-semibold justify-start"
                    >
                        <Link href="/" className="flex gap-2">
                            Github <ExternalLink />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="text-lg font-semibold justify-start"
                    >
                        <Link href="/" className="flex gap-2">
                            Live Demo <ExternalLink />
                        </Link>
                    </Button>
                </motion.div>
                <motion.p
                    className="text-base md:text-xl leading-loose max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    {project.description}
                </motion.p>
            </div>
        </motion.div>
    );
};
