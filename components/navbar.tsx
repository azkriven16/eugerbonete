import Link from "next/link";
import {
    Brain,
    Briefcase,
    Folder,
    FolderGit2,
    Home,
    SquarePen,
    Wrench,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface NavItemProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 hover:bg-primary/30"
                >
                    <Link
                        href={href}
                        className="flex items-center justify-center scale-125"
                    >
                        {icon}
                    </Link>
                </Button>
            </TooltipTrigger>
            <TooltipContent
                side="bottom"
                className="bg-white p-2 rounded-lg shadow-lg"
            >
                <div className="flex flex-col gap-1">
                    <p className="font-medium">{label}</p>
                </div>
            </TooltipContent>
        </Tooltip>
    );
};

export const Navbar = () => {
    return (
        <nav className="sticky top-10 w-fit mx-auto z-50">
            <div className="bg-secondary rounded-2xl px-4 flex items-center gap-1">
                <NavItem href="/" label="Home" icon={<Home />} />
                <NavItem href="#projects" label="Projects" icon={<Folder />} />
                <NavItem
                    href="#experience"
                    label="Experience"
                    icon={<Briefcase />}
                />
                <NavItem href="#techstack" label="Tools" icon={<Wrench />} />
                <NavItem
                    href="#contact"
                    label="Thoughts"
                    icon={<SquarePen />}
                />
            </div>
        </nav>
    );
};
