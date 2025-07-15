import DevDropFeature from "@/components/home/drops";
import Projects from "@/components/home/projects";
import LatestMusic from "@/components/latest-music";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { getAllBlogs } from "@/db/queries";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import "react-lazy-load-image-component/src/effects/blur.css";

export default async function Blog() {
    const posts = await getAllBlogs();
    return (
        <>
            <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 ">
                <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                    Personal Blog 🌼
                </h1>
                <p className="font-light leading-tight tracking-tight mt-2 mb-10">
                    <span className="font-semibold text-muted-foreground">
                        Thoughts, ideas, and experiences from my journey.
                    </span>
                </p>
                <div className="flex flex-col gap-4 mt-6">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="max-w-full"
                        >
                            <Button
                                variant="secondary"
                                size="sm"
                                className="max-w-full truncate overflow-hidden border"
                            >
                                <GripVertical />{" "}
                                <p className="truncate">{post.title}</p>
                            </Button>
                        </Link>
                    ))}
                </div>
            </section>
            <Projects />
        </>
    );
}
