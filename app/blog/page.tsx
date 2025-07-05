"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "next/image";

const posts = [
    {
        title: "Skyline",
        image: "/blog/skyline.jpg",
        description: "Fullstack",
    },
    {
        title: "Quiz",
        image: "/blog/quiz.jpg",
        description: "Frontend",
    },
    {
        title: "Dashboard",
        image: "/blog/dashboard.jpg",
        description: "Backend",
    },
    {
        title: "Website",
        image: "/blog/website.jpg",
        description: "Frontend",
    },
];

export default function Blog() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                Blog
            </h1>
            <p className="text-lg font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Selected articles from the past years.
                </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-4 mt-6">
                {posts.map((post) => (
                    <PostCard key={post.title} post={post} />
                ))}
            </div>
        </section>
    );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
    return (
        <Card className="border-none space-y-2">
            <Image
                src={post.image}
                alt={post.title}
                className="rounded-sm"
                width={500}
                height={300}
            />
            <div className="flex justify-between">
                <CardTitle className="flex gap-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                    {post.description}{" "}
                    <GripVertical className="text-muted-foreground size-4" />
                </CardDescription>
            </div>
        </Card>
    );
}

