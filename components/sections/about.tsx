import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { socials } from "@/config/socials";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const About = () => {
    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl font-sans border-b">
                        About
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-5 md:gap-20">
                        <div>
                            <Avatar className="h-32 w-32 md:h-52 md:w-52 rounded-none">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-5">
                                <p className="text-lg text-muted-foreground md:leading-relaxed">
                                    Let's join forces to create memorable
                                    experiences that resonate and leave a
                                    lasting impression. Get in touch, and let's
                                    start this thrilling adventure together!
                                </p>
                                <p className="text-lg text-muted-foreground md:leading-relaxed">
                                    Let's join forces to create memorable
                                    experiences that resonate and leave a
                                    lasting impression. Get in touch, and let's
                                    start this thrilling adventure together!
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                                <Button size="lg" className="text-lg">
                                    About Me
                                </Button>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

function SocialLinks() {
    return (
        <div className="flex gap-x-5">
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.facebook}>
                    <Facebook className="size-7" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.linkedin}>
                    <Linkedin className="size-7" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.github}>
                    <Github className="size-7" />
                </Link>
            </Button>
        </div>
    );
}
