import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://azkriven.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://azkriven.vercel.app/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://azkriven.vercel.app/contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
