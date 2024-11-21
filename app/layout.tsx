import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "../components/navbar";

import AnimatedCursor from "react-animated-cursor";
import "./globals.css";
import { Footer } from "@/components/footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Euger Bonete | Portfolio - NISU CICS Student | Web Developer & Software Engineer",
    description:
        "Explore the professional portfolio of Euger Bonete, a student at Northern Iloilo State University (NISU), College of Information and Computing Sciences (CICS), specializing in web development, software engineering, and tech innovation.",
    keywords:
        "Euger Bonete, NISU CICS, portfolio, web developer, software engineer, Northern Iloilo State University, CICS, student portfolio, tech projects, software development, programming, Iloilo, tech innovation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto px-4`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="hidden md:block">
                        <AnimatedCursor
                            showSystemCursor
                            innerSize={20}
                            outerSize={10}
                            color="100,100,100"
                        />
                    </div>
                    <TooltipProvider delayDuration={10}>
                        <Navbar />
                        <main className="py-20">{children}</main>
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
