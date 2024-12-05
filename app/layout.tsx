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
        default: "Euger Bonete NISU | CICS Student Web Developer",
        template: "%s - Euger Bonete NISU | Web Development Portfolio",
    },
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
    authors: [{ name: "Euger Bonete" }],
    creator: "Euger Bonete",
    publisher: "Euger Bonete",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://azkriven.vercel.app/",
        title: "Euger Bonete - Web Developer Portfolio",
        description:
            "Web developer and NISU CICS student. Explore my portfolio of projects, skills, and technical expertise.",
        siteName: "Euger Bonete Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Euger Bonete - Web Development Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Euger Bonete - Web Developer Portfolio",
        description:
            "Passionate web developer and CICS student creating innovative digital solutions.",
        images: ["/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://eugerbonete.vercel.app/",
    },
    verification: {
        google: "your-google-site-verification-code",
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
