import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Map, MapPin } from "lucide-react";
import React from "react";

export default function page() {
    return (
        <main className="min-h-screen my-10">
            <Card className="space-y-10">
                <CardHeader>
                    <h1 className="text-5xl md:text-8xl font-bold font-sans">
                        Hi. I'm Euger Bonete A web developer
                    </h1>
                </CardHeader>
                <CardContent className="flex items-center">
                    <Avatar className="h-24 w-24">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-xl text-muted-foreground text-right">
                        Designing and developing interactive, visually
                        captivating websites that focus on usability,
                        performance, and overall user satisfaction.
                    </p>
                </CardContent>
                <CardFooter className="justify-center"></CardFooter>
            </Card>
        </main>
    );
}
