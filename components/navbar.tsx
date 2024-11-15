"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/constants";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between mx-4">
            <Link className="font-semibold" href="/">
                Euger Bonete Jr.
            </Link>

            <ul className="hidden md:flex space-x-5 items-center">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Button
                            asChild
                            variant="linkHover2"
                            className="text-base"
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    </li>
                ))}
                <li>
                    <Link
                        href="/contact"
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

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
                <ModeToggle />
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <button
                            className="p-2 ml-2"
                            aria-label="Toggle navigation menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="flex flex-col items-center space-y-4 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "text-lg"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={cn(
                                    buttonVariants({ variant: "gooeyLeft" }),
                                    "font-semibold w-full"
                                )}
                            >
                                Let's talk
                            </Link>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    );
};
