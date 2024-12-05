"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sigma, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "./ui/mode-toggle";
import { usePathname } from "next/navigation";
import { RainbowButton } from "./ui/rainbow-button";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.3,
                type: "tween",
            },
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "https://eugerbonete.vercel.app/resume.pdf", text: "Resume" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Desktop Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex justify-between items-center mx-auto backdrop-blur-sm bg-gradient-to-r from-transparent via-background to-transparent rounded-full p-4 max-w-4xl mt-5"
            >
                <Link href="/" className="font-semibold flex items-center">
                    <Button size="icon" className="h-8 w-8">
                        <Sigma />
                    </Button>
                    ugerBonete
                </Link>

                <nav className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Button
                            key={link.href}
                            asChild
                            variant={
                                pathname !== link.href
                                    ? "linkHover2"
                                    : "linkHover1"
                            }
                        >
                            <Link href={link.href}>{link.text}</Link>
                        </Button>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <ModeToggle />
                    <RainbowButton className="rounded-full text-sm font-semibold">
                        <Link href="/contact" className="flex items-center">
                            Lets Connect <ChevronRight />
                        </Link>
                    </RainbowButton>
                </div>
            </motion.div>

            {/* Mobile Navbar Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden flex justify-between items-center p-4 bg-background/80 backdrop-blur-md"
            >
                <Link href="/" className="font-semibold flex items-center">
                    <Button size="icon" className="h-8 w-8">
                        <Sigma />
                    </Button>
                    ugerBonete
                </Link>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </motion.div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="absolute top-6 right-6"
                        >
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={toggleMobileMenu}
                            >
                                <X className="h-8 w-8" />
                            </Button>
                        </motion.div>

                        <nav className="flex flex-col items-center justify-center space-y-8 text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.2 + index * 0.1,
                                            duration: 0.5,
                                        },
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleMobileMenu}
                                        className={`text-5xl font-bold tracking-tight transition-colors duration-300 
                                            ${
                                                pathname === link.href
                                                    ? "text-primary"
                                                    : "text-muted-foreground hover:text-primary"
                                            }`}
                                    >
                                        {link.text}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.5,
                                },
                            }}
                            className="absolute bottom-12"
                        >
                            <RainbowButton
                                className="rounded-full text-lg font-semibold"
                                onClick={toggleMobileMenu}
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center"
                                >
                                    Lets Connect
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Link>
                            </RainbowButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
