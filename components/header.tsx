"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Copy, Ellipsis, Moon, Sun } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="border-b sticky top-0 bg-background z-50">
            <div className="flex max-w-3xl mx-auto gap-5 items-center p-4 justify-between">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Avatar className="md:mr-5 mr-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                    <ul className="flex gap-5">
                        <HeaderLink href="/works" text="Works" />
                        <HeaderLink href="/services" text="Services" />
                        <HeaderLink href="/about" text="About" />
                        <NavDropdown className="hidden md:block" />
                    </ul>
                </div>
                <NavDropdown className="block md:hidden" />

                <EmailCopyButton />
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
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Stack</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
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

import React, { useState } from "react";
import { toast } from "sonner"; // or your preferred toast library
import { usePathname } from "next/navigation";

const EmailCopyButton = ({ email = "example@email.com" }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            toast.success("Email copied to clipboard!");

            // Reset icon after 2 seconds
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy email:", err);
            toast.error("Failed to copy email");
        }
    };

    return (
        <div className="hidden md:block">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopyEmail}
                        className="transition-all duration-200"
                    >
                        {isCopied ? (
                            <Check className="text-green-500" />
                        ) : (
                            <Copy />
                        )}
                        <span className="text-muted-foreground hover:text-foreground text-xs font-semibold">
                            E-Mail
                        </span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{isCopied ? "Email copied!" : "Copy email address"}</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
};
