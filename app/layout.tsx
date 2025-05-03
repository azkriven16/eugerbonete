import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Euger Bonete Jr | Full Stack Developer",
    description:
        "Euger Bonete Jr is a full stack developer with a passion for building scalable and maintainable web applications. He has experience with a variety of programming languages and technologies, including JavaScript, TypeScript, Node.js, React, Next.js, and more.",
    keywords: [
        "Euger Bonete Jr",
        "Full Stack Developer",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Next.js",
        "Portfolio",
    ],
    authors: [
        {
            name: "Euger Bonete Jr",
            url: "https://eugerbonetejr.com",
        },
    ],
    creator: "Euger Bonete Jr",
    publisher: "Euger Bonete Jr",
 
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

