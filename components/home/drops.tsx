import { Button } from "@/components/ui/button";
import { getAllBlogs } from "@/db/queries";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FakeEmailSubscription from "./fake-email";

export default async function DevDropFeature() {
    const blogs = await getAllBlogs();

    return (
        <section className="flex flex-col max-w-3xl mx-auto p-4 my-10 gap-10 justify-between">
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-auto relative">
                    <Image
                        src="/cat.png"
                        alt="Developer Workspace"
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 rounded-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-1/2 flex flex-col justify-center gap-4">
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full w-fit">
                        Newsletter
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                        Stay updated with the latest news on web development
                    </h2>
                    <p className="text-muted-foreground text-base">
                        Receive a monthly newsletter with the latest insights,
                        tips, and resources on web development.
                    </p>

                    <FakeEmailSubscription />
                </div>
            </div>
            <div className="pt-4">
                <h3 className="text-sm text-muted-foreground mb-2 font-medium">
                    Latest Blogs
                </h3>
                <div className="flex flex-col flex-wrap gap-2">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.id}`}
                            className="max-w-full"
                        >
                            <Button
                                variant="secondary"
                                size="sm"
                                className="max-w-full truncate overflow-hidden border"
                            >
                                <GripVertical />{" "}
                                <p className="truncate">{blog.title}</p>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
