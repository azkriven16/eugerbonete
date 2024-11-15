import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <section>
            <Card className="border-none space-y-10">
                <CardHeader className="p-0 m-0">
                    <h1 className="text-5xl md:text-8xl font-bold font-sans">
                        Hi. I'm Euger Bonete A web developer
                    </h1>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-5 items-center p-0 m-0">
                    <p className="text-xl text-muted-foreground">
                        Designing and
                        <span
                            className={cn(
                                badgeVariants({ variant: "secondary" }),
                                "text-xl rounded-full"
                            )}
                        >
                            developing
                        </span>
                        interactive, visually captivating
                        <span
                            className={cn(
                                badgeVariants({ variant: "secondary" }),
                                "text-xl rounded-full"
                            )}
                        >
                            websites
                        </span>
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
        </section>
    );
};
