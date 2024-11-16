"use client";

import { site } from "@/config/site";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./socials";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="mx-4 md:mt-52 py-16 relative bg-secondary text-secondary-foreground p-2 rounded-xl">
            <div className="text-xl flex flex-col md:flex-row items-center justify-between gap-10">
                <div>
                    <p className="">© {site.author} Portfolio</p>
                </div>
                <SocialLinks />
            </div>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-primary text-primary-foreground h-12 w-12 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-8 w-8 md:w-10 md:h-10" />
                </button>
            )}
        </footer>
    );
};
