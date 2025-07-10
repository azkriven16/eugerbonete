"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, GripVertical } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LatestMusic from "../latest-music";
export default function Music() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10">
            <h3 className="text-sm text-muted-foreground mb-2 font-medium">
                Music for coding sessions
            </h3>

            <LatestMusic maxResults={3} />
        </section>
    );
}
