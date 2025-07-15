"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Ellipsis, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="border-b sticky top-0 bg-secondary/60 z-50 backdrop-blur-md bg-opacity-70">
            <div className="flex max-w-3xl mx-auto gap-5 items-center p-4 justify-between">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Avatar className="md:mr-5 mr-10">
                            <AvatarImage src="https://github.com/azkriven16.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                    <ul className="flex gap-5">
                        <HeaderLink href="/works" text="Works" />
                        <HeaderLink href="/about" text="About" />
                        <HeaderLink href="/blog" text="Blog" />
                        <NavDropdown className="hidden md:block" />
                    </ul>
                </div>
                <NavDropdown className="block md:hidden" />
                <Link
                    href="https://github.com/azkriven16/eugerbonete"
                    target="_blank"
                >
                    <Button size="sm" variant="secondary">
                        <Github />
                        <span className="hidden md:inline">Source</span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}

function HeaderLink({ href, text }: { href: string; text: string }) {
    const path = usePathname();
    return (
        <li
            className={cn(
                "text-muted-foreground hover:text-foreground text-sm font-semibold",
                path === href && "text-foreground"
            )}
        >
            <Link href={href}>{text}</Link>
        </li>
    );
}

function NavDropdown({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const { theme, setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className}>
                <Ellipsis className="text-muted-foreground size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/stack">Stack</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/services">Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                    <Link href="/music">Music</Link>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="gap-5"
                >
                    Switch Theme
                    {theme === "dark" ? <Sun /> : <Moon />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
