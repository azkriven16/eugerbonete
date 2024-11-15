import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <Link className="font-semibold" href="/">
                Euger Bonete Jr.
            </Link>
            <ul className="space-x-4 flex items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about">Work</Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={cn(
                            buttonVariants({ variant: "gooeyLeft" }),
                            "font-semibold"
                        )}
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
