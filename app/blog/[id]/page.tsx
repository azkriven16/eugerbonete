import { getBlogById } from "@/db/queries";
import Content from "./content";

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
            <Content>{blog.content}</Content>
        </section>
    );
}
