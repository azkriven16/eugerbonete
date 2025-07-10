import { Card, CardDescription } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type VideoItem = {
    snippet: {
        title: string;
        resourceId: { videoId: string };
        thumbnails: {
            medium: { url: string };
        };
    };
};

async function getLatestUploads(maxResults: number): Promise<VideoItem[]> {
    const playlistId = "UUCbthzIjV1uDvoCas91O79Q";
    const apiKey = process.env.YT_API_KEY;
    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    return data.items || [];
}

export default async function LatestMusic({
    maxResults = 6,
}: {
    maxResults?: number;
}) {
    const videos = await getLatestUploads(maxResults);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-6">
            {videos.map((video, i) => (
                <VideoCard key={i} data={video} />
            ))}
        </div>
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
                    <CardDescription className="flex items-center gap-2 truncate">
                        {data.snippet.title}{" "}
                        <GripVertical className="text-muted-foreground size-4" />
                    </CardDescription>
                </div>
            </Card>
        </Link>
    );
}
