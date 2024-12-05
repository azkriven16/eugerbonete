import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { Toaster } from "@/components/ui/sonner";
import ChatBot from "@/components/ui/chatbot";
import { Navbar } from "@/components/navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/footer";
import AnimatedCursor from "react-animated-cursor";
import { siteConfig } from "@/lib/site";

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

const plus_kakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} NISU | CICS Student Web Developer`,
        template: "%s - ${siteConfig.name} NISU | Web Development Portfolio",
    },
    metadataBase: new URL(siteConfig.url),
    description:
        "Web developer and NISU CICS student. Explore my portfolio of projects, skills, and technical expertise.",
    keywords: [
        "web developer",
        "portfolio",
        "CICS student",
        "NISU student",
        "frontend development",
        "React developer",
        "web design",
        "full-stack development",
    ],
    authors: [
        { name: `${siteConfig.name}`, url: "https://azkriven.vercel.app" },
    ],
    creator: `${siteConfig.name}`,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@azkriven16",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${plus_kakarta_sans.className} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollProgressBar type="bar" />
                    <Toaster />
                    <ChatBot />
                    <AnimatedCursor
                        innerSize={8}
                        outerSize={35}
                        innerScale={1}
                        outerScale={2}
                        outerAlpha={0}
                        innerStyle={{
                            backgroundColor: "var(--cursor-color)",
                        }}
                        outerStyle={{
                            border: "3px solid var(--cursor-color)",
                        }}
                        showSystemCursor
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
