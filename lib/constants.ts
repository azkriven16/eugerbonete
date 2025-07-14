export const siteConfig = {
    name: "Euger C. Bonete Jr.",
    description:
        "A Software Engineer and Tech Enthusiast from the Philippines. I love building things and writing about technology.",
    url: "https://eugerbonete.com/",
    ogImage: "https://eugerbonete.com/opengraph-image.png",
    keywords: [
        "eugerbonete",
        "software engineer",
        "tech enthusiast",
        "philippines",
    ],
};

export const siteMetadata = {
    title: "Portfolio -Euger C. Bonete Jr.",
    description:
        "A Software Engineer and Tech Enthusiast from the Philippines.",
    keywords: siteConfig.keywords,
    openGraph: {
        title: "Euger C. Bonete Jr.",
        description:
            "A Software Engineer and Tech Enthusiast from the Philippines.",
        url: siteConfig.url,
        siteName: "Euger C. Bonete Jr.",
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
