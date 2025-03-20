"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

const ThemeToggleButton = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const buttonIcon = resolvedTheme === "dark" ? <Sun /> : <Moon />;

    return (
        <Button size="icon" variant="ghost" onClick={toggleTheme}>
            {buttonIcon}
        </Button>
    );
};

export default ThemeToggleButton;
