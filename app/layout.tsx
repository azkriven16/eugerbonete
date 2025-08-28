import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
  description:
    "Portfolio of Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Showcasing projects, web development skills, and fullstack experience with React, Next.js, and TypeScript.",
  keywords: [
    "Euger Bonete",
    "Euger C. Bonete Jr.",
    "software engineer portfolio",
    "frontend developer",
    "fullstack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer philippines",
    "tech enthusiast",
  ],
  openGraph: {
    title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
    description:
      "Explore the portfolio of Euger C. Bonete Jr., a Software Engineer and Tech Enthusiast from the Philippines. Discover projects, skills, and experience in React, Next.js, and modern web technologies.",
    url: "https://euger.vercel.app",
    siteName: "Euger C. Bonete Jr. Portfolio",
    images: [
      {
        url: "https://euger.vercel.app/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Euger C. Bonete Jr. Portfolio Preview",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euger C. Bonete Jr. | Software Engineer Portfolio",
    description:
      "Check out the portfolio of Euger C. Bonete Jr., Software Engineer & Tech Enthusiast from the Philippines. Featuring React, Next.js, and TypeScript projects.",
    images: ["https://euger.vercel.app/images/og-preview.png"],
    creator: "@EugerBonete",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
