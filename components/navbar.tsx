import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Briefcase, Folder, Home, User2 } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

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
                    className="hover:bg-primary/30"
                >
                    <Link
                        href={href}
                        className="flex items-center justify-center h-full w-full"
                    >
                        {icon}
                    </Link>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-2 rounded-lg shadow-lg">
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
                <NavItem href="/projects" label="Projects" icon={<Folder />} />
                <NavItem
                    href="/experience"
                    label="Experience"
                    icon={<Briefcase />}
                />
                <NavItem href="/about" label="Me" icon={<User2 />} />
                <ModeToggle />
            </div>
        </nav>
    );
};
