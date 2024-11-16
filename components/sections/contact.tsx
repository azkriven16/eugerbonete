import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { socials } from "@/config/socials";
import { ExternalLink } from "lucide-react";

export const Contact = () => {
    return (
        <section>
            <Card className="bg-primary text-primary-foreground p-2">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl font-sans border-b">
                        Contact
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20">
                        <div>
                            <p className="text-3xl md:text-7xl font-bold">
                                Let's work together
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-xl text-muted-foreground leading-loose">
                                I'm currently available for new work. Let me
                                know if you're looking for a digital designer.
                                Let’s create experiences that last!
                            </p>
                            <p className="underline text-center text-xl md:text-3xl my-5">
                                <span>
                                    <ExternalLink className="inline size-8 mr-2" />
                                </span>
                                {socials.email}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
