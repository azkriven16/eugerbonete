import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ComponentType, FC, SVGProps } from "react";
import { DiGit, DiJavascript, DiMongodb, DiReact } from "react-icons/di";
import { FaCss3, FaGithub, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiOpenaiFill, RiTailwindCssFill } from "react-icons/ri";
import {
    SiDocker,
    SiFirebase,
    SiPostman,
    SiPrisma,
    SiTypescript,
    SiVite,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const TechStack = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tech.map((item, index) => (
                <TechStackCard key={index} {...item} delay={index * 0.1} />
            ))}
        </div>
    );
};

interface TechStackCardProps {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    text: string;
    iconBgColor?: string;
    delay: number;
}

const TechStackCard: FC<TechStackCardProps> = ({
    icon: Icon,
    text,
    iconBgColor = "bg-primary", // Default shadcn primary background
    delay,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay, // Stagger animation delay
            }}
        >
            <Card className="flex items-center justify-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg ${iconBgColor} text-primary-foreground`}
                >
                    <Icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-foreground w-20">{text}</span>
            </Card>
        </motion.div>
    );
};

const tech = [
    {
        text: "Next JS",
        icon: RiNextjsFill,
        iconBgColor: "bg-primary",
    },
    {
        text: "Tailwind CSS",
        icon: RiTailwindCssFill,
        iconBgColor: "bg-primary",
    },
    {
        text: "Prisma",
        icon: SiPrisma,
        iconBgColor: "bg-primary",
    },
    {
        text: "HTML",
        icon: FaHtml5,
        iconBgColor: "bg-primary",
    },
    {
        text: "CSS",
        icon: FaCss3,
        iconBgColor: "bg-primary",
    },
    {
        text: "Framer Motion",
        icon: TbBrandFramerMotion,
        iconBgColor: "bg-primary",
    },
    {
        text: "Mongodb",
        icon: DiMongodb,
        iconBgColor: "bg-primary",
    },
    {
        text: "React",
        icon: DiReact,
    },
    {
        text: "Firebase",
        icon: SiFirebase,
    },
    {
        text: "JavaScript",
        icon: DiJavascript,
    },
    {
        text: "TypeScript",
        icon: SiTypescript,
    },
    {
        text: "Vite",
        icon: SiVite,
    },
    {
        text: "Docker",
        icon: SiDocker,
    },
    {
        text: "Git",
        icon: DiGit,
    },
    {
        text: "Vscode",
        icon: VscVscode,
    },
    {
        text: "Chatgpt",
        icon: RiOpenaiFill,
    },
    {
        text: "Github",
        icon: FaGithub,
    },
    {
        text: "Postman",
        icon: SiPostman,
    },
];
