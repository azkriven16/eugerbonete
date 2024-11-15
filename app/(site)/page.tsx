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
            <Card className="border-none space-y-10">
                <CardHeader className="p-0 m-0">
                    <h1 className="text-5xl md:text-8xl font-bold font-sans">
                        Hi. I'm Euger Bonete A web developer
                    </h1>
                </CardHeader>
                <CardContent className="flex items-center p-0 m-0">
                    <p className="text-xl text-muted-foreground">
                        Designing and
                        <span>
                            <Badge
                                variant="secondary"
                                className="text-xl rounded-full"
                            >
                                developing
                            </Badge>
                        </span>
                        interactive, visually captivating
                        <Badge
                            variant="secondary"
                            className="text-xl rounded-full"
                        >
                            websites
                        </Badge>
                        that focus on usability, performance, and overall user
                        satisfaction.
                    </p>
                    <Avatar className="h-24 w-24">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardContent>
                <CardFooter className="justify-center gap-2">
                    <Button className="font-semibold" size="lg" variant="shine">
                        Let's Work Together
                    </Button>
                    <Button
                        className="font-semibold"
                        size="lg"
                        variant="secondary"
                    >
                        My CV
                    </Button>
                </CardFooter>
            </Card>
        </main>
    );
}
