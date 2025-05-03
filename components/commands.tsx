"use client";

import {
    CreditCard,
    File,
    Files,
    Settings,
    User
} from "lucide-react";
import { useEffect, useState } from "react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import { RiGithubFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Email, Facebook, LinkedIn } from "./hero";
import { VscGithub } from "react-icons/vsc";

export function Commands() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen((open) => !open)}
                className="mt-10"
            >
                <p className="text-sm text-muted-foreground">
                    Super-duper quick links...
                </p>
                <p className="text-sm text-muted-foreground">
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>J
                    </kbd>
                </p>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <File />
                            <span>Resume</span>
                        </CommandItem>
                        <CommandItem>
                            <Files />
                            <span>Certifications</span>
                        </CommandItem>
                        <CommandItem>
                            <RiGithubFill />
                            <span>Source Code</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Socials">
                        <CommandItem>
                            <Email />
                            <span>Email</span>
                        </CommandItem>
                        <CommandItem>
                            <VscGithub />
                            <span>Github</span>
                        </CommandItem>
                        <CommandItem>
                            <Facebook />
                            <span>Facebook</span>
                        </CommandItem>
                        <CommandItem>
                            <LinkedIn />
                            <span>LinkedIn</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
