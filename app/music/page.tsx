import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

type VideoItem = {
    snippet: {
        title: string;
        resourceId: { videoId: string };
        thumbnails: {
            medium: { url: string };
        };
    };
};

async function getLatestUploads(): Promise<VideoItem[]> {
    const playlistId = "UUCbthzIjV1uDvoCas91O79Q";
    const apiKey = process.env.YT_API_KEY;
    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data.items || [];
}

export default async function Music() {
    const videos = await getLatestUploads();

    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                Music
            </h1>
            <p className="text-lg font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Music created for your long coding sessions.
                </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-6">
                {videos.map((video, i) => (
                    <VideoCard key={i} data={video} />
                ))}
            </div>
        </section>
    );
}

function VideoCard({ data }: { data: any }) {
    console.log(data);
    return (
        <Link
            href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}
        >
            <Card className="border-none space-y-2">
                <Image
                    alt={data.snippet.title}
                    src={data.snippet.thumbnails.medium.url}
                    className="rounded-sm"
                    width={300}
                    height={300}
                />
                <div className="flex justify-between">
                    <CardTitle className="flex gap-2 truncate">
                        {data.snippet.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 truncate">
                        {data.snippet.title}{" "}
                        <GripVertical className="text-muted-foreground size-4" />
                    </CardDescription>
                </div>
            </Card>
        </Link>
    );
}
