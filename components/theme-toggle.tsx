"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    onClick={() =>
                        theme === "dark" ? setTheme("light") : setTheme("dark")
                    }
                    variant="ghost"
                    size="icon"
                    className="scale-110 hover:bg-primary/30"
                >
                    <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <p>{theme === "dark" ? "Light Mode" : "Dark Mode"}</p>
            </TooltipContent>
        </Tooltip>
    );
}
