import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { getAllBlogs } from "@/db/queries";
import { GripVertical } from "lucide-react";
import Link from "next/link";
import "react-lazy-load-image-component/src/effects/blur.css";

export default async function Blog() {
    const posts = await getAllBlogs();
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                Personal Blog
            </h1>
            <p className="text-lg font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Thoughts, ideas, and experiences from my journey.
                </span>
            </p>
            <div className="flex flex-col gap-4 mt-6">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                        <PostCard post={post} />
                    </Link>
                ))}
            </div>
        </section>
    );
}

function PostCard({
    post,
}: {
    post: {
        id: number;
        title: string;
        content: string;
        created_at: Date | null;
        author_email: string;
    };
}) {
    return (
        <Card className="border-y-1 border-x-0 rounded-none py-2 space-y-2">
            <div className="flex items-center gap-4">
                <GripVertical className="text-muted-foreground size-4" />
                <CardTitle className="flex gap-2">{post.title}</CardTitle>
            </div>
        </Card>
    );
}
