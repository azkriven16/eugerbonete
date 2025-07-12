"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

interface ProjectGalleryProps {
    gallery: string[];
    projectName: string;
}

export function ProjectGallery({ gallery, projectName }: ProjectGalleryProps) {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const openZoom = (imageUrl: string) => {
        setZoomedImage(imageUrl);
    };

    const closeZoom = () => {
        setZoomedImage(null);
    };

    return (
        <>
            {/* Project Gallery */}
            {gallery && gallery.length > 0 && (
                <div className="mb-8">
                    <div className="flex flex-col gap-4">
                        {gallery.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                            >
                                <Image
                                    src={imageUrl}
                                    alt={`${projectName} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover border rounded-lg"
                                />
                                <button
                                    onClick={() => openZoom(imageUrl)}
                                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Image Zoom Modal */}
            {zoomedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-screen-lg max-h-screen w-full h-full">
                        <button
                            onClick={closeZoom}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm z-10 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={zoomedImage}
                                alt="Zoomed project image"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={closeZoom}
                    />
                </div>
            )}
        </>
    );
}
