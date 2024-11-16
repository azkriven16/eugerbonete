import { SocialLinks } from "@/components/socials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
                            <div className="space-y-2">
                                <p className="text-xl text-muted-foreground leading-loose">
                                    Let's join forces to create memorable
                                    experiences that resonate and leave a
                                    lasting impression. Get in touch, and let's
                                    start this thrilling adventure together!
                                </p>
                                <p className="text-xl text-muted-foreground leading-loose">
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
