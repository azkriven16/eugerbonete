import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./theme-toggle";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between font-semibold">
            <Link href="/">Euger Bonete Jr.</Link>
            <ul className="space-x-4 flex items-center">
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about">Work</Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={cn(buttonVariants(), "font-semibold")}
                    >
                        Let's talk
                    </Link>
                </li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    );
};
