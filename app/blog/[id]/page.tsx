import { getBlogById } from "@/db/queries";
import Content from "./content";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function Id({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = await getBlogById(parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2  hover: transition-colors"
            >
                <Button variant="outline" className="group">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground">
                        Back to Blogs
                    </span>
                </Button>
            </Link>
            <Content>{blog.content}</Content>
        </section>
    );
}
